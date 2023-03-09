<script setup lang="ts">
import { useDisplay } from 'vuetify';

const props = defineProps<{
  names: {
    player1: string;
    player2: string;
    player3: string;
  };
  scores: {
    player1: number;
    player2: number;
    player3: number;
  };
}>();

const { mdAndUp } = useDisplay();
</script>

<template>
  <v-card
    class="mx-auto"
    width="fit-content"
  >
    <v-card-text :class="mdAndUp && 'd-flex'">
      <ScorePanelText
        :name="props.names.player1"
        :score="props.scores.player1"
        :color="'#f00'"
      />
      <v-divider
        :vertical="mdAndUp"
        class="border-opacity-25"
      ></v-divider>
      <ScorePanelText
        :name="props.names.player2"
        :score="props.scores.player2"
        :color="'#080'"
      />
      <v-divider
        :vertical="mdAndUp"
        class="border-opacity-25"
      ></v-divider>
      <ScorePanelText
        :name="props.names.player3"
        :score="props.scores.player3"
        :color="'#00f'"
      />
    </v-card-text>
  </v-card>
</template>
