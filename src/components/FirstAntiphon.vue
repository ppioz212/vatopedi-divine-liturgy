<template>
  <SectionTemplate :section="section" />
</template>

<script setup lang="ts">
import { useMainStore, useActorStore } from '@/store';
import { reactive } from 'vue';
import SectionTemplate from './SectionTemplate.vue';

const main = useMainStore()
const actors = useActorStore()
const PSALM_102_SUBHEADING = {
  isSubHeading: true,
  english: {
    text: 'Psalm 102 (103)'
  },
  greek: {
    text: 'Ψαλμὸς 102 (103)'
  }
}
const INTRO = {
  english: {
    text: 'Bless the Lord, O my soul, Bless the Lord!'
  },
  greek: {
    text: 'Εὐλόγει ἡ ψυχή μου, τὸν Κύριον, εὐλογητὸς εἶ, Κύριε!'
  }
}
const VERSE1 = {
  verseNum: 1,
  english: {
    text: 'Bless the Lord, O my soul, And all that is within me, bless His holy name!'
  },
  greek: {
    text: 'Εὐλόγει ἡ ψυχή μου, τὸν Κύριον, καὶ πάντα τὰ ἐντός μου, τὸ ὄνομα τὸ ἅγιον αὐτοῦ.'
  }
}
const VERSE2 = {
  verseNum: 2,
  english: {
    text: 'Bless the Lord, O my soul, And forget not all His benefits.'
  },
  greek: {
    text: 'Εὐλόγει ἡ ψυχή μου, τὸν Κύριον, καὶ μὴ ἐπιλανθάνου πάσας τὰς ἀνταποδόσεις αὐτοῦ.'
  }
}
const VERSE3 = {
  verseNum: 3,
  english: {
    text: 'Who forgives all your iniquities, Who heals all your diseases.'
  },
  greek: {
    text: 'Τὸν εὐϊλατεύοντα πάσας τὰς ἀνομίας σου, τὸν ἰώμενον πάσας τὰς νόσους σου.'
  }
}
const VERSE4 = {
  verseNum: 4,
  english: {
    text: 'Who redeems your life from destruction, Who crowns you with loving kindness and tender mercies.'
  },
  greek: {
    text: 'Τὸν λυτρούμενον ἐκ φθορᾶς τὴν ζωήν σου, τὸν στεφανοῦντά σε ἐν ἐλέει καὶ οἰκτιρμοῖς.'
  }
}
const VERSE5 = {
  verseNum: 5,
  english: {
    text: "Who satisfies your mouth with good things, So that your youth is renewed like the eagle’s."
  },
  greek: {
    text: 'τὸν ἐμπιπλῶντα ἐν ἀγαθοῖς τὴν ἐπιθυμίαν σου ἀνακαινισθήσεται ὡς ἀετοῦ ἡ νεότης σου'
  }
}
const VERSE6 = {
  verseNum: 6,
  english: {
    text: "The Lord executes righteousness, And justice for all who are oppressed."
  },
  greek: {
    text: "ποιῶν ἐλεημοσύνας ὁ κύριος καὶ κρίμα πᾶσι τοῖς ἀδικουμένοις."
  }
}
const VERSE7 = {
  verseNum: 7,
  english: {
    text: "He made known His ways to Moses, His acts to the children of Israel."
  },
  greek: {
    text: "Ἐγνώρισε τὰς ὁδοὺς αὐτοῦ τῷ Μωϋσῇ, τοῖς υἱοῖς Ἰσραὴλ τὰ θελήματα αὐτοῦ."
  }
}
const VERSE8 = {
  verseNum: 8,
  english: {
    text: "The Lord is merciful and gracious, Slow to anger, and abounding in mercy."
  },
  greek: {
    text: "οἰκτίρμων καὶ ἐλεήμων ὁ κύριος μακρόθυμος καὶ πολυέλεος"
  }
}
const VERSE9 = {
  verseNum: 9,
  english: {
    text: "He will not always strive with us, Nor will He keep His anger forever."
  },
  greek: {
    text: "οὐκ εἰς τέλος ὀργισθήσεται οὐδὲ εἰς τὸν αἰῶνα μηνιεῖ"
  }
}
const VERSE10 = {
  verseNum: 10,
  english: {
    text: "He has not dealt with us according to our sins, Nor punished us according to our iniquities."
  },
  greek: {
    text: "οὐ κατὰ τὰς ἁμαρτίας ἡμῶν ἐποίησεν ἡμῖν οὐδὲ κατὰ τὰς ἀνομίας ἡμῶν ἀνταπέδωκεν ἡμῖν"
  }
}
const VERSE11 = {
  verseNum: 11,
  english: {
    text: "For as the heavens are high above the earth, So great is His mercy toward those who fear Him; "
  },
  greek: {
    text: "ὅτι κατὰ τὸ ὕψος τοῦ οὐρανοῦ ἀπὸ τῆς γῆς ἐκραταίωσεν κύριος τὸ ἔλεος αὐτοῦ ἐπὶ τοὺς φοβουμένους αὐτόν"
  }
}
const VERSE12 = {
  verseNum: 12,
  english: {
    text: "As far as the east is from the west, So far has He removed our transgressions from us."
  },
  greek: {
    text: "καθ᾽ ὅσον ἀπέχουσιν ἀνατολαὶ ἀπὸ δυσμῶν ἐμάκρυνεν ἀφ᾽ ἡμῶν τὰς ἀνομίας ἡμῶν"
  }
}
const VERSE13 = {
  verseNum: 13,
  english: {
    text: "As a father pities his children, So the Lord pities those who fear Him."
  },
  greek: {
    text: "καθὼς οἰκτίρει πατὴρ υἱούς οἰκτίρησεν κύριος τοὺς φοβουμένους αὐτόν"
  }
}
const VERSE14 = {
  verseNum: 14,
  english: {
    text: "For He knows our frame; He remembers that we are dust."
  },
  greek: {
    text: "ὅτι αὐτὸς ἔγνω τὸ πλάσμα ἡμῶν μνήσθητι ὅτι χοῦς ἐσμεν"
  }
}
const VERSE15 = {
  verseNum: 15,
  english: {
    text: "As for man, his days are like grass; As a flower of the field, so he flourishes."
  },
  greek: {
    text: "ἄνθρωπος ὡσεὶ χόρτος αἱ ἡμέραι αὐτοῦ ὡσεὶ ἄνθος τοῦ ἀγροῦ οὕτως ἐξανθήσει"
  }
}
const VERSE16 = {
  verseNum: 16,
  english: {
    text: "For the wind passes over it, and it is gone, And its place remembers it no more."
  },
  greek: {
    text: "ὅτι πνεῦμα διῆλθεν ἐν αὐτῷ καὶ οὐχ ὑπάρξει καὶ οὐκ ἐπιγνώσεται ἔτι τὸν τόπον αὐτοῦ"
  }
}
const VERSE17 = {
  verseNum: 17,
  english: {
    text: "But the mercy of the Lord is from everlasting to everlasting on those who fear Him, And His righteousness to children’s children"
  },
  greek: {
    text: "τὸ δὲ ἔλεος τοῦ κυρίου ἀπὸ τοῦ αἰῶνος καὶ ἕως τοῦ αἰῶνος ἐπὶ τοὺς φοβουμένους αὐτόν καὶ ἡ δικαιοσύνη αὐτοῦ ἐπὶ υἱοὺς υἱῶν"
  }
}
const VERSE18 = {
  verseNum: 18,
  english: {
    text: "To such as keep His covenant, And to those who remember His commandments to do them."
  },
  greek: {
    text: "τοῖς φυλάσσουσιν τὴν διαθήκην αὐτοῦ καὶ μεμνημένοις τῶν ἐντολῶν αὐτοῦ τοῦ ποιῆσαι αὐτάς"
  }
}
const VERSE19 = {
  verseNum: 19,
  english: {
    text: "The Lord has established His throne in heaven, And His kingdom rules over all."
  },
  greek: {
    text: "κύριος ἐν τῷ οὐρανῷ ἡτοίμασεν τὸν θρόνον αὐτοῦ καὶ ἡ βασιλεία αὐτοῦ πάντων δεσπόζει"
  }
}
const VERSE20 = {
  verseNum: 20,
  english: {
    text: "Bless the Lord, you His angels, Who excel in strength, who do His word, Heeding the voice of His word."
  },
  greek: {
    text: "εὐλογεῖτε τὸν κύριον πάντες οἱ ἄγγελοι αὐτοῦ δυνατοὶ ἰσχύι ποιοῦντες τὸν λόγον αὐτοῦ τοῦ ἀκοῦσαι τῆς φωνῆς τῶν λόγων αὐτοῦ"
  }
}
const VERSE21 = {
  verseNum: 21,
  english: {
    text: "Bless the Lord, all you His hosts, You ministers of His, who do His pleasure."
  },
  greek: {
    text: "εὐλογεῖτε τὸν κύριον πᾶσαι αἱ δυνάμεις αὐτοῦ λειτουργοὶ αὐτοῦ ποιοῦντες τὸ θέλημα αὐτοῦ"
  }
}
const VERSE22 = {
  verseNum: 22,
  english: {
    text: "Bless the Lord, all His works, In all places of His dominion. Bless the Lord, O my soul!"
  },
  greek: {
    text: "εὐλογεῖτε τὸν κύριον πάντα τὰ ἔργα αὐτοῦ ἐν παντὶ τόπῳ τῆς δεσποτείας αὐτοῦ εὐλόγει ἡ ψυχή μου τὸν κύριον"
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
const section = reactive({
  title: {
    english: 'First Antiphon',
    greek: 'Α΄ Στάσις Τυπικῶν'
  },
  body: [
    PSALM_102_SUBHEADING,
    actors.CHOIR,
    INTRO,
    VERSE1,
    VERSE2,
    VERSE3,
    VERSE4,
    VERSE5,
    VERSE6,
    VERSE7,
    VERSE8,
    VERSE9,
    VERSE10,
    VERSE11,
    VERSE12,
    VERSE13,
    VERSE14,
    VERSE15,
    VERSE16,
    VERSE17,
    VERSE18,
    VERSE19,
    VERSE20,
    VERSE21,
    VERSE22,
    main.GLORIA_PATRI_EE_NOW_AND_EVER_AMEN,
    OUTRO,
    actors.DEACON,
    main.AGAIN_AND_AGAIN_IN_PEACE_LET_US_PRAY,
    main.LORD_HAVE_MERCY,
    main.HELP_US_SAVE_US,
    main.LORD_HAVE_MERCY,
    main.COMMEMORATING_THE_PANAGIA,
    main.TO_YOU_O_LORD,
    actors.PRIEST,
    main.FOR_YOURS_IS_DOMINION_POWER_GLORY,
    main.AMEN
  ]
});
</script>

<style scoped></style>
