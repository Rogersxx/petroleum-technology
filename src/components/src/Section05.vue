<template>
  <div class="main-page-section section-05">
    <div class="section-title">{{ store.pageData.section05Text[0] }}</div>
    <ExperienceButton></ExperienceButton>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "../../store";
import ExperienceButton from "./ExperienceButton.vue";

const store = useStore();
</script>
