import { STORAGE_KEY, getLocal } from "./storage";

class PageIistItem {
  title: string = "";
  iframeSrc: string = "";
  constructor(data: any) {
    if (!data) return;
    this.title = data.title || "";
    this.iframeSrc = data.iframeSrc || "";
  }
}

export class PageData {
  languageAbbreviation: string = "";
  language: string = "";
  pageList: PageIistItem[] = [];
  constructor(data: any = {}) {
    if (!data) return;
    this.languageAbbreviation = data.languageAbbreviation || "CHS";
    this.language = data.language || "简体中文";
    if (Array.isArray(data.pageList))
      this.pageList = data.pageList.map((item: any) => new PageIistItem(item));
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
