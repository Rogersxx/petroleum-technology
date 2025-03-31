<template>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <div class="body">
    <div class="header">
      <ul class="menu">
        <li
          class="menu-item"
          :class="{ active: page === index }"
          v-for="(menuItem, index) in pageData.pageList"
          :key="index"
          @click="page = index"
        >
          {{ menuItem.title }}
        </li>
      </ul>
    </div>
    <ul class="page-section">
      <li
        class="section-item"
        :class="`section-${index}${index === page ? ' active' : ''}`"
        v-for="(menuItem, index) in pageData.pageList"
      >
        {{ menuItem.title }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
// import HelloWorld from "./components/HelloWorld.vue";
import { getPageData, PageData } from "./utils/data";

const pageData = reactive<PageData>(getPageData());
const page = ref<number>(0);

console.log(pageData);
</script>

<style scoped></style>
