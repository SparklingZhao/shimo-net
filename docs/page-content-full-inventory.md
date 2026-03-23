# 页面内容全量整理

更新时间：2026-03-23  
统计范围：`dist/*.html` 顶层构建输出页，共 `37` 个  
配套表格：

- [page-content-full-inventory.csv](/Users/mac/Desktop/workspace/shimooffice.net/dev/docs/page-content-full-inventory.csv)
- [page-content-full-inventory-expanded.csv](/Users/mac/Desktop/workspace/shimooffice.net/dev/docs/page-content-full-inventory-expanded.csv)

## 使用说明

这份文档按“业务分组”整理当前项目中的所有页面，重点用于：

- 给产品、设计梳理页面范围与优先级
- 判断哪些页面需要补主视觉、真实产品截图或图标
- 识别哪些页面只是别名页、复用页，不需要重复投入设计

字段口径与截图里的表格保持一致，核心包括：

- `页面名称`
- `页面`
- `名称`
- `描述`
- `是否需要设计`
- `优先级`
- `现在用的`

## 重点结论

- `P0` 页面主要集中在品牌入口与核心落地页：
  - 首页 `welcome.html`
  - 办公套件面向团队 `officesuite-business.html`
  - 办公套件面向企业 `officesuite-enterprise.html`
  - 石墨文档中台面向集成 `webofficesdk-integration.html`
  - 解决方案总览 `solutions.html`
- 当前最明显缺真实素材的页面有：
  - `knowledge.html`
  - `portal.html`
  - `space.html`
  - `knowledge-base.html`
  - `management-panel.html`
  - `ai.html`
- 当前属于复用或别名、无需重复设计的页面有：
  - `index.html` 复用 `welcome.html`
  - `solution.html` 复用 `solution-retail.html`
- 当前以信息展示为主、可不优先投入设计资源的页面有：
  - `privacy.html`
  - `service.html`
  - `behavior.html`
  - `format-support.html`

## 按分组整理

### 首页与入口

| 页面名称 | 页面 | 设计判断 | 当前情况 |
| --- | --- | --- | --- |
| 首页 | `welcome.html` | 需要，`P0` | 主视觉已落地，但知识沉淀与 AI 模块仍有占位 |
| 首页（根路由别名） | `index.html` | 不需要，`P3` | 与 `welcome.html` 内容一致，仅作根路由入口 |

### 办公套件落地页

| 页面名称 | 页面 | 设计判断 | 当前情况 |
| --- | --- | --- | --- |
| 石墨办公套件面向团队 | `officesuite-business.html` | 需要，`P0` | 使用 `suite-banner1.png`，知识沉淀模块有占位 |
| 石墨办公套件面向企业 | `officesuite-enterprise.html` | 需要，`P0` | 使用 `suite-banner2.png`，知识沉淀和 AI 模块有占位 |
| 石墨文档中台面向集成 | `webofficesdk-integration.html` | 需要，`P0` | 使用 `sdk-banner.png`，AI 接入能力卡仍为敬请期待 |

### 一级能力页

| 页面名称 | 页面 | 设计判断 | 当前情况 |
| --- | --- | --- | --- |
| 文档协作 | `collaboration.html` | 部分需要，`P1` | 产品切换结构完整，可统一升级视觉规范 |
| 知识沉淀 | `knowledge.html` | 需要，`P1` | 多处图标和界面图仍为 TODO 占位 |
| AI 接入 | `ai.html` | 需要，`P1` | 两块主视觉和多枚图标仍为 TODO 占位 |
| 安全保障 | `security-hub.html` | 部分需要，`P1` | 结构清楚，可补一套统一安全视觉 |
| 格式支持 | `format-support.html` | 不需要，`P2` | 典型信息页，当前以清单展示为主 |

### 产品功能页

| 页面名称 | 页面 | 设计判断 | 当前情况 |
| --- | --- | --- | --- |
| 文档 | `document.html` | 部分需要，`P2` | 有主视觉和功能图，但仍缺 2 个资源 |
| 文稿 | `writer.html` | 部分需要，`P2` | 有主视觉，但仍缺 4 个功能图 |
| 表格 | `sheet.html` | 部分需要，`P2` | 有主视觉，但仍缺 1 个功能图 |
| 幻灯片 | `slide.html` | 可沿用，`P2` | 现有主视觉与内容图较完整 |
| 应用表格 | `table.html` | 可沿用，`P2` | 现有主视觉较完整 |
| 表单 | `form.html` | 可沿用，`P2` | 当前多处复用同一张图，可后续再细化 |

### 知识沉淀子页

| 页面名称 | 页面 | 设计判断 | 当前情况 |
| --- | --- | --- | --- |
| 工作台 | `portal.html` | 需要，`P1` | 缺真实产品界面图 |
| 协作空间 | `space.html` | 需要，`P1` | 缺真实产品界面图 |
| 知识库 | `knowledge-base.html` | 需要，`P1` | 缺真实产品界面图 |
| 企业管理 | `management-panel.html` | 需要，`P1` | 缺真实产品界面图 |

### 品牌与商务

| 页面名称 | 页面 | 设计判断 | 当前情况 |
| --- | --- | --- | --- |
| 关于我们 | `about.html` | 部分需要，`P2` | 现有图为外链资源，存在可控性风险 |
| 渠道合作 | `partner.html` | 可沿用，`P2` | 已有商务型背景图和内容结构 |

### 解决方案

| 页面名称 | 页面 | 设计判断 | 当前情况 |
| --- | --- | --- | --- |
| 解决方案总览 | `solutions.html` | 需要，`P0` | 目前是卡片索引页，建议补统一主视觉 |
| 新零售解决方案 | `solution-retail.html` | 需要，`P1` | 使用统一模板和行业总览图 |
| 新零售解决方案（导航别名） | `solution.html` | 不需要，`P3` | 与 `solution-retail.html` 内容一致 |
| 制造业解决方案 | `solution-manufacturing.html` | 需要，`P1` | 使用统一模板和行业总览图 |
| 电商解决方案 | `solution-ecommerce.html` | 需要，`P1` | 使用统一模板和行业总览图 |
| 教育解决方案 | `solution-education.html` | 需要，`P1` | 使用统一模板和行业总览图 |
| 公司管理解决方案 | `solution-management.html` | 需要，`P1` | 使用统一模板和行业总览图 |
| 产研协同解决方案 | `solution-product-rd.html` | 需要，`P1` | 使用统一模板和行业总览图 |
| 市场营销解决方案 | `solution-marketing.html` | 需要，`P1` | 使用统一模板和行业总览图 |
| 人力资源解决方案 | `solution-hr.html` | 需要，`P1` | 使用统一模板和行业总览图 |
| 财务管理解决方案 | `solution-finance.html` | 需要，`P1` | 使用统一模板和行业总览图 |
| 销售管理解决方案 | `solution-sales.html` | 需要，`P1` | 使用统一模板和行业总览图 |

### 法务与协议

| 页面名称 | 页面 | 设计判断 | 当前情况 |
| --- | --- | --- | --- |
| 隐私政策 | `privacy.html` | 不需要，`P3` | 正文型合规页面 |
| 服务条款 | `service.html` | 不需要，`P3` | 正文型合规页面 |
| 行为规范 | `behavior.html` | 不需要，`P3` | 正文型合规页面 |

## 当前建议的执行顺序

### 第一批

- 首页
- 办公套件面向团队
- 办公套件面向企业
- 石墨文档中台面向集成
- 解决方案总览

### 第二批

- 知识沉淀
- AI 接入
- 工作台
- 协作空间
- 知识库
- 企业管理
- 全部解决方案详情模板

### 第三批

- 文档
- 文稿
- 表格
- 幻灯片
- 应用表格
- 表单
- 关于我们
- 渠道合作

### 最后处理

- `index.html`
- `solution.html`
- `privacy.html`
- `service.html`
- `behavior.html`
- `format-support.html`

## 说明

- `是否需要设计` 与 `优先级` 是基于当前页面完成度、素材缺口、品牌入口权重做的建议判断，不是绝对结论。
- 这次整理没有改页面代码，也没有重新构建 `dist`，只新增了文档文件。
- 仓库里仍存在上一个需求中断后留下的未提交改动：
  - [welcome.html](/Users/mac/Desktop/workspace/shimooffice.net/dev/welcome.html)
  - [css/components.css](/Users/mac/Desktop/workspace/shimooffice.net/dev/css/components.css)
