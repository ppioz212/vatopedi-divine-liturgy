<template>
  <SectionTemplate :section="section" />
</template>

<script setup lang="ts">
import { useActorStore } from '@/store';
import { reactive } from 'vue';
import SectionTemplate from './SectionTemplate.vue';
import { hymn_factory } from '@/factories'

const actors = useActorStore()
const THE_CHERUBIC_HYMN = hymn_factory(
  'Let us, who mystically represent the Cherubim and who sing the thrice-holy hymn to the life-creating Trinity, now lay aside every worldly care. So that we may receive the King of all.',
  'Οἱ τὰ Χερουβεὶμ μυστικῶς εἰκονίζοντες καὶ τῇ ζωοποιῷ Τριάδι τὸν τρισάγιον ὕμνον προσᾴδοντες, πᾶσαν νῦν βιοτικὴν ἀποθώμεθα μέριμναν. Ὡς τὸν Βασιλέα τῶν ὅλων ὑποδεξόμενοι.'
)
const section = reactive({
  title: {
    english: 'The Cherubic Hymn',
    greek: 'Χερουβικὸς Ὕμνος'
  },
  body: [
    actors.CHOIR,
    THE_CHERUBIC_HYMN,
  ]
});
</script>

<style scoped></style>
