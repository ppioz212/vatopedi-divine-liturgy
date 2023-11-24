<template>
  <SectionTemplate :section="section" />
</template>

<script setup lang="ts">
import { useMainStore } from '@/store';
import { reactive } from 'vue';
import SectionTemplate from './SectionTemplate.vue';
const main = useMainStore()
const IN_YOUR_KINGDOM_REMEMBER_US = {
  english: {
    text: '*In your Kingdom remember us, Lord, when you come in your Kingdom*'
  },
  greek: {
    text: 'Ἐν τῇ Βασιλείᾳ σου μνήσθητι ἡμῶν, Κύριε, ὅταν ἔλθῃς ἐν τῇ Βασιλείᾳ σου'
  }
}
const MATTHEW_5_SUBHEADING = {
  isSubHeading: true,
  english: {
    text: 'Matthew 5:3-11'
  },
  greek: {
    text: 'Ματταθίας 5:3-11'
  }
}
const BLESSED_ARE_THE_POOR_IN_SPIRIT = {
  verseNum: 3,
  english: {
    text: 'Blessed are the poor in spirit, For theirs is the kingdom of heaven.'
  },
  greek: {
    text: 'Μακάριοι οἱ πτωχοὶ τῷ πνεύματι, ὅτι αὐτῶν ἐστιν ἡ Βασιλεία τῶν οὐρανῶν.'
  }
}
const BLESSED_ARE_THOSE_WHO_MOURN = {
  verseNum: 4,
  english: {
    text: 'Blessed are those who mourn, For they shall be comforted.'
  },
  greek: {
    text: 'Μακάριοι οἱ πενθοῦντες, ὅτι αὐτοὶ παρακληθήσονται.'
  }
}
const BLESSED_ARE_THE_THE_MEEK = {
  verseNum: 5,
  english: {
    text: 'Blessed are the meek, For they shall inherit the earth.'
  },
  greek: {
    text: 'Μακάριοι οἱ πραεῖς, ὅτι αὐτοὶ κληρονομήσουσι τὴν γῆν.'
  }
}
const BLESSED_ARE_THOSE_WHO_HUNGER_AND_THIRST_FOR_RIGHTEOUSNESS = {
  verseNum: 6,
  english: {
    text: 'Blessed are those who hunger and thirst for righteousness, For they shall be filled.'
  },
  greek: {
    text: 'Μακάριοι οἱ πεινῶντες καὶ διψῶντες τὴν δικαιοσύνην, ὅτι αὐτοὶ χορτασθήσονται. '
  }
}
const BLESSED_ARE_THE_MERCIFUL = {
  verseNum: 7,
  english: {
    text: 'Blessed are the merciful, For they shall obtain mercy.'
  },
  greek: {
    text: 'Μακάριοι οἱ ἐλεήμονες, ὅτι αὐτοὶ ἐλεηθήσονται. '
  }
}
const BLESSED_ARE_THE_PURE_IN_HEART = {
  verseNum: 8,
  english: {
    text: 'Blessed are the pure in heart, For they shall see God.'
  },
  greek: {
    text: 'Μακάριοι οἱ καθαροὶ τῇ καρδίᾳ, ὅτι αὐτοὶ τὸν Θεὸν ὄψονται.'
  }
}
const BLESSED_ARE_THE_PEACEMAKERS = {
  verseNum: 9,
  english: {
    text: 'Blessed are the peacemakers, For they shall be called sons of God.'
  },
  greek: {
    text: 'Μακάριοι οἱ εἰρηνοποιοί, ὅτι αὐτοὶ υἱοὶ Θεοῦ κληθήσονται.'
  }
}
const BLESSED_ARE_THOSE_PERSECUTED = {
  verseNum: 10,
  english: {
    text: "Blessed are those who are persecuted for righteousness’ sake, For theirs is the kingdom of heaven."
  },
  greek: {
    text: 'Μακάριοι οἱ δεδιωγμένοι ἕνεκεν δικαιοσύνης, ὅτι αὐτῶν ἐστιν ἡ βασιλεία τῶν οὐρανῶν.'
  }
}
const BLESSED_ARE_YOU_WHEN_THEY_REVILE_YOU = {
  verseNum: 11,
  english: {
    text: 'Blessed are you when they revile and persecute you, and say all kinds of evil against you falsely for My sake.'
  },
  greek: {
    text: 'Μακάριοί ἐστε, ὅταν ὀνειδίσωσιν ὑμᾶς, καὶ διώξωσι, καὶ εἴπωσιν πᾶν πονηρὸν ῥῆμα καθ᾿ ὑμῶν, ψευδόμενοι ἕνεκεν ἐμοῦ.'
  }
}
const REJOICE_AND_BE_EXCEEDINGLY_GLAD = {
  verseNum: 12,
  english: {
    text: 'Rejoice and be exceedingly glad, for great is your reward in heaven.'
  },
  greek: {
    text: 'Χαίρετε καὶ ἀγαλλιᾶσθε, ὅτι ὁ μισθὸς ὑμῶν πολὺς ἐν τοῖς οὐρανοῖς.'
  }
}
const section = reactive({
  title: {
    english: 'The Beatitudes',
    greek: 'Μακαρισμοί'
  },
  body: [
    MATTHEW_5_SUBHEADING,
    IN_YOUR_KINGDOM_REMEMBER_US,
    BLESSED_ARE_THE_POOR_IN_SPIRIT,
    BLESSED_ARE_THOSE_WHO_MOURN,
    BLESSED_ARE_THE_THE_MEEK,
    BLESSED_ARE_THOSE_WHO_HUNGER_AND_THIRST_FOR_RIGHTEOUSNESS,
    BLESSED_ARE_THE_MERCIFUL,
    BLESSED_ARE_THE_PURE_IN_HEART,
    BLESSED_ARE_THE_PEACEMAKERS,
    BLESSED_ARE_THOSE_PERSECUTED,
    BLESSED_ARE_YOU_WHEN_THEY_REVILE_YOU,
    REJOICE_AND_BE_EXCEEDINGLY_GLAD,
    main.GLORIA_PATRI_TOU,
    main.NOW_AND_EVER_AND_UNTO_AGES_AMEN,
    main.DEACON,
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
