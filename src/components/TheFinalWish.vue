<template>
  <SectionTemplate :id="useIdStore().THE_FINAL_WISH_ID" :section="section" />
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useMainStore, useActorStore, useResponseStore, useIdStore } from '@/store';
import SectionTemplate from './SectionTemplate.vue';
import { text_factory } from '@/factories';

const prayers = useMainStore();
const actors = useActorStore();
const responses = useResponseStore();

const section = reactive({
  title: {
    english: 'The Final Wish',
    greek: 'Ὀπισθάμβωνος εὐχή'
  },
  body: [
    actors.PRIEST, prayers.LET_US_GO_FORTH_IN_PEACE,
    responses.IN_THE_NAME_OF_THE_LORD,
    actors.DEACON, prayers.LET_US_PRAY_TO_THE_LORD,
    responses.LORD_HAVE_MERCY_X3,

  ]
});
</script>

<style></style>
