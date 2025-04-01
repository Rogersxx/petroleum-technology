<template>
  <div class="main-page-section section-04">
    <div class="section-title">{{ store.pageData.section04Text[0] }}</div>
    <div class="section-subtitle">{{ store.pageData.section04Text[1] }}</div>
    <ul class="framework-box">
      <li
        class="framework-item"
        :class="{
          theme: framework.background === 'theme',
          grey: framework.background === 'grey',
          padding: framework.padding,
          'hide-top': framework.hideTop,
          'hide-bottom': framework.hideBottom,
          'content-theme': framework.contentColor === 'theme',
          'content-grey': framework.contentColor === 'grey',
          'content-bg-theme': framework.contentBackground === 'theme',
          'content-bg-grey': framework.contentBackground === 'grey',
        }"
        v-for="(framework, index) in store.pageData.section04FrameworkList"
        :key="index"
      >
        <div
          class="content-box"
          :style="{
            'flex-grow': item.flexGrow || 0,
            'flex-basis': item.flexGrow === 0 ? 1 : 0,
          }"
          v-for="(item, j) in framework.contentList"
          :key="j"
        >
          <div class="content" :class="{ 'no-bg': item.noBackGround }">
            <template v-if="item.contentList && item.contentList.length > 0">
              <template v-for="x in item.contentList">
                <Image
                  class="icon"
                  :src="x.content"
                  v-if="x.type === 'img'"
                ></Image>
                <p class="text overflow-ellipsis-2" v-else>{{ x.content }}</p>
              </template>
            </template>
            <template v-else>
              <Image class="icon" :src="item.icon" v-if="item.icon"></Image>
              <p class="text overflow-ellipsis-2">{{ item.content }}</p>
            </template>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "../../store";
import Image from "./Image.vue";

const store = useStore();
</script>
