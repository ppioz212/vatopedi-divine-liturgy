<template>
  <SectionTemplate :id="useIdStore().LITANY_OF_PEACE_ID" :section="section" />
</template>

<script setup lang="ts">
import { useMainStore, useActorStore, useIdStore, useResponseStore } from '@/store';
import { reactive } from 'vue';
import SectionTemplate from './SectionTemplate.vue';
import { text_factory } from '@/factories';

const prayers = useMainStore()
const actors = useActorStore()
const responses = useResponseStore();
const BLESS_MASTER = text_factory(
  'Master, give the blessing.',
  'Εὐλόγησον, Δέσποτα.'
)
const BLESSED_IS_THE_KINGDOM = text_factory(
  'Blessed is the Kingdom of the Father and of the Son and of the Holy Spirit, now and forever and to the ages of ages.',
  'Εὐλογημένη ἡ Βασιλεία τοῦ Πατρὸς καὶ τοῦ Υἱοῦ καὶ τοῦ Ἁγίου Πνεύματος, νῦν καὶ ἀεὶ καὶ εἰς τοὺς αἰῶνας τῶν αἰώνων.'
)
const IN_PEACE_LET_US_PRAY = text_factory(
  'In peace, let us pray to the Lord.',
  'Ἐν εἰρήνῃ τοῦ Κυρίου δεηθῶμεν.'
)
const FOR_THE_PEACE_ABOVE = text_factory(
  'For the peace from above and for the salvation of our souls, let us pray to the Lord.',
  'Ὑπὲρ τῆς ἄνωθεν εἰρήνης καὶ τῆς σωτηρίας τῶν ψυχῶν ἡμῶν, τοῦ Κυρίου δεηθῶμεν.'
)
const FOR_PIOUS_ORTHODOX = text_factory(
  'For pious and Orthodox Christians, let us pray to the Lord.',
  'Ὑπὲρ τῶν εὐσεβῶν καὶ ὀρθοδόξων χριστιανῶν, τοῦ Κυρίου δεηθῶμεν.'
)
const FOR_OUR_ARCHBISHOP = text_factory(
  'For our Archbishop (name), for the honorable presbyterate, for the diaconate in Christ, and for all the clergy and the people, let us pray to the Lord.',
  'Ὑπὲρ τοῦ Ἀρχιεπισκόπου ἡμῶν (τοῦ δεῖνος), τοῦ τιμίου πρεσβυτερίου, τῆς ἐν Χριστῷ διακονίας, παντὸς τοῦ κλήρου καὶ τοῦ λαοῦ, τοῦ Κυρίου δεηθῶμεν.'
)
const FOR_OUR_COUNTRY_PRES = text_factory(
  'For our country, the president, all those in public service, and for our armed forces everywhere, let us pray to the Lord.',
  'Ὑπὲρ τοῦ εὐσεβοῦς ἡμῶν γένους, τοῦ προέδρου καὶ πάσης ἀρχῆς καὶ ἐξουσίας ἐν τῷ κράτει ἡμῶν, καὶ τοῦ κατὰ ξηρὰν θάλασσαν καὶ ἀέρα φιλοχρίστου ἡμῶν στρατοῦ, τοῦ Κυρίου δεηθῶμεν.'
)
const FOR_OUR_ARCHDIOCESE = text_factory(
  'For the Holy and Great Church of Christ, for our Sacred Archdiocese, [for this Sacred Metropolis,] for this city and parish, for every city and land, and for the faithful who live in them, let us pray to the Lord.',
  'Ὑπὲρ τῆς Ἁγίας τοῦ Χριστοῦ Μεγάλης Ἐκκλησίας, τῆς Ἱερᾶς ἡμῶν Ἀρχιεπισκοπῆς, [τῆς Ἱερᾶς Μητροπόλεως ταύτης,] τῆς πόλεως καὶ κοινότητος ταύτης, πάσης πόλεως, χώρας καὶ τῶν πίστει οἰκούντων ἐν αὐταῖς, τοῦ Κυρίου δεηθῶμεν.'
)
const FOR_FAVORABLE_WEATHER = text_factory(
  'For favorable weather, for an abundance of the fruits of the earth, and for peaceful times, let us pray to the Lord.',
  'Ὑπὲρ εὐκρασίας ἀέρων, εὐφορίας τῶν καρπῶν τῆς γῆς καὶ καιρῶν εἰρηνικῶν, τοῦ Κυρίου δεηθῶμεν.'
)
const FOR_TRAVEL_SICK_SUFFURING = text_factory(
  'For those who travel by land, sea, and air, for the sick, the suffering, the captives and for their salvation, let us pray to the Lord.',
  'Ὑπὲρ πλεόντων, ὁδοιπορούντων, νοσούντων, καμνόντων, αἰχμαλώτων καὶ τῆς σωτηρίας αὐτῶν, τοῦ Κυρίου δεηθῶμεν.'
)

const section = reactive({
  title: {
    english: 'The Litany Of Peace',
    greek: 'Εὐλογημένη ἡ Βασιλεία, Εἰρηνικά'
  },
  spotify: 'https://open.spotify.com/track/34gEU7nHzgLOSXr2ISRkEz?si=6210ee56563946f8',
  youtube: 'https://www.youtube.com/watch?v=WOpUest3i6E&list=PLCwMICR-aqghkeMZ9vTS_sz3pTtxF054p&index=1',
  body: [
    actors.DEACON,
    BLESS_MASTER,
    actors.PRIEST,
    BLESSED_IS_THE_KINGDOM,
    responses.AMEN,
    actors.DEACON,
    IN_PEACE_LET_US_PRAY,
    responses.LORD_HAVE_MERCY,
    FOR_THE_PEACE_ABOVE,
    responses.LORD_HAVE_MERCY,
    prayers.FOR_THIS_HOLY_HOUSE,
    responses.LORD_HAVE_MERCY,
    FOR_PIOUS_ORTHODOX,
    responses.LORD_HAVE_MERCY,
    FOR_OUR_ARCHBISHOP,
    responses.LORD_HAVE_MERCY,
    FOR_OUR_COUNTRY_PRES,
    responses.LORD_HAVE_MERCY,
    FOR_OUR_ARCHDIOCESE,
    responses.LORD_HAVE_MERCY,
    FOR_FAVORABLE_WEATHER,
    responses.LORD_HAVE_MERCY,
    FOR_TRAVEL_SICK_SUFFURING,
    responses.LORD_HAVE_MERCY,
    prayers.FOR_DELIVERANCE_DANGER,
    responses.LORD_HAVE_MERCY,
    prayers.HELP_US_SAVE_US,
    responses.LORD_HAVE_MERCY,
    prayers.COMMEMORATING_THE_PANAGIA,
    responses.TO_YOU_O_LORD,
    actors.PRIEST,
    prayers.FOR_TO_YOU_BELONG_ALL_GLORY_HONOR_WORSHIP,
    responses.AMEN
  ]
});
</script>

<style></style>
