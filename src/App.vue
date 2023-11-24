<template>
  <main>
    <h1>Thia Litourgia by Choir of Vatopedi Fathers</h1>
    <LitanyOfPeace />
    <FirstAntiphon />
    <SecondAntiphon />
    <TheBeatitudes />
    <LitanyOfCompletion />
  </main>
</template>

<script setup lang="ts">
import LitanyOfPeace from './components/LitanyOfPeace.vue';
import FirstAntiphon from './components/FirstAntiphon.vue';
import SecondAntiphon from './components/SecondAntiphon.vue';
import TheBeatitudes from './components/TheBeatitudes.vue';
import LitanyOfCompletion from './components/LitanyOfCompletion.vue';

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
