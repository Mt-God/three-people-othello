<script setup lang="ts">
import { mdiHome, mdiWifi, mdiWifiOff } from '@mdi/js';

const isOpen = ref(false);
const pages = ref([
  { title: 'ホーム', props: { prependIcon: mdiHome, to: '/' } },
  { title: 'オンラインで遊ぶ', props: { prependIcon: mdiWifi, to: '/online' } },
  { title: 'オフラインで遊ぶ', props: { prependIcon: mdiWifiOff, to: '/offline' } },
]);
</script>

<template>
  <v-app>
    <v-app-bar
      color="teal"
      density="comfortable"
    >
      <v-app-bar-nav-icon
        class="menu-icon"
        @click="isOpen = !isOpen"
      ></v-app-bar-nav-icon>
      <v-app-bar-title class="text-center">
        <NuxtLink
          class="text-h6 text-white text-decoration-none"
          to="/"
        >
          3人オセロ
        </NuxtLink>
      </v-app-bar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="isOpen"
      disable-resize-watcher
      class="bg-teal-lighten-5"
    >
      <v-list
        :items="pages"
        density="comfortable"
        nav
      ></v-list>
    </v-navigation-drawer>

    <v-main>
      <NuxtPage />
    </v-main>
  </v-app>
</template>

<style scoped>
.menu-icon {
  position: absolute;
  z-index: 1;
}
</style>
