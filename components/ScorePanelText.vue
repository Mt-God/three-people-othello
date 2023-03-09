<script setup lang="ts">
import { mdiCircle } from '@mdi/js';

const props = defineProps<{
  name: string;
  score: number;
  color: string;
}>();
</script>

<template>
  <div class="text-sm-body-1 mx-2 my-1">
    <v-icon
      :icon="mdiCircle"
      :color="props.color"
    ></v-icon>
    {{ props.name }}
    <span class="float-right">{{ props.score }}</span>
  </div>
</template>

<style scoped>
div {
  width: 250px;
}
</style>
