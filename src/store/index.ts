import { defineStore } from "pinia";
import { PageData } from "../utils/data";

interface State {
  pageData: PageData;
  page: number;
  section02Module: number;
  section03Module: number;
}

export const useStore = defineStore("main", {
  state: (): State => {
    return {
      pageData: new PageData(),
      page: 0,
      section02Module: 0,
      section03Module: 0,
    };
  },
});
