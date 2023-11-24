<template>
  <SectionTemplate :section="section" />
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useMainStore } from '@/store';
import SectionTemplate from './SectionTemplate.vue';

const main = useMainStore()
const GRANT_THIS_O_LORD = {
  isItalics: true,
  english: {
    text: '( Grant this, O Lord. )'
  },
  greek: {
    text: '( Παράσχου, Κύριε. )'
  }
}
const LET_US_COMPLETE_OUR_PRAYER = {
  english: {
    actor: main.DEACON_ACTOR_ENG,
    text: 'Let us complete our prayer to the Lord.'
  },
  greek: {
    actor: main.DEACON_ACTOR_GREEK,
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
const THAT_THE_WHOLE_DAY_MAY_BE = {
  english: {
    text: 'That the whole day may be perfect, holy, peaceful, and sinless, let us ask the Lord.'
  },
  greek: {
    text: 'Τὴν ἡμέραν πᾶσαν τελείαν, ἁγίαν, εἰρηνικὴν καὶ ἀναμάρτητον, παρὰ τοῦ Κυρίου αἰτησώμεθα.',
  }
}
const FOR_AN_ANGEL_OF_PEACE = {
  english: {
    text: 'For an angel of peace, a faithful guide, a guardian of our souls and bodies, let us ask the Lord.'
  },
  greek: {
    text: 'Ἄγγελον εἰρήνης, πιστὸν ὁδηγόν, φύλακα τῶν ψυχῶν καὶ τῶν σωμάτων ἡμῶν, παρὰ τοῦ Κυρίου αἰτησώμεθα.',
  }
}
const FOR_PARDON_REMISSION_OF_SINS = {
  english: {
    text: 'For pardon and remission of our sins and transgressions, let us ask the Lord.'
  },
  greek: {
    text: 'Συγγνώμην καὶ ἄφεσιν τῶν ἁμαρτιῶν καὶ τῶν πλημμελημάτων ἡμῶν, παρὰ τοῦ Κυρίου αἰτησώμεθα.',
  }
}
const FOR_THAT_WHICH_IS_GOOD = {
  english: {
    text: 'For that which is good and beneficial for our souls, and for peace for the world, let us ask the Lord.'
  },
  greek: {
    text: 'Τὰ καλὰ καὶ συμφέροντα ταῖς ψυχαῖς ἡμῶν καὶ εἰρήνην τῷ κόσμῳ, παρὰ τοῦ Κυρίου αἰτησώμεθα.',
  }
}
const THAT_WE_MAY_COMPLETE_REMAIN_TIME = {
  english: {
    text: 'That we may complete the remaining time of our life in peace and repentance, let us ask the Lord.'
  },
  greek: {
    text: 'Τὸν ὑπόλοιπον χρόνον τῆς ζωῆς ἡμῶν ἐν εἰρήνῃ καὶ μετανοίᾳ ἐκτελέσαι, παρὰ τοῦ Κυρίου αἰτησώμεθα.',
  }
}
const A_CHRISTIAN_ENDING = {
  english: {
    text: 'And let us ask for a Christian end to our life, peaceful, without shame and suffering, and for a good defense before the awesome judgment seat of Christ.'
  },
  greek: {
    text: 'Χριστιανὰ τὰ τέλη τῆς ζωῆς ἡμῶν, ἀνώδυνα, ἀνεπαίσχυντα, εἰρηνικά, καὶ καλὴν ἀπολογίαν τὴν ἐπὶ τοῦ φοβεροῦ βήματος τοῦ Χριστοῦ αἰτησώμεθα.',
  }
}

const section = reactive({
  title: {
    english: 'The Litany Of Completion',
    greek: 'Ἀπολυτίκια, εὐχὴ Κολλύβων'
  },
  body: [
    main.DEACON,
    LET_US_COMPLETE_OUR_PRAYER,
    main.LORD_HAVE_MERCY,
    FOR_THE_PRECIOUS_GIFTS,
    main.LORD_HAVE_MERCY,
    main.FOR_THIS_HOLY_HOUSE,
    main.LORD_HAVE_MERCY,
    main.FOR_DELIVERANCE_DANGER,
    main.LORD_HAVE_MERCY,
    main.HELP_US_SAVE_US,
    main.LORD_HAVE_MERCY,
    THAT_THE_WHOLE_DAY_MAY_BE,
    main.CHOIR,
    GRANT_THIS_O_LORD,
    FOR_AN_ANGEL_OF_PEACE,
    GRANT_THIS_O_LORD,
    FOR_PARDON_REMISSION_OF_SINS,
    GRANT_THIS_O_LORD,
    FOR_THAT_WHICH_IS_GOOD,
    GRANT_THIS_O_LORD,
    THAT_WE_MAY_COMPLETE_REMAIN_TIME,
    GRANT_THIS_O_LORD,
    A_CHRISTIAN_ENDING,
    GRANT_THIS_O_LORD,
    main.COMMEMORATING_THE_PANAGIA,
    main.TO_YOU_O_LORD
  ]
});
</script>

<style></style>
