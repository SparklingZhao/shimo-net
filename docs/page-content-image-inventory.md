# 页面内容与图片整理

生成时间：2026-03-23  
统计范围：`dist/*.html` 顶层构建输出页（已重新执行 `npm run build`）  
整理原则：按页面归类；模块化重复内容只记录一次；重点标记真实图片、背景图、外链图、占位图和缺失图片。

## 总结

- 当前顶层输出页共 `37` 个。
- 明确重复输出：
  - `index.html` 与 `welcome.html` 内容一致，均来自 `pages/home/home-content.html`，差异主要在 SEO 配置。
  - `solution.html` 与 `solution-retail.html` 内容一致，前者是零售解决方案的别名入口。
- 明确缺失图片文件共 `7` 个，集中在 `3` 个页面：
  - `document.html` 缺 `2` 个
  - `writer.html` 缺 `4` 个
  - `sheet.html` 缺 `1` 个
- 明确存在图片区占位 / TODO 的页面共 `6` 个：
  - `ai.html`
  - `knowledge.html`
  - `officesuite-business.html`
  - `officesuite-enterprise.html`
  - `index.html`
  - `welcome.html`
- `about.html` 的主内容图片全部是外链资源。
- `partner.html` 的主视觉为背景图，不是 `<img>`。

## 去重说明

### 首页聚合页

`index.html` / `welcome.html` 为聚合页，由以下模块拼装：

- `pages/home/banner.html`
- `pages/features/collaboration.html`
- `pages/features/knowledge.html`
- `pages/features/products.html`
- `pages/features/ai.html`
- `pages/features/security-hub.html`
- `pages/features/customer-wall.html`
- `pages/partials/service-selector.html`
- `pages/partials/service-contact-cta.html`

因此首页中出现的“知识沉淀”“AI 接入”“客户墙”等内容，后文不再按首页逐块重复展开。

### 公共底部模块

以下页面复用同一组底部模块：

- `index.html` / `welcome.html`
- `document.html`
- `writer.html`
- `sheet.html`
- `slide.html`
- `table.html`
- `form.html`
- `portal.html`
- `space.html`
- `knowledge-base.html`
- `management-panel.html`

复用模块为：

- `pages/partials/service-selector.html`
- `pages/partials/service-contact-cta.html`

这两个模块不包含独立位图图片，因此不逐页重复描述。

### 解决方案详情页

以下页面均由 `data/solutions.js` 的统一模板生成：

- `solution-retail.html`
- `solution-manufacturing.html`
- `solution-ecommerce.html`
- `solution-education.html`
- `solution-management.html`
- `solution-product-rd.html`
- `solution-marketing.html`
- `solution-hr.html`
- `solution-finance.html`
- `solution-sales.html`
- `solution.html`

统一结构为：

- Hero
- 方案总览图 `1` 张
- 挑战图区 `2` 张
- 案例卡片 `4` 张
- 页尾复用 `service-selector` + `service-contact-cta`

因此后文按“解决方案组”统一整理，不逐页重复结构说明。

## 图片问题汇总

### 缺失图片文件

#### `document.html`
- 已有图片：`7` 个
- 缺失图片：`2` 个
- 缺失文件：
  - `assets/images/document/doc_feature_history.webp`
  - `assets/images/document/doc_feature_watermark.webp`
- 对应内容：
  - 编辑历史追溯
  - @提及与协作者水印

#### `writer.html`
- 已有图片：`5` 个
- 缺失图片：`4` 个
- 缺失文件：
  - `assets/images/writer/writer_feature_collaboration.webp`
  - `assets/images/writer/writer_feature_comment.webp`
  - `assets/images/writer/writer_feature_at.webp`
  - `assets/images/writer/writer_feature_history.webp`
- 对应内容：
  - 多人多端毫秒级同步
  - 全局讨论与划词评论
  - @功能
  - 历史追溯

#### `sheet.html`
- 已有图片：`8` 个
- 缺失图片：`1` 个
- 缺失文件：
  - `assets/images/sheet/sheet_feature9.webp`

### 占位 / TODO 图片页面

#### `ai.html`
- `8` 处 TODO 注释
- `2` 个图片区占位容器
- 当前无真实位图，属于“文案已到位、视觉待补齐”

#### `knowledge.html`
- `9` 处 TODO 注释
- `6` 个图片区占位容器
- 主要缺：
  - 工作台图标 / 截图
  - 协作空间图标 / 截图
  - 知识库图标 / 截图
  - 通讯录截图
  - 操作日志截图
  - 企业设置截图

#### `officesuite-business.html`
- `9` 处 TODO 注释
- `6` 个图片区占位容器
- 占位主要来自其内嵌的 `knowledge` 模块

#### `officesuite-enterprise.html`
- `17` 处 TODO 注释
- `8` 个图片区占位容器
- 同时包含 `knowledge` 与 `ai` 模块的占位问题

#### `index.html` / `welcome.html`
- 各有 `17` 处 TODO 注释
- 各有 `11` 个占位容器
- 占位来自首页聚合进来的 `knowledge` 与 `ai` 模块

### 外链图片页面

#### `about.html`
- 主内容图片共 `9` 张
- 全部为外链资源
- 外链域名：`as.smgv.cn`
- 风险：仓库内无法直接管控这些图片的可用性

### 背景图页面

#### `partner.html`
- 无主内容 `<img>`
- 使用 `assets/images/partner/hero-bg.jpg` 作为首屏背景图

## 按页面整理

### 首页 / 聚合页

#### `index.html` / `welcome.html`
- 页面定位：首页聚合页
- 核心内容：Banner、文档协作、知识沉淀、产品矩阵、AI 接入、安全保障、客户墙、服务分流 CTA
- 图片整理：
  - 首页主视觉：`assets/images/homepage_title_banner_background.43282104.png`
  - 文档协作 / 产品矩阵位图：共 `12` 个主资源
  - 客户墙 Logo：`45` 个，位于 `assets/images/customerlogo/`
- 图片状态：
  - 无本地缺失文件
  - 但 `knowledge` 与 `ai` 模块仍有占位图未补齐

### 办公套件落地页

#### `officesuite-business.html`
- 页面定位：面向团队的办公套件落地页
- 核心内容：团队适配理由、协作能力、客户案例、知识沉淀模块
- 图片整理：
  - 独有 Banner：`assets/images/banner/suite-banner1.png`
  - 复用协作产品图片：`12` 个主资源
  - 客户墙 Logo：`45` 个
- 图片状态：
  - 无本地缺失文件
  - `knowledge` 模块有 `9` 处 TODO / `6` 个占位区

#### `officesuite-enterprise.html`
- 页面定位：面向企业的办公套件落地页
- 核心内容：企业适配理由、协作能力、知识沉淀、AI 接入、信创与部署能力
- 图片整理：
  - 独有 Banner：`assets/images/banner/suite-banner2.png`
  - 复用协作产品图片：`12` 个主资源
  - 客户墙 Logo：`45` 个
- 图片状态：
  - 无本地缺失文件
  - `knowledge` + `ai` 模块合计 `17` 处 TODO / `8` 个占位区

### 协作与产品功能页

#### `collaboration.html`
- 页面定位：协作产品导航页
- 核心内容：文档、文稿、表格、幻灯片、应用表格、表单六类产品入口
- 图片整理：
  - 共 `12` 个本地图片资源
  - 其中 `6` 个是产品图标 / 缩略图，`6` 个是对应产品主视觉图
- 图片状态：正常

#### `document.html`
- 页面定位：文档产品详情页
- 核心内容：实时协作、附件插入、评论、历史追溯、语音速记、翻译、OCR、水印
- 图片整理：
  - Hero：`assets/images/doc_product_desc_back.4f15795f.png`
  - 已存在功能图：
    - `doc_feature_collaboration.webp`
    - `doc_feature_insert.webp`
    - `doc_feature_comment.webp`
    - `doc_feature_voice.webp`
    - `doc_feature_translate.webp`
    - `doc_feature_ocr.webp`
- 图片状态：缺 `2` 张

#### `writer.html`
- 页面定位：文稿产品详情页
- 核心内容：格式兼容、多人协同、自由排版、修订审阅、评论、@功能、历史追溯
- 图片整理：
  - Hero：`assets/images/writer/traditional_back.webp`
  - 已存在功能图：
    - `writer_feature1.webp`
    - `writer_feature2.webp`
    - `writer_feature3.webp`
    - `writer_feature4.webp`
- 图片状态：缺 `4` 张

#### `sheet.html`
- 页面定位：表格产品详情页
- 核心内容：协同编辑、函数公式、透视表、单元格权限、图表、关注选区等
- 图片整理：
  - 已存在图片：
    - `sheet_feature1.webp`
    - `sheet_feature2.webp`
    - `sheet_feature3.webp`
    - `sheet_feature5.webp`
    - `sheet_feature6.webp`
    - `sheet_feature7.webp`
    - `sheet_feature11.webp`
    - `sheet_feature12.webp`
- 图片状态：缺 `sheet_feature9.webp`

#### `slide.html`
- 页面定位：幻灯片产品详情页
- 核心内容：协同演示、PPT 兼容、统一设计、展示播放、评论审阅
- 图片整理：
  - 主视觉复用：`assets/images/slide_product_desc_back.78851b71.png`
  - 功能图：
    - `slide_feature1.webp`
    - `slide_feature2.webp`
    - `slide_feature3.webp`
    - `slide_feature5.webp`
    - `slide_feature6.webp`
- 图片状态：正常
- 备注：该页存在“一张主视觉多处复用”的情况

#### `table.html`
- 页面定位：应用表格产品详情页
- 核心内容：字段、多视图、跨组协作、项目追踪、跨表关联、仪表盘
- 图片整理：
  - 页面展示统一复用 `assets/images/table_back.4655d070.png`
- 图片状态：正常

#### `form.html`
- 页面定位：表单产品详情页
- 核心内容：搭建、逻辑配置、模板题型、数据分析、多渠道分发、权限控制
- 图片整理：
  - 页面展示统一复用 `assets/images/form.d91584ab.png`
- 图片状态：正常

#### `portal.html`
- 页面定位：工作台详情页
- 核心内容：统一入口、待办提醒、最近文件、日常执行入口
- 图片整理：
  - 主内容未引用本地 / 外链位图
- 图片状态：正常

#### `space.html`
- 页面定位：协作空间详情页
- 核心内容：围绕项目持续协作、过程追溯、成果复用
- 图片整理：
  - 主内容未引用本地 / 外链位图
- 图片状态：正常

#### `knowledge-base.html`
- 页面定位：知识库详情页
- 核心内容：知识资产库、分层目录、权限安全、统一检索
- 图片整理：
  - 主内容未引用本地 / 外链位图
- 图片状态：正常

#### `management-panel.html`
- 页面定位：企业管理详情页
- 核心内容：通讯录、审计留痕、安全设置、离职交接
- 图片整理：
  - 主内容未引用本地 / 外链位图
- 图片状态：正常

#### `knowledge.html`
- 页面定位：知识沉淀能力页
- 核心内容：工作台、协作空间、知识库、通讯录、操作日志、企业设置
- 图片整理：
  - 当前没有真实位图
  - 图标与界面截图均为预留位
- 图片状态：`9` 处 TODO，`6` 个占位区

#### `ai.html`
- 页面定位：AI 接入能力页
- 核心内容：石小墨、内容创作、知识问答、企业定制、AI 文档基座
- 图片整理：
  - 当前没有真实位图
  - 产品界面图、图标、知识底座结构图均为预留位
- 图片状态：`8` 处 TODO，`2` 个占位区

#### `security-hub.html`
- 页面定位：安全保障能力页
- 核心内容：传输安全、应用权限、存储备份、数据自主、部署、技术支持、兼容
- 图片整理：
  - 主内容未引用本地 / 外链位图
- 图片状态：正常

#### `format-support.html`
- 页面定位：格式支持页
- 核心内容：文件预览、在线编辑
- 图片整理：
  - 主内容未引用本地 / 外链位图
- 图片状态：正常

### 集成、品牌、伙伴、法务页

#### `webofficesdk-integration.html`
- 页面定位：面向集成的文档中台页
- 核心内容：文件预览、协作编辑、格式处理、存储、安全、低改造接入
- 图片整理：
  - Banner：`assets/images/banner/sdk-banner.png`
- 图片状态：正常

#### `about.html`
- 页面定位：关于我们
- 核心内容：品牌介绍、公司介绍、发展历程、媒体报道、加入我们
- 图片整理：
  - 主内容图片共 `9` 张，全部为外链
- 图片状态：
  - 仓库内无对应图片文件
  - 依赖外部静态资源服务

#### `partner.html`
- 页面定位：渠道伙伴页
- 核心内容：合作理由、市场机会、合作收益
- 图片整理：
  - 首屏背景图：`assets/images/partner/hero-bg.jpg`
  - 其余主内容无独立位图
- 图片状态：正常

#### `privacy.html`
- 页面定位：隐私政策
- 图片整理：主内容无位图
- 图片状态：正常

#### `service.html`
- 页面定位：服务条款
- 图片整理：主内容无位图
- 图片状态：正常

#### `behavior.html`
- 页面定位：用户行为规范
- 图片整理：主内容无位图
- 图片状态：正常

### 解决方案页

#### `solutions.html`
- 页面定位：解决方案总入口页
- 核心内容：行业方案 + 场景方案入口
- 图片整理：
  - 主内容未引用位图
- 图片状态：正常

#### 解决方案详情页（统一模板组）

| 页面 | 主题 | 图片资源 | 状态 |
| --- | --- | --- | --- |
| `solution-retail.html` | 新零售 | `solution-pic-1-1` ~ `solution-pic-1-7` | 正常 |
| `solution-manufacturing.html` | 制造业 | `solution-pic-2-1` ~ `solution-pic-2-7` | 正常 |
| `solution-ecommerce.html` | 电商 | `solution-pic-3-1` ~ `solution-pic-3-7` | 正常 |
| `solution-education.html` | 教育 | `solution-pic-4-1` ~ `solution-pic-4-7` | 正常 |
| `solution-management.html` | 公司管理 | `solution-pic-5-1` ~ `solution-pic-5-7` | 正常 |
| `solution-product-rd.html` | 产品研发 | `solution-pic-6-1` ~ `solution-pic-6-7` | 正常 |
| `solution-marketing.html` | 市场营销 | `solution-pic-7-1` ~ `solution-pic-7-7` | 正常 |
| `solution-hr.html` | 人力资源 | `solution-pic-8-1` ~ `solution-pic-8-7` | 正常 |
| `solution-finance.html` | 财务管理 | `solution-pic-9-1` ~ `solution-pic-9-7` | 正常 |
| `solution-sales.html` | 销售管理 | `solution-pic-10-1` ~ `solution-pic-10-7` | 正常 |
| `solution.html` | 新零售别名页 | 与 `solution-retail.html` 相同 | 重复别名 |

补充说明：

- 每个解决方案详情页都是 `7` 张本地图片，结构一致。
- 当前这一组没有发现缺图、占位图或外链图问题。

## 建议处理顺序

1. 先补齐 `document.html`、`writer.html`、`sheet.html` 的缺失文件，避免图片 404。  
2. 再补 `knowledge.html` 与 `ai.html` 的占位图区，因为它们会连带影响首页与办公套件聚合页。  
3. 评估 `about.html` 是否要把外链图片落到仓库内，减少对外部资源域名的依赖。  
4. 如果还需要，我可以继续拆出两份补充文档：
   - 页面文案清单版
   - 页面 -> 图片文件对照版
