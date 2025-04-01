<template>
  <div class="experience-button" @click="goToExperience">
    <div class="text">{{ store.pageData.section01Text[4] }}</div>
    <Image class="icon" src="/images/icon/arrow-right.png"></Image>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "../../store";
import Image from "./Image.vue";

const store = useStore();

const goToExperience = () => {
  window.open(store.pageData.ExperienceButtonLink);
};
</script>
