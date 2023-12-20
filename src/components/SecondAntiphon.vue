<template>
  <SectionTemplate :id="useIdStore().SECOND_ANTIPHON_ID" :section="section" />
</template>

<script setup lang="ts">
import { useMainStore, useActorStore, useResponseStore, useIdStore } from '@/store';
import { reactive } from 'vue';
import SectionTemplate from './SectionTemplate.vue';
import { verse_factory, subHeading_factory, hymn_factory } from '@/factories';

const prayers = useMainStore()
const actors = useActorStore()
const responses = useResponseStore()
const PSALM_145_SUBHEADING = subHeading_factory(
  'Psalm 145 (146)',
  'Ψαλμὸς 145 (146)'
)
const VERSE1 = verse_factory(
  '1',
  'Praise the Lord, O my soul!',
  'Αἴνει ἡ ψυχή μου τὸν Κύριον'
)
const VERSE2 = verse_factory(
  '2',
  'While I live I will praise the Lord; I will sing praises to my God while I have my being.',
  'αἰνέσω Κύριον ἐν τῇ ζωῇ μου· ψαλῶ τῷ Θεῷ μου ἕως ὑπάρχω.'
)
const VERSE3 = verse_factory(
  '3',
  'Do not put your trust in princes, Nor in a son of man, in whom there is no help.',
  'Μὴ πεποίθατε ἐπ᾿ ἄρχοντας, ἐπὶ υἱοὺς ἀνθρώπων, οἷς οὐκ ἔστι σωτηρία.'
)
const VERSE4A = verse_factory(
  '4a',
  'His spirit departs, he returns to his earth',
  'Ἐξελεύσεται τὸ πνεῦμα αὐτοῦ, καὶ ἐπιστρέψει εἰς τὴν γῆν αὐτοῦ.'
)
const VERSE4B = verse_factory(
  '4b',
  "In that very day his plans perish.",
  'Ἐν ἐκείνῃ τῇ ἡμέρᾳ, ἀπολοῦνται πάντες οἱ διαλογισμοὶ αὐτοῦ.'
)
const VERSE5 = verse_factory(
  '5',
  "Happy is he who has the God of Jacob for his help, Whose hope is in the Lord his God.",
  "Μακάριος, οὗ ὁ Θεὸς Ἰακὼβ βοηθὸς αὐτοῦ, ἡ ἐλπὶς αὐτοῦ ἐπὶ Κύριον τὸν Θεὸν αὐτοῦ."
)
const VERSE6 = verse_factory(
  '6',
  "Who made heaven and earth, the sea, and all that is in them; Who keeps truth forever",
  "Τὸν ποιήσαντα τὸν οὐρανὸν καὶ τὴν γῆν, τὴν θάλασσαν καὶ πάντα τὰ ἐν αὐτοῖς. Τὸν φυλάσσοντα ἀλήθειαν εἰς τὸν αἰῶνα"
)
const VERSE7 = verse_factory(
  '7',
  "Who executes justice for the oppressed, Who gives food to the hungry. The Lord gives freedom to the prisoners.",
  "ποιοῦντα κρῖμα τοῖς ἀδικουμένοις, διδόντα τροφὴν τοῖς πεινῶσι. Κύριος λύει πεπεδημένους·"
)
const VERSE8 = verse_factory(
  '8',
  "The Lord opens the eyes of the blind; The Lord raises those who are bowed down; The Lord loves the righteous.",
  "Κύριος σοφοῖ τυφλούς· Κύριος ἀνορθοῖ κατεῤῥαγμένους· Κύριος ἀγαπᾷ δικαίους"
)
const VERSE9 = verse_factory(
  '9',
  "The Lord watches over the strangers; He relieves the fatherless and widow; But the way of the wicked He turns upside down.",
  "Κύριος φυλάσσει τοὺς προσηλύτους. Ὀρφανὸν καὶ χήραν ἀναλήψεται, καὶ ὁδὸν ἁμαρτωλῶν ἀφανιεῖ."
)
const VERSE10 = verse_factory(
  '10',
  "The Lord shall reign forever, Your God, O Zion, to all generations.",
  "Βασιλεύσει Κύριος εἰς τὸν αἰῶνα, ὁ Θεός σου Σιὼν εἰς γενεὰν καὶ γενεάν."
)
const ONLY_BEGOTTEN_SON_AND_LOGOS_OF_GOD = hymn_factory(
  'Only-begotten Son and Logos of God, being immortal, You condescended for our salvation to take flesh from the holy Theotokos and ever-virgin Mary and, without change, became man. Christ, our God, You were crucified and conquered death by death. Being one of the Holy Trinity, glorified with the Father and the Holy Spirit: Save us.',
  'Ὁ μονογενὴς Υἱὸς καὶ Λόγος τοῦ Θεοῦ, ἀθάνατος ὑπάρχων, καὶ καταδεξάμενος διὰ τὴν ἡμετέραν σωτηρίαν, σαρκωθῆναι ἐκ τῆς Ἁγίας Θεοτόκου καὶ ἀειπαρθένου Μαρίας, ἀτρέπτως ἐνανθρωπήσας, σταυρωθείς τε, Χριστὲ ὁ Θεός, θανάτῳ θάνατον πατήσας, Εἷς ὢν τῆς Ἁγίας Τριάδος συνδοξαζόμενος τῷ Πατρὶ καὶ τῷ Ἁγίῳ Πνεύματι, σῶσον ἡμᾶς.'
)
const section = reactive({
  title: {
    english: 'Second Antiphon',
    greek: 'Β΄ Στάσις Τυπικῶν'
  },
  body: [
    actors.CHOIR,
    prayers.GLORIA_PATRI_TOU,
    PSALM_145_SUBHEADING,
    VERSE1,
    VERSE2,
    VERSE3,
    VERSE4A,
    VERSE4B,
    VERSE5,
    VERSE6,
    VERSE7,
    VERSE8,
    VERSE9,
    VERSE10,
    prayers.NOW_AND_EVER_AND_UNTO_AGES_AMEN,
    ONLY_BEGOTTEN_SON_AND_LOGOS_OF_GOD,
    actors.DEACON,
    prayers.AGAIN_AND_AGAIN_IN_PEACE_LET_US_PRAY,
    responses.LORD_HAVE_MERCY,
    prayers.HELP_US_SAVE_US,
    responses.LORD_HAVE_MERCY,
    prayers.COMMEMORATING_THE_PANAGIA,
    responses.TO_YOU_O_LORD,
    prayers.FOR_YOU_O_GOD_ARE_GOOD_AND_LOVE_MANKIND,
    responses.AMEN
  ]
});
</script>

<style scoped></style>
