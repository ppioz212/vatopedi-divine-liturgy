<template>
  <main>
    <h1>Thia Litourgia by Choir of Vatopedi Fathers</h1>
    <div>
      <nav>
        <a href="#litany-of-peace">Litany of Peace</a>
        <a href="#first-antiphon">First Antiphon</a>
        <a href="#second-antiphon">Second Antiphon</a>
        <a href="#the-beatitudes">The Beatitudes</a>
        <a href="#small-entrance">Small Entrance</a>
        <a href="#trisagion-hymn">Trisagion Hymn</a>
        <a href="#dynamis-trisagion-hymn">Dynamis Trisagion Hymn</a>
        <a href="#the-epistle">The Epistle</a>
        <a href="#alleluia-chant">Alleluia Chant</a>
        <a href="#the-gospel">The Gospel</a>
        <a href="#the-litany-of-supplication-and-catechumens">The Litany of Supplication and Catechumens</a>
        <a href="#cherubic-hymn">Cherubic Hymn</a>
        <a href="#litany-of-completion">Litany of Completion</a>
        <a href="#the-symbol-of-faith">The Symbol of Faith</a>
        <a href="#holy-anaphora">Holy Anaphora</a>
        <a href="#axion-estin">Axion Estin</a>
        <a href="#recieve-the-cup">Recieve the Cup</a>
        <a href="#final-litany">Final Litany</a>
      </nav>
      <body>
        <LitanyOfPeace />
        <FirstAntiphon />
        <SecondAntiphon />
        <TheBeatitudes />
        <SmallEntrance />
        <TrisagionHymn />
        <DynamisTrisagionHymn />
        <TheEpistle />
        <AlleluiaChant />
        <TheGospel />
        <TheLitanyOfSupplicationAndCatechumens />
        <CherubicHymn />
        <LitanyOfCompletion />
        <TheSymbolOfFaith />
        <holy-anaphora></holy-anaphora>
        <axion-estin></axion-estin>
        <recieve-the-cup></recieve-the-cup>
        <final-litany></final-litany>
      </body>
    </div>
  </main>
</template>

<script setup lang="ts">
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

</script>

<style>
:root {
  --heading: black;
  --section-heading: brown;
  --app-background: rgb(248, 236, 228);
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
