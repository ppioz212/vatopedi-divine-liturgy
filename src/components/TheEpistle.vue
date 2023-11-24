<template>
  <SectionTemplate :section="section" />
</template>

<script setup lang="ts">
import { useMainStore, useActorStore } from '@/store';
import { reactive } from 'vue';
import SectionTemplate from './SectionTemplate.vue';
import { hymn_factory, text_factory } from '@/factories'

const main = useMainStore()
const actors = useActorStore()
const PROKEIMENON_PROUNOUNCEMENT = text_factory(
  "The prokeminon of the Epistle in the 3rd Tone",
  "Προκείμενον τοῦ Ἀποστόλου ἦχος Τρίτος"
)
const PROKEIMENON_INTRO = text_factory(
  "*My soul magnifies the Lord*",
  "Μεγαλύνει ἡ ψυχή μου τὸν Κύριον."
)
const PROKEIMENON_OF_THE_EPISTLE = hymn_factory(
  "*My soul magnifies the Lord, and my spirit rejoices in God my Saviour.*",
  "Μεγαλύνει ἡ ψυχή μου τὸν Κύριον, καὶ ἠγαλλίασε τὸ πνεῦμα μου ἐπὶ τῷ Θεῷ τῷ Σωτῆρί μου."
)
const HYMN_RESPONSE = text_factory(
  "*That he saw the humiliation of this servant, that he was blessed with me for a generation.*",
  "Ὅτι ἐπέβλεψεν ἐπὶ τὴν ταπείνωσιν τῆς δούλης αὐτοῦ·ἰδοὺ γὰρ ἀπὸ τοῦ νῦν μακαριοῦσί με πᾶσαι αἱ γενεαί."
)
const THE_READING_IS_FROM_PHILLIPIANS = text_factory(
  "The Reading is from St. Pauls letter to the Phillipians.",
  "Πρὸς Φιλιππησίους Ἐπιστολῆς Παύλου τὸ Ἀνάγνωσμα."
)
const section = reactive({
  title: {
    english: 'The Epistle',
    greek: 'τοῦ Ἀποστόλου'
  },
  body: [
    actors.READER,
    PROKEIMENON_PROUNOUNCEMENT,
    actors.DEACON,
    main.LET_US_ATTEND,
    actors.READER,
    PROKEIMENON_INTRO,
    actors.CHOIR,
    PROKEIMENON_OF_THE_EPISTLE,
    HYMN_RESPONSE,
    PROKEIMENON_OF_THE_EPISTLE,
    actors.DEACON,
    main.SOPHIA,
    actors.READER,
    THE_READING_IS_FROM_PHILLIPIANS,
    actors.DEACON,
    main.LET_US_ATTEND,
    actors.READER,
    main.GLORIA_PATRI_TOU,
    main.NOW_AND_EVER_AND_UNTO_AGES_AMEN,
  ]
});
</script>

<style scoped></style>
