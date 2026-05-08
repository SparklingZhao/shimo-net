# docs 目录说明

整理时间：2026-04-27

当前 `docs` 只保留和现有站点实现一致的正式说明、结构清单与资源盘点文件；历史草稿、旧版策划和候选素材不再继续保留在仓库中。

## 当前保留文档

### 项目与构建说明

- `目录结构.md`：项目目录、页面分层和资源结构说明
- `开发态与浏览态说明.md`：源码开发态与 `dist` 浏览态的区别
- `绝对路径排查备忘.md`：路径使用和排查备忘
- `页面及链接命名.md`：页面、路由和命名规范
- `导航二级菜单滚动交互.md`：导航滚动交互实现说明

### 资源与页面清单

- `输出页面清单.md`：当前正式构建输出页面清单
- `图片资源清单.md`：页面图片资源说明
- `images-manifest.json`：图片资源索引
- `page-content-image-inventory.md`：按页面整理的图片与占位情况
- `page-content-full-inventory.md`：页面内容全量整理说明
- `page-content-full-inventory.csv`：页面内容整理表
- `page-content-full-inventory-expanded.csv`：页面内容扩展字段表
- `page-theme-image-full-inventory.md`：页面主题图片全量清单
- `page-theme-image-full-inventory.csv`：页面主题图片表格版
- `无用资源梳理.md`：未引用或历史遗留资源整理

## 构建与预览

当前项目支持 3 种构建方式：

- `npm run build`
  默认使用相对路径模式，适合本地预览和静态托管目录不固定的场景
- `npm run build:root`
  使用根路径模式，适合页面明确部署在域名根目录
- `npm run build:shimo`
  使用固定子路径模式，适合页面部署在 `/shimo/` 下

预览命令：

- `npm run preview`
- `npm run preview:root`
- `npm run preview:shimo`

帮助命令：

- `node build.js --help`
- `node scripts/preview.js --help`
