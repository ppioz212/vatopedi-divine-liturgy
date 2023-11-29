<template>
  <SectionTemplate :section="section" />
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useMainStore, useActorStore, useResponseStore } from '@/store';
import SectionTemplate from './SectionTemplate.vue';

const prayers = useMainStore()
const actors = useActorStore()
const responses = useResponseStore()
const LET_US_COMPLETE_OUR_PRAYER = {
  english: {
    text: 'Let us complete our prayer to the Lord.'
  },
  greek: {
    text: 'Πληρώσωμεν τὴν δέησιν ἡμῶν τῷ Κυρίῳ.',
  }
}
const FOR_THE_PRECIOUS_GIFTS = {
  english: {
    text: 'For the precious Gifts here presented, let us pray to the Lord.'
  },
  greek: {
    text: 'Ὑπὲρ τῶν προτεθέντων τιμίων δώρων, τοῦ Κυρίου δεηθῶμεν.',
  }
}
const THROUGH_THE_MERCIES_OF_YOUR_ONLY_BEGOTTEN_SON = {
  english: {
    text: 'Through the mercies of Your only-begotten Son, with Whom You are blessed, together with Your all-holy, good, and life-creating Spirit, now and forever and to the ages of ages.'
  },
  greek: {
    text: "Διὰ τῶν οἰκτιρμῶν τοῦ μονογενοῦς σου Υἱοῦ, μεθ' οὗ εὐλογητὸς εἶ, σὺν τῷ Παναγίῳ καὶ ἀγαθῷ καὶ ζωοποιῷ σου Πνεύματι, νῦν καὶ ἀεὶ καὶ εἰς τοὺς αἰῶνας τῶν αἰώνων."
  }
}
const LET_US_LOVE_ONE_ANOTHER = {
  english: {
    text: 'Let us love one another, that with one mind we may confess.'
  },
  greek: {
    text: "Ἀγαπήσωμεν ἀλλήλους, ἵνα ἐν ὁμονοίᾳ ὁμολογήσωμεν."
  }
}
const THE_TRINITY_ONE_ESSENCE_UNDIVIDED = {
  isHymn: true,
  english: {
    text: 'Father, Son, and Holy Spirit: Trinity, one in essence and undivided.'
  },
  greek: {
    text: "Πατέρα, Υἱὸν καὶ ἅγιον Πνεῦμα, Τριάδα ὁμοούσιον καὶ ἀχώριστον."
  }
}
const THE_DOORS_THE_DOORS_OF_WISDOM = {
    english: {
    text: 'The doors! The doors! In wisdom, let us be attentive!'
  },
  greek: {
    text: "Τὰς θύρας, τὰς θύρας· ἐν σοφίᾳ πρόσχωμεν."
  }
}
const section = reactive({
  title: {
    english: 'The Litany Of Completion',
    greek: 'Ἀπολυτίκια, εὐχὴ Κολλύβων'
  },
  body: [
    actors.DEACON,
    LET_US_COMPLETE_OUR_PRAYER,
    responses.LORD_HAVE_MERCY,
    FOR_THE_PRECIOUS_GIFTS,
    responses.LORD_HAVE_MERCY,
    prayers.FOR_THIS_HOLY_HOUSE,
    responses.LORD_HAVE_MERCY,
    prayers.FOR_DELIVERANCE_DANGER,
    responses.LORD_HAVE_MERCY,
    prayers.HELP_US_SAVE_US,
    responses.LORD_HAVE_MERCY,
    prayers.THAT_THE_WHOLE_DAY_MAY_BE,
    actors.CHOIR,
    responses.GRANT_THIS_O_LORD,
    prayers.FOR_AN_ANGEL_OF_PEACE,
    responses.GRANT_THIS_O_LORD,
    prayers.FOR_PARDON_REMISSION_OF_SINS,
    responses.GRANT_THIS_O_LORD,
    prayers.FOR_THAT_WHICH_IS_GOOD,
    responses.GRANT_THIS_O_LORD,
    prayers.THAT_WE_MAY_COMPLETE_REMAIN_TIME,
    responses.GRANT_THIS_O_LORD,
    prayers.A_CHRISTIAN_ENDING,
    responses.GRANT_THIS_O_LORD,
    prayers.COMMEMORATING_THE_PANAGIA,
    responses.TO_YOU_O_LORD,
    actors.PRIEST,
    THROUGH_THE_MERCIES_OF_YOUR_ONLY_BEGOTTEN_SON,
    responses.AMEN,
    actors.PRIEST,
    prayers.PEACE_BE_WITH_YOU_ALL,
    responses.AND_WITH_YOUR_SPIRIT,
    actors.DEACON,
    LET_US_LOVE_ONE_ANOTHER,
    actors.CHOIR,
    THE_TRINITY_ONE_ESSENCE_UNDIVIDED,
    actors.DEACON,
    THE_DOORS_THE_DOORS_OF_WISDOM
  ]
});
</script>

<style></style>
