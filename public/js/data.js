window.PAGE_DATA = [
  {
    /* 语言简写 */
    languageAbbreviation: "CHS",
    /* 语言全称 */
    language: "简体中文",
    /* 浏览器标签显示名称（网站名称） */
    title: "xxx官网",
    /* 网站logo地址 */
    logo: "/images/background/logo.png",
    /* 联系电话 */
    phone: "199 9999 9999",
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
      "Majnoon油田",
      "统一云管理平台",
      "纳管VMware/Proxmox/公有云，实现全球资源集中调度与租户自治",
      "去体验",
    ],
    section01ExperienceSrc: "https://www.baidu.com/",
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
  },
];
