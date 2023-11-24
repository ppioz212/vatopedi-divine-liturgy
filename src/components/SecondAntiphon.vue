<template>
  <SectionTemplate :section="section" />
</template>

<script setup lang="ts">
import { useMainStore, useActorStore } from '@/store';
import { reactive } from 'vue';
import SectionTemplate from './SectionTemplate.vue';

const main = useMainStore()
const actors = useActorStore()
const PSALM_145_SUBHEADING = {
  isSubHeading: true,
  english: {
    text: 'Psalm 145 (146)'
  },
  greek: {
    text: 'Ψαλμὸς 145 (146)'
  }
}
const VERSE1 = {
  verseNum: 1,
  english: {
    text: 'Praise the Lord, O my soul!'
  },
  greek: {
    text: 'Αἴνει ἡ ψυχή μου τὸν Κύριον'
  }
}
const VERSE2 = {
  verseNum: 2,
  english: {
    text: 'While I live I will praise the Lord; I will sing praises to my God while I have my being.'
  },
  greek: {
    text: 'αἰνέσω Κύριον ἐν τῇ ζωῇ μου· ψαλῶ τῷ Θεῷ μου ἕως ὑπάρχω.'
  }
}
const VERSE3 = {
  verseNum: 3,
  english: {
    text: 'Do not put your trust in princes, Nor in a son of man, in whom there is no help.'
  },
  greek: {
    text: 'Μὴ πεποίθατε ἐπ᾿ ἄρχοντας, ἐπὶ υἱοὺς ἀνθρώπων, οἷς οὐκ ἔστι σωτηρία.'
  }
}
const VERSE4A = {
  verseNum: '4a',
  english: {
    text: 'His spirit departs, he returns to his earth'
  },
  greek: {
    text: 'Ἐξελεύσεται τὸ πνεῦμα αὐτοῦ, καὶ ἐπιστρέψει εἰς τὴν γῆν αὐτοῦ.'
  }
}
const VERSE4B = {
  verseNum: '4b',
  english: {
    text: "In that very day his plans perish."
  },
  greek: {
    text: 'Ἐν ἐκείνῃ τῇ ἡμέρᾳ, ἀπολοῦνται πάντες οἱ διαλογισμοὶ αὐτοῦ.'
  }
}
const VERSE5 = {
  verseNum: 5,
  english: {
    text: "Happy is he who has the God of Jacob for his help, Whose hope is in the Lord his God."
  },
  greek: {
    text: "Μακάριος, οὗ ὁ Θεὸς Ἰακὼβ βοηθὸς αὐτοῦ, ἡ ἐλπὶς αὐτοῦ ἐπὶ Κύριον τὸν Θεὸν αὐτοῦ."
  }
}
const VERSE6 = {
  verseNum: 6,
  english: {
    text: "Who made heaven and earth, the sea, and all that is in them; Who keeps truth forever"
  },
  greek: {
    text: "Τὸν ποιήσαντα τὸν οὐρανὸν καὶ τὴν γῆν, τὴν θάλασσαν καὶ πάντα τὰ ἐν αὐτοῖς. Τὸν φυλάσσοντα ἀλήθειαν εἰς τὸν αἰῶνα"
  }
}
const VERSE7 = {
  verseNum: 7,
  english: {
    text: "Who executes justice for the oppressed, Who gives food to the hungry. The Lord gives freedom to the prisoners."
  },
  greek: {
    text: "ποιοῦντα κρῖμα τοῖς ἀδικουμένοις, διδόντα τροφὴν τοῖς πεινῶσι. Κύριος λύει πεπεδημένους·"
  }
}
const VERSE8 = {
  verseNum: 8,
  english: {
    text: "The Lord opens the eyes of the blind; The Lord raises those who are bowed down; The Lord loves the righteous."
  },
  greek: {
    text: "Κύριος σοφοῖ τυφλούς· Κύριος ἀνορθοῖ κατεῤῥαγμένους· Κύριος ἀγαπᾷ δικαίους"
  }
}
const VERSE9 = {
  verseNum: 9,
  english: {
    text: "The Lord watches over the strangers; He relieves the fatherless and widow; But the way of the wicked He turns upside down."
  },
  greek: {
    text: "Κύριος φυλάσσει τοὺς προσηλύτους. Ὀρφανὸν καὶ χήραν ἀναλήψεται, καὶ ὁδὸν ἁμαρτωλῶν ἀφανιεῖ."
  }
}
const VERSE10 = {
  verseNum: 10,
  english: {
    text: "The Lord shall reign forever, Your God, O Zion, to all generations."
  },
  greek: {
    text: "Βασιλεύσει Κύριος εἰς τὸν αἰῶνα, ὁ Θεός σου Σιὼν εἰς γενεὰν καὶ γενεάν."
  }
}
const OUTRO = {
  english: {
    text: 'Bless the Lord, O my soul, And all that is within me, bless His holy name! Bless the Lord!'
  },
  greek: {
    text: 'Εὐλόγει ἡ ψυχή μου, τὸν Κύριον, καὶ πάντα τὰ ἐντός μου, τὸ ὄνομα τὸ ἅγιον αὐτοῦ. εὐλογητὸς εἶ, Κύριε!'
  }
}
const ONLY_BEGOTTEN_SON_AND_LOGOS_OF_GOD = {
  isHymn: true,
  english: {
    text: 'Only-begotten Son and Logos of God, being immortal, You condescended for our salvation to take flesh from the holy Theotokos and ever-virgin Mary and, without change, became man. Christ, our God, You were crucified and conquered death by death. Being one of the Holy Trinity, glorified with the Father and the Holy Spirit: Save us.'
  },
  greek: {
    text: 'Ὁ μονογενὴς Υἱὸς καὶ Λόγος τοῦ Θεοῦ, ἀθάνατος ὑπάρχων, καὶ καταδεξάμενος διὰ τὴν ἡμετέραν σωτηρίαν, σαρκωθῆναι ἐκ τῆς Ἁγίας Θεοτόκου καὶ ἀειπαρθένου Μαρίας, ἀτρέπτως ἐνανθρωπήσας, σταυρωθείς τε, Χριστὲ ὁ Θεός, θανάτῳ θάνατον πατήσας, Εἷς ὢν τῆς Ἁγίας Τριάδος συνδοξαζόμενος τῷ Πατρὶ καὶ τῷ Ἁγίῳ Πνεύματι, σῶσον ἡμᾶς. '
  }
}
const section = reactive({
  title: {
    english: 'Second Antiphon',
    greek: 'Β΄ Στάσις Τυπικῶν'
  },
  body: [
    actors.CHOIR,
    main.GLORIA_PATRI_TOU,
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
    main.NOW_AND_EVER_AND_UNTO_AGES_AMEN,
    OUTRO,
    ONLY_BEGOTTEN_SON_AND_LOGOS_OF_GOD,
    actors.DEACON,
    main.AGAIN_AND_AGAIN_IN_PEACE_LET_US_PRAY,
    main.LORD_HAVE_MERCY,
    main.HELP_US_SAVE_US,
    main.LORD_HAVE_MERCY,
    main.COMMEMORATING_THE_PANAGIA,
    main.TO_YOU_O_LORD,
    main.FOR_YOU_O_GOD_ARE_GOOD_AND_LOVE_MANKIND,
    main.AMEN
  ]
});
</script>

<style scoped></style>
