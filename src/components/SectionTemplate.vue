<template>
  <div class="liturgy">
    <div class="header">
      <div class="greek">
        <h2> {{ section.title.greek }}</h2>
      </div>
      <div class="english">
        <h2>{{ section.title.english }}</h2>
      </div>
    </div>
    <div class="body" v-for="(bodySection, index) in section.body" :key="index">
      <div class="greek">
        <p class="actor">{{ bodySection.greek.actor }}</p>
        <p class="text" :class="{ italics: bodySection.isItalics }">
          <span v-show="bodySection.verseNum != null" class="verse">Στίχος {{ bodySection.verseNum }}: </span>
          {{ bodySection.greek.text }}
        </p>
      </div>
      <div class="english">
        <p class="actor">{{ bodySection.english.actor }}</p>
        <p class="text" :class="{ italics: bodySection.isItalics }">
          <span v-show="bodySection.verseNum != null" class="verse">Verse {{ bodySection.verseNum }}: </span>
          {{ bodySection.english.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['section'])
</script>

<style scoped>
</style>
