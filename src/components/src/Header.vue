<template>
  <div class="app-header" :class="{ fixed: store.pageData.headerFixed }">
    <Image
      class="app-logo"
      :src="store.pageData.logo"
      :title="store.pageData.title"
    ></Image>
    <ul class="menu">
      <template
        v-if="store.pageData.pageList && store.pageData.pageList.length > 1"
      >
        <li
          class="menu-item"
          :class="{ active: store.page === index }"
          v-for="(menuItem, index) in store.pageData.pageList"
          :key="index"
          @click="store.page = index"
        >
          {{ menuItem.title }}
        </li>
      </template>
    </ul>
    <div class="phone-box">
      <Image class="icon" src="/images/icon/phone.png"></Image>
      <div class="phone">{{ store.pageData.phone }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Image from "./Image.vue";
import { useStore } from "../../store";

const store = useStore();
</script>
