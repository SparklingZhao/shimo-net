# 页面主题图片全量清单

更新时间：2026-03-23  
统计范围：`dist/*.html` 顶层构建输出页，共 `37` 个页面  
整理原则：按页面梳理所有主题图片，包含 HTML `<img>` 与通过 `background-image` 引用的首屏/模块视觉；若源页面缺少 `alt` 或 `title`，则按文件名和上下文补充推断标题，并在“状态”列标记为 `推断`。

## 总览

| 页面 | HTML Title | 页面主题（H1） | 图片数量 | 引用次数 | 备注 |
| --- | --- | --- | ---: | ---: | --- |
| `about.html` | 石墨文档企业服务 - 关于我们 | 做一款中国人自己的产品，让协同办公回归简朴与高效 | 10 | 10 | 无特殊备注 |
| `ai.html` | AI 接入 - 石墨文档企业服务 | AI 接入 | 1 | 1 | 页面主体仍以文案和 SVG 占位为主，当前仅统计页脚二维码 |
| `behavior.html` | 石墨文档用户行为规范 | 石墨文档用户行为规范 | 1 | 1 | 无特殊备注 |
| `collaboration.html` | 文档协作 - 石墨文档企业服务 | 文档协作 | 13 | 13 | 无特殊备注 |
| `document.html` | 文档 - 石墨文档企业服务 | 文档 | 10 | 10 | 无特殊备注 |
| `form.html` | 表单 - 石墨文档企业服务 | 表单 | 9 | 9 | 同一张主图在多个模块复用 |
| `format-support.html` | 格式支持 - 石墨文档企业服务 | 格式支持 | 1 | 1 | 无特殊备注 |
| `index.html` | 石墨文档企业服务 - 首页 | AI 时代的文档基座 | 59 | 114 | 包含 11 张重复使用图片；页面内容与 welcome.html 一致 |
| `knowledge-base.html` | 知识库 - 石墨文档企业服务 | 知识库 | 1 | 1 | 无特殊备注 |
| `knowledge.html` | 知识沉淀 - 石墨文档企业服务 | 知识沉淀 | 1 | 1 | 页面主体仍以占位界面图为主，当前仅统计页脚二维码 |
| `management-panel.html` | 企业管理 - 石墨文档企业服务 | 企业管理 | 1 | 1 | 无特殊备注 |
| `officesuite-business.html` | 石墨办公套件 面向团队 - 石墨文档企业服务 | 石墨办公套件 面向团队 | 60 | 115 | 包含 1 张首屏背景图；知识沉淀模块仍有占位界面图 |
| `officesuite-enterprise.html` | 石墨办公套件 面向企业 - 石墨文档企业服务 | 石墨办公套件 面向企业 | 60 | 115 | 包含 1 张首屏背景图；知识沉淀和 AI 模块仍有占位界面图 |
| `partner.html` | 渠道合作 - 石墨文档企业服务 | 与石墨文档一起，共赢「企业云文档协作与管理」蓝海市场 | 2 | 2 | 主视觉使用内联背景图 |
| `portal.html` | 工作台 - 石墨文档企业服务 | 工作台 | 1 | 1 | 无特殊备注 |
| `privacy.html` | 石墨文档隐私保护政策 | 石墨文档隐私保护政策 | 1 | 1 | 无特殊备注 |
| `security-hub.html` | 安全保障 - 石墨文档企业服务 | 安全保障 | 1 | 1 | 无特殊备注 |
| `service.html` | 石墨文档服务条款 | 石墨文档服务条款 | 1 | 1 | 无特殊备注 |
| `sheet.html` | 表格 - 石墨文档企业服务 | 表格 | 10 | 10 | 无特殊备注 |
| `slide.html` | 幻灯片 - 石墨文档企业服务 | 幻灯片 | 10 | 10 | 同一张主图在多个模块复用 |
| `solution-ecommerce.html` | 电商数据协同流转解决方案 - 石墨文档企业服务 | 一站式企业协作解决方案 | 9 | 9 | 无特殊备注 |
| `solution-education.html` | 智慧教育协同文档平台解决方案 - 石墨文档企业服务 | 一站式企业协作解决方案 | 9 | 9 | 无特殊备注 |
| `solution-finance.html` | 财务协同管理解决方案 - 石墨文档企业服务 | 一站式企业协作解决方案 | 9 | 9 | 无特殊备注 |
| `solution-hr.html` | 人力资源协同解决方案 - 石墨文档企业服务 | 一站式企业协作解决方案 | 9 | 9 | 无特殊备注 |
| `solution-management.html` | 公司全员协同管理解决方案 - 石墨文档企业服务 | 一站式企业协作解决方案 | 9 | 9 | 无特殊备注 |
| `solution-manufacturing.html` | 智能制造协同文档平台解决方案 - 石墨文档企业服务 | 一站式企业协作解决方案 | 9 | 9 | 无特殊备注 |
| `solution-marketing.html` | 多方协同市场活动管理解决方案 - 石墨文档企业服务 | 一站式企业协作解决方案 | 9 | 9 | 无特殊备注 |
| `solution-product-rd.html` | 产研协同一体化解决方案 - 石墨文档企业服务 | 一站式企业协作解决方案 | 9 | 9 | 无特殊备注 |
| `solution-retail.html` | 新零售解决方案 - 石墨文档企业服务 | 一站式企业协作解决方案 | 9 | 9 | 页面内容与 solution.html 一致，当前为零售方案正式页 |
| `solution-sales.html` | 销售全流程协同管理解决方案 - 石墨文档企业服务 | 一站式企业协作解决方案 | 9 | 9 | 无特殊备注 |
| `solution.html` | 新零售解决方案 - 石墨文档企业服务 | 一站式企业协作解决方案 | 9 | 9 | 页面内容与 solution-retail.html 一致，当前为零售方案别名页 |
| `solutions.html` | 一站式企业协作解决方案 - 石墨文档企业服务 | 一站式企业协作解决方案 | 2 | 2 | 无特殊备注 |
| `space.html` | 协作空间 - 石墨文档企业服务 | 协作空间 | 1 | 1 | 无特殊备注 |
| `table.html` | 应用表格 - 石墨文档企业服务 | 应用表格 | 9 | 9 | 同一张主图在多个模块复用 |
| `webofficesdk-integration.html` | 石墨文档中台 面向集成 - 石墨文档企业服务 | 石墨文档中台 面向集成 | 2 | 2 | 无特殊备注 |
| `welcome.html` | 石墨文档企业服务 - 首页 | AI 时代的文档基座 | 59 | 114 | 包含 11 张重复使用图片；页面内容与 index.html 一致 |
| `writer.html` | 文稿 - 石墨文档企业服务 | 文稿 | 10 | 10 | 无特殊备注 |

## `about.html`

- HTML Title：石墨文档企业服务 - 关于我们
- 页面主题：做一款中国人自己的产品，让协同办公回归简朴与高效
- 备注：无特殊备注
- 主题图片数：10
- 总引用次数：10

| 类型 | 路径 | 标题 | 状态 | 次数 |
| --- | --- | --- | --- | ---: |
| img | `assets/images/wechat-accout.png` | 石墨文档微信公众号二维码 | 正常 | 1 |
| img | `https://as.smgv.cn/static/lizard-service-homepage/assets/about_page_brand_image.c00021b9.jpg` | 石墨品牌与团队形象展示 | 正常 | 1 |
| img | `https://as.smgv.cn/static/lizard-service-homepage/assets/about_page_growth_image.7a87c28f.png` | 石墨成长历程视觉展示 | 正常 | 1 |
| img | `https://as.smgv.cn/static/lizard-service-homepage/assets/about_page_honer_image.4cca2599.jpg` | 石墨获奖荣誉展示 | 正常 | 1 |
| img | `https://as.smgv.cn/static/lizard-service-homepage/assets/about_page_join_image.68a819e9.jpg` | 石墨加入我们视觉图 | 正常 | 1 |
| img | `https://as.smgv.cn/static/lizard-service-homepage/assets/about_page_media_logo1.759122ab.png` | 媒体平台标识 1 | 正常 | 1 |
| img | `https://as.smgv.cn/static/lizard-service-homepage/assets/about_page_media_logo2.aa91999e.png` | 媒体平台标识 2 | 正常 | 1 |
| img | `https://as.smgv.cn/static/lizard-service-homepage/assets/about_page_media_logo3.d5ab05e2.png` | 媒体平台标识 3 | 正常 | 1 |
| img | `https://as.smgv.cn/static/lizard-service-homepage/assets/about_page_media_logo4.f39a4b76.png` | 媒体平台标识 4 | 正常 | 1 |
| img | `https://as.smgv.cn/static/lizard-service-homepage/assets/about_page_title_banner.3f4547c5.jpg` | 石墨关于我们页面主视觉 | 正常 | 1 |

## `ai.html`

- HTML Title：AI 接入 - 石墨文档企业服务
- 页面主题：AI 接入
- 备注：页面主体仍以文案和 SVG 占位为主，当前仅统计页脚二维码
- 主题图片数：1
- 总引用次数：1

| 类型 | 路径 | 标题 | 状态 | 次数 |
| --- | --- | --- | --- | ---: |
| img | `assets/images/wechat-accout.png` | 石墨文档微信公众号二维码 | 正常 | 1 |

## `behavior.html`

- HTML Title：石墨文档用户行为规范
- 页面主题：石墨文档用户行为规范
- 备注：无特殊备注
- 主题图片数：1
- 总引用次数：1

| 类型 | 路径 | 标题 | 状态 | 次数 |
| --- | --- | --- | --- | ---: |
| img | `assets/images/wechat-accout.png` | 石墨文档微信公众号二维码 | 正常 | 1 |

## `collaboration.html`

- HTML Title：文档协作 - 石墨文档企业服务
- 页面主题：文档协作
- 备注：无特殊备注
- 主题图片数：13
- 总引用次数：13

| 类型 | 路径 | 标题 | 状态 | 次数 |
| --- | --- | --- | --- | ---: |
| img | `assets/images/doc.d12d293d.png` | 文档产品主图 | 推断 | 1 |
| img | `assets/images/doc_product_desc_back.4f15795f.png` | 文档产品截图 | 正常 | 1 |
| img | `assets/images/docx_icon.2b3372a8.png` | 产品功能图标 docx_icon | 推断 | 1 |
| img | `assets/images/form.d91584ab.png` | 表单产品截图 | 正常 | 1 |
| img | `assets/images/form_icon.684f8f7b.png` | 产品功能图标 form_icon | 推断 | 1 |
| img | `assets/images/presentation.fbeeebed.png` | 幻灯片产品主图 | 推断 | 1 |
| img | `assets/images/sheet.c78ad43b.png` | 表格产品主图 | 推断 | 1 |
| img | `assets/images/sheet_product_desc_back.1791d6f4.png` | 表格产品截图 | 正常 | 1 |
| img | `assets/images/slide_product_desc_back.78851b71.png` | 幻灯片产品截图 | 正常 | 1 |
| img | `assets/images/table_back.4655d070.png` | 应用表格产品截图 | 正常 | 1 |
| img | `assets/images/table_new_icon.daefbbf7.png` | 产品功能图标 table_new_icon | 推断 | 1 |
| img | `assets/images/traditional_back.ccfcc942.png` | 文稿产品截图 | 正常 | 1 |
| img | `assets/images/wechat-accout.png` | 石墨文档微信公众号二维码 | 正常 | 1 |

## `document.html`

- HTML Title：文档 - 石墨文档企业服务
- 页面主题：文档
- 备注：无特殊备注
- 主题图片数：10
- 总引用次数：10

| 类型 | 路径 | 标题 | 状态 | 次数 |
| --- | --- | --- | --- | ---: |
| img | `assets/images/doc_product_desc_back.4f15795f.png` | 文档产品 | 正常 | 1 |
| img | `assets/images/document/doc_feature_collaboration.webp` | 多人多端实时协作 | 正常 | 1 |
| img | `assets/images/document/doc_feature_comment.webp` | 全局讨论与划词评论 | 正常 | 1 |
| img | `assets/images/document/doc_feature_history.webp` | 编辑历史追溯 | 正常 | 1 |
| img | `assets/images/document/doc_feature_insert.webp` | 丰富的附件插入 | 正常 | 1 |
| img | `assets/images/document/doc_feature_ocr.webp` | OCR文字识别 | 正常 | 1 |
| img | `assets/images/document/doc_feature_translate.webp` | 智能文字翻译 | 正常 | 1 |
| img | `assets/images/document/doc_feature_voice.webp` | 语音速记 | 正常 | 1 |
| img | `assets/images/document/doc_feature_watermark.webp` | @提及与协作者水印 | 正常 | 1 |
| img | `assets/images/wechat-accout.png` | 石墨文档微信公众号二维码 | 正常 | 1 |

## `form.html`

- HTML Title：表单 - 石墨文档企业服务
- 页面主题：表单
- 备注：同一张主图在多个模块复用
- 主题图片数：9
- 总引用次数：9

| 类型 | 路径 | 标题 | 状态 | 次数 |
| --- | --- | --- | --- | ---: |
| img | `assets/images/form.d91584ab.png` | 与表格深度联动 | 正常 | 1 |
| img | `assets/images/form.d91584ab.png` | 填写权限与限额控制 | 正常 | 1 |
| img | `assets/images/form.d91584ab.png` | 多场景模板与题型 | 正常 | 1 |
| img | `assets/images/form.d91584ab.png` | 多渠道分发与追踪 | 正常 | 1 |
| img | `assets/images/form.d91584ab.png` | 拖拽式敏捷搭建 | 正常 | 1 |
| img | `assets/images/form.d91584ab.png` | 数据自动汇总分析 | 正常 | 1 |
| img | `assets/images/form.d91584ab.png` | 灵活的逻辑配置 | 正常 | 1 |
| img | `assets/images/form.d91584ab.png` | 表单 | 正常 | 1 |
| img | `assets/images/wechat-accout.png` | 石墨文档微信公众号二维码 | 正常 | 1 |

## `format-support.html`

- HTML Title：格式支持 - 石墨文档企业服务
- 页面主题：格式支持
- 备注：无特殊备注
- 主题图片数：1
- 总引用次数：1

| 类型 | 路径 | 标题 | 状态 | 次数 |
| --- | --- | --- | --- | ---: |
| img | `assets/images/wechat-accout.png` | 石墨文档微信公众号二维码 | 正常 | 1 |

## `index.html`

- HTML Title：石墨文档企业服务 - 首页
- 页面主题：AI 时代的文档基座
- 备注：包含 11 张重复使用图片；页面内容与 welcome.html 一致
- 主题图片数：59
- 总引用次数：114

| 类型 | 路径 | 标题 | 状态 | 次数 |
| --- | --- | --- | --- | ---: |
| img | `assets/images/customerlogo/image1.png` | 客户 Logo 1 | 推断 | 4 |
| img | `assets/images/customerlogo/image10.png` | 客户 Logo 10 | 推断 | 2 |
| img | `assets/images/customerlogo/image11.png` | 客户 Logo 11 | 推断 | 2 |
| img | `assets/images/customerlogo/image12.png` | 客户 Logo 12 | 推断 | 2 |
| img | `assets/images/customerlogo/image13.png` | 客户 Logo 13 | 推断 | 2 |
| img | `assets/images/customerlogo/image14.png` | 客户 Logo 14 | 推断 | 2 |
| img | `assets/images/customerlogo/image15.png` | 客户 Logo 15 | 推断 | 2 |
| img | `assets/images/customerlogo/image16.png` | 客户 Logo 16 | 推断 | 2 |
| img | `assets/images/customerlogo/image17.png` | 客户 Logo 17 | 推断 | 2 |
| img | `assets/images/customerlogo/image18.png` | 客户 Logo 18 | 推断 | 2 |
| img | `assets/images/customerlogo/image19.png` | 客户 Logo 19 | 推断 | 2 |
| img | `assets/images/customerlogo/image2.png` | 客户 Logo 2 | 推断 | 4 |
| img | `assets/images/customerlogo/image20.png` | 客户 Logo 20 | 推断 | 2 |
| img | `assets/images/customerlogo/image21.png` | 客户 Logo 21 | 推断 | 2 |
| img | `assets/images/customerlogo/image22.png` | 客户 Logo 22 | 推断 | 2 |
| img | `assets/images/customerlogo/image23.png` | 客户 Logo 23 | 推断 | 2 |
| img | `assets/images/customerlogo/image24.png` | 客户 Logo 24 | 推断 | 2 |
| img | `assets/images/customerlogo/image25.png` | 客户 Logo 25 | 推断 | 2 |
| img | `assets/images/customerlogo/image26.png` | 客户 Logo 26 | 推断 | 2 |
| img | `assets/images/customerlogo/image27.png` | 客户 Logo 27 | 推断 | 2 |
| img | `assets/images/customerlogo/image28.png` | 客户 Logo 28 | 推断 | 2 |
| img | `assets/images/customerlogo/image29.png` | 客户 Logo 29 | 推断 | 2 |
| img | `assets/images/customerlogo/image3.png` | 客户 Logo 3 | 推断 | 4 |
| img | `assets/images/customerlogo/image30.png` | 客户 Logo 30 | 推断 | 2 |
| img | `assets/images/customerlogo/image31.png` | 客户 Logo 31 | 推断 | 2 |
| img | `assets/images/customerlogo/image32.png` | 客户 Logo 32 | 推断 | 2 |
| img | `assets/images/customerlogo/image33.png` | 客户 Logo 33 | 推断 | 2 |
| img | `assets/images/customerlogo/image34.png` | 客户 Logo 34 | 推断 | 2 |
| img | `assets/images/customerlogo/image35.png` | 客户 Logo 35 | 推断 | 2 |
| img | `assets/images/customerlogo/image36.png` | 客户 Logo 36 | 推断 | 2 |
| img | `assets/images/customerlogo/image37.png` | 客户 Logo 37 | 推断 | 2 |
| img | `assets/images/customerlogo/image38.png` | 客户 Logo 38 | 推断 | 2 |
| img | `assets/images/customerlogo/image39.png` | 客户 Logo 39 | 推断 | 2 |
| img | `assets/images/customerlogo/image4.png` | 客户 Logo 4 | 推断 | 4 |
| img | `assets/images/customerlogo/image40.png` | 客户 Logo 40 | 推断 | 2 |
| img | `assets/images/customerlogo/image41.png` | 客户 Logo 41 | 推断 | 2 |
| img | `assets/images/customerlogo/image42.png` | 客户 Logo 42 | 推断 | 2 |
| img | `assets/images/customerlogo/image43.png` | 客户 Logo 43 | 推断 | 2 |
| img | `assets/images/customerlogo/image44.png` | 客户 Logo 44 | 推断 | 2 |
| img | `assets/images/customerlogo/image45.png` | 客户 Logo 45 | 推断 | 2 |
| img | `assets/images/customerlogo/image5.png` | 客户 Logo 5 | 推断 | 4 |
| img | `assets/images/customerlogo/image6.png` | 客户 Logo 6 | 推断 | 2 |
| img | `assets/images/customerlogo/image7.png` | 客户 Logo 7 | 推断 | 2 |
| img | `assets/images/customerlogo/image8.png` | 客户 Logo 8 | 推断 | 2 |
| img | `assets/images/customerlogo/image9.png` | 客户 Logo 9 | 推断 | 2 |
| img | `assets/images/doc.d12d293d.png` | 文档产品主图 | 推断 | 1 |
| img | `assets/images/doc_product_desc_back.4f15795f.png` | 文档产品截图 | 正常 | 1 |
| img | `assets/images/docx_icon.2b3372a8.png` | 产品功能图标 docx_icon | 推断 | 1 |
| img | `assets/images/form.d91584ab.png` | 表单产品截图 | 正常 | 1 |
| img | `assets/images/form_icon.684f8f7b.png` | 产品功能图标 form_icon | 推断 | 1 |
| img | `assets/images/homepage_title_banner_background.43282104.png` | 首页主视觉 | 正常 | 1 |
| img | `assets/images/presentation.fbeeebed.png` | 幻灯片产品主图 | 推断 | 1 |
| img | `assets/images/sheet.c78ad43b.png` | 表格产品主图 | 推断 | 1 |
| img | `assets/images/sheet_product_desc_back.1791d6f4.png` | 表格产品截图 | 正常 | 1 |
| img | `assets/images/slide_product_desc_back.78851b71.png` | 幻灯片产品截图 | 正常 | 1 |
| img | `assets/images/table_back.4655d070.png` | 应用表格产品截图 | 正常 | 1 |
| img | `assets/images/table_new_icon.daefbbf7.png` | 产品功能图标 table_new_icon | 推断 | 1 |
| img | `assets/images/traditional_back.ccfcc942.png` | 文稿产品截图 | 正常 | 1 |
| img | `assets/images/wechat-accout.png` | 石墨文档微信公众号二维码 | 正常 | 1 |

## `knowledge-base.html`

- HTML Title：知识库 - 石墨文档企业服务
- 页面主题：知识库
- 备注：无特殊备注
- 主题图片数：1
- 总引用次数：1

| 类型 | 路径 | 标题 | 状态 | 次数 |
| --- | --- | --- | --- | ---: |
| img | `assets/images/wechat-accout.png` | 石墨文档微信公众号二维码 | 正常 | 1 |

## `knowledge.html`

- HTML Title：知识沉淀 - 石墨文档企业服务
- 页面主题：知识沉淀
- 备注：页面主体仍以占位界面图为主，当前仅统计页脚二维码
- 主题图片数：1
- 总引用次数：1

| 类型 | 路径 | 标题 | 状态 | 次数 |
| --- | --- | --- | --- | ---: |
| img | `assets/images/wechat-accout.png` | 石墨文档微信公众号二维码 | 正常 | 1 |

## `management-panel.html`

- HTML Title：企业管理 - 石墨文档企业服务
- 页面主题：企业管理
- 备注：无特殊备注
- 主题图片数：1
- 总引用次数：1

| 类型 | 路径 | 标题 | 状态 | 次数 |
| --- | --- | --- | --- | ---: |
| img | `assets/images/wechat-accout.png` | 石墨文档微信公众号二维码 | 正常 | 1 |

## `officesuite-business.html`

- HTML Title：石墨办公套件 面向团队 - 石墨文档企业服务
- 页面主题：石墨办公套件 面向团队
- 备注：包含 1 张首屏背景图；知识沉淀模块仍有占位界面图
- 主题图片数：60
- 总引用次数：115

| 类型 | 路径 | 标题 | 状态 | 次数 |
| --- | --- | --- | --- | ---: |
| background-css | `assets/images/homepage_title_banner_background.43282104.png` | pc-hero ??? | 正常 | 1 |
| img | `assets/images/banner/suite-banner1.png` | 石墨办公套件团队协作展示图 | 正常 | 1 |
| img | `assets/images/customerlogo/image1.png` | 客户 Logo 1 | 推断 | 4 |
| img | `assets/images/customerlogo/image10.png` | 客户 Logo 10 | 推断 | 2 |
| img | `assets/images/customerlogo/image11.png` | 客户 Logo 11 | 推断 | 2 |
| img | `assets/images/customerlogo/image12.png` | 客户 Logo 12 | 推断 | 2 |
| img | `assets/images/customerlogo/image13.png` | 客户 Logo 13 | 推断 | 2 |
| img | `assets/images/customerlogo/image14.png` | 客户 Logo 14 | 推断 | 2 |
| img | `assets/images/customerlogo/image15.png` | 客户 Logo 15 | 推断 | 2 |
| img | `assets/images/customerlogo/image16.png` | 客户 Logo 16 | 推断 | 2 |
| img | `assets/images/customerlogo/image17.png` | 客户 Logo 17 | 推断 | 2 |
| img | `assets/images/customerlogo/image18.png` | 客户 Logo 18 | 推断 | 2 |
| img | `assets/images/customerlogo/image19.png` | 客户 Logo 19 | 推断 | 2 |
| img | `assets/images/customerlogo/image2.png` | 客户 Logo 2 | 推断 | 4 |
| img | `assets/images/customerlogo/image20.png` | 客户 Logo 20 | 推断 | 2 |
| img | `assets/images/customerlogo/image21.png` | 客户 Logo 21 | 推断 | 2 |
| img | `assets/images/customerlogo/image22.png` | 客户 Logo 22 | 推断 | 2 |
| img | `assets/images/customerlogo/image23.png` | 客户 Logo 23 | 推断 | 2 |
| img | `assets/images/customerlogo/image24.png` | 客户 Logo 24 | 推断 | 2 |
| img | `assets/images/customerlogo/image25.png` | 客户 Logo 25 | 推断 | 2 |
| img | `assets/images/customerlogo/image26.png` | 客户 Logo 26 | 推断 | 2 |
| img | `assets/images/customerlogo/image27.png` | 客户 Logo 27 | 推断 | 2 |
| img | `assets/images/customerlogo/image28.png` | 客户 Logo 28 | 推断 | 2 |
| img | `assets/images/customerlogo/image29.png` | 客户 Logo 29 | 推断 | 2 |
| img | `assets/images/customerlogo/image3.png` | 客户 Logo 3 | 推断 | 4 |
| img | `assets/images/customerlogo/image30.png` | 客户 Logo 30 | 推断 | 2 |
| img | `assets/images/customerlogo/image31.png` | 客户 Logo 31 | 推断 | 2 |
| img | `assets/images/customerlogo/image32.png` | 客户 Logo 32 | 推断 | 2 |
| img | `assets/images/customerlogo/image33.png` | 客户 Logo 33 | 推断 | 2 |
| img | `assets/images/customerlogo/image34.png` | 客户 Logo 34 | 推断 | 2 |
| img | `assets/images/customerlogo/image35.png` | 客户 Logo 35 | 推断 | 2 |
| img | `assets/images/customerlogo/image36.png` | 客户 Logo 36 | 推断 | 2 |
| img | `assets/images/customerlogo/image37.png` | 客户 Logo 37 | 推断 | 2 |
| img | `assets/images/customerlogo/image38.png` | 客户 Logo 38 | 推断 | 2 |
| img | `assets/images/customerlogo/image39.png` | 客户 Logo 39 | 推断 | 2 |
| img | `assets/images/customerlogo/image4.png` | 客户 Logo 4 | 推断 | 4 |
| img | `assets/images/customerlogo/image40.png` | 客户 Logo 40 | 推断 | 2 |
| img | `assets/images/customerlogo/image41.png` | 客户 Logo 41 | 推断 | 2 |
| img | `assets/images/customerlogo/image42.png` | 客户 Logo 42 | 推断 | 2 |
| img | `assets/images/customerlogo/image43.png` | 客户 Logo 43 | 推断 | 2 |
| img | `assets/images/customerlogo/image44.png` | 客户 Logo 44 | 推断 | 2 |
| img | `assets/images/customerlogo/image45.png` | 客户 Logo 45 | 推断 | 2 |
| img | `assets/images/customerlogo/image5.png` | 客户 Logo 5 | 推断 | 4 |
| img | `assets/images/customerlogo/image6.png` | 客户 Logo 6 | 推断 | 2 |
| img | `assets/images/customerlogo/image7.png` | 客户 Logo 7 | 推断 | 2 |
| img | `assets/images/customerlogo/image8.png` | 客户 Logo 8 | 推断 | 2 |
| img | `assets/images/customerlogo/image9.png` | 客户 Logo 9 | 推断 | 2 |
| img | `assets/images/doc.d12d293d.png` | 文档产品主图 | 推断 | 1 |
| img | `assets/images/doc_product_desc_back.4f15795f.png` | 文档产品截图 | 正常 | 1 |
| img | `assets/images/docx_icon.2b3372a8.png` | 产品功能图标 docx_icon | 推断 | 1 |
| img | `assets/images/form.d91584ab.png` | 表单产品截图 | 正常 | 1 |
| img | `assets/images/form_icon.684f8f7b.png` | 产品功能图标 form_icon | 推断 | 1 |
| img | `assets/images/presentation.fbeeebed.png` | 幻灯片产品主图 | 推断 | 1 |
| img | `assets/images/sheet.c78ad43b.png` | 表格产品主图 | 推断 | 1 |
| img | `assets/images/sheet_product_desc_back.1791d6f4.png` | 表格产品截图 | 正常 | 1 |
| img | `assets/images/slide_product_desc_back.78851b71.png` | 幻灯片产品截图 | 正常 | 1 |
| img | `assets/images/table_back.4655d070.png` | 应用表格产品截图 | 正常 | 1 |
| img | `assets/images/table_new_icon.daefbbf7.png` | 产品功能图标 table_new_icon | 推断 | 1 |
| img | `assets/images/traditional_back.ccfcc942.png` | 文稿产品截图 | 正常 | 1 |
| img | `assets/images/wechat-accout.png` | 石墨文档微信公众号二维码 | 正常 | 1 |

## `officesuite-enterprise.html`

- HTML Title：石墨办公套件 面向企业 - 石墨文档企业服务
- 页面主题：石墨办公套件 面向企业
- 备注：包含 1 张首屏背景图；知识沉淀和 AI 模块仍有占位界面图
- 主题图片数：60
- 总引用次数：115

| 类型 | 路径 | 标题 | 状态 | 次数 |
| --- | --- | --- | --- | ---: |
| background-css | `assets/images/homepage_title_banner_background.43282104.png` | pc-hero ??? | 正常 | 1 |
| img | `assets/images/banner/suite-banner2.png` | 石墨办公套件企业私有化展示图 | 正常 | 1 |
| img | `assets/images/customerlogo/image1.png` | 客户 Logo 1 | 推断 | 4 |
| img | `assets/images/customerlogo/image10.png` | 客户 Logo 10 | 推断 | 2 |
| img | `assets/images/customerlogo/image11.png` | 客户 Logo 11 | 推断 | 2 |
| img | `assets/images/customerlogo/image12.png` | 客户 Logo 12 | 推断 | 2 |
| img | `assets/images/customerlogo/image13.png` | 客户 Logo 13 | 推断 | 2 |
| img | `assets/images/customerlogo/image14.png` | 客户 Logo 14 | 推断 | 2 |
| img | `assets/images/customerlogo/image15.png` | 客户 Logo 15 | 推断 | 2 |
| img | `assets/images/customerlogo/image16.png` | 客户 Logo 16 | 推断 | 2 |
| img | `assets/images/customerlogo/image17.png` | 客户 Logo 17 | 推断 | 2 |
| img | `assets/images/customerlogo/image18.png` | 客户 Logo 18 | 推断 | 2 |
| img | `assets/images/customerlogo/image19.png` | 客户 Logo 19 | 推断 | 2 |
| img | `assets/images/customerlogo/image2.png` | 客户 Logo 2 | 推断 | 4 |
| img | `assets/images/customerlogo/image20.png` | 客户 Logo 20 | 推断 | 2 |
| img | `assets/images/customerlogo/image21.png` | 客户 Logo 21 | 推断 | 2 |
| img | `assets/images/customerlogo/image22.png` | 客户 Logo 22 | 推断 | 2 |
| img | `assets/images/customerlogo/image23.png` | 客户 Logo 23 | 推断 | 2 |
| img | `assets/images/customerlogo/image24.png` | 客户 Logo 24 | 推断 | 2 |
| img | `assets/images/customerlogo/image25.png` | 客户 Logo 25 | 推断 | 2 |
| img | `assets/images/customerlogo/image26.png` | 客户 Logo 26 | 推断 | 2 |
| img | `assets/images/customerlogo/image27.png` | 客户 Logo 27 | 推断 | 2 |
| img | `assets/images/customerlogo/image28.png` | 客户 Logo 28 | 推断 | 2 |
| img | `assets/images/customerlogo/image29.png` | 客户 Logo 29 | 推断 | 2 |
| img | `assets/images/customerlogo/image3.png` | 客户 Logo 3 | 推断 | 4 |
| img | `assets/images/customerlogo/image30.png` | 客户 Logo 30 | 推断 | 2 |
| img | `assets/images/customerlogo/image31.png` | 客户 Logo 31 | 推断 | 2 |
| img | `assets/images/customerlogo/image32.png` | 客户 Logo 32 | 推断 | 2 |
| img | `assets/images/customerlogo/image33.png` | 客户 Logo 33 | 推断 | 2 |
| img | `assets/images/customerlogo/image34.png` | 客户 Logo 34 | 推断 | 2 |
| img | `assets/images/customerlogo/image35.png` | 客户 Logo 35 | 推断 | 2 |
| img | `assets/images/customerlogo/image36.png` | 客户 Logo 36 | 推断 | 2 |
| img | `assets/images/customerlogo/image37.png` | 客户 Logo 37 | 推断 | 2 |
| img | `assets/images/customerlogo/image38.png` | 客户 Logo 38 | 推断 | 2 |
| img | `assets/images/customerlogo/image39.png` | 客户 Logo 39 | 推断 | 2 |
| img | `assets/images/customerlogo/image4.png` | 客户 Logo 4 | 推断 | 4 |
| img | `assets/images/customerlogo/image40.png` | 客户 Logo 40 | 推断 | 2 |
| img | `assets/images/customerlogo/image41.png` | 客户 Logo 41 | 推断 | 2 |
| img | `assets/images/customerlogo/image42.png` | 客户 Logo 42 | 推断 | 2 |
| img | `assets/images/customerlogo/image43.png` | 客户 Logo 43 | 推断 | 2 |
| img | `assets/images/customerlogo/image44.png` | 客户 Logo 44 | 推断 | 2 |
| img | `assets/images/customerlogo/image45.png` | 客户 Logo 45 | 推断 | 2 |
| img | `assets/images/customerlogo/image5.png` | 客户 Logo 5 | 推断 | 4 |
| img | `assets/images/customerlogo/image6.png` | 客户 Logo 6 | 推断 | 2 |
| img | `assets/images/customerlogo/image7.png` | 客户 Logo 7 | 推断 | 2 |
| img | `assets/images/customerlogo/image8.png` | 客户 Logo 8 | 推断 | 2 |
| img | `assets/images/customerlogo/image9.png` | 客户 Logo 9 | 推断 | 2 |
| img | `assets/images/doc.d12d293d.png` | 文档产品主图 | 推断 | 1 |
| img | `assets/images/doc_product_desc_back.4f15795f.png` | 文档产品截图 | 正常 | 1 |
| img | `assets/images/docx_icon.2b3372a8.png` | 产品功能图标 docx_icon | 推断 | 1 |
| img | `assets/images/form.d91584ab.png` | 表单产品截图 | 正常 | 1 |
| img | `assets/images/form_icon.684f8f7b.png` | 产品功能图标 form_icon | 推断 | 1 |
| img | `assets/images/presentation.fbeeebed.png` | 幻灯片产品主图 | 推断 | 1 |
| img | `assets/images/sheet.c78ad43b.png` | 表格产品主图 | 推断 | 1 |
| img | `assets/images/sheet_product_desc_back.1791d6f4.png` | 表格产品截图 | 正常 | 1 |
| img | `assets/images/slide_product_desc_back.78851b71.png` | 幻灯片产品截图 | 正常 | 1 |
| img | `assets/images/table_back.4655d070.png` | 应用表格产品截图 | 正常 | 1 |
| img | `assets/images/table_new_icon.daefbbf7.png` | 产品功能图标 table_new_icon | 推断 | 1 |
| img | `assets/images/traditional_back.ccfcc942.png` | 文稿产品截图 | 正常 | 1 |
| img | `assets/images/wechat-accout.png` | 石墨文档微信公众号二维码 | 正常 | 1 |

## `partner.html`

- HTML Title：渠道合作 - 石墨文档企业服务
- 页面主题：与石墨文档一起，共赢「企业云文档协作与管理」蓝海市场
- 备注：主视觉使用内联背景图
- 主题图片数：2
- 总引用次数：2

| 类型 | 路径 | 标题 | 状态 | 次数 |
| --- | --- | --- | --- | ---: |
| background-inline | `assets/images/partner/hero-bg.jpg` | 渠道合作首屏背景图 | 推断 | 1 |
| img | `assets/images/wechat-accout.png` | 石墨文档微信公众号二维码 | 正常 | 1 |

## `portal.html`

- HTML Title：工作台 - 石墨文档企业服务
- 页面主题：工作台
- 备注：无特殊备注
- 主题图片数：1
- 总引用次数：1

| 类型 | 路径 | 标题 | 状态 | 次数 |
| --- | --- | --- | --- | ---: |
| img | `assets/images/wechat-accout.png` | 石墨文档微信公众号二维码 | 正常 | 1 |

## `privacy.html`

- HTML Title：石墨文档隐私保护政策
- 页面主题：石墨文档隐私保护政策
- 备注：无特殊备注
- 主题图片数：1
- 总引用次数：1

| 类型 | 路径 | 标题 | 状态 | 次数 |
| --- | --- | --- | --- | ---: |
| img | `assets/images/wechat-accout.png` | 石墨文档微信公众号二维码 | 正常 | 1 |

## `security-hub.html`

- HTML Title：安全保障 - 石墨文档企业服务
- 页面主题：安全保障
- 备注：无特殊备注
- 主题图片数：1
- 总引用次数：1

| 类型 | 路径 | 标题 | 状态 | 次数 |
| --- | --- | --- | --- | ---: |
| img | `assets/images/wechat-accout.png` | 石墨文档微信公众号二维码 | 正常 | 1 |

## `service.html`

- HTML Title：石墨文档服务条款
- 页面主题：石墨文档服务条款
- 备注：无特殊备注
- 主题图片数：1
- 总引用次数：1

| 类型 | 路径 | 标题 | 状态 | 次数 |
| --- | --- | --- | --- | ---: |
| img | `assets/images/wechat-accout.png` | 石墨文档微信公众号二维码 | 正常 | 1 |

## `sheet.html`

- HTML Title：表格 - 石墨文档企业服务
- 页面主题：表格
- 备注：无特殊备注
- 主题图片数：10
- 总引用次数：10

| 类型 | 路径 | 标题 | 状态 | 次数 |
| --- | --- | --- | --- | ---: |
| img | `assets/images/sheet/sheet_feature1.webp` | 表格 | 正常 | 1 |
| img | `assets/images/sheet/sheet_feature11.webp` | 可视化图表 | 正常 | 1 |
| img | `assets/images/sheet/sheet_feature12.webp` | 数据透视表 | 正常 | 1 |
| img | `assets/images/sheet/sheet_feature2.webp` | 6大函数 400+公式 | 正常 | 1 |
| img | `assets/images/sheet/sheet_feature3.webp` | 关注选区 | 正常 | 1 |
| img | `assets/images/sheet/sheet_feature5.webp` | 权限细至单元格 | 正常 | 1 |
| img | `assets/images/sheet/sheet_feature6.webp` | 多人多端实时协作 | 正常 | 1 |
| img | `assets/images/sheet/sheet_feature7.webp` | 单元格评论与@功能 | 正常 | 1 |
| img | `assets/images/sheet/sheet_feature9.webp` | 编辑历史与水印 | 正常 | 1 |
| img | `assets/images/wechat-accout.png` | 石墨文档微信公众号二维码 | 正常 | 1 |

## `slide.html`

- HTML Title：幻灯片 - 石墨文档企业服务
- 页面主题：幻灯片
- 备注：同一张主图在多个模块复用
- 主题图片数：10
- 总引用次数：10

| 类型 | 路径 | 标题 | 状态 | 次数 |
| --- | --- | --- | --- | ---: |
| img | `assets/images/slide/slide_feature1.webp` | 多人多端实时协作 | 正常 | 1 |
| img | `assets/images/slide/slide_feature2.webp` | 精细评论高效批注 | 正常 | 1 |
| img | `assets/images/slide/slide_feature3.webp` | @功能与历史记录 | 正常 | 1 |
| img | `assets/images/slide/slide_feature5.webp` | 协作者水印 | 正常 | 1 |
| img | `assets/images/slide/slide_feature6.webp` | 兼容 PowerPoint 文件 | 正常 | 1 |
| img | `assets/images/slide_product_desc_back.78851b71.png` | 协作审阅推进更快 | 正常 | 1 |
| img | `assets/images/slide_product_desc_back.78851b71.png` | 幻灯片 | 正常 | 1 |
| img | `assets/images/slide_product_desc_back.78851b71.png` | 线上展示自然流畅 | 正常 | 1 |
| img | `assets/images/slide_product_desc_back.78851b71.png` | 设计风格统一高效 | 正常 | 1 |
| img | `assets/images/wechat-accout.png` | 石墨文档微信公众号二维码 | 正常 | 1 |

## `solution-ecommerce.html`

- HTML Title：电商数据协同流转解决方案 - 石墨文档企业服务
- 页面主题：一站式企业协作解决方案
- 备注：无特殊备注
- 主题图片数：9
- 总引用次数：9

| 类型 | 路径 | 标题 | 状态 | 次数 |
| --- | --- | --- | --- | ---: |
| background-css | `https://as.smgv.cn/static/lizard-service-homepage/assets/solution_banner.8d34ad26.jpg` | mf-hero ??? | 正常 | 1 |
| img | `assets/images/solution/solution-pic-3-1.png` | 电商数据协同流转解决方案 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-3-2.png` | 电商企业面临的业务挑战 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-3-3.png` | 电商企业挑战补充说明 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-3-4.png` | 多人实时编辑，高效数据汇总 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-3-5.png` | 便捷且细致的部门协同，并确保信息安全 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-3-6.png` | 云端数据共享，方便企业全员随时快速访问 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-3-7.png` | 云端管理轻应用，满足项目、流程、进度等管理需求 | 正常 | 1 |
| img | `assets/images/wechat-accout.png` | 石墨文档微信公众号二维码 | 正常 | 1 |

## `solution-education.html`

- HTML Title：智慧教育协同文档平台解决方案 - 石墨文档企业服务
- 页面主题：一站式企业协作解决方案
- 备注：无特殊备注
- 主题图片数：9
- 总引用次数：9

| 类型 | 路径 | 标题 | 状态 | 次数 |
| --- | --- | --- | --- | ---: |
| background-css | `https://as.smgv.cn/static/lizard-service-homepage/assets/solution_banner.8d34ad26.jpg` | mf-hero ??? | 正常 | 1 |
| img | `assets/images/solution/solution-pic-4-1.png` | 智慧教育协同文档平台解决方案 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-4-2.png` | 教育组织面临的业务挑战 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-4-3.png` | 教育组织挑战补充说明 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-4-4.png` | 实现信息实时汇总，共享表格打通所有数据 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-4-5.png` | 学校通知实时送达，统一平台实现家校协作 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-4-6.png` | 基于标准 API，轻松实现文档平台接入内部系统 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-4-7.png` | 实现企业教研知识库一体化，自主、安全且独立 | 正常 | 1 |
| img | `assets/images/wechat-accout.png` | 石墨文档微信公众号二维码 | 正常 | 1 |

## `solution-finance.html`

- HTML Title：财务协同管理解决方案 - 石墨文档企业服务
- 页面主题：一站式企业协作解决方案
- 备注：无特殊备注
- 主题图片数：9
- 总引用次数：9

| 类型 | 路径 | 标题 | 状态 | 次数 |
| --- | --- | --- | --- | ---: |
| background-css | `https://as.smgv.cn/static/lizard-service-homepage/assets/solution_banner.8d34ad26.jpg` | mf-hero ??? | 正常 | 1 |
| img | `assets/images/solution/solution-pic-9-1.png` | 财务协同管理解决方案 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-9-2.png` | 财务管理面临的挑战 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-9-3.png` | 财务管理挑战补充说明 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-9-4.png` | 预算管理，部门预算实时监督把控 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-9-5.png` | 财务核算，协同作业安全快捷 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-9-6.png` | 资产管理，搭建资产动态管理系统 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-9-7.png` | 财务数据沉淀，标准化、规范化整理存档 | 正常 | 1 |
| img | `assets/images/wechat-accout.png` | 石墨文档微信公众号二维码 | 正常 | 1 |

## `solution-hr.html`

- HTML Title：人力资源协同解决方案 - 石墨文档企业服务
- 页面主题：一站式企业协作解决方案
- 备注：无特殊备注
- 主题图片数：9
- 总引用次数：9

| 类型 | 路径 | 标题 | 状态 | 次数 |
| --- | --- | --- | --- | ---: |
| background-css | `https://as.smgv.cn/static/lizard-service-homepage/assets/solution_banner.8d34ad26.jpg` | mf-hero ??? | 正常 | 1 |
| img | `assets/images/solution/solution-pic-8-1.png` | 人力资源协同解决方案 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-8-2.png` | 人力资源面临的业务挑战 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-8-3.png` | 人力资源挑战补充说明 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-8-4.png` | 全局招聘看板，掌控实时进度 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-8-5.png` | 入职资料一键打包，随时更新 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-8-6.png` | 企业员工信息数据库，员工信息实时查找与多维汇总 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-8-7.png` | 灵活可定制的薪酬管理模型，更易于校验、分析 | 正常 | 1 |
| img | `assets/images/wechat-accout.png` | 石墨文档微信公众号二维码 | 正常 | 1 |

## `solution-management.html`

- HTML Title：公司全员协同管理解决方案 - 石墨文档企业服务
- 页面主题：一站式企业协作解决方案
- 备注：无特殊备注
- 主题图片数：9
- 总引用次数：9

| 类型 | 路径 | 标题 | 状态 | 次数 |
| --- | --- | --- | --- | ---: |
| background-css | `https://as.smgv.cn/static/lizard-service-homepage/assets/solution_banner.8d34ad26.jpg` | mf-hero ??? | 正常 | 1 |
| img | `assets/images/solution/solution-pic-5-1.png` | 公司全员协同管理解决方案 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-5-2.png` | 公司管理面临的挑战 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-5-3.png` | 公司管理挑战补充说明 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-5-4.png` | 团队会议，制定和回顾工作任务 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-5-5.png` | 项目推进，实时跟踪项目进展 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-5-6.png` | 移动办公，任何时间地点保持同步 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-5-7.png` | 高效、扁平协作，团队信息同频 | 正常 | 1 |
| img | `assets/images/wechat-accout.png` | 石墨文档微信公众号二维码 | 正常 | 1 |

## `solution-manufacturing.html`

- HTML Title：智能制造协同文档平台解决方案 - 石墨文档企业服务
- 页面主题：一站式企业协作解决方案
- 备注：无特殊备注
- 主题图片数：9
- 总引用次数：9

| 类型 | 路径 | 标题 | 状态 | 次数 |
| --- | --- | --- | --- | ---: |
| background-css | `https://as.smgv.cn/static/lizard-service-homepage/assets/solution_banner.8d34ad26.jpg` | mf-hero ??? | 正常 | 1 |
| img | `assets/images/solution/solution-pic-2-1.png` | 智能制造协同文档平台解决方案 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-2-2.png` | 制造业企业面临的业务挑战 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-2-3.png` | 制造业企业挑战补充说明 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-2-4.png` | 无纸化办公，数据汇总高效准确 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-2-5.png` | 跨部门实时协作，一表打通 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-2-6.png` | BOM 表及时更新，精细化维护 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-2-7.png` | 企业知识统一归档，实践经验自由流动 | 正常 | 1 |
| img | `assets/images/wechat-accout.png` | 石墨文档微信公众号二维码 | 正常 | 1 |

## `solution-marketing.html`

- HTML Title：多方协同市场活动管理解决方案 - 石墨文档企业服务
- 页面主题：一站式企业协作解决方案
- 备注：无特殊备注
- 主题图片数：9
- 总引用次数：9

| 类型 | 路径 | 标题 | 状态 | 次数 |
| --- | --- | --- | --- | ---: |
| background-css | `https://as.smgv.cn/static/lizard-service-homepage/assets/solution_banner.8d34ad26.jpg` | mf-hero ??? | 正常 | 1 |
| img | `assets/images/solution/solution-pic-7-1.png` | 多方协同市场活动管理解决方案 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-7-2.png` | 市场活动面临的业务挑战 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-7-3.png` | 市场活动挑战补充说明 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-7-4.png` | 统一活动看板，实现企业全年活动统计 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-7-5.png` | 甲乙方进度实时协同，项目管理化思维统筹兼顾 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-7-6.png` | 任务排期实时更新，执行进度精确到日 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-7-7.png` | 合同管理有序汇总，款项收付准确及时 | 正常 | 1 |
| img | `assets/images/wechat-accout.png` | 石墨文档微信公众号二维码 | 正常 | 1 |

## `solution-product-rd.html`

- HTML Title：产研协同一体化解决方案 - 石墨文档企业服务
- 页面主题：一站式企业协作解决方案
- 备注：无特殊备注
- 主题图片数：9
- 总引用次数：9

| 类型 | 路径 | 标题 | 状态 | 次数 |
| --- | --- | --- | --- | ---: |
| background-css | `https://as.smgv.cn/static/lizard-service-homepage/assets/solution_banner.8d34ad26.jpg` | mf-hero ??? | 正常 | 1 |
| img | `assets/images/solution/solution-pic-6-1.png` | 产研协同一体化解决方案 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-6-2.png` | 产品研发面临的业务挑战 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-6-3.png` | 产品研发挑战补充说明 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-6-4.png` | 需求收集，让产品和研发直面用户反馈 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-6-5.png` | 确定方案，撰写产品需求文档 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-6-6.png` | 项目进度，集中管理 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-6-7.png` | 测试及反馈，收集处理来自各方的问题反馈 | 正常 | 1 |
| img | `assets/images/wechat-accout.png` | 石墨文档微信公众号二维码 | 正常 | 1 |

## `solution-retail.html`

- HTML Title：新零售解决方案 - 石墨文档企业服务
- 页面主题：一站式企业协作解决方案
- 备注：页面内容与 solution.html 一致，当前为零售方案正式页
- 主题图片数：9
- 总引用次数：9

| 类型 | 路径 | 标题 | 状态 | 次数 |
| --- | --- | --- | --- | ---: |
| background-css | `https://as.smgv.cn/static/lizard-service-homepage/assets/solution_banner.8d34ad26.jpg` | mf-hero ??? | 正常 | 1 |
| img | `assets/images/solution/solution-pic-1-1.png` | 新零售连锁门店协同管理解决方案 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-1-2.png` | 零售连锁企业面临的挑战 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-1-3.png` | 零售连锁企业挑战补充说明 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-1-4.png` | 跨地域、跨部门多人协同，业务数据实时管理 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-1-5.png` | 商品、采购、供应商多方协同，助力门店的销售管理 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-1-6.png` | 企业全局管理看板，活动进展实时同步 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-1-7.png` | 企业知识统一归档，实践经验自由流动 | 正常 | 1 |
| img | `assets/images/wechat-accout.png` | 石墨文档微信公众号二维码 | 正常 | 1 |

## `solution-sales.html`

- HTML Title：销售全流程协同管理解决方案 - 石墨文档企业服务
- 页面主题：一站式企业协作解决方案
- 备注：无特殊备注
- 主题图片数：9
- 总引用次数：9

| 类型 | 路径 | 标题 | 状态 | 次数 |
| --- | --- | --- | --- | ---: |
| background-css | `https://as.smgv.cn/static/lizard-service-homepage/assets/solution_banner.8d34ad26.jpg` | mf-hero ??? | 正常 | 1 |
| img | `assets/images/solution/solution-pic-10-1.png` | 销售全流程协同管理解决方案 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-10-2.png` | 公司销售管理面临的挑战 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-10-3.png` | 公司销售管理挑战补充说明 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-10-4.png` | 销售预测，打造强有力决策执行体系 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-10-5.png` | 远程演示，有效提升客户满意度 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-10-6.png` | 客户跟踪，核心客户状态实时跟进 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-10-7.png` | 销售培训，团队知识规范化管理 | 正常 | 1 |
| img | `assets/images/wechat-accout.png` | 石墨文档微信公众号二维码 | 正常 | 1 |

## `solution.html`

- HTML Title：新零售解决方案 - 石墨文档企业服务
- 页面主题：一站式企业协作解决方案
- 备注：页面内容与 solution-retail.html 一致，当前为零售方案别名页
- 主题图片数：9
- 总引用次数：9

| 类型 | 路径 | 标题 | 状态 | 次数 |
| --- | --- | --- | --- | ---: |
| background-css | `https://as.smgv.cn/static/lizard-service-homepage/assets/solution_banner.8d34ad26.jpg` | mf-hero ??? | 正常 | 1 |
| img | `assets/images/solution/solution-pic-1-1.png` | 新零售连锁门店协同管理解决方案 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-1-2.png` | 零售连锁企业面临的挑战 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-1-3.png` | 零售连锁企业挑战补充说明 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-1-4.png` | 跨地域、跨部门多人协同，业务数据实时管理 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-1-5.png` | 商品、采购、供应商多方协同，助力门店的销售管理 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-1-6.png` | 企业全局管理看板，活动进展实时同步 | 正常 | 1 |
| img | `assets/images/solution/solution-pic-1-7.png` | 企业知识统一归档，实践经验自由流动 | 正常 | 1 |
| img | `assets/images/wechat-accout.png` | 石墨文档微信公众号二维码 | 正常 | 1 |

## `solutions.html`

- HTML Title：一站式企业协作解决方案 - 石墨文档企业服务
- 页面主题：一站式企业协作解决方案
- 备注：无特殊备注
- 主题图片数：2
- 总引用次数：2

| 类型 | 路径 | 标题 | 状态 | 次数 |
| --- | --- | --- | --- | ---: |
| background-css | `https://as.smgv.cn/static/lizard-service-homepage/assets/solution_banner.8d34ad26.jpg` | mf-hero ??? | 正常 | 1 |
| img | `assets/images/wechat-accout.png` | 石墨文档微信公众号二维码 | 正常 | 1 |

## `space.html`

- HTML Title：协作空间 - 石墨文档企业服务
- 页面主题：协作空间
- 备注：无特殊备注
- 主题图片数：1
- 总引用次数：1

| 类型 | 路径 | 标题 | 状态 | 次数 |
| --- | --- | --- | --- | ---: |
| img | `assets/images/wechat-accout.png` | 石墨文档微信公众号二维码 | 正常 | 1 |

## `table.html`

- HTML Title：应用表格 - 石墨文档企业服务
- 页面主题：应用表格
- 备注：同一张主图在多个模块复用
- 主题图片数：9
- 总引用次数：9

| 类型 | 路径 | 标题 | 状态 | 次数 |
| --- | --- | --- | --- | ---: |
| img | `assets/images/table_back.4655d070.png` | 丰富字段构建数据 | 正常 | 1 |
| img | `assets/images/table_back.4655d070.png` | 仪表盘与数据可视化 | 正常 | 1 |
| img | `assets/images/table_back.4655d070.png` | 多维视图自由切换 | 正常 | 1 |
| img | `assets/images/table_back.4655d070.png` | 应用表格 | 正常 | 1 |
| img | `assets/images/table_back.4655d070.png` | 精细化行列权限管控 | 正常 | 1 |
| img | `assets/images/table_back.4655d070.png` | 跨组协作高效收集 | 正常 | 1 |
| img | `assets/images/table_back.4655d070.png` | 跨表关联与数据引用 | 正常 | 1 |
| img | `assets/images/table_back.4655d070.png` | 项目进度全景追踪 | 正常 | 1 |
| img | `assets/images/wechat-accout.png` | 石墨文档微信公众号二维码 | 正常 | 1 |

## `webofficesdk-integration.html`

- HTML Title：石墨文档中台 面向集成 - 石墨文档企业服务
- 页面主题：石墨文档中台 面向集成
- 备注：无特殊备注
- 主题图片数：2
- 总引用次数：2

| 类型 | 路径 | 标题 | 状态 | 次数 |
| --- | --- | --- | --- | ---: |
| img | `assets/images/banner/sdk-banner.png` | 石墨文档中台面向集成展示图 | 正常 | 1 |
| img | `assets/images/wechat-accout.png` | 石墨文档微信公众号二维码 | 正常 | 1 |

## `welcome.html`

- HTML Title：石墨文档企业服务 - 首页
- 页面主题：AI 时代的文档基座
- 备注：包含 11 张重复使用图片；页面内容与 index.html 一致
- 主题图片数：59
- 总引用次数：114

| 类型 | 路径 | 标题 | 状态 | 次数 |
| --- | --- | --- | --- | ---: |
| img | `assets/images/customerlogo/image1.png` | 客户 Logo 1 | 推断 | 4 |
| img | `assets/images/customerlogo/image10.png` | 客户 Logo 10 | 推断 | 2 |
| img | `assets/images/customerlogo/image11.png` | 客户 Logo 11 | 推断 | 2 |
| img | `assets/images/customerlogo/image12.png` | 客户 Logo 12 | 推断 | 2 |
| img | `assets/images/customerlogo/image13.png` | 客户 Logo 13 | 推断 | 2 |
| img | `assets/images/customerlogo/image14.png` | 客户 Logo 14 | 推断 | 2 |
| img | `assets/images/customerlogo/image15.png` | 客户 Logo 15 | 推断 | 2 |
| img | `assets/images/customerlogo/image16.png` | 客户 Logo 16 | 推断 | 2 |
| img | `assets/images/customerlogo/image17.png` | 客户 Logo 17 | 推断 | 2 |
| img | `assets/images/customerlogo/image18.png` | 客户 Logo 18 | 推断 | 2 |
| img | `assets/images/customerlogo/image19.png` | 客户 Logo 19 | 推断 | 2 |
| img | `assets/images/customerlogo/image2.png` | 客户 Logo 2 | 推断 | 4 |
| img | `assets/images/customerlogo/image20.png` | 客户 Logo 20 | 推断 | 2 |
| img | `assets/images/customerlogo/image21.png` | 客户 Logo 21 | 推断 | 2 |
| img | `assets/images/customerlogo/image22.png` | 客户 Logo 22 | 推断 | 2 |
| img | `assets/images/customerlogo/image23.png` | 客户 Logo 23 | 推断 | 2 |
| img | `assets/images/customerlogo/image24.png` | 客户 Logo 24 | 推断 | 2 |
| img | `assets/images/customerlogo/image25.png` | 客户 Logo 25 | 推断 | 2 |
| img | `assets/images/customerlogo/image26.png` | 客户 Logo 26 | 推断 | 2 |
| img | `assets/images/customerlogo/image27.png` | 客户 Logo 27 | 推断 | 2 |
| img | `assets/images/customerlogo/image28.png` | 客户 Logo 28 | 推断 | 2 |
| img | `assets/images/customerlogo/image29.png` | 客户 Logo 29 | 推断 | 2 |
| img | `assets/images/customerlogo/image3.png` | 客户 Logo 3 | 推断 | 4 |
| img | `assets/images/customerlogo/image30.png` | 客户 Logo 30 | 推断 | 2 |
| img | `assets/images/customerlogo/image31.png` | 客户 Logo 31 | 推断 | 2 |
| img | `assets/images/customerlogo/image32.png` | 客户 Logo 32 | 推断 | 2 |
| img | `assets/images/customerlogo/image33.png` | 客户 Logo 33 | 推断 | 2 |
| img | `assets/images/customerlogo/image34.png` | 客户 Logo 34 | 推断 | 2 |
| img | `assets/images/customerlogo/image35.png` | 客户 Logo 35 | 推断 | 2 |
| img | `assets/images/customerlogo/image36.png` | 客户 Logo 36 | 推断 | 2 |
| img | `assets/images/customerlogo/image37.png` | 客户 Logo 37 | 推断 | 2 |
| img | `assets/images/customerlogo/image38.png` | 客户 Logo 38 | 推断 | 2 |
| img | `assets/images/customerlogo/image39.png` | 客户 Logo 39 | 推断 | 2 |
| img | `assets/images/customerlogo/image4.png` | 客户 Logo 4 | 推断 | 4 |
| img | `assets/images/customerlogo/image40.png` | 客户 Logo 40 | 推断 | 2 |
| img | `assets/images/customerlogo/image41.png` | 客户 Logo 41 | 推断 | 2 |
| img | `assets/images/customerlogo/image42.png` | 客户 Logo 42 | 推断 | 2 |
| img | `assets/images/customerlogo/image43.png` | 客户 Logo 43 | 推断 | 2 |
| img | `assets/images/customerlogo/image44.png` | 客户 Logo 44 | 推断 | 2 |
| img | `assets/images/customerlogo/image45.png` | 客户 Logo 45 | 推断 | 2 |
| img | `assets/images/customerlogo/image5.png` | 客户 Logo 5 | 推断 | 4 |
| img | `assets/images/customerlogo/image6.png` | 客户 Logo 6 | 推断 | 2 |
| img | `assets/images/customerlogo/image7.png` | 客户 Logo 7 | 推断 | 2 |
| img | `assets/images/customerlogo/image8.png` | 客户 Logo 8 | 推断 | 2 |
| img | `assets/images/customerlogo/image9.png` | 客户 Logo 9 | 推断 | 2 |
| img | `assets/images/doc.d12d293d.png` | 文档产品主图 | 推断 | 1 |
| img | `assets/images/doc_product_desc_back.4f15795f.png` | 文档产品截图 | 正常 | 1 |
| img | `assets/images/docx_icon.2b3372a8.png` | 产品功能图标 docx_icon | 推断 | 1 |
| img | `assets/images/form.d91584ab.png` | 表单产品截图 | 正常 | 1 |
| img | `assets/images/form_icon.684f8f7b.png` | 产品功能图标 form_icon | 推断 | 1 |
| img | `assets/images/homepage_title_banner_background.43282104.png` | 首页主视觉 | 正常 | 1 |
| img | `assets/images/presentation.fbeeebed.png` | 幻灯片产品主图 | 推断 | 1 |
| img | `assets/images/sheet.c78ad43b.png` | 表格产品主图 | 推断 | 1 |
| img | `assets/images/sheet_product_desc_back.1791d6f4.png` | 表格产品截图 | 正常 | 1 |
| img | `assets/images/slide_product_desc_back.78851b71.png` | 幻灯片产品截图 | 正常 | 1 |
| img | `assets/images/table_back.4655d070.png` | 应用表格产品截图 | 正常 | 1 |
| img | `assets/images/table_new_icon.daefbbf7.png` | 产品功能图标 table_new_icon | 推断 | 1 |
| img | `assets/images/traditional_back.ccfcc942.png` | 文稿产品截图 | 正常 | 1 |
| img | `assets/images/wechat-accout.png` | 石墨文档微信公众号二维码 | 正常 | 1 |

## `writer.html`

- HTML Title：文稿 - 石墨文档企业服务
- 页面主题：文稿
- 备注：无特殊备注
- 主题图片数：10
- 总引用次数：10

| 类型 | 路径 | 标题 | 状态 | 次数 |
| --- | --- | --- | --- | ---: |
| img | `assets/images/wechat-accout.png` | 石墨文档微信公众号二维码 | 正常 | 1 |
| img | `assets/images/writer/traditional_back.webp` | 文稿 | 正常 | 1 |
| img | `assets/images/writer/writer_feature1.webp` | 高度兼容 精准还原 | 正常 | 1 |
| img | `assets/images/writer/writer_feature2.webp` | 多种布局 自由排版 | 正常 | 1 |
| img | `assets/images/writer/writer_feature3.webp` | 修订模式 辅助审阅 | 正常 | 1 |
| img | `assets/images/writer/writer_feature4.webp` | 多重水印 强化保护 | 正常 | 1 |
| img | `assets/images/writer/writer_feature_at.webp` | @功能 | 正常 | 1 |
| img | `assets/images/writer/writer_feature_collaboration.webp` | 多人多端毫秒级同步 | 正常 | 1 |
| img | `assets/images/writer/writer_feature_comment.webp` | 全局讨论 & 划词评论 | 正常 | 1 |
| img | `assets/images/writer/writer_feature_history.webp` | 查看编辑历史 | 正常 | 1 |

