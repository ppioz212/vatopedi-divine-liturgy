<template>
  <SectionTemplate :id="useIdStore().THE_EPISTLE_ID" :section="section" />
</template>

<script setup lang="ts">
import { useMainStore, useActorStore, useIdStore } from '@/store';
import { reactive } from 'vue';
import SectionTemplate from './SectionTemplate.vue';
import { hymn_factory, text_factory, chap_verse_factory } from '@/factories'

const main = useMainStore()
const actors = useActorStore()
const PROKEIMENON_PROUNOUNCEMENT = text_factory(
  "The prokeminon of the Epistle in the 3rd Tone",
  "Προκείμενον τοῦ Ἀποστόλου ἦχος Τρίτος"
)
const PROKEIMENON_INTRO = text_factory(
  "My soul magnifies the Lord",
  "Μεγαλύνει ἡ ψυχή μου τὸν Κύριον."
)
const PROKEIMENON_OF_THE_EPISTLE = hymn_factory(
  "My soul magnifies the Lord, and my spirit rejoices in my God my Saviour.",
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
const CHAP_VERSE_SUBHEADING = chap_verse_factory("Phil. 2:5-9","Φιλ. 2:5-9")
const PHIL_2_VERSE_5_to_9 = text_factory(
  "Have this mind among yourselves, which is yours in Christ Jesus, who, though he was in the form of God, did not count equality with God a thing to be grasped, but emptied himself, by taking the form of a servant,being born in the likeness of men. And being found in human form, he humbled himself by becoming obedient to the point of death, even death on a cross. Therefore God has highly exalted him and bestowed on him the name that is above every name, so that at the name of Jesus every knee should bow, in heaven and on earth and under the earth, and every tongue confess that Jesus Christ is Lord, to the glory of God the Father.",
  "Ἀδελφοί, τοῦτο φρονείσθω ἐν ὑμῖν ὃ καὶ ἐν Χριστῷ Ἰησοῦ, ὃς ἐν μορφῇ Θεοῦ ὑπάρχων, οὐχ ἁρπαγμὸν ἡγήσατο τὸ εἶναι ἴσα Θεῷ, ἀλλ᾿ ἑαυτὸν ἐκένωσε μορφὴν δούλου λαβών, ἐν ὁμοιώματι ἀνθρώπων γενόμενος· καὶ σχήματι εὑρεθεὶς ὡς ἄνθρωπος, ἐταπείνωσεν ἑαυτὸν γενόμενος ὑπήκοος μέχρι θανάτου, θανάτου δὲ σταυροῦ. Διὸ καὶ ὁ Θεὸς αὐτὸν ὑπερύψωσε καὶ ἐχαρίσατο αὐτῷ ὄνομα τὸ ὑπὲρ πᾶν ὄνομα, ἵνα ἐν τῷ ὀνόματι Ἰησοῦ πᾶν γόνυ κάμψῃ ἐπουρανίων καὶ ἐπιγείων καὶ καταχθονίων, καὶ πᾶσα γλῶσσα ἐξομολογήσηται ὅτι Κύριος Ἰησοῦς Χριστός, εἰς δόξαν Θεοῦ Πατρός.."
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
    CHAP_VERSE_SUBHEADING,
    PHIL_2_VERSE_5_to_9,
    actors.PRIEST,
    main.PEACE_BE_WITH_YOU
  ]
});
</script>

<style scoped></style>
