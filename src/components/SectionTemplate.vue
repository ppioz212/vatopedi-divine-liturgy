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
    <div class="body" v-for="(element, index) in section.body" :key="index">
      <div class="greek">
        <p class="text"
          :class="{ italics: element.isItalics, actor: element.isActor, 'sub-heading': element.isSubHeading, hymn: element.isHymn }">
          <span v-show="element.verseNum != null" class="verse">Στίχος {{ element.verseNum }}: </span>
          {{ element.greek.text }}
        </p>
      </div>
      <div class="english">
        <p class="text"
          :class="{ italics: element.isItalics, actor: element.isActor, 'sub-heading': element.isSubHeading, hymn: element.isHymn }">
          <span v-show="element.verseNum != null" class="verse">Verse {{ element.verseNum }}: </span>
          {{ element.english.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps(['section'])
</script>

<style scoped>
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

.text {
  font-weight: 600;
}

.actor {
  font-size: 90%;
  color: red;
  text-align: left;
}

.verse {
  color: red;
  font-weight: 600;
}

.sub-heading {
  color: red;
}

p.hymn::first-letter {
  initial-letter: 2;
  color: red;
  font-family: LiberationSerif-Regular;
  font-size: 200%;
  font-weight: 300;
  padding-right: 4px;
}
</style>
