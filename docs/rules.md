# shimo.net/dev 目录规范

shimo.net/dev
├── index.html             # 根入口（跳转到 welcome.html）
├── welcome.html           # 项目入口文件（核心结构）
├── welcom.html            # 兼容历史链接（跳转到 welcome.html）
├── assets/                # 静态资源目录（不可执行文件）
│   ├── images/            # 图片、图标、favicon
│   ├── fonts/             # 自定义字体文件
│   └── vendor/            # 第三方库（如果不使用 npm/CDN）
├── css/                   # 样式表目录
│   ├── reset.css          # 样式重置与全局变量
│   ├── layout.css         # 布局相关（Header、Footer、Grid）
│   ├── components.css     # 组件相关（Button、Card、Floating 等）
│   └── main.css           # 主样式入口（@import 汇总）
├── js/                    # 脚本目录
│   ├── utils.js           # 工具函数（格式化、节流防抖等）
│   ├── api.js             # 接口请求封装入口
│   ├── components/        # 交互组件逻辑
│   │   └── floating-contact.js
│   └── main.js            # 业务逻辑入口
└── docs/                  # 项目相关文档（需求、原型、视觉规范）
