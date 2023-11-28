<template>
  <main>
    <h1>Thia Litourgia by Choir of Vatopedi Fathers</h1>
    <a href="#alleluia">Alleluia</a>
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
