import { STORAGE_KEY, getLocal } from "./storage";

export class PageListItem {
  title: string = "";
  iframeSrc: string = "";
  constructor(data: any) {
    if (!data) return;
    this.title = data.title || "";
    this.iframeSrc = data.iframeSrc || "";
  }
}

export class Section01BottomModule {
  title: string = "";
  content: string = "";
  background: string = "";
  constructor(data: any) {
    if (!data) return;
    this.title = data.title || "";
    this.content = data.content || "";
    this.background = data.background || "";
  }
}

export class Section02Module {
  title: string = "";
  content: string = "";
  background: string = "";
  constructor(data: any) {
    if (!data) return;
    this.title = data.title || "";
    this.content = data.content || "";
    this.background = data.background || "";
  }
}

export class FrameworkContentContentItem {
  type: "img" | "text" = "text";
  content: string = "";
  constructor(data: any) {
    this.type = data.type || "text";
    this.content = data.content || "";
  }
}

export class FrameworkContent {
  flexGrow: number = 1;
  noBackGround: boolean = false;
  icon: string = "";
  content: string = "";
  contentList: FrameworkContentContentItem[] = [];
  constructor(data: any) {
    if (!data) return;
    this.flexGrow = data.flexGrow || data.flexGrow === 0 ? data.flexGrow : 1;
    this.noBackGround = data.noBackGround || false;
    this.content = data.content || "";
    this.icon = data.icon || "";

    if (Array.isArray(data.contentList))
      this.contentList = data.contentList.map(
        (item: any) => new FrameworkContentContentItem(item)
      );
  }
}

export class FrameworkItem {
  background: "theme" | "grey" = "theme";
  padding: boolean = true;
  hideTop: boolean = false;
  hideBottom: boolean = false;
  contentColor: "theme" | "grey" = "theme";
  contentBackground: "theme" | "grey" = "theme";
  contentList: FrameworkContent[] = [];
  constructor(data: any) {
    if (!data) return;
    this.background = data.background || "theme";
    this.padding = data.padding || data.padding === false ? data.padding : true;
    this.hideTop = data.hideTop || false;
    this.hideBottom = data.hideBottom || false;
    this.contentColor = data.contentColor || "theme";
    this.contentBackground = data.contentBackground || "theme";
    if (Array.isArray(data.contentList))
      this.contentList = data.contentList.map(
        (item: any) => new FrameworkContent(item)
      );
  }
}

export class FooterIconLink {
  icon: string = "";
  link: string = "";
  constructor(data: any) {
    if (!data) return;
    this.icon = data.icon || "";
    this.link = data.link || "";
  }
}

export class FooterFriendshipLinkItem {
  name: string = "";
  link: string = "";
  constructor(data: any) {
    if (!data) return;
    this.name = data.name || "";
    this.link = data.link || "";
  }
}

export class FooterFriendshipLink {
  title: string = "";
  list: FooterFriendshipLinkItem[] = [];
  constructor(data: any) {
    if (!data) return;
    this.title = data.title || "";
    if (Array.isArray(data.list))
      this.list = data.list.map(
        (item: any) => new FooterFriendshipLinkItem(item)
      );
  }
}

export class PageData {
  languageAbbreviation: string = "";
  language: string = "";
  title: string = "";
  logo: string = "";
  footerLogo: string = "";
  phone: string = "";
  ExperienceButtonLink: string = "";
  headerFixed: boolean = false;
  pageList: PageListItem[] = [];
  section01Text: string[] = [];
  section01BottomModuleList: Section01BottomModule[] = [];
  section02Text: string[] = [];
  section02ModuleList: Section02Module[] = [];
  section03Text: string[] = [];
  section03ModuleList: Section02Module[] = [];
  section04Text: string[] = [];
  section04FrameworkList: FrameworkItem[] = [];
  section05Text: string[] = [];
  footerText: string = "";
  footerIconLinkList: FooterIconLink[] = [];
  footerFriendshipLinkList: FooterFriendshipLink[] = [];
  copyright: string = "";

  constructor(data: any = {}) {
    if (!data) return;
    this.languageAbbreviation = data.languageAbbreviation || "CHS";
    this.language = data.language || "简体中文";
    this.title = data.title || "PT";
    this.logo = data.logo || "/images/background/logo.png";
    this.footerLogo = data.footerLogo || "/images/background/logo-02.png";
    this.phone = data.phone || "";
    this.ExperienceButtonLink = data.ExperienceButtonLink || "";
    this.headerFixed = data.headerFixed || false;
    document.title = this.title;
    if (Array.isArray(data.pageList))
      this.pageList = data.pageList.map((item: any) => new PageListItem(item));
    this.section01Text = data.section01Text || [];
    if (Array.isArray(data.section01BottomModuleList))
      this.section01BottomModuleList = data.section01BottomModuleList.map(
        (item: any) => new Section01BottomModule(item)
      );
    this.section02Text = data.section02Text || [];
    if (Array.isArray(data.section02ModuleList))
      this.section02ModuleList = data.section02ModuleList.map(
        (item: any) => new Section02Module(item)
      );
    this.section03Text = data.section03Text || [];
    if (Array.isArray(data.section03ModuleList))
      this.section03ModuleList = data.section03ModuleList.map(
        (item: any) => new Section02Module(item)
      );
    this.section04Text = data.section04Text || [];
    if (Array.isArray(data.section04FrameworkList))
      this.section04FrameworkList = data.section04FrameworkList.map(
        (item: any) => new FrameworkItem(item)
      );
    this.section05Text = data.section05Text || [];
    this.footerText = data.footerText || "";
    if (Array.isArray(data.footerIconLinkList))
      this.footerIconLinkList = data.footerIconLinkList.map(
        (item: any) => new FooterIconLink(item)
      );
    if (Array.isArray(data.footerFriendshipLinkList))
      this.footerFriendshipLinkList = data.footerFriendshipLinkList.map(
        (item: any) => new FooterFriendshipLink(item)
      );
    this.copyright = data.copyright || [];
  }
}

export const getPageData = (languageAbbreviation?: string): PageData => {
  if (
    (window as any)["PAGE_DATA"] &&
    Array.isArray((window as any)["PAGE_DATA"])
  ) {
    const lang = languageAbbreviation || (getLocal(STORAGE_KEY.LANG) as string);
    return new PageData(
      (window as any)["PAGE_DATA"].filter(
        (item: any) => item.languageAbbreviation === lang
      )[0] || (window as any)["PAGE_DATA"][0]
    );
  } else {
    return new PageData();
  }
};
