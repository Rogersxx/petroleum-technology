<template>
  <div class="main-page-section section-02">
    <div class="section-title">{{ store.pageData.section02Text[0] }}</div>
    <div class="section-subtitle">{{ store.pageData.section02Text[1] }}</div>
    <ul class="module-menu">
      <li
        class="menu-item"
        :class="{ active: store.section02Module === index }"
        v-for="(item, index) in store.pageData.section02ModuleList"
        :key="index"
        @click="moduleChange(index)"
      >
        {{ item.title }}
      </li>
    </ul>
    <div class="module-box">
      <template v-for="(module, index) in store.pageData.section02ModuleList">
        <Image
          class="module-background"
          :class="{ active: store.section02Module === index }"
          :src="module.background"
        ></Image>
        <div class="title" :class="{ active: store.section02Module === index }">
          <div class="text">
            {{ module.title }}
            <Image class="icon" src="/images/icon/circle.png"></Image>
          </div>
        </div>
        <div
          class="content"
          :class="{ active: store.section02Module === index }"
        >
          {{ module.content }}
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { useStore } from "../../store";
import Image from "./Image.vue";

const store = useStore();
let timeout: number;

onMounted(() => {
  clearTimeout(timeout);
  moduleAutomaticSwitch();
});
onUnmounted(() => {
  clearTimeout(timeout);
});

const moduleAutomaticSwitch = () => {
  timeout = setTimeout(() => {
    store.section02Module < store.pageData.section02ModuleList.length - 1
      ? store.section02Module++
      : (store.section02Module = 0);
    moduleAutomaticSwitch();
  }, 5000);
};
const moduleChange = (index: number) => {
  clearTimeout(timeout);
  store.section02Module = index;
  moduleAutomaticSwitch();
};
</script>
