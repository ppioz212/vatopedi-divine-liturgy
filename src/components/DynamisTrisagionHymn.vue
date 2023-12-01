<template>
  <SectionTemplate :id="useIdStore().DYNAMIS_TRISAGION_HYMN_ID" :section="section" />
</template>

<script setup lang="ts">
import { useActorStore, useIdStore } from '@/store';
import { reactive } from 'vue';
import SectionTemplate from './SectionTemplate.vue';
import { hymn_factory, text_factory } from '@/factories'

const actors = useActorStore()
const TRISAGION_HYMN = hymn_factory(
  "Holy God, Holy Mighty, Holy Immortal, have mercy on us.",
  "Ἅγιος ὁ Θεός, ἅγιος Ἰσχυρός, ἅγιος Ἀθάνατος, ἐλέησον ἡμᾶς.")
const DYNAMIS = text_factory("Dynamis.", "Δύναμις.")
const section = reactive({
  title: {
    english: 'Dynamis Trisagion Hymn',
    greek: 'Δύναμις Τρισαγίου  Ὕμνος'
  },
  body: [
    actors.DEACON,
    DYNAMIS,
    actors.READER,
    TRISAGION_HYMN
  ]
});
</script>

<style scoped></style>
