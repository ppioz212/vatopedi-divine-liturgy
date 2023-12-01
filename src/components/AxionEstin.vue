<template>
  <SectionTemplate :id="useIdStore().AXION_ESTIN_ID" :section="section" />
</template>

<script setup lang="ts">
import { useActorStore, useIdStore } from '@/store';
import { reactive } from 'vue';
import SectionTemplate from './SectionTemplate.vue';
import { hymn_factory } from '@/factories'

const actors = useActorStore();
const axion_estin = hymn_factory(
  'It is truly right to bless you, Theotokos, ever blessed, most pure, and Mother of our God. More honorable than the Cherubim, and beyond compare more glorious than the Seraphim, without corruption you gave birth to God the Logos. We magnify you, the true Theotokos.',
  'Ἄξιόν ἐστιν ὡς ἀληθῶς μακαρίζειν σε τὴν Θεοτόκον, τὴν ἀειμακάριστον καὶ παναμώμητον καὶ μητέρα τοῦ Θεοῦ ἡμῶν. Τὴν τιμιωτέραν τῶν Χερουβεὶμ καὶ ἐνδοξοτέραν ἀσυγκρίτως τῶν Σεραφείμ, τὴν ἀδιαφθόρως Θεὸν Λόγον τεκοῦσαν· τὴν ὄντως Θεοτόκον, σὲ'
)

const section = reactive({
  title: {
    english: 'It is Truly Right to Bless You',
    greek: 'Ἄξιόν ἐστιν'
  },
  body: [
    actors.CHOIR,
    axion_estin
  ]
});
</script>

<style scoped></style>
