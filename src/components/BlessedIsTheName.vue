<template>
  <SectionTemplate :id="useIdStore().BLESSED_BE_THE_NAME_OF_THE_LORD_ID" :section="section" />
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useActorStore, useResponseStore, useIdStore } from '@/store';
import SectionTemplate from './SectionTemplate.vue';
import { hymn_factory } from '@/factories';

const actors = useActorStore();
const responses = useResponseStore();
const HYMN_1 = hymn_factory(
  'Blessed be the name of the Lord, both now and to the ages. (twice)',
  'Εἴη τὸ ὄνομα Κυρίου εὐλογημένον, ἀπὸ τοῦ νῦν καὶ ἕως τοῦ αἰῶνος. (δίς)'
);
const HYMN_2 = hymn_factory(
  'Blessed be the name of the Lord, both now and to the ages.',
  'Τὸ ὄνομα Κυρίου εἴη εὐλογημένον, ἀπὸ τοῦ νῦν καὶ ἕως τοῦ αἰῶνος.'
);
const section = reactive({
  title: {
    english: 'The Final Wish',
    greek: 'Ὀπισθάμβωνος εὐχή'
  },
  body: [
    responses.AMEN,
    actors.CHOIR,
    HYMN_1,
    HYMN_2,
  ]
});
</script>

<style></style>
