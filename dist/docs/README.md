# 文档目录

用于存放项目相关文档，例如：

- 需求说明
- 交互原型
- 视觉规范
- 发布记录

## 构建说明

当前项目支持 3 种构建方式：

- `npm run build`
  默认使用相对路径模式，适合本地预览、静态托管目录不固定、页面可能不部署在站点根目录的场景。
- `npm run build:root`
  使用根路径模式，适合页面明确部署在域名根目录，例如 `https://example.com/officesuite-business.html`。
- `npm run build:shimo`
  使用固定子路径模式，适合页面明确部署在 `/shimo/` 下，例如 `https://example.com/shimo/officesuite-business.html`。

## 预览说明

- `npm run preview`
  预览 `dist` 目录内容，适合搭配默认的相对路径构建使用。
- `npm run preview:root`
  以根路径方式预览。
- `npm run preview:shimo`
  以 `/shimo/` 子路径方式预览。

## 选择建议

- 本地联调、Live Server、文件路径层级经常变化时：优先用 `npm run build`
- 线上明确挂在根目录时：用 `npm run build:root`
- 线上明确挂在固定子目录时：用 `npm run build:shimo`

## 帮助命令

- `node build.js --help`
  查看构建参数说明。
- `node scripts/preview.js --help`
  查看预览参数说明。
