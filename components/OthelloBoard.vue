<script setup lang="ts">
import { Renderer } from '@/modules/Renderer';
import type { CellPosition } from '@/types/game';

const props = defineProps<{
  board: number[][];
  latestMove: { x: number; y: number } | null;
  validMoves: { x: number; y: number }[];
}>();

const emits = defineEmits<{
  (e: 'decideMove', move: { x: number; y: number }): void;
}>();

const canvas = ref<HTMLCanvasElement | null>(null);
const renderer = new Renderer();

onMounted(() => {
  renderer.setCanvas(canvas.value!);
  window.addEventListener('resize', resize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', resize);
});

watch(props, (newProps) => {
  renderer.update(newProps.board, newProps.latestMove, newProps.validMoves);
});

function emitMove(event: MouseEvent): void {
  let move: CellPosition;
  try {
    move = renderer.toCellPosition(event.offsetX, event.offsetY);
  } catch (error) {
    throw new Error('The coordinate is outside the board.');
  }
  emits('decideMove', move);
}

function resize(): void {
  renderer.resize();
  renderer.update(props.board, props.latestMove, props.validMoves);
}
</script>

<template>
  <canvas ref="canvas" class="d-block mx-auto" @click="emitMove"></canvas>
</template>
