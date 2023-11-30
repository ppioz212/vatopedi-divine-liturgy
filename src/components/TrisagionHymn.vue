<template>
  <SectionTemplate :section="section" />
</template>

<script setup lang="ts">
import { useMainStore, useActorStore, useResponseStore } from '@/store';
import { reactive } from 'vue';
import SectionTemplate from './SectionTemplate.vue';
import { hymn_factory, text_factory } from '@/factories'

const prayers = useMainStore()
const actors = useActorStore()
const responses = useResponseStore()
const TRISAGION_HYMN = hymn_factory(
  "Holy God, Holy Mighty, Holy Immortal, have mercy on us. (3)",
  "Ἅγιος ὁ Θεός, ἅγιος Ἰσχυρός, ἅγιος Ἀθάνατος, ἐλέησον ἡμᾶς. (ἐκ γʹ)")
const AGIOS_ATHANATOS_ELEISON_NYMAS = text_factory(
  "Holy Immortal, have mercy on us.",
  "Ἅγιος Ἀθάνατος, ἐλέησον ἡμᾶς."
)
const section = reactive({
  title: {
    english: 'The Trisagion Hymn',
    greek: 'Τρισάγιος Ὕμνος'
  },
  body: [
    actors.DEACON,
    prayers.LET_US_PRAY_TO_THE_LORD,
    responses.LORD_HAVE_MERCY,
    actors.PRIEST,
    prayers.FOR_YOU_OUR_GOD_ARE_HOLY_AND_OFFER_GLORY,
    actors.DEACON,
    prayers.AND_UNTO_AGES_OF_AGES,
    actors.CHOIR,
    responses.AMEN,
    TRISAGION_HYMN,
    prayers.GLORIA_PATRI_EE_NOW_AND_EVER_AMEN,
    AGIOS_ATHANATOS_ELEISON_NYMAS
  ]
});
</script>

<style scoped></style>
