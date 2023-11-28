<template>
  <div class="liturgy">
    <div class="header">
      <div class="greek">
        <h2> {{ section.title.greek }}</h2>
        <!-- <section-subheadings :section="section"></section-subheadings> -->
      </div>
      <div class="english">
        <h2>{{ section.title.english }}</h2>
        <!-- <section-subheadings :section="section"></section-subheadings> -->
      </div>
    </div>
    <div class="body" v-for="(element, index) in section.body" :key="index">
      <div class="greek">
        <p class="text" :class="{
          italics: element.isItalics, actor: element.isActor, 'sub-heading': element.isSubHeading,
          hymn: element.isHymn, 'chap-verse': element.isChapVerse, 'inaudible': element.isInaudible
        }">
          <span v-show="element.verseNum != null" class="verse">Στίχος {{ element.verseNum }}: </span>
          {{ element.greek.text }}
        </p>
      </div>
      <div class="english">
        <p class="text" :class="{
          italics: element.isItalics, actor: element.isActor, 'sub-heading': element.isSubHeading,
          hymn: element.isHymn, 'chap-verse': element.isChapVerse, 'inaudible': element.isInaudible
        }">
          <span v-show="element.verseNum != null" class="verse">Verse {{ element.verseNum }}: </span>
          {{ element.english.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import SectionSubheadings from './SectionSubheadings.vue';
defineProps(['section'])
</script>

<style>
:root {
  --sub-heading-color: red;
}

.body .text {
  margin-top: 8px;
  margin-bottom: 8px;
}

.liturgy .greek {
  border-right: 1px solid black;
}

.liturgy>.header,
.liturgy>.body {
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
}

.liturgy .greek,
.liturgy .english {
  width: 50%;
  padding: 0 5px;
}

.liturgy {
  text-align: center;
  margin: 0;
}

.italics {
  font-style: italic;
}

.text {
  font-weight: 600;
  text-indent: 10%;
  text-align: left;
}

.actor {
  font-size: 90%;
  color: var(--sub-heading-color);
  text-align: left;
  font-weight: 600;
  text-indent: 0;
}

.sub-heading,
.verse {
  color: var(--sub-heading-color);
  font-weight: 600;
}

.sub-heading {
  text-align: center;
  text-indent: 0;
}

.hymn {
  text-indent: 0;
}

.hymn::first-letter {
  initial-letter: 2;
  color: var(--sub-heading-color);
  font-family: LiberationSerif-Regular;
  font-size: 200%;
  font-weight: 300;
  padding-right: 4px;
}

.chap-verse {
  font-style: italic;
  color: var(--sub-heading-color);
  font-size: 85%;
  text-align: center;
  text-indent: 0;
}

.inaudible {
  font-size: 80%;
}
</style>
