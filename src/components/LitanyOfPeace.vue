<template>
  <SectionTemplate :section="section" />
</template>

<script setup lang="ts">
import { useMainStore, useActorStore } from '@/store';
import { reactive } from 'vue';
import SectionTemplate from './SectionTemplate.vue';

const main = useMainStore()
const actors = useActorStore()
const BLESS_MASTER = {
  english: {
    text: 'Master, give the blessing.'
  },
  greek: {
    text: 'Εὐλόγησον, Δέσποτα.',
  }
}
const BLESSED_IS_THE_KINGDOM = {
  english: {
    text: 'Blessed is the Kingdom of the Father and of the Son and of the Holy Spirit, now and forever and to the ages of ages.'
  },
  greek: {
    text: 'Εὐλογημένη ἡ Βασιλεία τοῦ Πατρὸς καὶ τοῦ Υἱοῦ καὶ τοῦ Ἁγίου Πνεύματος, νῦν καὶ ἀεὶ καὶ εἰς τοὺς αἰῶνας τῶν αἰώνων.',
  }
}
const IN_PEACE_LET_US_PRAY = {
  english: {
    text: 'In peace, let us pray to the Lord.'
  },
  greek: {
    text: 'Ἐν εἰρήνῃ τοῦ Κυρίου δεηθῶμεν.'
  }
}
const FOR_THE_PEACE_ABOVE = {
  english: {
    text: 'For the peace from above and for the salvation of our souls, let us pray to the Lord.'
  },
  greek: {
    text: 'Ὑπὲρ τῆς ἄνωθεν εἰρήνης καὶ τῆς σωτηρίας τῶν ψυχῶν ἡμῶν, τοῦ Κυρίου δεηθῶμεν.'
  }
}
const FOR_PIOUS_ORTHODOX = {
  english: {
    text: 'For pious and Orthodox Christians, let us pray to the Lord.'
  },
  greek: {
    text: 'Ὑπὲρ τῶν εὐσεβῶν καὶ ὀρθοδόξων χριστιανῶν, τοῦ Κυρίου δεηθῶμεν.'
  }
}
const FOR_OUR_ARCHBISHOP = {
  english: {
    text: 'For our Archbishop (name), for the honorable presbyterate, for the diaconate in Christ, and for all the clergy and the people, let us pray to the Lord.'
  },
  greek: {
    text: 'Ὑπὲρ τοῦ Ἀρχιεπισκόπου ἡμῶν (τοῦ δεῖνος), τοῦ τιμίου πρεσβυτερίου, τῆς ἐν Χριστῷ διακονίας, παντὸς τοῦ κλήρου καὶ τοῦ λαοῦ, τοῦ Κυρίου δεηθῶμεν.'
  }
}
const FOR_OUR_COUNTRY_PRES = {
  english: {
    text: 'For our country, the president, all those in public service, and for our armed forces everywhere, let us pray to the Lord.'
  },
  greek: {
    text: 'Ὑπὲρ τοῦ εὐσεβοῦς ἡμῶν γένους, τοῦ προέδρου καὶ πάσης ἀρχῆς καὶ ἐξουσίας ἐν τῷ κράτει ἡμῶν, καὶ τοῦ κατὰ ξηρὰν θάλασσαν καὶ ἀέρα φιλοχρίστου ἡμῶν στρατοῦ, τοῦ Κυρίου δεηθῶμεν.'
  }
}
const FOR_OUR_ARCHDIOCESE = {
  english: {
    text: 'For the Holy and Great Church of Christ, for our Sacred Archdiocese, [for this Sacred Metropolis,] for this city and parish, for every city and land, and for the faithful who live in them, let us pray to the Lord.'
  },
  greek: {
    text: 'Ὑπὲρ τῆς Ἁγίας τοῦ Χριστοῦ Μεγάλης Ἐκκλησίας, τῆς Ἱερᾶς ἡμῶν Ἀρχιεπισκοπῆς, [τῆς Ἱερᾶς Μητροπόλεως ταύτης,] τῆς πόλεως καὶ κοινότητος ταύτης, πάσης πόλεως, χώρας καὶ τῶν πίστει οἰκούντων ἐν αὐταῖς, τοῦ Κυρίου δεηθῶμεν.'
  }
}
const FOR_FAVORABLE_WEATHER = {
  english: {
    text: 'For favorable weather, for an abundance of the fruits of the earth, and for peaceful times, let us pray to the Lord.'
  },
  greek: {
    text: 'Ὑπὲρ εὐκρασίας ἀέρων, εὐφορίας τῶν καρπῶν τῆς γῆς καὶ καιρῶν εἰρηνικῶν, τοῦ Κυρίου δεηθῶμεν.'
  }
}
const FOR_TRAVEL_SICK_SUFFURING = {
  english: {
    text: 'For those who travel by land, sea, and air, for the sick, the suffering, the captives and for their salvation, let us pray to the Lord.'
  },
  greek: {
    text: 'Ὑπὲρ πλεόντων, ὁδοιπορούντων, νοσούντων, καμνόντων, αἰχμαλώτων καὶ τῆς σωτηρίας αὐτῶν, τοῦ Κυρίου δεηθῶμεν.'
  }
}

const section = reactive({
  title: {
    english: 'The Litany Of Peace',
    greek: 'Εὐλογημένη ἡ Βασιλεία, Εἰρηνικά'
  },
  body: [
    actors.DEACON,
    BLESS_MASTER,
    actors.PRIEST,
    BLESSED_IS_THE_KINGDOM,
    main.AMEN,
    actors.DEACON,
    IN_PEACE_LET_US_PRAY,
    main.LORD_HAVE_MERCY,
    FOR_THE_PEACE_ABOVE,
    main.LORD_HAVE_MERCY,
    main.FOR_THIS_HOLY_HOUSE,
    main.LORD_HAVE_MERCY,
    FOR_PIOUS_ORTHODOX,
    main.LORD_HAVE_MERCY,
    FOR_OUR_ARCHBISHOP,
    main.LORD_HAVE_MERCY,
    FOR_OUR_COUNTRY_PRES,
    main.LORD_HAVE_MERCY,
    FOR_OUR_ARCHDIOCESE,
    main.LORD_HAVE_MERCY,
    FOR_FAVORABLE_WEATHER,
    main.LORD_HAVE_MERCY,
    FOR_TRAVEL_SICK_SUFFURING,
    main.LORD_HAVE_MERCY,
    main.FOR_DELIVERANCE_DANGER,
    main.LORD_HAVE_MERCY,
    main.HELP_US_SAVE_US,
    main.LORD_HAVE_MERCY,
    main.COMMEMORATING_THE_PANAGIA,
    main.TO_YOU_O_LORD,
    actors.PRIEST,
    main.FOR_TO_YOU_BELONG_ALL_GLORY_HONOR_WORSHIP,
    main.AMEN
  ]
});
</script>

<style></style>
