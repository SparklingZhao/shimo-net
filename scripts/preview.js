const http = require("http");
const fs = require("fs");
const path = require("path");

if (hasFlag("--help") || hasFlag("-h")) {
  printPreviewHelp();
  process.exit(0);
}

const ROOT_DIR = path.resolve(__dirname, "..");
const DIST_DIR = path.join(ROOT_DIR, "dist");
const BASE_PATH = getBasePath();
const PORT = getPort();

const MIME_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp"
};

function getArgValue(flagName) {
  const argv = process.argv.slice(2);
  const inlineArg = argv.find(function (arg) {
    return arg.indexOf(flagName + "=") === 0;
  });
  const splitArgIndex = argv.indexOf(flagName);

  if (inlineArg) {
    return inlineArg.slice(flagName.length + 1);
  }

  if (splitArgIndex >= 0) {
    return argv[splitArgIndex + 1];
  }

  return "";
}

function hasFlag(flagName) {
  return process.argv.slice(2).includes(flagName);
}

function printPreviewHelp() {
  var helpText = [
    "用法: node scripts/preview.js [--base=<path>] [--port=<port>]",
    "",
    "常用示例:",
    "  node scripts/preview.js",
    "    在根路径预览 dist 目录。",
    "  node scripts/preview.js --base=/shimo/",
    "    在 /shimo/ 子路径预览 dist 目录。",
    "  node scripts/preview.js --port=5500",
    "    指定预览端口。",
    "",
    "npm 脚本:",
    "  npm run preview",
    "  npm run preview:root",
    "  npm run preview:shimo"
  ].join("\n");

  console.log(helpText);
}

function normalizeBasePath(basePath) {
  var normalized = String(basePath || "/").trim().replace(/\\/g, "/");

  if (!normalized || normalized === ".") {
    return "/";
  }

  if (normalized === "/") {
    return "/";
  }

  if (!normalized.startsWith("/")) {
    normalized = "/" + normalized;
  }

  if (!normalized.endsWith("/")) {
    normalized += "/";
  }

  return normalized;
}

function getBasePath() {
  return normalizeBasePath(getArgValue("--base") || process.env.BASE_PATH || "/");
}

function getPort() {
  const rawPort = getArgValue("--port") || process.env.PORT || "4173";
  const port = parseInt(rawPort, 10);
  return Number.isFinite(port) ? port : 4173;
}

function send(res, statusCode, contentType, body) {
  res.writeHead(statusCode, { "Content-Type": contentType });
  res.end(body);
}

function notFound(res, message) {
  send(res, 404, "text/plain; charset=utf-8", message || "Not Found");
}

function getPreviewOrigin() {
  return `http://127.0.0.1:${PORT}`;
}

function getPreviewUrl(pathname) {
  var normalizedPath = pathname || "/";

  if (!normalizedPath.startsWith("/")) {
    normalizedPath = "/" + normalizedPath;
  }

  if (BASE_PATH === "/") {
    return getPreviewOrigin() + normalizedPath;
  }

  if (normalizedPath === "/") {
    return getPreviewOrigin() + BASE_PATH;
  }

  return getPreviewOrigin() + BASE_PATH + normalizedPath.replace(/^\/+/, "");
}

function buildBasePathMismatchMessage(req) {
  var requestUrl = new URL(req.url, "http://127.0.0.1");
  var requestedPath = decodeURIComponent(requestUrl.pathname || "/");
  var hintPath = requestedPath === "/" ? "/" : requestedPath;

  return [
    "Base path mismatch.",
    `当前预览基路径: ${BASE_PATH}`,
    `你访问的是: ${requestedPath}`,
    `请改用: ${getPreviewUrl(hintPath)}`
  ].join("\n");
}

function buildFileNotFoundMessage(req) {
  var requestUrl = new URL(req.url, "http://127.0.0.1");
  var requestedPath = decodeURIComponent(requestUrl.pathname || "/");

  return [
    `Cannot GET ${requestedPath}`,
    "当前预览服务只会读取 dist 目录中的文件。",
    `首页地址: ${getPreviewUrl("/")}`,
    "如果刚改过页面，请先运行 `npm run build`。"
  ].join("\n");
}

function getRequestPath(req) {
  const requestUrl = new URL(req.url, "http://127.0.0.1");
  const pathname = decodeURIComponent(requestUrl.pathname);

  if (BASE_PATH !== "/") {
    if (pathname === BASE_PATH.slice(0, -1)) {
      return "/";
    }

    if (!pathname.startsWith(BASE_PATH)) {
      return null;
    }

    return pathname.slice(BASE_PATH.length - 1) || "/";
  }

  return pathname || "/";
}

function resolveFilePath(requestPath) {
  let targetPath = requestPath === "/" ? "/index.html" : requestPath;

  if (targetPath.endsWith("/")) {
    targetPath += "index.html";
  }

  const normalizedPath = path.normalize(targetPath).replace(/^(\.\.[/\\])+/, "");
  const filePath = path.join(DIST_DIR, normalizedPath);

  if (!filePath.startsWith(DIST_DIR)) {
    return null;
  }

  return filePath;
}

function serveFile(res, filePath) {
  fs.readFile(filePath, function (error, content) {
    if (error) {
      if (error.code === "ENOENT") {
        notFound(res, "File Not Found");
        return;
      }

      send(res, 500, "text/plain; charset=utf-8", "Internal Server Error");
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || "application/octet-stream";
    send(res, 200, contentType, content);
  });
}

function ensureDistExists() {
  if (!fs.existsSync(DIST_DIR)) {
    console.error("dist 目录不存在，请先运行 `npm run build`。");
    process.exit(1);
  }
}

function main() {
  ensureDistExists();

  const server = http.createServer(function (req, res) {
    const requestPath = getRequestPath(req);
    if (requestPath === null) {
      notFound(res, buildBasePathMismatchMessage(req));
      return;
    }

    const filePath = resolveFilePath(requestPath);
    if (!filePath) {
      notFound(res, buildFileNotFoundMessage(req));
      return;
    }

    fs.readFile(filePath, function (error, content) {
      if (error) {
        if (error.code === "ENOENT") {
          notFound(res, buildFileNotFoundMessage(req));
          return;
        }

        send(res, 500, "text/plain; charset=utf-8", "Internal Server Error");
        return;
      }

      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || "application/octet-stream";
      send(res, 200, contentType, content);
    });
  });

  server.listen(PORT, function () {
    const previewUrl = getPreviewUrl("/");

    console.log(`preview server running at ${previewUrl}`);
    console.log(`serving files from ${DIST_DIR}`);
  });
}

main();
