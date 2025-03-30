<script setup lang="ts">
import { reactive } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import { getPageData, PageData } from "./utils/data";

const pageData = reactive<PageData>(getPageData());

console.log(pageData);
</script>

<template>
  <div>
    <a href="https://www.baidu.com">点击</a>
    <iframe src="https://www.baidu.com" frameborder="0"></iframe>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped></style>
