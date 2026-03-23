# docs 目录说明

整理时间：2026-03-23

当前 `docs` 已按“正式文档”和“草稿归档”两类整理，后续建议优先在根目录维护正式说明文档，页面策划、文案草案、导航草案统一放在 `docs/草稿/`。

## 正式文档

### 项目结构与开发说明

- `目录结构.md`：项目目录、页面路由与资源结构总览
- `开发态与浏览态说明.md`：源码开发态与 `dist` 浏览态的区别
- `绝对路径排查备忘.md`：内部绝对路径使用情况与风险排查
- `页面及链接命名.md`：页面命名、路由命名、Tab 命名规范
- `导航二级菜单滚动交互.md`：导航滚动交互实现说明
- `无用资源梳理.md`：当前未引用或历史遗留资源的整理

### 清单与盘点

- `图片资源清单.md`：Welcome 页面 PNG 资源清单
- `images-manifest.json`：图片资源索引
- `page-content-image-inventory.md`：按页面整理的图片与占位情况
- `page-content-full-inventory.md`：页面内容全量整理说明
- `page-content-full-inventory.csv`：页面内容整理表
- `page-content-full-inventory-expanded.csv`：页面内容扩展字段表
- `page-theme-image-full-inventory.md`：页面主题图片全量清单
- `page-theme-image-full-inventory.csv`：页面主题图片表格版

## 草稿归档

- `草稿/页面策划与文案草稿汇总.md`
  合并归档了原 `首页落地页.md`、`办公套件落地页`、`产品导航二级核心能力详情页.md`、`解决方案.md`
- `草稿/导航与底栏规划.md`
  归档了原 `导航和底栏.md`
- `草稿/原始文档/`
  保留整理前的原始草稿与旧版 `rules.md`，便于回溯

## 本次整理说明

- 原 `rules.md` 已并入 `目录结构.md`，避免目录规范重复维护
- 页面策划类散落草稿已合并后归档，不再放在 `docs` 根目录
- `docs` 根目录现在保留正式说明、盘点结果和机器生成清单

## 构建与预览

当前项目支持 3 种构建方式：

- `npm run build`
  默认使用相对路径模式，适合本地预览、静态托管目录不固定、页面可能不部署在站点根目录的场景
- `npm run build:root`
  使用根路径模式，适合页面明确部署在域名根目录
- `npm run build:shimo`
  使用固定子路径模式，适合页面明确部署在 `/shimo/` 下

预览命令：

- `npm run preview`
- `npm run preview:root`
- `npm run preview:shimo`

帮助命令：

- `node build.js --help`
- `node scripts/preview.js --help`
  查看预览参数说明。
