<template>
  <div class="main-page-section section-03">
    <div class="section-title">{{ store.pageData.section03Text[0] }}</div>
    <div class="section-subtitle">{{ store.pageData.section03Text[1] }}</div>
    <template v-for="(module, index) in store.pageData.section03ModuleList">
      <Image
        class="module-background"
        :class="{ active: store.section03Module === index }"
        :src="module.background"
      ></Image>
      <div class="title" :class="{ active: store.section03Module === index }">
        {{ module.title }}
      </div>
      <div class="content" :class="{ active: store.section03Module === index }">
        {{ module.content }}
      </div>
    </template>
    <ul class="module-menu">
      <li
        class="menu-item"
        :class="{ active: store.section03Module === index }"
        v-for="(item, index) in store.pageData.section03ModuleList"
        :key="index"
        @click="store.section03Module = index"
      >
        {{ (index + 1).toString().padStart(2, "0") }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "../../store";
import Image from "./Image.vue";

const store = useStore();
</script>
