<template>
  <main>
    <h1>Thia Litourgia by Choir of Vatopedi Fathers</h1>
    <LitanyOfPeace />
    <FirstAntiphon />
    <SecondAntiphon/>
    <LitanyOfCompletion />
  </main>
</template>

<script setup lang="ts">
import LitanyOfPeace from './components/LitanyOfPeace.vue';
import LitanyOfCompletion from './components/LitanyOfCompletion.vue';
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

.body p {
  margin-top: 8px;
  margin-bottom: 8px;
}

.liturgy .greek {
  border-right: 1px solid black;
}

.liturgy>div {
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
}

.liturgy div>div {
  width: 50%;
  padding: 0 5px;
}

.liturgy {
  text-align: center;
  margin: 0;
  /* display: flex; */
}

.italics {
  font-style: italic;
}

/* .liturgy section:nth-child(1) {
  border-right: 1px solid black;
  margin: 10px;
  padding: 0 10px;
} */

h2 {
  color: brown;
  font-size: 1.1em;
}

.text {
  font-weight: 600;
}

.actor {
  color: red;
  text-align: left;
  font-weight: 600;
}
</style>
