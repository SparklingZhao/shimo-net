const fs = require("fs");
const path = require("path");
const {
  SOLUTION_MENU_GROUPS,
  SOLUTION_PAGES,
  SHARED_DEMO_LINK,
  APPOINTMENT_PREVIEW_LINK
} = require("./data/solutions");

if (hasFlag("--help") || hasFlag("-h")) {
  printBuildHelp();
  process.exit(0);
}

const ROOT_DIR = __dirname;
const DIST_DIR = path.join(ROOT_DIR, "dist");
const WELCOME_FILE = path.join(ROOT_DIR, "welcome.html");
const RAW_BASE_PATH = getRawBasePath();
const USE_RELATIVE_URLS = isRelativeBasePath(RAW_BASE_PATH);
const BASE_PATH = USE_RELATIVE_URLS ? "/" : normalizeBasePath(RAW_BASE_PATH);
const SITE_ORIGIN = getSiteOrigin();
const DEFAULT_OG_IMAGE = "/assets/images/homepage_title_banner_background.43282104.png";
const DEFAULT_KEYWORDS =
  "协同办公,在线文档,在线办公,协同办公系统,云文档,云表格,在线表格,协同办公平台,在线编辑文档,协作文档,远程办公,石墨文档";
const HOMEPAGE_DESCRIPTION =
  "石墨文档,全新一代云Office办公软件,支持多人在线协同办公,独有内容级安全，全程留痕可追溯.PC/移动双端覆盖,随时随地在线协同办公,在线文档即写即存统一管理,高效共享文档、表格,是企业云协同办公系统和在线办公平台的更好选择";
const COMMON_STYLES = ["/css/main.css"];
const COMMON_SCRIPTS = [
  "/js/utils.js",
  "/js/components/floating-contact.js",
  "/js/components/nav-dropdown.js",
  "/js/main.js"
];
const PARTIAL_ASSET_MAP = {
  "/pages/partials/service-selector.html": {
    styles: ["/css/officesuite.css"]
  },
  "/pages/partials/service-contact-cta.html": {
    styles: []
  }
};

const ROUTES = [
  {
    output: "welcome.html",
    title: "石墨文档企业服务 - 首页",
    description: HOMEPAGE_DESCRIPTION,
    keywords: DEFAULT_KEYWORDS,
    canonical: "/",
    noindex: true,
    mainClass: "site-main",
    source: "/pages/home/home-content.html",
    mode: "fragment",
    styles: [
      "/css/landing.css",
      "/css/collaboration.css",
      "/css/knowledge.css",
      "/css/integration.css",
      "/css/ai.css",
      "/css/officesuite.css",
      "/css/security.css",
      "/css/private-deploy.css",
      "/css/xinchuang.css",
      "/css/security-hub.css",
      "/css/customer-wall.css"
    ],
    preloadImages: [
      "/assets/images/homepage_title_banner_background.43282104.png"
    ],
    scripts: [
      "/js/components/doc-tabs.js",
      "/js/components/knowledge-tabs.js",
      "/js/components/security-hub-tabs.js",
      "/js/components/dp-scene-tabs.js"
    ]
  },
  {
    output: "index.html",
    title: "石墨文档企业服务 - 首页",
    description: HOMEPAGE_DESCRIPTION,
    keywords: DEFAULT_KEYWORDS,
    canonical: "/",
    mainClass: "site-main",
    source: "/pages/home/home-content.html",
    mode: "fragment",
    styles: [
      "/css/landing.css",
      "/css/collaboration.css",
      "/css/knowledge.css",
      "/css/integration.css",
      "/css/ai.css",
      "/css/officesuite.css",
      "/css/security.css",
      "/css/private-deploy.css",
      "/css/xinchuang.css",
      "/css/security-hub.css",
      "/css/customer-wall.css"
    ],
    preloadImages: [
      "/assets/images/homepage_title_banner_background.43282104.png"
    ],
    scripts: [
      "/js/components/doc-tabs.js",
      "/js/components/knowledge-tabs.js",
      "/js/components/security-hub-tabs.js",
      "/js/components/dp-scene-tabs.js"
    ]
  },
  {
    output: "officesuite-business.html",
    title: "石墨办公套件 面向团队 - 石墨文档企业服务",
    description:
      "石墨办公套件面向团队提供开箱即用的公有云文档协作服务，覆盖文档、文稿、表格、幻灯片、表单与应用表格等核心办公场景。",
    mainClass: "site-main pc-page",
    source: "/pages/officesuite/business.html",
    mode: "page"
  },
  {
    output: "officesuite-enterprise.html",
    title: "石墨办公套件 面向企业 - 石墨文档企业服务",
    description:
      "石墨办公套件面向企业提供私有化文档协作服务，支持统一办公平台建设、数据安全治理、信创适配与灵活部署。",
    mainClass: "site-main pc-page",
    source: "/pages/officesuite/enterprise.html",
    mode: "page"
  },
  {
    output: "webofficesdk-integration.html",
    title: "石墨文档中台 面向集成 - 石墨文档企业服务",
    description:
      "石墨文档中台面向企业集成开放文件预览、协作编辑、格式处理、文档存储与文档安全能力，帮助业务系统快速补齐文档协作底座。",
    preloadImages: ["/assets/images/banner/sdk-banner.png"],
    mainClass: "site-main dp-page",
    source: "/pages/webofficesdk/integration.html",
    mode: "page"
  },
  {
    output: "webofficesdk-cases.html",
    title: "石墨文档中台 集成案例 - 石墨文档企业服务",
    description:
      "查看石墨文档中台在 IM、云盘、OA、合同和会议系统中的典型集成案例，了解文件预览、在线编辑、多人协同和格式转换等能力的落地方式。",
    preloadImages: ["/assets/images/document/doc.png"],
    mainClass: "site-main",
    source: "/pages/webofficesdk/cases.html",
    mode: "page"
  },
  {
    output: "management-panel.html",
    title: "企业管理 - 石墨文档企业服务",
    description:
      "统一管理通讯录、操作日志和企业设置。",
    mainClass: "site-main",
    source: "/pages/features/management-panel.html",
    mode: "page"
  },
  {
    output: "collaboration.html",
    title: "文档协作 - 石墨文档企业服务",
    description:
      "石墨文档为企业提供文档、文稿、表格、幻灯片、应用表格与表单等文档协作能力，覆盖内容创作、数据处理与信息收集场景。",
    preloadImages: ["/assets/images/doc_product_desc_back.4f15795f.png"],
    mainClass: "site-main",
    source: "/pages/features/collaboration.html",
    mode: "page"
  },
  {
    output: "document.html",
    title: "文档 - 石墨文档企业服务",
    description:
      "石墨文档为企业提供多人实时协作的在线文档能力，支持评论讨论、附件插入、历史追溯与智能创作辅助。",
    preloadImages: ["/assets/images/doc_product_desc_back.4f15795f.png"],
    mainClass: "site-main doc-page-shell",
    source: "/pages/features/document.html",
    mode: "page"
  },
  {
    output: "writer.html",
    title: "文稿 - 石墨文档企业服务",
    description:
      "石墨文稿为企业提供专业级在线 Word 文档能力，支持正式排版、多人协作、修订审阅与格式兼容。",
    preloadImages: ["/assets/images/writer/traditional_back.webp"],
    mainClass: "site-main doc-page-shell",
    source: "/pages/features/writer.html",
    mode: "page"
  },
  {
    output: "sheet.html",
    title: "表格 - 石墨文档企业服务",
    description:
      "石墨表格为企业提供在线协作电子表格能力，支持函数计算、权限控制、多端协同与数据处理。",
    preloadImages: ["/assets/images/sheet/sheet_feature1.webp"],
    mainClass: "site-main doc-page-shell",
    source: "/pages/features/sheet.html",
    mode: "page"
  },
  {
    output: "slide.html",
    title: "幻灯片 - 石墨文档企业服务",
    description:
      "石墨幻灯片为企业提供在线演示与协作制作能力，支持多人共创、主题模板、评论标注与历史追溯。",
    preloadImages: ["/assets/images/slide_product_desc_back.78851b71.png"],
    mainClass: "site-main doc-page-shell",
    source: "/pages/features/slide.html",
    mode: "page"
  },
  {
    output: "table.html",
    title: "应用表格 - 石墨文档企业服务",
    description:
      "石墨应用表格帮助企业进行数据协同与项目管理，支持多字段结构、筛选分组、看板甘特与流程协作。",
    preloadImages: ["/assets/images/table_back.4655d070.png"],
    mainClass: "site-main doc-page-shell",
    source: "/pages/features/table.html",
    mode: "page"
  },
  {
    output: "form.html",
    title: "表单 - 石墨文档企业服务",
    description:
      "石墨表单为企业提供灵活高效的信息收集能力，支持拖拽搭建、逻辑配置、模板复用与数据汇总分析。",
    preloadImages: ["/assets/images/form.d91584ab.png"],
    mainClass: "site-main doc-page-shell",
    source: "/pages/features/form.html",
    mode: "page"
  },
  {
    output: "portal.html",
    title: "工作台 - 石墨文档企业服务",
    description:
      "集中展示消息、文件和常用入口。",
    mainClass: "site-main",
    source: "/pages/features/portal.html",
    mode: "page"
  },
  {
    output: "space.html",
    title: "协作空间 - 石墨文档企业服务",
    description:
      "按团队、项目集中管理资料、成员和权限。",
    mainClass: "site-main",
    source: "/pages/features/space.html",
    mode: "page"
  },
  {
    output: "knowledge-base.html",
    title: "知识库 - 石墨文档企业服务",
    description:
      "沉淀制度、流程和项目经验，支持目录、权限和检索。",
    mainClass: "site-main",
    source: "/pages/features/knowledge-base.html",
    mode: "page"
  },
  {
    output: "knowledge.html",
    title: "知识沉淀 - 石墨文档企业服务",
    description:
      "石墨文档通过工作台、协作空间与知识库三级体系帮助企业完成知识沉淀、共享复用与长期管理。",
    mainClass: "site-main",
    source: "/pages/features/knowledge.html",
    mode: "page"
  },
  {
    output: "security-hub.html",
    title: "安全保障 - 石墨文档企业服务",
    description:
      "石墨文档为企业提供数据安全、私有部署与信创合规能力，构建覆盖传输、应用与存储的全链路安全体系。",
    mainClass: "site-main",
    source: "/pages/features/security-hub-entry.html",
    mode: "page"
  },
  {
    output: "ai.html",
    title: "AI 接入 - 石墨文档企业服务",
    description:
      "石墨文档提供 AI 助手与 AI 文档基座能力，帮助企业更快完成内容处理、知识问答与业务集成。",
    mainClass: "site-main",
    source: "/pages/features/ai-entry.html",
    mode: "page"
  },
  {
    output: "format-support.html",
    title: "格式支持 - 石墨文档企业服务",
    description:
      "查看石墨文档中台支持的主流文件预览、导入与导出格式，帮助企业快速评估兼容性与接入可行性。",
    mainClass: "site-main",
    source: "/pages/features/format-support.html",
    mode: "page"
  },
  {
    output: "about.html",
    title: "石墨文档企业服务 - 关于我们",
    description:
      "了解石墨文档企业服务的品牌定位、团队背景、发展历程与联系渠道，建立对服务能力的整体认知。",
    mainClass: "site-main about-page",
    source: "/pages/about/about.html",
    mode: "page"
  },
  {
    output: "partner.html",
    title: "渠道合作 - 石墨文档企业服务",
    description:
      "查看石墨文档企业服务的渠道合作方向、伙伴政策与协作方式，建立长期合作关系。",
    mainClass: "site-main partner-page",
    source: "/pages/partner/partner.html",
    mode: "page"
  },
  {
    output: "privacy.html",
    title: "石墨文档隐私保护政策",
    description: "查看石墨文档的隐私保护政策，了解平台在信息收集、使用、存储与保护方面的规则。",
    mainClass: "site-main privacy-page",
    source: "/pages/legal/privacy.html",
    mode: "page"
  },
  {
    output: "service.html",
    title: "石墨文档服务条款",
    description: "查看石墨文档服务条款，了解产品使用、服务范围、双方权利义务与相关约定。",
    mainClass: "site-main privacy-page",
    source: "/pages/legal/service.html",
    mode: "page"
  },
  {
    output: "behavior.html",
    title: "石墨文档用户行为规范",
    description: "查看石墨文档用户行为规范，了解平台使用过程中的内容要求、行为边界与管理规则。",
    mainClass: "site-main behavior-page",
    source: "/pages/legal/behavior.html",
    mode: "page"
  }
];

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

function printBuildHelp() {
  var helpText = [
    "用法: node build.js [--base=<path|relative>] [--site-origin=<origin>]",
    "",
    "常用示例:",
    "  node build.js",
    "    按根路径模式构建，适合部署在域名根目录。",
    "  node build.js --base=relative",
    "    按相对路径模式构建，适合本地预览或部署目录不固定的场景。",
    "  node build.js --base=/shimo/",
    "    按固定子路径模式构建，适合部署在 /shimo/ 这样的子目录。",
    "",
    "可选参数:",
    "  --base",
    "    支持 /、/shimo/、relative、auto。",
    "  --site-origin",
    "    用于 canonical、og:url、sitemap 等绝对地址生成，例如 https://shimooffice.net。",
    "",
    "npm 脚本:",
    "  npm run build",
    "  npm run build:root",
    "  npm run build:relative",
    "  npm run build:shimo"
  ].join("\n");

  console.log(helpText);
}

function getRawBasePath() {
  return getArgValue("--base") || process.env.BASE_PATH || "/";
}

function isRelativeBasePath(basePath) {
  var normalized = String(basePath || "").trim().toLowerCase();
  return normalized === "relative" || normalized === "auto";
}

function getSiteOrigin() {
  const rawOrigin = getArgValue("--site-origin")
    || process.env.SITE_ORIGIN
    || "https://shimooffice.net";

  return normalizeSiteOrigin(rawOrigin);
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

function normalizeSiteOrigin(origin) {
  var normalized = String(origin || "").trim();

  if (!normalized) {
    return "";
  }

  if (!/^[a-z]+:\/\//i.test(normalized)) {
    normalized = "https://" + normalized;
  }

  return normalized.replace(/\/+$/, "");
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

function pathExists(targetPath) {
  return fs.existsSync(targetPath);
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

function toRepoSourcePath(filePath) {
  return "/" + path.relative(ROOT_DIR, filePath).replace(/\\/g, "/");
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

function splitUrlParts(url) {
  var matched = String(url || "").match(/^([^?#]*)(\?[^#]*)?(#.*)?$/);

  return {
    pathname: matched && matched[1] ? matched[1] : "",
    search: matched && matched[2] ? matched[2] : "",
    hash: matched && matched[3] ? matched[3] : ""
  };
}

function toDocumentRelativeUrl(url, outputFilePath) {
  if (!url || !outputFilePath || !url.startsWith("/")) {
    return url;
  }

  var parts = splitUrlParts(url);
  var targetPath = parts.pathname === "/" ? "/index.html" : parts.pathname;
  var fromDir = path.dirname(outputFilePath);
  var targetFilePath = path.join(DIST_DIR, targetPath.slice(1));
  var relativePath = path.relative(fromDir, targetFilePath).replace(/\\/g, "/");

  if (!relativePath) {
    relativePath = "./";
  } else if (!relativePath.startsWith(".") && !relativePath.startsWith("../")) {
    relativePath = "./" + relativePath;
  }

  return relativePath + parts.search + parts.hash;
}

function resolvePublicUrl(url, outputFilePath) {
  if (!url) {
    return url;
  }

  if (/^(?:[a-z]+:|\/\/|#|mailto:|tel:|javascript:)/i.test(url)) {
    return url;
  }

  if (!url.startsWith("/")) {
    return url;
  }

  if (USE_RELATIVE_URLS) {
    return toDocumentRelativeUrl(url, outputFilePath);
  }

  return withBasePath(url);
}

function getCanonicalPath(route) {
  if (route && route.canonical) {
    return route.canonical;
  }

  if (route && route.output === "index.html") {
    return "/";
  }

  return "/" + route.output;
}

function toAbsoluteUrl(url) {
  var resolvedPath = withBasePath(url);
  return SITE_ORIGIN ? SITE_ORIGIN + resolvedPath : resolvedPath;
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function dedupeList(items) {
  var seen = new Set();
  return items.filter(function (item) {
    if (!item || seen.has(item)) {
      return false;
    }

    seen.add(item);
    return true;
  });
}

function renderStyleLinks(styles) {
  return dedupeList(styles).map(function (href) {
    return `  <link rel="stylesheet" href="${withBasePath(href)}">`;
  }).join("\n");
}

function renderScriptTags(scripts) {
  return dedupeList(scripts).map(function (src) {
    return `  <script src="${withBasePath(src)}"></script>`;
  }).join("\n");
}

function renderPreloadLinks(images) {
  return dedupeList(images).map(function (href) {
    return `  <link rel="preload" as="image" href="${withBasePath(href)}">`;
  }).join("\n");
}

function extractStylesheetLinks(htmlText) {
  var matches = [];
  var pattern = /<link\s+rel=["']stylesheet["']\s+href=["']([^"']+)["'][^>]*>/gi;
  var match;

  while ((match = pattern.exec(htmlText))) {
    matches.push(match[1]);
  }

  return matches;
}

function extractScriptSources(htmlText) {
  var matches = [];
  var pattern = /<script\s+src=["']([^"']+)["'][^>]*><\/script>/gi;
  var match;

  while ((match = pattern.exec(htmlText))) {
    matches.push(match[1]);
  }

  return matches;
}

/**
 * 将页面源码中的相对资源路径（如 ../../js/foo.js）规范为仓库根下的 /js/foo.js，
 * 便于 getRouteAssets 与 COMMON_SCRIPTS 去重，且构建产物脚本路径正确。
 */
function normalizeExtractedPublicPath(rawUrl, ownerFilePath) {
  if (!rawUrl || typeof rawUrl !== "string") {
    return rawUrl;
  }

  var trimmed = rawUrl.trim();

  if (/^(?:[a-z]+:|\/\/|#|mailto:|tel:|javascript:)/i.test(trimmed)) {
    return trimmed;
  }

  if (trimmed.startsWith("/")) {
    return trimmed;
  }

  if (trimmed.startsWith("./") || trimmed.startsWith("../")) {
    var absDir = path.dirname(ownerFilePath);
    var resolved = path.resolve(absDir, trimmed);
    var rel = path.relative(ROOT_DIR, resolved).replace(/\\/g, "/");

    if (!rel || rel.startsWith("..")) {
      return rawUrl;
    }

    return "/" + rel;
  }

  return trimmed;
}

function isExtractedStyleAsset(href) {
  return href !== "/css/main.css" && href !== "./css/main.css";
}

function isExtractedScriptAsset(src) {
  return src !== "/js/components/home-content-loader.js"
    && src !== "./js/components/home-content-loader.js"
    && src !== "/js/components/officesuite-flow-loader.js"
    && src !== "./js/components/officesuite-flow-loader.js"
    && src !== "/js/api.js"
    && src !== "./js/api.js"
    && src !== "/js/components/nav-scroll.js"
    && src !== "./js/components/nav-scroll.js";
}

function collectMergeSourceAssets(htmlText, ownerFilePath, stack = []) {
  const normalizedPath = path.normalize(ownerFilePath);
  if (stack.includes(normalizedPath)) {
    return { styles: [], scripts: [] };
  }

  const nextStack = stack.concat(normalizedPath);
  const slotPattern =
    /<([a-z0-9-]+)([^>]*?)\sdata-merge-source="([^"]+)"([^>]*)>([\s\S]*?)<\/\1>/gi;
  const collectedStyles = [];
  const collectedScripts = [];
  var match;

  while ((match = slotPattern.exec(htmlText))) {
    const source = match[3];
    const sourcePath = resolveRepoPath(source, ownerFilePath);
    const repoSourcePath = toRepoSourcePath(sourcePath);
    const configuredAssets = PARTIAL_ASSET_MAP[repoSourcePath] || {};

    collectedStyles.push.apply(collectedStyles, configuredAssets.styles || []);
    collectedScripts.push.apply(collectedScripts, configuredAssets.scripts || []);

    if (pathExists(sourcePath)) {
      const sourceHtml = readText(sourcePath);
      const sourceStyles = extractStylesheetLinks(sourceHtml).filter(isExtractedStyleAsset);
      const sourceScripts = extractScriptSources(sourceHtml).filter(isExtractedScriptAsset);
      const nestedAssets = collectMergeSourceAssets(sourceHtml, sourcePath, nextStack);

      collectedStyles.push.apply(collectedStyles, sourceStyles);
      collectedScripts.push.apply(collectedScripts, sourceScripts);
      collectedStyles.push.apply(collectedStyles, nestedAssets.styles);
      collectedScripts.push.apply(collectedScripts, nestedAssets.scripts);
    }
  }

  return {
    styles: dedupeList(collectedStyles),
    scripts: dedupeList(collectedScripts)
  };
}

function getRouteAssets(route, sourcePath, rawSourceOverride) {
  var rawSource = typeof rawSourceOverride === "string"
    ? rawSourceOverride
    : (pathExists(sourcePath) ? readText(sourcePath) : "");
  var extractedStyles = extractStylesheetLinks(rawSource)
    .filter(isExtractedStyleAsset)
    .map(function (href) {
      return normalizeExtractedPublicPath(href, sourcePath);
    });
  var extractedScripts = extractScriptSources(rawSource)
    .filter(isExtractedScriptAsset)
    .map(function (src) {
      return normalizeExtractedPublicPath(src, sourcePath);
    });
  var mergeSourceAssets = collectMergeSourceAssets(rawSource, sourcePath);

  return {
    styles: dedupeList(
      COMMON_STYLES.concat(route.styles || [], extractedStyles, mergeSourceAssets.styles)
    ),
    scripts: dedupeList(
      COMMON_SCRIPTS.concat(route.scripts || [], extractedScripts, mergeSourceAssets.scripts)
    )
  };
}

function rewriteHtmlPublicUrls(htmlText, outputFilePath) {
  var rewritten = htmlText.replace(
    /\b(href|src|data-merge-source|action|poster)=("([^"]*)"|'([^']*)')/gi,
    function (fullMatch, attrName, quotedValue, doubleQuotedValue, singleQuotedValue) {
      var value = doubleQuotedValue || singleQuotedValue || "";
      var nextValue = resolvePublicUrl(value, outputFilePath);

      if (nextValue === value) {
        return fullMatch;
      }

      var quote = quotedValue.charAt(0);
      return attrName + "=" + quote + nextValue + quote;
    }
  );

  rewritten = rewritten.replace(/url\((['"]?)(\/[^)'"]+)\1\)/gi, function (_, quote, url) {
    var nextUrl = resolvePublicUrl(url, outputFilePath);
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

function processHtmlText(htmlText, ownerFilePath, stack = []) {
  const normalizedPath = path.normalize(ownerFilePath);
  if (stack.includes(normalizedPath)) {
    const chain = stack.concat(normalizedPath).join(" -> ");
    throw new Error(`检测到循环引用: ${chain}`);
  }

  const nextStack = stack.concat(normalizedPath);
  return inlineMergeSources(htmlText, normalizedPath, nextStack);
}

function processHtmlFile(filePath, stack = []) {
  const normalizedPath = path.normalize(filePath);
  return processHtmlText(readText(normalizedPath), normalizedPath, stack);
}

function getEmbeddableContentFromText(htmlText, ownerFilePath, stack = []) {
  const processed = processHtmlText(htmlText, ownerFilePath, stack);
  const mainInner = extractMainInner(processed);
  return mainInner === null ? processed : mainInner;
}

function getEmbeddableContent(filePath, stack = []) {
  return getEmbeddableContentFromText(readText(filePath), filePath, stack);
}

function setDocumentTitle(htmlText, title) {
  return htmlText.replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`);
}

function setSeoMeta(htmlText, route) {
  var canonicalPath = getCanonicalPath(route);
  var canonicalUrl = toAbsoluteUrl(canonicalPath);
  var ogImageUrl = toAbsoluteUrl(route.ogImage || DEFAULT_OG_IMAGE);
  var keywords = route.keywords || DEFAULT_KEYWORDS;
  var metaBlock = [
    `  <meta name="keywords" content="${escapeHtml(keywords)}">`,
    `  <meta name="description" content="${escapeHtml(route.description || route.title)}">`,
    route.noindex ? '  <meta name="robots" content="noindex,follow">' : "",
    `  <link rel="canonical" href="${escapeHtml(canonicalUrl)}">`,
    '  <meta property="og:type" content="website">',
    '  <meta property="og:locale" content="zh_CN">',
    '  <meta property="og:site_name" content="石墨文档企业服务">',
    `  <meta property="og:title" content="${escapeHtml(route.title)}">`,
    `  <meta property="og:description" content="${escapeHtml(route.description || route.title)}">`,
    `  <meta property="og:url" content="${escapeHtml(canonicalUrl)}">`,
    `  <meta property="og:image" content="${escapeHtml(ogImageUrl)}">`,
    '  <meta name="twitter:card" content="summary_large_image">',
    `  <meta name="twitter:title" content="${escapeHtml(route.title)}">`,
    `  <meta name="twitter:description" content="${escapeHtml(route.description || route.title)}">`,
    `  <meta name="twitter:image" content="${escapeHtml(ogImageUrl)}">`
  ].filter(Boolean).join("\n");

  htmlText = htmlText.replace(/\s*<meta name="keywords"[^>]*>/gi, "");
  htmlText = htmlText.replace(/\s*<meta name="description"[^>]*>/gi, "");
  htmlText = htmlText.replace(/\s*<meta name="robots"[^>]*>/gi, "");
  htmlText = htmlText.replace(/\s*<link rel="canonical"[^>]*>/gi, "");
  htmlText = htmlText.replace(/\s*<meta property="og:[^"]+"[^>]*>/gi, "");
  htmlText = htmlText.replace(/\s*<meta name="twitter:[^"]+"[^>]*>/gi, "");

  return htmlText.replace(/(<meta name="viewport"[^>]*>\s*)/i, `$1${metaBlock}\n`);
}

function setHeadPreloads(htmlText, route) {
  var preloadLinks = renderPreloadLinks(route.preloadImages || []);

  htmlText = htmlText.replace(/\s*<link rel="preload" as="image"[^>]*>/gi, "");

  if (!preloadLinks) {
    return htmlText;
  }

  return htmlText.replace(/(<\/head>)/i, preloadLinks + "\n$1");
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

function replaceShellAssets(htmlText, assets) {
  htmlText = htmlText.replace(
    /(\s*<link rel="stylesheet" href="[^"]+">\s*)+/i,
    "\n" + renderStyleLinks(assets.styles) + "\n"
  );

  htmlText = htmlText.replace(
    /(\s*<script src="[^"]+"><\/script>\s*)+(?=<\/body>)/i,
    "\n" + renderScriptTags(assets.scripts) + "\n"
  );

  return htmlText;
}

const SHELL_LINK_RULES = [
  { page: "officesuite-business", output: "/officesuite-business.html" },
  { page: "officesuite-enterprise", output: "/officesuite-enterprise.html" },
  { page: "webofficesdk-integration", output: "/webofficesdk-integration.html" },
  { page: "webofficesdk-cases", output: "/webofficesdk-cases.html" },
  { page: "collaboration", output: "/collaboration.html" },
  { page: "document", output: "/document.html" },
  { page: "writer", output: "/writer.html" },
  { page: "sheet", output: "/sheet.html" },
  { page: "slide", output: "/slide.html" },
  { page: "table", output: "/table.html" },
  { page: "form", output: "/form.html" },
  { page: "knowledge", output: "/knowledge.html" },
  { page: "security-hub", output: "/security-hub.html" },
  { page: "ai", output: "/ai.html" },
  { page: "about", output: "/about.html" },
  { page: "partner", output: "/partner.html" },
  { page: "format-support", output: "/format-support.html" },
  { page: "privacy", output: "/privacy.html" },
  { page: "service", output: "/service.html" },
  { page: "behavior", output: "/behavior.html" },
  { page: "enterprise", output: "/management-panel.html" }
];

function rewriteShellLinks(htmlText) {
  var rewritten = SHELL_LINK_RULES.reduce(function (currentHtml, rule) {
    var pattern = new RegExp(
      '(?:\\.\\/|\\/)welcome\\.html\\?page=' + rule.page + '([^"\'\\s>]*)',
      "g"
    );

    return currentHtml.replace(pattern, function (_, suffix) {
      if (!suffix) {
        return rule.output;
      }

      if (suffix.charAt(0) === "&") {
        return rule.output + "?" + suffix.slice(1);
      }

      return rule.output + suffix;
    });
  }, htmlText);

  return rewritten.replace(
    /((?:\.\/|\/))welcome\.html(#[^"'\s>]*)?/g,
    function (_, prefix, hash) {
      return prefix === "./"
        ? "./" + (hash || "").replace(/^#/, "#")
        : "/" + (hash || "").replace(/^#?/, "#");
    }
  );
}

function renderGeneratedPageSource(mainContent) {
  return [
    "<!DOCTYPE html>",
    '<html lang="zh-CN">',
    "<head>",
    '  <meta charset="UTF-8">',
    '  <meta name="viewport" content="width=device-width, initial-scale=1.0">',
    "  <title>解决方案</title>",
    '  <link rel="stylesheet" href="/css/main.css">',
    '  <link rel="stylesheet" href="/css/manufacturing.css">',
    "</head>",
    "<body>",
    '  <main class="mf-page">',
    mainContent,
    "  </main>",
    "</body>",
    "</html>",
    ""
  ].join("\n");
}

function renderButtonLink(action, extraClassName) {
  var classes = ["btn"];
  var attrs = [];

  if (action.primary) {
    classes.push("btn-primary");
  }

  if (extraClassName) {
    classes.push(extraClassName);
  }

  if (action.targetBlank) {
    attrs.push(' target="_blank"', ' rel="noopener noreferrer"');
  }

  return `<a class="${classes.join(" ")}" href="${escapeHtml(action.href)}"${attrs.join("")}>${escapeHtml(action.label)}</a>`;
}

function renderActionButtons(actions, wrapperClassName) {
  if (!actions || !actions.length) {
    return "";
  }

  return [
    `<div class="${wrapperClassName}">`,
    actions.map(function (action) {
      return "  " + renderButtonLink(action);
    }).join("\n"),
    "</div>"
  ].join("\n");
}

function renderSolutionMenu(currentSlug, routeMap, currentOutputFile) {
  return SOLUTION_MENU_GROUPS.map(function (group) {
    var itemsHtml = group.items.map(function (item) {
      var matchedRoute = routeMap[item.slug];
      var isActive = item.slug === currentSlug;
      var ariaCurrent =
        isActive && matchedRoute && matchedRoute.output === currentOutputFile ? ' aria-current="page"' : "";

      if (item.disabled || !matchedRoute) {
        return `<span class="mf-menu-link" aria-disabled="true">${escapeHtml(item.label)}</span>`;
      }

      return `<a class="mf-menu-link${isActive ? " is-active" : ""}" href="/${matchedRoute.output}"${ariaCurrent}>${escapeHtml(item.label)}</a>`;
    }).join("\n");

    return [
      '<div class="mf-menu-block">',
      `  <p class="mf-menu-title">${escapeHtml(group.title)}</p>`,
      `  <div class="mf-menu-list" aria-label="${escapeHtml(group.title)}">`,
      itemsHtml.split("\n").map(function (line) {
        return "    " + line;
      }).join("\n"),
      "  </div>",
      "</div>"
    ].join("\n");
  }).join("\n");
}

function renderSolutionOverview(solution) {
  if (solution.overview.image) {
    return [
      '<div class="mf-overview-card">',
      '  <div class="mf-overview-media">',
      `    <img src="${escapeHtml(solution.overview.image)}" alt="${escapeHtml(solution.overview.imageAlt || solution.overview.title)}">`,
      '    <div class="mf-overview-overlay">',
      `      <h2>${escapeHtml(solution.overview.title)}</h2>`,
      `      <p class="mf-overview-desc">${escapeHtml(solution.overview.description)}</p>`,
      "    </div>",
      "  </div>",
      "</div>"
    ].join("\n");
  }

  return [
    '<section class="mf-overview-card mf-overview-card--plain">',
    '  <div class="mf-overview-copy">',
    `    <h2>${escapeHtml(solution.overview.title)}</h2>`,
    `    <p class="mf-overview-desc">${escapeHtml(solution.overview.description)}</p>`,
    "  </div>",
    "</section>"
  ].join("\n");
}

function renderChallengeCards(cards) {
  if (!cards || !cards.length) {
    return "";
  }

  return [
    '<div class="mf-challenge-grid">',
    cards.map(function (card) {
      var paragraphs = (card.paragraphs || []).map(function (paragraph) {
        return `        <p>${escapeHtml(paragraph)}</p>`;
      }).join("\n");
      var actionsHtml = renderActionButtons(card.actions, "mf-actions mf-actions--cta");

      return [
        '  <article class="mf-challenge-card">',
        '    <div class="mf-challenge-copy">',
        `      <h3>${escapeHtml(card.title)}</h3>`,
        paragraphs,
        actionsHtml ? actionsHtml.split("\n").map(function (line) {
          return "      " + line;
        }).join("\n") : "",
        "    </div>",
        "  </article>"
      ].filter(Boolean).join("\n");
    }).join("\n"),
    "</div>"
  ].join("\n");
}

function renderChallengeGallery(images) {
  if (!images || !images.length) {
    return "";
  }

  return [
    '<div class="mf-challenge-gallery">',
    images.map(function (image) {
      return `  <img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt || "")}">`;
    }).join("\n"),
    "</div>"
  ].join("\n");
}

function renderSolutionChallenge(solution) {
  if (!solution.challenge) {
    return "";
  }

  var blocks = [
    '<section class="mf-challenge-section">',
    '  <div class="mf-section-intro mf-section-intro--centered">',
    `    <h2>${escapeHtml(solution.challenge.title)}</h2>`
  ];

  if (solution.challenge.description) {
    blocks.push(`    <p>${escapeHtml(solution.challenge.description)}</p>`);
  }

  blocks.push("  </div>");

  if (solution.challenge.highlights && solution.challenge.highlights.length) {
    blocks.push([
      '  <div class="mf-challenge-highlights">',
      solution.challenge.highlights.map(function (item) {
        return [
          '    <div class="mf-highlight-item">',
          `      <strong>${escapeHtml(item.title)}</strong>`,
          `      <span>${escapeHtml(item.description)}</span>`,
          "    </div>"
        ].join("\n");
      }).join("\n"),
      "  </div>"
    ].join("\n"));
  }

  if (solution.challenge.gallery && solution.challenge.gallery.length) {
    blocks.push(renderChallengeGallery(solution.challenge.gallery).split("\n").map(function (line) {
      return "  " + line;
    }).join("\n"));
  }

  if (solution.challenge.cards && solution.challenge.cards.length) {
    blocks.push(renderChallengeCards(solution.challenge.cards).split("\n").map(function (line) {
      return "  " + line;
    }).join("\n"));
  }

  blocks.push("</section>");

  return blocks.join("\n");
}

function renderSolutionCases(solution) {
  if (!solution.caseCards || !solution.caseCards.length) {
    return "";
  }

  var cardsHtml = solution.caseCards.map(function (card) {
    var outerClassName = card.reverse ? "mf-case-card mf-case-card--alt" : "mf-case-card";
    var innerClassName = card.reverse ? "mf-case-inner--reverse" : "mf-case-inner";

    return [
      `<article class="${outerClassName}">`,
      `  <div class="${innerClassName}">`,
      '    <div class="mf-case-media">',
      `      <img src="${escapeHtml(card.image)}" alt="${escapeHtml(card.imageAlt || card.title)}">`,
      "    </div>",
      '    <div class="mf-case-copy">',
      `      <h3>${escapeHtml(card.title)}</h3>`,
      "      <ul class=\"mf-case-points\">",
      (card.points || []).map(function (point) {
        return `        <li>${escapeHtml(point)}</li>`;
      }).join("\n"),
      "      </ul>",
      renderActionButtons(card.actions, "mf-case-actions").split("\n").map(function (line) {
        return "      " + line;
      }).join("\n"),
      "    </div>",
      "  </div>",
      "</article>"
    ].join("\n");
  }).join("\n");

  return [
    solution.caseSectionTitle
      ? `<div class="mf-section-intro mf-section-intro--centered mf-case-list-title"><h2>${escapeHtml(solution.caseSectionTitle)}</h2></div>`
      : "",
    '<div class="mf-case-list">',
    cardsHtml,
    "</div>"
  ].filter(Boolean).join("\n");
}

function renderSolutionPageBottomSections() {
  return [
    '<section class="pc-flow-slot" data-merge-source="/pages/partials/service-selector.html"></section>',
    '<section class="pc-flow-slot" data-merge-source="/pages/partials/service-contact-cta.html"></section>'
  ].join("\n");
}

function renderSolutionHero() {
  return [
    '<section class="mf-hero">',
    '  <div class="container">',
    '    <div class="mf-hero-content">',
    "      <h1 class=\"mf-title\">一站式企业协作解决方案</h1>",
    "      <p class=\"mf-desc\">直击行业、职能痛点，打造基于文件协同的企业云办公解决方案，助力企业提升整体运转效率、规范管控文件资产，实现降本增效。</p>",
    '      <div class="mf-actions">',
    `        ${renderButtonLink({ label: "免费试用", href: SHARED_DEMO_LINK, primary: true })}`,
    `        ${renderButtonLink({ label: "预约演示", href: APPOINTMENT_PREVIEW_LINK, targetBlank: true })}`,
    "      </div>",
    "    </div>",
    "  </div>",
    "</section>"
  ].join("\n");
}

function renderSolutionDetailPage(solution, routeMap, pageOutputFile) {
  var currentOutputFile = pageOutputFile || solution.output;

  return [
    renderSolutionHero(),
    '<section class="mf-solution-shell">',
    '  <div class="container">',
    '    <aside class="mf-menu-panel" aria-label="解决方案导航">',
    renderSolutionMenu(solution.slug, routeMap, currentOutputFile).split("\n").map(function (line) {
      return "      " + line;
    }).join("\n"),
    "    </aside>",
    '    <div class="mf-solution-main">',
    renderSolutionOverview(solution).split("\n").map(function (line) {
      return "      " + line;
    }).join("\n"),
    renderSolutionChallenge(solution).split("\n").map(function (line) {
      return "      " + line;
    }).join("\n"),
    renderSolutionCases(solution).split("\n").map(function (line) {
      return "      " + line;
    }).join("\n"),
    "    </div>",
    "  </div>",
    "</section>",
    renderSolutionPageBottomSections()
  ].join("\n");
}

function renderSolutionIndexCards(items, routeMap) {
  return items.map(function (item) {
    var solution = SOLUTION_PAGES.find(function (entry) {
      return entry.slug === item.slug;
    });
    var route = routeMap[item.slug];
    var isDisabled = item.disabled || !solution || !route;
    var tagClass = isDisabled ? "mf-status-badge is-muted" : "mf-status-badge";
    var tagText = isDisabled ? "规划中" : "已上线";
    var description = solution
      ? solution.summary
      : "即将补充对应场景模板、业务案例和落地内容。";
    var innerHtml = [
      `<span class="${tagClass}">${tagText}</span>`,
      `<h3>${escapeHtml(item.label)}</h3>`,
      `<p>${escapeHtml(description)}</p>`,
      `<span class="mf-index-link${isDisabled ? " is-disabled" : ""}">${isDisabled ? "即将上线" : "查看详情"}</span>`
    ].join("\n");

    if (isDisabled) {
      return [
        '<article class="mf-index-card is-disabled" aria-disabled="true">',
        innerHtml.split("\n").map(function (line) {
          return "  " + line;
        }).join("\n"),
        "</article>"
      ].join("\n");
    }

    return [
      `<a class="mf-index-card" href="/${route.output}">`,
      innerHtml.split("\n").map(function (line) {
        return "  " + line;
      }).join("\n"),
      "</a>"
    ].join("\n");
  }).join("\n");
}

function renderSolutionIndexPage(routeMap) {
  var industryGroup = SOLUTION_MENU_GROUPS[0];
  var sceneGroup = SOLUTION_MENU_GROUPS[1];

  return [
    renderSolutionHero(),
    '<section class="mf-solution-shell mf-solution-shell--single">',
    '  <div class="container">',
    '    <div class="mf-index-panel">',
    '      <section class="mf-overview-card mf-overview-card--plain">',
    '        <div class="mf-overview-copy">',
    "          <h2>按行业与职能快速定位方案</h2>",
    "          <p class=\"mf-overview-desc\">先用行业方案快速对齐业务模式，再根据职能场景补充管理、营销、人力等细分协作流程。当前已上线十个行业与场景方案详情页，均由 data/solutions.js 数据驱动生成，可按同一结构继续扩展。</p>",
    "        </div>",
    "      </section>",
    '      <section class="mf-challenge-section">',
    '        <div class="mf-section-intro">',
    `          <h2>${escapeHtml(industryGroup.title)}</h2>`,
    "          <p>覆盖新零售、制造业、电商与教育等行业方案，点击卡片即可进入对应详情页。</p>",
    "        </div>",
    '        <div class="mf-index-grid">',
    renderSolutionIndexCards(industryGroup.items, routeMap).split("\n").map(function (line) {
      return "          " + line;
    }).join("\n"),
    "        </div>",
    "      </section>",
    '      <section class="mf-challenge-section">',
    '        <div class="mf-section-intro">',
    `          <h2>${escapeHtml(sceneGroup.title)}</h2>`,
    "          <p>覆盖公司管理、产品研发、市场营销、人力资源、财务管理与销售管理等场景，与详情页导航一致。</p>",
    "        </div>",
    '        <div class="mf-index-grid">',
    renderSolutionIndexCards(sceneGroup.items, routeMap).split("\n").map(function (line) {
      return "          " + line;
    }).join("\n"),
    "        </div>",
    "      </section>",
    "    </div>",
    "  </div>",
    "</section>"
  ].join("\n");
}

function buildSolutionIndexRoute() {
  var routeMap = SOLUTION_PAGES.reduce(function (accumulator, solution) {
    accumulator[solution.slug] = solution;
    return accumulator;
  }, {});

  return {
    output: "solutions.html",
    title: "一站式企业协作解决方案 - 石墨文档企业服务",
    description:
      "按行业与职能查看石墨文档企业服务的协作解决方案，覆盖新零售、制造业、电商、教育及公司管理、产品研发、市场营销、人力资源、财务管理、销售管理等场景。",
    ogImage:
      SOLUTION_PAGES[0] && SOLUTION_PAGES[0].overview && SOLUTION_PAGES[0].overview.image
        ? SOLUTION_PAGES[0].overview.image
        : DEFAULT_OG_IMAGE,
    mainClass: "site-main",
    mode: "page",
    getSourceHtml: function () {
      return renderGeneratedPageSource(renderSolutionIndexPage(routeMap));
    }
  };
}

function buildSolutionRoutes() {
  var routeMap = SOLUTION_PAGES.reduce(function (accumulator, solution) {
    accumulator[solution.slug] = solution;
    return accumulator;
  }, {});

  var routes = [];

  SOLUTION_PAGES.forEach(function (solution) {
    function makeRoute(output, pageOutputFile) {
      var resolvedPageOutput = pageOutputFile || output;

      return {
        output: output,
        title: solution.routeTitle,
        description: solution.routeDescription,
        ogImage: solution.overview.image,
        mainClass: "site-main",
        mode: "page",
        getSourceHtml: function () {
          return renderGeneratedPageSource(
            renderSolutionDetailPage(solution, routeMap, resolvedPageOutput)
          );
        }
      };
    }

    // 导航「解决方案」入口：与新零售详情同内容，URL 为 solution.html；侧栏「新零售」仍指向 solution-retail.html
    if (solution.slug === "retail") {
      routes.push(makeRoute("solution.html", "solution.html"));
    }

    routes.push(makeRoute(solution.output));
  });

  return routes;
}

function buildShellPage(route) {
  let shell = readText(WELCOME_FILE);
  const sourcePath = route.source ? resolveRepoPath(route.source, WELCOME_FILE) : WELCOME_FILE;
  const outputFilePath = path.join(DIST_DIR, route.output);
  const rawSource = typeof route.getSourceHtml === "function"
    ? route.getSourceHtml()
    : (pathExists(sourcePath) ? readText(sourcePath) : "");
  const pageContent = route.mode === "page"
    ? getEmbeddableContentFromText(rawSource, sourcePath)
    : processHtmlText(rawSource, sourcePath);
  const assets = getRouteAssets(route, sourcePath, rawSource);

  shell = setDocumentTitle(shell, route.title);
  shell = setSeoMeta(shell, route);
  shell = setHeadPreloads(shell, route);
  shell = setMainClass(shell, route.mainClass);
  shell = replaceAppMainContent(shell, pageContent.trim());
  shell = stripDynamicLoader(shell);
  shell = replaceShellAssets(shell, assets);
  shell = rewriteShellLinks(shell);
  shell = rewriteHtmlPublicUrls(shell, outputFilePath);

  writeText(outputFilePath, shell);
  console.log(`built ${route.output}`);
}

function buildCopiedHtml(relativePath) {
  const srcPath = path.join(ROOT_DIR, relativePath);
  const distPath = path.join(DIST_DIR, relativePath);
  const output = rewriteHtmlPublicUrls(rewriteShellLinks(processHtmlFile(srcPath)), distPath);

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

function writeRobotsFile() {
  var lines = [
    "User-agent: *",
    "Allow: /",
    "",
    "Sitemap: " + toAbsoluteUrl("/sitemap.xml")
  ];

  writeText(path.join(DIST_DIR, "robots.txt"), lines.join("\n") + "\n");
  console.log("built robots.txt");
}

function writeSitemapFile() {
  var urls = [];
  var seen = new Set();

  ROUTES.forEach(function (route) {
    var canonicalPath;
    var canonicalUrl;

    if (route.noindex) {
      return;
    }

    canonicalPath = getCanonicalPath(route);
    canonicalUrl = toAbsoluteUrl(canonicalPath);

    if (seen.has(canonicalUrl)) {
      return;
    }

    seen.add(canonicalUrl);
    urls.push(canonicalUrl);
  });

  var xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls.map(function (url) {
      return [
        "  <url>",
        `    <loc>${escapeHtml(url)}</loc>`,
        "  </url>"
      ].join("\n");
    }).join("\n"),
    "</urlset>",
    ""
  ].join("\n");

  writeText(path.join(DIST_DIR, "sitemap.xml"), xml);
  console.log("built sitemap.xml");
}

ROUTES.push(buildSolutionIndexRoute());
ROUTES.push.apply(ROUTES, buildSolutionRoutes());

function main() {
  cleanDir(DIST_DIR);

  console.log(
    USE_RELATIVE_URLS
      ? "building with url mode: relative"
      : `building with base path: ${BASE_PATH}`
  );
  console.log(`building with site origin: ${SITE_ORIGIN}`);
  console.log(`building output directory: ${DIST_DIR}`);
  copyDir(path.join(ROOT_DIR, "css"), path.join(DIST_DIR, "css"));
  copyDir(path.join(ROOT_DIR, "js"), path.join(DIST_DIR, "js"));
  copyDir(path.join(ROOT_DIR, "assets"), path.join(DIST_DIR, "assets"));
  copyDir(path.join(ROOT_DIR, "docs"), path.join(DIST_DIR, "docs"));
  copyDir(path.join(ROOT_DIR, "pages"), path.join(DIST_DIR, "pages"));
  if (pathExists(path.join(ROOT_DIR, "tools"))) {
    copyDir(path.join(ROOT_DIR, "tools"), path.join(DIST_DIR, "tools"));
  }
  if (pathExists(path.join(ROOT_DIR, "home.html"))) {
    copyFile(path.join(ROOT_DIR, "home.html"), path.join(DIST_DIR, "home.html"));
  }

  walkHtmlFiles(path.join(ROOT_DIR, "pages"), function (filePath) {
    const relativePath = path.relative(ROOT_DIR, filePath);
    buildCopiedHtml(relativePath);
  });

  if (pathExists(path.join(ROOT_DIR, "tools"))) {
    walkHtmlFiles(path.join(ROOT_DIR, "tools"), function (filePath) {
      const relativePath = path.relative(ROOT_DIR, filePath);
      buildCopiedHtml(relativePath);
    });
  }

  if (!USE_RELATIVE_URLS) {
    walkJsFiles(path.join(DIST_DIR, "js"), function (filePath) {
      const relativePath = path.relative(DIST_DIR, filePath);
      rewriteCopiedJs(relativePath);
    });
  }

  for (const route of ROUTES) {
    buildShellPage(route);
  }

  writeRobotsFile();
  writeSitemapFile();
}

main();
