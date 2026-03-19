const fs = require("fs");
const path = require("path");

const ROOT_DIR = __dirname;
const DIST_DIR = path.join(ROOT_DIR, "dist");
const WELCOME_FILE = path.join(ROOT_DIR, "welcome.html");
const BASE_PATH = getBasePath();

const ROUTES = [
  {
    output: "welcome.html",
    title: "石墨文档企业服务 - 首页",
    mainClass: "site-main",
    source: "/pages/home/home-content.html",
    mode: "fragment"
  },
  {
    output: "index.html",
    title: "石墨文档企业服务 - 首页",
    mainClass: "site-main",
    source: "/pages/home/home-content.html",
    mode: "fragment"
  },
  {
    output: "suite-business.html",
    title: "石墨办公套件 面向团队 - 石墨文档企业服务",
    mainClass: "site-main pc-page",
    source: "/pages/suite/business.html",
    mode: "page"
  },
  {
    output: "suite-enterprise.html",
    title: "石墨办公套件 面向企业 - 石墨文档企业服务",
    mainClass: "site-main pc-page",
    source: "/pages/suite/enterprise.html",
    mode: "page"
  },
  {
    output: "sdk-integration.html",
    title: "石墨文档中台 面向集成 - 石墨文档企业服务",
    mainClass: "site-main dp-page",
    source: "/pages/sdk/integration.html",
    mode: "page"
  },
  {
    output: "office-suite-saas.html",
    title: "石墨办公套件公有云服务 - 石墨文档企业服务",
    mainClass: "site-main pc-page",
    source: "/pages/suite/business.html",
    mode: "page"
  },
  {
    output: "office-suite-private.html",
    title: "石墨办公套件私有化服务 - 石墨文档企业服务",
    mainClass: "site-main pc-page",
    source: "/pages/suite/enterprise.html",
    mode: "page"
  },
  {
    output: "weboffice-sdk.html",
    title: "石墨文档中台 - 石墨文档企业服务",
    mainClass: "site-main dp-page",
    source: "/pages/sdk/integration.html",
    mode: "page"
  },
  {
    output: "management-panel.html",
    title: "企业管理 - 石墨文档企业服务",
    mainClass: "site-main",
    source: "/pages/features/management-panel.html",
    mode: "page"
  },
  {
    output: "collaboration.html",
    title: "文档协作 - 石墨文档企业服务",
    mainClass: "site-main",
    source: "/pages/features/collaboration.html",
    mode: "page"
  },
  {
    output: "knowledge.html",
    title: "知识沉淀 - 石墨文档企业服务",
    mainClass: "site-main",
    source: "/pages/features/knowledge.html",
    mode: "page"
  },
  {
    output: "security-hub.html",
    title: "安全保障 - 石墨文档企业服务",
    mainClass: "site-main",
    source: "/pages/features/security-hub.html",
    mode: "page"
  },
  {
    output: "ai.html",
    title: "AI 接入 - 石墨文档企业服务",
    mainClass: "site-main",
    source: "/pages/features/ai.html",
    mode: "page"
  },
  {
    output: "about.html",
    title: "石墨文档企业服务 - 关于我们",
    mainClass: "site-main about-page",
    source: "/pages/about/about.html",
    mode: "page"
  },
  {
    output: "partner.html",
    title: "渠道合作 - 石墨文档企业服务",
    mainClass: "site-main partner-page",
    source: "/pages/partner/partner.html",
    mode: "page"
  },
  {
    output: "privacy.html",
    title: "石墨文档隐私保护政策",
    mainClass: "site-main privacy-page",
    source: "/pages/legal/privacy.html",
    mode: "page"
  },
  {
    output: "service.html",
    title: "石墨文档服务条款",
    mainClass: "site-main privacy-page",
    source: "/pages/legal/service.html",
    mode: "page"
  },
  {
    output: "behavior.html",
    title: "石墨文档用户行为规范",
    mainClass: "site-main behavior-page",
    source: "/pages/legal/behavior.html",
    mode: "page"
  }
];

function getBasePath() {
  const argv = process.argv.slice(2);
  const inlineArg = argv.find(function (arg) {
    return arg.indexOf("--base=") === 0;
  });
  const splitArgIndex = argv.indexOf("--base");
  const rawBase = inlineArg
    ? inlineArg.slice("--base=".length)
    : splitArgIndex >= 0
      ? argv[splitArgIndex + 1]
      : process.env.BASE_PATH;

  return normalizeBasePath(rawBase || "/");
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

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function cleanDir(dirPath) {
  fs.rmSync(dirPath, { recursive: true, force: true });
  ensureDir(dirPath);
}

function readText(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function writeText(filePath, content) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, content, "utf8");
}

function copyFile(srcPath, destPath) {
  ensureDir(path.dirname(destPath));
  fs.copyFileSync(srcPath, destPath);
}

function copyDir(srcDir, destDir) {
  ensureDir(destDir);

  for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
      continue;
    }

    copyFile(srcPath, destPath);
  }
}

function resolveRepoPath(source, ownerFilePath) {
  if (source.startsWith("/")) {
    return path.join(ROOT_DIR, source.slice(1));
  }

  return path.resolve(path.dirname(ownerFilePath), source);
}

function extractMainInner(htmlText) {
  const match = htmlText.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i);
  return match ? match[1] : null;
}

function withBasePath(url) {
  if (!url || BASE_PATH === "/") {
    return url;
  }

  if (/^(?:[a-z]+:|\/\/|#|mailto:|tel:|javascript:)/i.test(url)) {
    return url;
  }

  if (!url.startsWith("/")) {
    return url;
  }

  return BASE_PATH + url.slice(1);
}

function applyBasePathToHtml(htmlText) {
  var rewritten = htmlText.replace(
    /\b(href|src|data-merge-source|action|poster)=("([^"]*)"|'([^']*)')/gi,
    function (fullMatch, attrName, quotedValue, doubleQuotedValue, singleQuotedValue) {
      var value = doubleQuotedValue || singleQuotedValue || "";
      var nextValue = withBasePath(value);

      if (nextValue === value) {
        return fullMatch;
      }

      var quote = quotedValue.charAt(0);
      return attrName + "=" + quote + nextValue + quote;
    }
  );

  rewritten = rewritten.replace(/url\((['"]?)(\/[^)'"]+)\1\)/gi, function (_, quote, url) {
    var nextUrl = withBasePath(url);
    return "url(" + quote + nextUrl + quote + ")";
  });

  return rewritten;
}

function applyBasePathToJs(jsText) {
  return jsText.replace(/(["'])(\/[^"'\\\r\n]+)\1/g, function (fullMatch, quote, value) {
    var nextValue = withBasePath(value);
    return quote + nextValue + quote;
  });
}

function inlineMergeSources(htmlText, ownerFilePath, stack) {
  const slotPattern =
    /<([a-z0-9-]+)([^>]*?)\sdata-merge-source="([^"]+)"([^>]*)>([\s\S]*?)<\/\1>/gi;

  return htmlText.replace(slotPattern, function (_, tagName, beforeAttr, source, afterAttr) {
    const sourcePath = resolveRepoPath(source, ownerFilePath);
    const embeddedContent = getEmbeddableContent(sourcePath, stack);
    const openAttrs = (beforeAttr + afterAttr).replace(/\s+$/, "");

    return `<${tagName}${openAttrs}>${embeddedContent}</${tagName}>`;
  });
}

function processHtmlFile(filePath, stack = []) {
  const normalizedPath = path.normalize(filePath);
  if (stack.includes(normalizedPath)) {
    const chain = stack.concat(normalizedPath).join(" -> ");
    throw new Error(`检测到循环引用: ${chain}`);
  }

  const nextStack = stack.concat(normalizedPath);
  const raw = readText(normalizedPath);
  return inlineMergeSources(raw, normalizedPath, nextStack);
}

function getEmbeddableContent(filePath, stack = []) {
  const processed = processHtmlFile(filePath, stack);
  const mainInner = extractMainInner(processed);
  return mainInner === null ? processed : mainInner;
}

function setDocumentTitle(htmlText, title) {
  return htmlText.replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`);
}

function setMainClass(htmlText, className) {
  const mainPattern = /<main([^>]*?)id="appMain"([^>]*?)class="([^"]*)"([^>]*?)>/i;

  if (mainPattern.test(htmlText)) {
    return htmlText.replace(mainPattern, function (_, before, afterId, _existing, afterClass) {
      return `<main${before}id="appMain"${afterId}class="${className}"${afterClass}>`;
    });
  }

  return htmlText.replace(
    /<main([^>]*?)id="appMain"([^>]*?)>/i,
    `<main$1id="appMain"$2 class="${className}">`
  );
}

function replaceAppMainContent(htmlText, content) {
  return htmlText.replace(
    /(<main\b[^>]*id="appMain"[^>]*>)[\s\S]*?(<\/main>)/i,
    `$1\n${content}\n  $2`
  );
}

function stripDynamicLoader(htmlText) {
  return htmlText.replace(/\s*<script src="\.\/js\/components\/home-content-loader\.js"><\/script>\s*/i, "\n");
}

const SHELL_LINK_RULES = [
  { page: "office-suite-saas", output: "/office-suite-saas.html" },
  { page: "office-suite-private", output: "/office-suite-private.html" },
  { page: "weboffice-sdk", output: "/weboffice-sdk.html" },
  { page: "collaboration", output: "/collaboration.html" },
  { page: "knowledge", output: "/knowledge.html" },
  { page: "security-hub", output: "/security-hub.html" },
  { page: "ai", output: "/ai.html" },
  { page: "about", output: "/about.html" },
  { page: "partner", output: "/partner.html" },
  { page: "privacy", output: "/privacy.html" },
  { page: "service", output: "/service.html" },
  { page: "behavior", output: "/behavior.html" }
];

function rewriteShellLinks(htmlText) {
  return SHELL_LINK_RULES.reduce(function (rewritten, rule) {
    var pattern = new RegExp(
      '(?:\\.\\/|\\/)welcome\\.html\\?page=' + rule.page + '([^"\'\\s>]*)',
      "g"
    );

    return rewritten.replace(pattern, function (_, suffix) {
      if (!suffix) {
        return rule.output;
      }

      if (suffix.charAt(0) === "&") {
        return rule.output + "?" + suffix.slice(1);
      }

      return rule.output + suffix;
    });
  }, htmlText);
}

function buildShellPage(route) {
  let shell = readText(WELCOME_FILE);
  const sourcePath = resolveRepoPath(route.source, WELCOME_FILE);
  const pageContent = route.mode === "page"
    ? getEmbeddableContent(sourcePath)
    : processHtmlFile(sourcePath);

  shell = setDocumentTitle(shell, route.title);
  shell = setMainClass(shell, route.mainClass);
  shell = replaceAppMainContent(shell, pageContent.trim());
  shell = stripDynamicLoader(shell);
  shell = rewriteShellLinks(shell);
  shell = applyBasePathToHtml(shell);

  writeText(path.join(DIST_DIR, route.output), shell);
  console.log(`built ${route.output}`);
}

function buildCopiedHtml(relativePath) {
  const srcPath = path.join(ROOT_DIR, relativePath);
  const distPath = path.join(DIST_DIR, relativePath);
  const output = applyBasePathToHtml(rewriteShellLinks(processHtmlFile(srcPath)));

  writeText(distPath, output);
  console.log(`inlined ${relativePath}`);
}

function rewriteCopiedJs(relativePath) {
  const distPath = path.join(DIST_DIR, relativePath);
  const output = applyBasePathToJs(readText(distPath));

  writeText(distPath, output);
  console.log(`rewrote ${relativePath}`);
}

function walkHtmlFiles(dirPath, callback) {
  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      walkHtmlFiles(fullPath, callback);
      continue;
    }

    if (entry.name.toLowerCase().endsWith(".html")) {
      callback(fullPath);
    }
  }
}

function walkJsFiles(dirPath, callback) {
  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      walkJsFiles(fullPath, callback);
      continue;
    }

    if (entry.name.toLowerCase().endsWith(".js")) {
      callback(fullPath);
    }
  }
}

function main() {
  cleanDir(DIST_DIR);

  console.log(`building with base path: ${BASE_PATH}`);
  copyDir(path.join(ROOT_DIR, "css"), path.join(DIST_DIR, "css"));
  copyDir(path.join(ROOT_DIR, "js"), path.join(DIST_DIR, "js"));
  copyDir(path.join(ROOT_DIR, "assets"), path.join(DIST_DIR, "assets"));
  copyDir(path.join(ROOT_DIR, "docs"), path.join(DIST_DIR, "docs"));
  copyDir(path.join(ROOT_DIR, "pages"), path.join(DIST_DIR, "pages"));
  copyDir(path.join(ROOT_DIR, "tools"), path.join(DIST_DIR, "tools"));
  copyFile(path.join(ROOT_DIR, "home.html"), path.join(DIST_DIR, "home.html"));

  walkHtmlFiles(path.join(ROOT_DIR, "pages"), function (filePath) {
    const relativePath = path.relative(ROOT_DIR, filePath);
    buildCopiedHtml(relativePath);
  });

  walkHtmlFiles(path.join(ROOT_DIR, "tools"), function (filePath) {
    const relativePath = path.relative(ROOT_DIR, filePath);
    buildCopiedHtml(relativePath);
  });

  walkJsFiles(path.join(DIST_DIR, "js"), function (filePath) {
    const relativePath = path.relative(DIST_DIR, filePath);
    rewriteCopiedJs(relativePath);
  });

  for (const route of ROUTES) {
    buildShellPage(route);
  }
}

main();
