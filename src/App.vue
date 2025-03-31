<template>
  <Header></Header>
  <ul class="page-list">
    <li class="page-list-item" :class="{ active: store.page === 0 }">
      <Section01></Section01>
      <Section02></Section02>
      <Section03></Section03>
      <Section04></Section04>
    </li>
    <template v-for="(menuItem, index) in store.pageData.pageList" :key="index">
      <li
        class="page-list-item"
        :class="{ active: store.page === index }"
        v-if="index > 0"
      >
        {{ menuItem.title }}
      </li>
    </template>
  </ul>
</template>

<script setup lang="ts">
import {
  Header,
  Section01,
  Section02,
  Section03,
  Section04,
} from "./components";
import { getPageData } from "./utils/data";
import { useStore } from "./store";

const store = useStore();

store.pageData = getPageData();
</script>
