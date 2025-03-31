<template>
  <div class="image-component" :title="title">
    <img :src="src" draggable="false" />
  </div>
</template>

<script setup lang="ts">
const { src, title } = defineProps({
  src: { type: String, default: "" },
  title: { type: String, default: "" },
});
</script>
