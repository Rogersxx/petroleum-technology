import { defineStore } from "pinia";
import { PageData } from "../utils/data";

interface State {
  pageData: PageData;
  page: number;
}

export const useStore = defineStore("main", {
  state: (): State => {
    return { pageData: new PageData(), page: 0 };
  },
});
