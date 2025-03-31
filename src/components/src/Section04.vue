<template>
  <div class="main-page-section section-04">
    <div class="section-title">{{ store.pageData.section04Text[0] }}</div>
    <div class="section-subtitle">{{ store.pageData.section04Text[1] }}</div>
    <div class="framework-box">777</div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "../../store";

const store = useStore();
</script>
