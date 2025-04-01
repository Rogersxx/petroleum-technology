window.PAGE_DATA = [
  {
    /* 语言简写 */
    languageAbbreviation: "CHS",
    /* 语言全称 */
    language: "简体中文",
    /* 浏览器标签显示名称（网站名称） */
    title: "xxx官网",
    /* 网站头部logo地址 */
    logo: "/images/background/logo.png",
    /* 网站底部logo地址 */
    footerLogo: "/images/background/logo-02.png",
    /* 联系电话 */
    phone: "199 9999 9999",
    /* 体验页面链接 */
    ExperienceButtonLink: "https://www.baidu.com/",
    /* 头部菜单是否固定 */
    headerFixed: false,
    /* 
      导航栏页面菜单，增加一项即可增加一个页面。只有一项时菜单不显示
      title：页面名称
      iframeSrc：页面地址，第一项固定为首页，iframeSrc不会生效
    */
    pageList: [
      { title: "首页", iframeSrc: "" },
      { title: "页面2", iframeSrc: "" },
      { title: "页面3", iframeSrc: "" },
      // { title: "页面4", iframeSrc: "" },
    ],
    section01Text: [
      "数字化转型驱动者",
      "MAJNOON油田",
      "统一云管理平台",
      "纳管VMware/Proxmox/公有云，实现全球资源集中调度与租户自治",
      "去体验",
    ],
    section01BottomModuleList: [
      {
        title: "全栈云资源跨域融合",
        content:
          "裸金属/虚拟化/容器统一纳管，\n满足地质建模与炼厂物联终端的异构环境兼容",
        background: "/images/background/section01-bottom-module-01.jpg",
      },
      {
        title: "内生式安全防护体系",
        content:
          "从租户隔离到存储加密的三维防护链，\n符合HSE管理体系对井下数据传输的保密合规",
        background: "/images/background/section01-bottom-module-02.jpg",
      },
      {
        title: "数据流体化计费模型",
        content:
          "基于地质建模潮汐负载的动态计价策略，\n构建成本与数据波动率的等高线协同",
        background: "/images/background/section01-bottom-module-03.jpg",
      },
    ],
    section02Text: [
      "构建能源数字基座的五大核心功能模块",
      "全栈管控VMware/Proxmox/公有云，实现超融合资源统一调度与租户自治",
    ],
    section02ModuleList: [
      {
        title: "云供应商",
        background: "/images/background/section02-module-01.png",
        content:
          "支持主流虚拟化软件，包括PromoxVE、VMware，华为私有云管理多种类型的资源，包括X86虚拟机（PromoxVE、VMware）、存储（SAN），网络（传统网络、SDN），实现混合资源的统一管理。\n\n支持主流公有云服务厂商，包括AWS、Google Cloud、Azure、阿里云等内多种类型的资源，包括云主机、云存储，云网络，实现混合资源的统一管理。",
      },
      {
        title: "AI平台",
        background: "/images/background/section02-module-02.png",
        content:
          "每个租户均有独立且隔离的计算资源，租户亦可将资源分配给实际资源的使用者（组织），作为资源的拥有者，租户可对资源进行计费、分析、监控。",
      },
      {
        title: "对象存储",
        background: "/images/background/section02-module-03.png",
        content: "计算资源、存储资源和网络资源的跨数据中心的统一调度和管理",
      },
      {
        title: "应用服务",
        background: "/images/background/section02-module-04.png",
        content:
          "平台有管理员提供免费或者需要授权的应用制品，用户通过应用商店购买或部署应用以及应用的运维，监控，告警，计费等",
      },
      {
        title: "数据库",
        background: "/images/background/section02-module-05.png",
        content:
          "资源有统一的定价及对租户不同的折扣，资源的使用者租户及组织可以对资源的使用及消费进行分析",
      },
    ],
    section03Text: [
      "开放架构驱动油气产业的智能云核引擎",
      "全栈管控VMware/Proxmox/智能弹性扩展/多层级安全架构/秒级自愈能力，支撑勘探数据处理与跨国灾备同步",
    ],
    section03ModuleList: [
      {
        title: "智能连接",
        background: "/images/background/section03-module-01.png",
        content:
          "整体方案架构基于开放式标准，采用成熟的软件技术并提供开放的接口，使平台始终保持技术上的先进性，并具有良好的技术扩展能力，以适应未来应用的发展和技术升级的需要。",
      },
      {
        title: "灵活与可扩展",
        background: "/images/background/section03-module-02.png",
        content:
          "选取灵活的体系架构，根据应用发展需要进行灵活、快速的调整， 实现应用的快速部署。满足资源池方便扩展设备容量和提升设备 性能，管理平台的管理范围应随着资源池规模的增加而扩展的整 体需求，而且在软件功能具备灵活的配置能力，能够快速响应用 户新需求及业务扩展的要求",
      },
      {
        title: "安全保证",
        background: "/images/background/section03-module-03.png",
        content:
          "满足数据安全、环境安全、网络安全、运行安全等方面的要求，对系统结构、网络系统、服务器系统、存储系统、备份系统等方面进行安全性设计，使其具有较强的的防病毒、防入侵、防攻击的能力，方案提供良好的安全可靠性策略，支持多种安全可靠性技术手段。",
      },
      {
        title: "易用与可管理",
        background: "/images/background/section03-module-04.png",
        content:
          "基于资源池管理平台能够方便、快捷的部署业务，平台具有良好的操作界面、详细的帮助信息，系统参数的维护与管理均可通过操作界面完成。可便捷的管理安全、网络、服务器、操作系统、数据库及应用等。",
      },
      {
        title: "稳定可靠",
        background: "/images/background/section03-module-05.png",
        content:
          "系统满足承载较大的系统和应用运行负载，提供高性能的数据处理和应用响应能力，确保业务功能高效运行等性能指标的前提下，对平均故障间隔时间(MTBF)、系统中断服务时间、系统平均故障修复时间(MTTR)等系统可靠性有保证。",
      },
    ],
    section04Text: [
      "智能系统平台架构",
      "端到端架构深度解构，核心工艺场景全承载",
    ],
    section04FrameworkList: [
      {
        background: "theme",
        padding: true,
        hideTop: false,
        hideBottom: false,
        contentColor: "theme",
        contentBackground: "theme",
        contentList: [
          { flexGrow: 0, noBackGround: true, content: "Tenant Applications" },
          { content: "Online Learning" },
          { content: "Smart HR" },
          { content: "PE Work" },
          { flexGrow: 0, noBackGround: true, content: " . . . " },
          { content: "LLM \nKnowledge Base" },
        ],
      },
      {
        contentList: [
          { content: "Cloud Lifecycle" },
          { content: "Repository" },
          { content: "Region MGT" },
          { content: "Multi-Tenant / Quota" },
          { content: "API / Teminal" },
        ],
      },
      {
        padding: false,
        contentColor: "grey",
        contentList: [
          {
            icon: "/images/icon/ISMC Multi Cloud Kernel.png",
            content: "ISMC Multi Cloud Kernel",
          },
        ],
      },
      {
        contentColor: "grey",
        hideBottom: true,
        contentList: [
          { flexGrow: 3, content: "Compute & Schedule Driver" },
          { content: "Storage Driver" },
          { content: "Network Driver" },
        ],
      },
      {
        contentColor: "grey",
        contentBackground: "grey",
        hideTop: true,
        contentList: [
          { content: "CPU" },
          { content: "Memory" },
          { content: "GPU" },
          { content: "Disk" },
          { content: "Network" },
        ],
      },
      {
        padding: false,
        contentColor: "grey",
        contentBackground: "grey",
        contentList: [
          {
            content: "ISMC Mesh Network",
          },
        ],
      },
      {
        padding: false,
        contentColor: "grey",
        contentList: [
          {
            flexGrow: 3,
            content: "Bara Metal",
          },
          {
            flexGrow: 5,
            contentList: [
              { type: "img", content: "/images/icon/vmware.png" },
              { type: "img", content: "/images/icon/huawei.png" },
              { type: "text", content: "Private Cloud" },
            ],
          },
          {
            flexGrow: 9,
            contentList: [
              { type: "img", content: "/images/icon/aws.png" },
              { type: "img", content: "/images/icon/google-cloud.png" },
              { type: "text", content: "Private Cloud" },
              { type: "img", content: "/images/icon/aliyun.png" },
              { type: "img", content: "/images/icon/azure.png" },
            ],
          },
        ],
      },
    ],
    section05Text: ["开启服务之旅——勘探启新程，智能永护航"],
    footerText: "可以写一些介绍性的话语，口号之类的内容",
    footerIconLinkList: [
      { icon: "/images/icon/instagram.png", link: "https://www.baidu.com/" },
      { icon: "/images/icon/facebook.png", link: "https://www.baidu.com/" },
      { icon: "/images/icon/phone-02.png", link: "https://www.baidu.com/" },
    ],
    footerFriendshipLinkList: [
      {
        title: "模块标题",
        list: [
          { name: "页面链接", link: "https://www.baidu.com/" },
          { name: "页面链接", link: "https://www.baidu.com/" },
          { name: "页面链接", link: "https://www.baidu.com/" },
        ],
      },
      {
        title: "模块标题",
        list: [
          { name: "页面链接", link: "https://www.baidu.com/" },
          { name: "页面链接", link: "https://www.baidu.com/" },
          { name: "页面链接", link: "https://www.baidu.com/" },
        ],
      },
      {
        title: "模块标题",
        list: [
          { name: "页面链接", link: "https://www.baidu.com/" },
          { name: "页面链接", link: "https://www.baidu.com/" },
          { name: "页面链接", link: "https://www.baidu.com/" },
        ],
      },
      {
        title: "模块标题",
        list: [
          { name: "页面链接", link: "https://www.baidu.com/" },
          { name: "页面链接", link: "https://www.baidu.com/" },
          { name: "页面链接", link: "https://www.baidu.com/" },
        ],
      },
    ],
    copyright: "Copyright © 2023 Hostoso Evonicmedia. All rights reserved.",
  },
];
