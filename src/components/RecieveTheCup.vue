<template>
  <SectionTemplate :section="section" />
</template>

<script setup lang="ts">
import { useActorStore } from '@/store';
import { reactive } from 'vue';
import SectionTemplate from './SectionTemplate.vue';
import { hymn_factory } from '@/factories'

const actors = useActorStore();

const hymn = hymn_factory(
  'I receive the cup of salvation, and I call on the name of the Lord.',
  'Ποτήριον σωτηρίου λήψομαι, καὶ τὸ ὄνομα Κυρίου ἐπικαλέσομαι.'
)

const section = reactive({
  title: {
    english: 'I Recieve the Cup of Salvation',
    greek: 'Ποτήριον σωτηρίου λήψομαι'
  },
  body: [
    actors.CHOIR,
    hymn
  ]
});
</script>

<style scoped></style>
