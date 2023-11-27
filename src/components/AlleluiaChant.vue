<template>
  <SectionTemplate id="alleluia" :section="section" />
</template>

<script setup lang="ts">
import { useActorStore } from '@/store';
import { reactive } from 'vue';
import SectionTemplate from './SectionTemplate.vue';
import { text_factory } from '@/factories'

const actors = useActorStore()
const ALLELUIA_PRONOUNCEMENT = text_factory(
  "Alleluia chanted in the 2nd Tone.",
  "Ἀλληλούϊα, ἦχος πλάγιος τοῦ Δευτέρου."
)
const ALLELUIA = text_factory(
  "Alleluia, Alleluia, Alleluia.",
  "Ἀλληλούϊα, Ἀλληλούϊα, Ἀλληλούϊα."
)
const RESPONSE_1 = text_factory(
  "*Listen, thy victim, and thou shalt cry thy own, and thy people's fault, and thy father's household, and the King of thy beauty shall desire.*",
  "Ἄκουσον, θύγατερ, καὶ ἴδε, καὶ κλῖνον τὸ οὖς σου, καὶ ἐπιλάθου τοῦ λαοῦ σου, καὶ τοῦ οἴκου τοῦ πατρός σου, καὶ ἐπιθυμήσει ὁ Βασιλεὺς τοῦ κάλλους σου. "
)
const RESPONSE_2 = text_factory(
  "*Your face is a procession of the rich of the people.*",
  "Τὸ πρόσωπόν σου λιτανεύσουσιν οἱ πλούσιοι τοῦ λαοῦ."
)
const section = reactive({
  title: {
    english: 'Alleluia',
    greek: 'Ἀλληλούϊα'
  },
  body: [
    actors.READER,
    ALLELUIA_PRONOUNCEMENT,
    actors.CHOIR,
    ALLELUIA,
    actors.READER,
    RESPONSE_1,
    actors.CHOIR,
    ALLELUIA,
    actors.READER,
    RESPONSE_2,
    actors.CHOIR,
    ALLELUIA
  ]
});
</script>

<style scoped></style>
