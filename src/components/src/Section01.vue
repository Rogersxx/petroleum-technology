<template>
  <div class="main-page-section section-01">
    <div class="text-01">{{ store.pageData.section01Text[0] }}</div>
    <div class="text-02">{{ store.pageData.section01Text[1] }}</div>
    <div class="text-03">{{ store.pageData.section01Text[2] }}</div>
    <div class="text-04">{{ store.pageData.section01Text[3] }}</div>
    <div class="experience" @click="goToExperience">
      <div class="text">{{ store.pageData.section01Text[4] }}</div>
      <Image class="icon" src="/images/icon/arrow-right.png"></Image>
    </div>
    <ul class="module-list">
      <li
        class="module-item"
        v-for="(item, index) in store.pageData.section01BottomModuleList"
        :key="index"
      >
        <Image class="background" :src="item.background"></Image>
        <div class="title">{{ item.title }}</div>
        <div class="content">{{ item.content }}</div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "../../store";
import Image from "./Image.vue";

const store = useStore();

const goToExperience = () => {
  window.open(store.pageData.section01ExperienceSrc);
};
</script>
