<template>
  <div class="footer">
    <div class="footer-content">
      <div class="left">
        <Image class="logo" :src="store.pageData.footerLogo"></Image>
        <div class="text">{{ store.pageData.footerText }}</div>
        <div class="icon-link-list">
          <Image
            class="link-item"
            v-for="(link, index) in store.pageData.footerIconLinkList"
            :key="index"
            :src="link.icon"
            @click="goToPage(link.link)"
          ></Image>
        </div>
      </div>
      <ul class="friendship-link-list">
        <li
          class="link-item"
          v-for="(link, index) in store.pageData.footerFriendshipLinkList"
          :key="index"
        >
          <div class="title">{{ link.title }}</div>
          <div
            class="link"
            v-for="(item, j) in link.list"
            :key="j"
            @click="goToPage(item.link)"
          >
            {{ item.name }}
          </div>
        </li>
      </ul>
    </div>
    <div class="copyright">{{ store.pageData.copyright }}</div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "../../store";
import Image from "./Image.vue";

const store = useStore();

const goToPage = (link: string) => {
  window.open(link);
};
</script>
