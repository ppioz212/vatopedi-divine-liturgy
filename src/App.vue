<template>
  <main>
    <h1>Thia Litourgia by Choir of Vatopedi Fathers</h1>
    <div class="main-body">
      <nav>
        <a v-for="link in links" :key="link.id" :href="`#${link.id}`">{{ link.label }}</a>
      </nav>

      <body>
        <litany-of-peace></litany-of-peace>
        <first-antiphon></first-antiphon>
        <second-antiphon></second-antiphon>
        <the-beatitudes></the-beatitudes>
        <small-entrance></small-entrance>
        <trisagion-hymn></trisagion-hymn>
        <dynamis-trisagion-hymn></dynamis-trisagion-hymn>
        <the-epistle></the-epistle>
        <alleluia-chant></alleluia-chant>
        <the-gospel></the-gospel>
        <the-litany-of-supplication-and-catechumens></the-litany-of-supplication-and-catechumens>
        <cherubic-hymn></cherubic-hymn>
        <litany-of-completion></litany-of-completion>
        <the-symbol-of-faith></the-symbol-of-faith>
        <holy-anaphora></holy-anaphora>
        <axion-estin></axion-estin>
        <recieve-the-cup></recieve-the-cup>
        <final-litany></final-litany>
      </body>
    </div>
    <ScrollTopButton />
  </main>
</template>

<script setup lang="ts">
import ScrollTopButton from './components/ScrollTopButton.vue';
import LitanyOfPeace from './components/LitanyOfPeace.vue';
import FirstAntiphon from './components/FirstAntiphon.vue';
import SecondAntiphon from './components/SecondAntiphon.vue';
import TheBeatitudes from './components/TheBeatitudes.vue';
import SmallEntrance from './components/SmallEntrance.vue';
import TrisagionHymn from './components/TrisagionHymn.vue';
import DynamisTrisagionHymn from './components/DynamisTrisagionHymn.vue';
import TheEpistle from './components/TheEpistle.vue';
import AlleluiaChant from './components/AlleluiaChant.vue';
import TheGospel from './components/TheGospel.vue';
import TheLitanyOfSupplicationAndCatechumens from './components/TheLitanyOfSupplicationAndCatechumens.vue';
import CherubicHymn from './components/CherubicHymn.vue';
import LitanyOfCompletion from './components/LitanyOfCompletion.vue';
import TheSymbolOfFaith from './components/TheSymbolOfFaith.vue';
import HolyAnaphora from './components/HolyAnaphora.vue';
import AxionEstin from './components/AxionEstin.vue';
import RecieveTheCup from './components/RecieveTheCup.vue'
import FinalLitany from './components/FinalLitany.vue'

import { ref } from 'vue';
import { useIdStore } from './store';

const ids = useIdStore();
const links = ref([
  { id: ids.LITANY_OF_PEACE_ID, label: 'Litany of Peace' },
  { id: ids.FIRST_ANTIPHON_ID, label: 'First Antiphon' },
  { id: ids.SECOND_ANTIPHON_ID, label: 'Second Antiphon' },
  { id: ids.THE_BEATITUDES_ID, label: 'The Beatitudes' },
  { id: ids.SMALL_ENTRANCE_ID, label: 'Small Entrance' },
  { id: ids.TRISAGION_HYMN_ID, label: 'Trisagion Hymn' },
  { id: ids.DYNAMIS_TRISAGION_HYMN_ID, label: 'Dynamis Trisagion Hymn' },
  { id: ids.THE_EPISTLE_ID, label: 'The Epistle' },
  { id: ids.ALLELUIA_CHANT_ID, label: 'Alleluia Chant' },
  { id: ids.THE_GOSPEL_ID, label: 'The Gospel' },
  { id: ids.THE_LITANY_OF_SUPPLICATION_AND_CATECHUMENS_ID, label: 'The Litany of Supplication and Catechumens' },
  { id: ids.CHERUBIC_HYMN_ID, label: 'Cherubic Hymn' },
  { id: ids.LITANY_OF_COMPLETION_ID, label: 'Litany of Completion' },
  { id: ids.THE_SYMBOL_OF_FAITH_ID, label: 'The Symbol of Faith' },
  { id: ids.HOLY_ANAPHORA_ID, label: 'Holy Anaphora' },
  { id: ids.AXION_ESTIN_ID, label: 'Axion Estin' },
  { id: ids.RECIEVE_THE_CUP_ID, label: 'Recieve the Cup' },
  { id: ids.FINAL_LITANY_ID, label: 'Final Litany' },
])

</script>

<style>
:root {
  --heading: black;
  --section-heading: brown;
  --app-background: rgb(248, 236, 228);
  --anchor-background: rgb(225, 210, 202)
}

.main-body {
  display: flex;
}

nav {
  flex-basis: 200px;
  position: sticky;
}

a {
  display: block;
  color: black;
  background-color: var(--anchor-background);
  padding: 0.3em;
  text-decoration: none;
  text-transform: uppercase;
}

a:hover {
  background-color: var(--section-heading);
  color: white;
}

a:active {
  background-color: black;
}

h1 {
  color: var(--heading);
}

h2 {
  color: var(--section-heading);
  font-size: 1.2em;
}

body {
  margin: 0;
  background-color: var(--app-background);
  font-family: Arial, Helvetica, sans-serif;
}

main {
  text-align: center;
}
</style>
