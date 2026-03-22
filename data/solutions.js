const SHARED_DEMO_LINK = "/welcome.html#demo";

const SOLUTION_MENU_GROUPS = [
  {
    title: "行业解决方案",
    items: [
      { label: "新零售", slug: "retail" },
      { label: "制造业", slug: "manufacturing" },
      { label: "电商", slug: "ecommerce" },
      { label: "教育", slug: "education" }
    ]
  },
  {
    title: "场景解决方案",
    items: [
      { label: "公司管理", slug: "management" },
      { label: "产品研发", slug: "product-rd" },
      { label: "市场营销", slug: "marketing" },
      { label: "人力资源", slug: "hr" },
      { label: "财务管理", slug: "finance" },
      { label: "销售管理", slug: "sales" }
    ]
  }
];

const SOLUTION_PAGES = [
  {
    slug: "retail",
    output: "solution-retail.html",
    navLabel: "新零售",
    summary: "面向连锁零售企业，打通门店运营、营销协同、知识培训和经营看板管理。",
    routeTitle: "新零售解决方案 - 石墨文档企业服务",
    routeDescription:
      "石墨文档企业服务为新零售连锁企业提供覆盖门店协同、销售管理、经营看板与知识沉淀的一体化解决方案。",
    overview: {
      title: "新零售连锁门店协同管理解决方案",
      description:
        "石墨文档企业服务提供的「新零售连锁门店协同管理解决方案」，为连锁企业打通多链路数据闭环，实现门店、营销、人才培训等一体化管理。",
      image: "/assets/images/solution/solution-pic-1-1.png",
      imageAlt: "新零售连锁门店协同管理解决方案"
    },
    challenge: {
      title: "零售连锁企业面临的挑战",
      gallery: [
        {
          src: "/assets/images/solution/solution-pic-1-2.png",
          alt: "零售连锁企业面临的挑战"
        },
        {
          src: "/assets/images/solution/solution-pic-1-3.png",
          alt: "零售连锁企业挑战补充说明"
        }
      ]
    },
    caseCards: [
      {
        title: "跨地域、跨部门多人协同，业务数据实时管理",
        image: "/assets/images/solution/solution-pic-1-4.png",
        imageAlt: "跨地域、跨部门多人协同，业务数据实时管理",
        points: [
          "扫码一键高效搜集数据，实现全员无纸化办公",
          "自动生成数据看板，周/月报表",
          "摆脱繁琐手工帐，实现精细电脑账"
        ],
        actions: [
          { label: "免费试用", href: SHARED_DEMO_LINK, primary: true },
          { label: "预约演示", href: SHARED_DEMO_LINK }
        ]
      },
      {
        title: "商品、采购、供应商多方协同，助力门店的销售管理",
        image: "/assets/images/solution/solution-pic-1-5.png",
        imageAlt: "商品、采购、供应商多方协同，助力门店的销售管理",
        reverse: true,
        points: [
          "共享表格清晰记录多方合作细节",
          "自动化模板助力实时优化 SKU 管理",
          "支持不同角色查看权限，敏感数据安全可控"
        ],
        actions: [
          { label: "免费试用", href: SHARED_DEMO_LINK, primary: true },
          { label: "预约演示", href: SHARED_DEMO_LINK }
        ]
      },
      {
        title: "企业全局管理看板，活动进展实时同步",
        image: "/assets/images/solution/solution-pic-1-6.png",
        imageAlt: "企业全局管理看板，活动进展实时同步",
        points: [
          "全局管理看板，管理层及时查看真实生产经营情况",
          "企业任务看板，共管业务一体化",
          "营销活动看板，查看具体活动状态和进展"
        ],
        actions: [
          { label: "免费试用", href: SHARED_DEMO_LINK, primary: true },
          { label: "预约演示", href: SHARED_DEMO_LINK }
        ]
      },
      {
        title: "企业知识统一归档，实践经验自由流动",
        image: "/assets/images/solution/solution-pic-1-7.png",
        imageAlt: "企业知识统一归档，实践经验自由流动",
        reverse: true,
        points: [
          "集中存储的云盘空间，方便存放分享企业资料",
          "完备的权限管理机制，易于管理知识传播范围",
          "云端编写，自动归档，知识分享门槛大大降低"
        ],
        actions: [
          { label: "免费试用", href: SHARED_DEMO_LINK, primary: true },
          { label: "预约演示", href: SHARED_DEMO_LINK }
        ]
      }
    ]
  },
  {
    slug: "manufacturing",
    output: "solution-manufacturing.html",
    navLabel: "制造业",
    summary: "深度切入制造业实际业务场景，助力企业提升数据汇总效率，传承企业实践经验。",
    routeTitle: "智能制造协同文档平台解决方案 - 石墨文档企业服务",
    routeDescription:
      "石墨文档企业服务提供智能制造协同文档平台解决方案，覆盖无纸化办公、跨部门协作、BOM 维护与知识沉淀。",
    overview: {
      title: "智能制造协同文档平台解决方案",
      description:
        "石墨文档企业服务提供的「智能制造协同文档平台解决方案」，深度切入制造业实际业务场景，助力企业提升数据汇总效率，传承企业实践经验。",
      image: "/assets/images/solution/solution-pic-2-1.png",
      imageAlt: "智能制造协同文档平台解决方案"
    },
    challenge: {
      title: "制造业企业面临的业务挑战",
      gallery: [
        {
          src: "/assets/images/solution/solution-pic-2-2.png",
          alt: "制造业企业面临的业务挑战"
        },
        {
          src: "/assets/images/solution/solution-pic-2-3.png",
          alt: "制造业企业挑战补充说明"
        }
      ]
    },
    caseCards: [
      {
        title: "无纸化办公，数据汇总高效准确",
        image: "/assets/images/solution/solution-pic-2-4.png",
        imageAlt: "无纸化办公，数据汇总高效准确",
        points: [
          "扫码一键高效搜集数据，助力全员无纸化办公",
          "摆脱繁琐手工帐，实现精细电脑账",
          "数据实时看板，方便管理层快速决策"
        ],
        actions: [
          { label: "免费试用", href: SHARED_DEMO_LINK, primary: true },
          { label: "预约演示", href: SHARED_DEMO_LINK }
        ]
      },
      {
        title: "跨部门实时协作，一表打通",
        image: "/assets/images/solution/solution-pic-2-5.png",
        imageAlt: "跨部门实时协作，一表打通",
        reverse: true,
        points: [
          "表单表格双链路互通，实现信息自动流转",
          "各部门并行更新表格，方便信息同步",
          "任务实时分配，减少分配、等待任务时间"
        ],
        actions: [
          { label: "免费试用", href: SHARED_DEMO_LINK, primary: true },
          { label: "预约演示", href: SHARED_DEMO_LINK }
        ]
      },
      {
        title: "BOM 表及时更新，精细化维护",
        image: "/assets/images/solution/solution-pic-2-6.png",
        imageAlt: "BOM 表及时更新，精细化维护",
        points: [
          "云端表格实时协作，无需反复传输同一 BOM 表",
          "审批人在工作群中一键签字，提升审批效率",
          "表格实时更新，查看最新 BOM 表"
        ],
        actions: [
          { label: "免费试用", href: SHARED_DEMO_LINK, primary: true },
          { label: "预约演示", href: SHARED_DEMO_LINK }
        ]
      },
      {
        title: "企业知识统一归档，实践经验自由流动",
        image: "/assets/images/solution/solution-pic-2-7.png",
        imageAlt: "企业知识统一归档，实践经验自由流动",
        reverse: true,
        points: [
          "集中存储的云盘空间，方便存放分享企业资料",
          "完备的权限管理机制，易于管理知识传播范围",
          "云端编写，自动归档，知识分享门槛大大降低"
        ],
        actions: [
          { label: "免费试用", href: SHARED_DEMO_LINK, primary: true },
          { label: "预约演示", href: SHARED_DEMO_LINK }
        ]
      }
    ]
  },
  {
    slug: "ecommerce",
    output: "solution-ecommerce.html",
    navLabel: "电商",
    summary:
      "从选品、采购、运营到发货、客服与设计等多部门数据联动与高频协同，助力企业协同管理。",
    routeTitle: "电商数据协同流转解决方案 - 石墨文档企业服务",
    routeDescription:
      "石墨文档企业服务为电商企业提供多人实时编辑、部门协同、云端数据共享与轻应用管理的一体化协同方案。",
    overview: {
      title: "电商数据协同流转解决方案",
      description:
        "「电商数据协同流转解决方案」，从电商选品，采购，运营，发货，客服，设计等多部门的数据联动，高频协同角度出发，助力企业协同管理。",
      image: "/assets/images/solution/solution-pic-3-1.png",
      imageAlt: "电商数据协同流转解决方案"
    },
    challenge: {
      title: "电商企业面临的业务挑战",
      gallery: [
        {
          src: "/assets/images/solution/solution-pic-3-2.png",
          alt: "电商企业面临的业务挑战"
        },
        {
          src: "/assets/images/solution/solution-pic-3-3.png",
          alt: "电商企业挑战补充说明"
        }
      ]
    },
    caseCards: [
      {
        title: "多人实时编辑，高效数据汇总",
        image: "/assets/images/solution/solution-pic-3-4.png",
        imageAlt: "多人实时编辑，高效数据汇总",
        points: [
          "日报数据自动分析",
          "多团队信息一键汇总",
          "整合全局店铺财报，自动数据复盘"
        ],
        actions: [
          { label: "免费试用", href: SHARED_DEMO_LINK, primary: true },
          { label: "预约演示", href: SHARED_DEMO_LINK }
        ]
      },
      {
        title: "便捷且细致的部门协同，并确保信息安全",
        image: "/assets/images/solution/solution-pic-3-5.png",
        imageAlt: "便捷且细致的部门协同，并确保信息安全",
        reverse: true,
        points: [
          "一表同步多部门工作，售后管理实时高效",
          "供应链表格实时更新",
          "准确制定采购及仓储计划"
        ],
        actions: [
          { label: "免费试用", href: SHARED_DEMO_LINK, primary: true },
          { label: "预约演示", href: SHARED_DEMO_LINK }
        ]
      },
      {
        title: "云端数据共享，方便企业全员随时快速访问",
        image: "/assets/images/solution/solution-pic-3-6.png",
        imageAlt: "云端数据共享，方便企业全员随时快速访问",
        points: [
          "出入库数据实时更新",
          "每个月自动关联查看",
          "实时登记发货明细，并便于趋势图分析"
        ],
        actions: [
          { label: "免费试用", href: SHARED_DEMO_LINK, primary: true },
          { label: "预约演示", href: SHARED_DEMO_LINK }
        ]
      },
      {
        title: "云端管理轻应用，满足项目、流程、进度等管理需求",
        image: "/assets/images/solution/solution-pic-3-7.png",
        imageAlt: "云端管理轻应用，满足项目、流程、进度等管理需求",
        reverse: true,
        points: [
          "打通各部门间信息壁垒，推进事项高效落地",
          "管理层实时查看多项任务进度",
          "集中项目管理"
        ],
        actions: [
          { label: "免费试用", href: SHARED_DEMO_LINK, primary: true },
          { label: "预约演示", href: SHARED_DEMO_LINK }
        ]
      }
    ]
  },
  {
    slug: "education",
    output: "solution-education.html",
    navLabel: "教育",
    summary:
      "深度整合教育业务场景，为教育组织提供在线开放的协同文档平台，助力提升教学质量。",
    routeTitle: "智慧教育协同文档平台解决方案 - 石墨文档企业服务",
    routeDescription:
      "石墨文档企业服务为教育组织提供信息汇总、家校协作、API 接入与教研知识库等一体化协同文档能力。",
    overview: {
      title: "智慧教育协同文档平台解决方案",
      description:
        "石墨文档企业服务提供的「智慧教育协同文档平台解决方案」，深度整合教育业务场景，为教育组织提供在线开放的协同文档平台，助力提升教学质量。",
      image: "/assets/images/solution/solution-pic-4-1.png",
      imageAlt: "智慧教育协同文档平台解决方案"
    },
    challenge: {
      title: "教育组织面临的业务挑战",
      gallery: [
        {
          src: "/assets/images/solution/solution-pic-4-2.png",
          alt: "教育组织面临的业务挑战"
        },
        {
          src: "/assets/images/solution/solution-pic-4-3.png",
          alt: "教育组织挑战补充说明"
        }
      ]
    },
    caseCards: [
      {
        title: "实现信息实时汇总，共享表格打通所有数据",
        image: "/assets/images/solution/solution-pic-4-4.png",
        imageAlt: "实现信息实时汇总，共享表格打通所有数据",
        points: [
          "各班级成绩，多教师实时填写，各年级自动汇总",
          "市场专员记录招生活动线索，自动同步销售部门",
          "自动生成 ROI、数据看板，方便实时分析业绩情况"
        ],
        actions: [
          { label: "免费试用", href: SHARED_DEMO_LINK, primary: true },
          { label: "预约演示", href: SHARED_DEMO_LINK }
        ]
      },
      {
        title: "学校通知实时送达，统一平台实现家校协作",
        image: "/assets/images/solution/solution-pic-4-5.png",
        imageAlt: "学校通知实时送达，统一平台实现家校协作",
        reverse: true,
        points: [
          "活动文档，可一键分享给家长",
          "家长无需注册，即可互动留言",
          "活动过程永久保存，方便社交平台分享"
        ],
        actions: [
          { label: "免费试用", href: SHARED_DEMO_LINK, primary: true },
          { label: "预约演示", href: SHARED_DEMO_LINK }
        ]
      },
      {
        title: "基于标准 API，轻松实现文档平台接入内部系统",
        image: "/assets/images/solution/solution-pic-4-6.png",
        imageAlt: "基于标准 API，轻松实现文档平台接入内部系统",
        points: [
          "高灵活性，轻松兼容企业内部系统",
          "支持后续人数扩展，满足海量课件、文档协同需求",
          "数据完全存储在企业独立服务器，杜绝数据泄漏和丢失"
        ],
        actions: [
          { label: "免费试用", href: SHARED_DEMO_LINK, primary: true },
          { label: "预约演示", href: SHARED_DEMO_LINK }
        ]
      },
      {
        title: "实现企业教研知识库一体化，自主、安全且独立",
        image: "/assets/images/solution/solution-pic-4-7.png",
        imageAlt: "实现企业教研知识库一体化，自主、安全且独立",
        reverse: true,
        points: [
          "课件文档有序存放，随时可查找",
          "云端编写，自动存档，知识分享门槛大大降低",
          "灵活设置人员权限，确保课件安全传播"
        ],
        actions: [
          { label: "免费试用", href: SHARED_DEMO_LINK, primary: true },
          { label: "预约演示", href: SHARED_DEMO_LINK }
        ]
      }
    ]
  },
  {
    slug: "management",
    output: "solution-management.html",
    navLabel: "公司管理",
    summary:
      "高效、扁平的协作管理工具，帮助团队保持信息同频，让工作有条不紊更高效。",
    routeTitle: "公司全员协同管理解决方案 - 石墨文档企业服务",
    routeDescription:
      "石墨文档企业服务覆盖会议任务、项目推进与移动办公，帮助企业实现分工明确、进度透明与多端同步。",
    overview: {
      title: "公司全员协同管理解决方案",
      description:
        "石墨的公司全员协同管理解决方案为企业提供了一个高效、扁平的协作管理工具，能够让团队保持高度信息同频，让工作有条不紊更高效。",
      image: "/assets/images/solution/solution-pic-5-1.png",
      imageAlt: "公司全员协同管理解决方案"
    },
    challenge: {
      title: "公司管理面临的挑战",
      gallery: [
        {
          src: "/assets/images/solution/solution-pic-5-2.png",
          alt: "公司管理面临的挑战"
        },
        {
          src: "/assets/images/solution/solution-pic-5-3.png",
          alt: "公司管理挑战补充说明"
        }
      ]
    },
    caseCards: [
      {
        title: "团队会议，制定和回顾工作任务",
        image: "/assets/images/solution/solution-pic-5-4.png",
        imageAlt: "团队会议，制定和回顾工作任务",
        points: [
          "在会议文档中梳理目标和工作任务，团队保持信息同步，执行起来能够相互协同支持",
          "@ 提及需要支持的同事，快速完成任务分工和信息传达",
          "责任到人方便后续结果跟踪"
        ],
        actions: [
          { label: "免费试用", href: SHARED_DEMO_LINK, primary: true },
          { label: "预约演示", href: SHARED_DEMO_LINK }
        ]
      },
      {
        title: "项目推进，实时跟踪项目进展",
        image: "/assets/images/solution/solution-pic-5-5.png",
        imageAlt: "项目推进，实时跟踪项目进展",
        reverse: true,
        points: [
          "创建实时更新的项目进度表，管理者、项目成员可以随时随地查看、更新",
          "信息透明共享，项目成员了解工作全局和具体任务",
          "工作更明确更有价值感"
        ],
        actions: [
          { label: "免费试用", href: SHARED_DEMO_LINK, primary: true },
          { label: "预约演示", href: SHARED_DEMO_LINK }
        ]
      },
      {
        title: "移动办公，任何时间地点保持同步",
        image: "/assets/images/solution/solution-pic-5-6.png",
        imageAlt: "移动办公，任何时间地点保持同步",
        points: [
          "石墨支持多端同步共享，可以随时查看、编辑、共享和讨论工作文档",
          "无论出差，还是上下班坐地铁，不管身在何处都能够与团队保持密切沟通",
          "让团队保持高度信息同频"
        ],
        actions: [
          { label: "免费试用", href: SHARED_DEMO_LINK, primary: true },
          { label: "预约演示", href: SHARED_DEMO_LINK }
        ]
      },
      {
        title: "高效、扁平协作，团队信息同频",
        image: "/assets/images/solution/solution-pic-5-7.png",
        imageAlt: "高效、扁平协作，团队信息同频",
        reverse: true,
        points: [
          "为企业提供高效、扁平的协作管理工具",
          "让团队保持高度信息同频",
          "让工作有条不紊更高效"
        ],
        actions: [
          { label: "免费试用", href: SHARED_DEMO_LINK, primary: true },
          { label: "预约演示", href: SHARED_DEMO_LINK }
        ]
      }
    ]
  },
  {
    slug: "product-rd",
    output: "solution-product-rd.html",
    navLabel: "产品研发",
    summary: "打通产研侧协同链路，实现高效协同的团队开发工作流。",
    routeTitle: "产研协同一体化解决方案 - 石墨文档企业服务",
    routeDescription:
      "石墨文档企业服务覆盖需求收集、PRD 评审、项目进度与测试反馈，助力产研团队步调一致、快速迭代。",
    overview: {
      title: "产研协同一体化解决方案",
      description:
        "石墨提供的产研协同一体化解决方案，为企业打通产研侧协同链路，实现高效协同的团队开发工作流。",
      image: "/assets/images/solution/solution-pic-6-1.png",
      imageAlt: "产研协同一体化解决方案"
    },
    challenge: {
      title: "产品研发面临的业务挑战",
      gallery: [
        {
          src: "/assets/images/solution/solution-pic-6-2.png",
          alt: "产品研发面临的业务挑战"
        },
        {
          src: "/assets/images/solution/solution-pic-6-3.png",
          alt: "产品研发挑战补充说明"
        }
      ]
    },
    caseCards: [
      {
        title: "需求收集，让产品和研发直面用户反馈",
        image: "/assets/images/solution/solution-pic-6-4.png",
        imageAlt: "需求收集，让产品和研发直面用户反馈",
        points: [
          "运营人员用文档完成用户访谈，并整理、共享给整个产品研发团队",
          "使用@提及 或 highlight 需要重点关注的部分",
          "开发步调一致，减少信息传递损耗"
        ],
        actions: [
          { label: "免费试用", href: SHARED_DEMO_LINK, primary: true },
          { label: "预约演示", href: SHARED_DEMO_LINK }
        ]
      },
      {
        title: "确定方案，撰写产品需求文档",
        image: "/assets/images/solution/solution-pic-6-5.png",
        imageAlt: "确定方案，撰写产品需求文档",
        reverse: true,
        points: [
          "产品经理使用石墨撰写需求文档，设计师快速响应",
          "产品经理、设计、研发进入同一页面评审需求",
          "讨论并迅速达成共识"
        ],
        actions: [
          { label: "免费试用", href: SHARED_DEMO_LINK, primary: true },
          { label: "预约演示", href: SHARED_DEMO_LINK }
        ]
      },
      {
        title: "项目进度，集中管理",
        image: "/assets/images/solution/solution-pic-6-6.png",
        imageAlt: "项目进度，集中管理",
        points: [
          "产品排期表，项目进度一目了然",
          "协同更新项目进度",
          "团队整体把控产品迭代速度"
        ],
        actions: [
          { label: "免费试用", href: SHARED_DEMO_LINK, primary: true },
          { label: "预约演示", href: SHARED_DEMO_LINK }
        ]
      },
      {
        title: "测试及反馈，收集处理来自各方的问题反馈",
        image: "/assets/images/solution/solution-pic-6-7.png",
        imageAlt: "测试及反馈，收集处理来自各方的问题反馈",
        reverse: true,
        points: [
          "Bug 池按类别、优先级等维度整理，并自动转化为下一次迭代",
          "使用@提及分配给对应的研发工程师",
          "使用任务列表标记已解决"
        ],
        actions: [
          { label: "免费试用", href: SHARED_DEMO_LINK, primary: true },
          { label: "预约演示", href: SHARED_DEMO_LINK }
        ]
      }
    ]
  },
  {
    slug: "marketing",
    output: "solution-marketing.html",
    navLabel: "市场营销",
    summary:
      "满足企业多人复杂协作下的活动管理要求，全流程管理项目进度，确保活动顺利执行。",
    routeTitle: "多方协同市场活动管理解决方案 - 石墨文档企业服务",
    routeDescription:
      "石墨文档企业服务提供活动看板、甲乙双方协同、排期甘特与合同款项管理，助力市场活动全流程落地。",
    overview: {
      title: "多方协同市场活动管理解决方案",
      description:
        "石墨提供的多方协同活动管理解决方案，可以满足企业多人复杂协作状态下的活动管理要求，实现全流程管理项目进度，确保最终活动顺利执行。",
      image: "/assets/images/solution/solution-pic-7-1.png",
      imageAlt: "多方协同市场活动管理解决方案"
    },
    challenge: {
      title: "市场活动面临的业务挑战",
      gallery: [
        {
          src: "/assets/images/solution/solution-pic-7-2.png",
          alt: "市场活动面临的业务挑战"
        },
        {
          src: "/assets/images/solution/solution-pic-7-3.png",
          alt: "市场活动挑战补充说明"
        }
      ]
    },
    caseCards: [
      {
        title: "统一活动看板，实现企业全年活动统计",
        image: "/assets/images/solution/solution-pic-7-4.png",
        imageAlt: "统一活动看板，实现企业全年活动统计",
        points: [
          "数据看板，总览企业核心关键数据",
          "项目看板，查看具体项目状态和进展",
          "资源看板，记录场地、供应商等重要可复用资源"
        ],
        actions: [
          { label: "免费试用", href: SHARED_DEMO_LINK, primary: true },
          { label: "预约演示", href: SHARED_DEMO_LINK }
        ]
      },
      {
        title: "甲乙方进度实时协同，项目管理化思维统筹兼顾",
        image: "/assets/images/solution/solution-pic-7-5.png",
        imageAlt: "甲乙方进度实时协同，项目管理化思维统筹兼顾",
        reverse: true,
        points: [
          "甲乙方共享表格分配任务，双方实时同步项目进展",
          "灵活的任务管理监控，提升双方交付速度和质量",
          "多类角色权限管理，方便多方共同推进活动进展"
        ],
        actions: [
          { label: "免费试用", href: SHARED_DEMO_LINK, primary: true },
          { label: "预约演示", href: SHARED_DEMO_LINK }
        ]
      },
      {
        title: "任务排期实时更新，执行进度精确到日",
        image: "/assets/images/solution/solution-pic-7-6.png",
        imageAlt: "任务排期实时更新，执行进度精确到日",
        points: [
          "自动生成排期甘特图，任务推进简洁明了",
          "任务执行精确到日，责任人实时更新每日进度",
          "项目成员实时了解进展，及时督促和协作"
        ],
        actions: [
          { label: "免费试用", href: SHARED_DEMO_LINK, primary: true },
          { label: "预约演示", href: SHARED_DEMO_LINK }
        ]
      },
      {
        title: "合同管理有序汇总，款项收付准确及时",
        image: "/assets/images/solution/solution-pic-7-7.png",
        imageAlt: "合同管理有序汇总，款项收付准确及时",
        reverse: true,
        points: [
          "清晰记录每一家合作公司的合同内容和签订细节",
          "根据项目进度自动提醒付款时间",
          "支持不同角色查看权限，敏感数据安全可控"
        ],
        actions: [
          { label: "免费试用", href: SHARED_DEMO_LINK, primary: true },
          { label: "预约演示", href: SHARED_DEMO_LINK }
        ]
      }
    ]
  },
  {
    slug: "hr",
    output: "solution-hr.html",
    navLabel: "人力资源",
    summary:
      "涵盖招聘、在职、培训、薪酬、离职全流程，解决招聘、培训、信息与薪酬管理中的典型痛点。",
    routeTitle: "人力资源协同解决方案 - 石墨文档企业服务",
    routeDescription:
      "石墨文档企业服务为 HR 提供招聘看板、入职资料、员工花名册与薪酬协同能力，提升人事与财务协作效率。",
    overview: {
      title: "人力资源协同解决方案",
      description:
        "石墨提供的人力资源协同解决方案，涵盖招聘、在职、培训、薪酬、离职全流程，能够助力企业解决招聘进度难掌控、入职员工难培训、员工信息难整理、薪酬发放难校验、员工离职难交接等痛点。",
      image: "/assets/images/solution/solution-pic-8-1.png",
      imageAlt: "人力资源协同解决方案"
    },
    challenge: {
      title: "人力资源面临的业务挑战",
      gallery: [
        {
          src: "/assets/images/solution/solution-pic-8-2.png",
          alt: "人力资源面临的业务挑战"
        },
        {
          src: "/assets/images/solution/solution-pic-8-3.png",
          alt: "人力资源挑战补充说明"
        }
      ]
    },
    caseCards: [
      {
        title: "全局招聘看板，掌控实时进度",
        image: "/assets/images/solution/solution-pic-8-4.png",
        imageAlt: "全局招聘看板，掌控实时进度",
        points: [
          "招聘团队与用人部门通过同一套系统完成招聘工作",
          "实时同步招聘进度",
          "招聘全局看板，将面试、录取管理流程可视化展示"
        ],
        actions: [
          { label: "免费试用", href: SHARED_DEMO_LINK, primary: true },
          { label: "预约演示", href: SHARED_DEMO_LINK }
        ]
      },
      {
        title: "入职资料一键打包，随时更新",
        image: "/assets/images/solution/solution-pic-8-5.png",
        imageAlt: "入职资料一键打包，随时更新",
        reverse: true,
        points: [
          "企业入职培训资料一键打包",
          "通过链接一键分享给新人",
          "企业网盘结构化存储培训资料，并方便随时迭代"
        ],
        actions: [
          { label: "免费试用", href: SHARED_DEMO_LINK, primary: true },
          { label: "预约演示", href: SHARED_DEMO_LINK }
        ]
      },
      {
        title: "企业员工信息数据库，员工信息实时查找与多维汇总",
        image: "/assets/images/solution/solution-pic-8-6.png",
        imageAlt: "企业员工信息数据库，员工信息实时查找与多维汇总",
        points: [
          "员工花名册多人实时填写，云端存储",
          "新入职员工在线填写入职登记表",
          "系统自动录入花名册"
        ],
        actions: [
          { label: "免费试用", href: SHARED_DEMO_LINK, primary: true },
          { label: "预约演示", href: SHARED_DEMO_LINK }
        ]
      },
      {
        title: "灵活可定制的薪酬管理模型，更易于校验、分析",
        image: "/assets/images/solution/solution-pic-8-7.png",
        imageAlt: "灵活可定制的薪酬管理模型，更易于校验、分析",
        reverse: true,
        points: [
          "灵活可定制的薪酬管理模型，更易于校验、分析",
          "人事、财务部门紧密跨部门协同，极大缩短薪资计算、核算流程",
          "薪资表等敏感信息外泄后，企业可在第一时间知晓，快速溯源"
        ],
        actions: [
          { label: "免费试用", href: SHARED_DEMO_LINK, primary: true },
          { label: "预约演示", href: SHARED_DEMO_LINK }
        ]
      }
    ]
  },
  {
    slug: "finance",
    output: "solution-finance.html",
    navLabel: "财务管理",
    summary:
      "覆盖财务数据采集、预算控制、财务核算、信息归档与分析决策，构建协同财务管理平台。",
    routeTitle: "财务协同管理解决方案 - 石墨文档企业服务",
    routeDescription:
      "石墨文档企业服务基于协同编辑与安全管控，助力企业预算监督、核算协作、资产盘点与财务数据沉淀。",
    overview: {
      title: "财务协同管理解决方案",
      description:
        "基于石墨协同编辑、安全管控能力构建的财务协同管理平台，能够为企业财务数据采集、预算控制、财务核算、信息归档和分析决策等提供全方位的服务支持。",
      image: "/assets/images/solution/solution-pic-9-1.png",
      imageAlt: "财务协同管理解决方案"
    },
    challenge: {
      title: "财务管理面临的挑战",
      gallery: [
        {
          src: "/assets/images/solution/solution-pic-9-2.png",
          alt: "财务管理面临的挑战"
        },
        {
          src: "/assets/images/solution/solution-pic-9-3.png",
          alt: "财务管理挑战补充说明"
        }
      ]
    },
    caseCards: [
      {
        title: "预算管理，部门预算实时监督把控",
        image: "/assets/images/solution/solution-pic-9-4.png",
        imageAlt: "预算管理，部门预算实时监督把控",
        points: [
          "财务人员协同编辑，避免繁琐的财务数据收集、汇总",
          "数据实时更新",
          "管理者从全局监督、把控预算使用情况"
        ],
        actions: [
          { label: "免费试用", href: SHARED_DEMO_LINK, primary: true },
          { label: "预约演示", href: SHARED_DEMO_LINK }
        ]
      },
      {
        title: "财务核算，协同作业安全快捷",
        image: "/assets/images/solution/solution-pic-9-5.png",
        imageAlt: "财务核算，协同作业安全快捷",
        reverse: true,
        points: [
          "多个财务协同作业，录入信息更加高效快捷",
          "内容级安全权限控制",
          "可充分保护企业隐私安全"
        ],
        actions: [
          { label: "免费试用", href: SHARED_DEMO_LINK, primary: true },
          { label: "预约演示", href: SHARED_DEMO_LINK }
        ]
      },
      {
        title: "资产管理，搭建资产动态管理系统",
        image: "/assets/images/solution/solution-pic-9-6.png",
        imageAlt: "资产管理，搭建资产动态管理系统",
        points: [
          "通过表单对企业资产进行高效便捷地统计、盘点",
          "实时更新",
          "石墨表格就是企业的资产动态管理系统"
        ],
        actions: [
          { label: "免费试用", href: SHARED_DEMO_LINK, primary: true },
          { label: "预约演示", href: SHARED_DEMO_LINK }
        ]
      },
      {
        title: "财务数据沉淀，标准化、规范化整理存档",
        image: "/assets/images/solution/solution-pic-9-7.png",
        imageAlt: "财务数据沉淀，标准化、规范化整理存档",
        reverse: true,
        points: [
          "财务文档集中存储，标准化、规范化整理归档",
          "数据沉淀",
          "为财务预测、财务计划提供决策依据"
        ],
        actions: [
          { label: "免费试用", href: SHARED_DEMO_LINK, primary: true },
          { label: "预约演示", href: SHARED_DEMO_LINK }
        ]
      }
    ]
  },
  {
    slug: "sales",
    output: "solution-sales.html",
    navLabel: "销售管理",
    summary:
      "完成销售全流程管控，加强上下级、部门与区域信息共享联动，推动销售业绩快速增长。",
    routeTitle: "销售全流程协同管理解决方案 - 石墨文档企业服务",
    routeDescription:
      "石墨文档企业服务覆盖销售预测、远程演示、客户跟踪与销售培训资料库，助力销售精细化运营。",
    overview: {
      title: "销售全流程协同管理解决方案",
      description:
        "销售全流程协同管理解决方案，能够助力企业完成销售全流程管控，强大的协同能力加强了上下级、部门之间、区域之间的信息共享和联动，从而能够推动销售业绩快速增长。",
      image: "/assets/images/solution/solution-pic-10-1.png",
      imageAlt: "销售全流程协同管理解决方案"
    },
    challenge: {
      title: "公司销售管理面临的挑战",
      gallery: [
        {
          src: "/assets/images/solution/solution-pic-10-2.png",
          alt: "公司销售管理面临的挑战"
        },
        {
          src: "/assets/images/solution/solution-pic-10-3.png",
          alt: "公司销售管理挑战补充说明"
        }
      ]
    },
    caseCards: [
      {
        title: "销售预测，打造强有力决策执行体系",
        image: "/assets/images/solution/solution-pic-10-4.png",
        imageAlt: "销售预测，打造强有力决策执行体系",
        points: [
          "在进行销售预测或制定销售计划时，团队协同讨论，保证目标策略上下贯通",
          "销售业绩实时动态更新",
          "管理团队及时调整达成策略，合理配置业务资源"
        ],
        actions: [
          { label: "免费试用", href: SHARED_DEMO_LINK, primary: true },
          { label: "预约演示", href: SHARED_DEMO_LINK }
        ]
      },
      {
        title: "远程演示，有效提升客户满意度",
        image: "/assets/images/solution/solution-pic-10-5.png",
        imageAlt: "远程演示，有效提升客户满意度",
        reverse: true,
        points: [
          "石墨幻灯片支持远程演示",
          "产品顾问可以随时随地进行产品介绍和方案演示",
          "客户无需安装任何软件即可在线观看，能够有效提升沟通体验和客户满意度"
        ],
        actions: [
          { label: "免费试用", href: SHARED_DEMO_LINK, primary: true },
          { label: "预约演示", href: SHARED_DEMO_LINK }
        ]
      },
      {
        title: "客户跟踪，核心客户状态实时跟进",
        image: "/assets/images/solution/solution-pic-10-6.png",
        imageAlt: "客户跟踪，核心客户状态实时跟进",
        points: [
          "客户数据聚合，多维度分析，助力销售部门完成精细化客户管理",
          "客户状态实时更新",
          "销售顾问有效跟踪、快速响应，提升成单率"
        ],
        actions: [
          { label: "免费试用", href: SHARED_DEMO_LINK, primary: true },
          { label: "预约演示", href: SHARED_DEMO_LINK }
        ]
      },
      {
        title: "销售培训，团队知识规范化管理",
        image: "/assets/images/solution/solution-pic-10-7.png",
        imageAlt: "销售培训，团队知识规范化管理",
        reverse: true,
        points: [
          "搭建销售团队资料库",
          "销售顾问随时随地查询调用",
          "保障销售资料集中管理沉淀，实现价值信息的共享传承"
        ],
        actions: [
          { label: "免费试用", href: SHARED_DEMO_LINK, primary: true },
          { label: "预约演示", href: SHARED_DEMO_LINK }
        ]
      }
    ]
  }
];

module.exports = {
  SOLUTION_MENU_GROUPS,
  SOLUTION_PAGES,
  SHARED_DEMO_LINK
};
