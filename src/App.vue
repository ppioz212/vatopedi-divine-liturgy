<template>
  <main>
    <h1>Thia Litourgia by Choir of Vatopedi Fathers</h1>
    <LitanyOfPeace />
    <FirstAntiphon />
    <SecondAntiphon/>
    <SectionFourteenPlirotika />
  </main>
</template>

<script setup lang="ts">
import LitanyOfPeace from './components/LitanyOfPeace.vue';
import SectionFourteenPlirotika from './components/LitanyOfCompletion.vue';
import FirstAntiphon from './components/FirstAntiphon.vue';
import SecondAntiphon from './components/SecondAntiphon.vue';
</script>

<style>
body {
  margin: 0;
  background-color: beige;
  font-family: Arial, Helvetica, sans-serif;
}

main {
  text-align: center;
}

h2 {
  color: brown;
  font-size: 1.1em;
}
</style>
