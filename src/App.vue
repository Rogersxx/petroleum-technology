<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";

const abs = 456;
console.log(Array.isArray(abs));

console.log((window as any)["ABC"]);
</script>

<template>
  <div>
    <a href="https://www.baidu.com">点击</a>
    <iframe src="https://www.baidu.com" frameborder="0"></iframe>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped></style>
