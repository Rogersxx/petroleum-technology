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

export class PageData {
  languageAbbreviation: string = "";
  language: string = "";
  title: string = "";
  logo: string = "";
  phone: string = "";
  headerFixed: boolean = false;
  pageList: PageListItem[] = [];
  section01Text: string[] = [];
  section01ExperienceSrc: string = "";
  section01BottomModuleList: Section01BottomModule[] = [];
  constructor(data: any = {}) {
    if (!data) return;
    this.languageAbbreviation = data.languageAbbreviation || "CHS";
    this.language = data.language || "简体中文";
    this.title = data.title || "PT";
    this.logo = data.logo || "/images/background/logo.png";
    this.phone = data.phone || "";
    this.headerFixed = data.headerFixed || false;
    document.title = this.title;
    if (Array.isArray(data.pageList))
      this.pageList = data.pageList.map((item: any) => new PageListItem(item));
    this.section01Text = data.section01Text || [];
    this.section01ExperienceSrc = data.section01ExperienceSrc || "";
    if (Array.isArray(data.section01BottomModuleList))
      this.section01BottomModuleList = data.section01BottomModuleList.map(
        (item: any) => new Section01BottomModule(item)
      );
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
