<template>
  <SectionTemplate :id="useIdStore().APOLYTIKON_OF_THANKSGIVING_ID" :section="section" />
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useMainStore, useActorStore, useResponseStore, useIdStore } from '@/store';
import SectionTemplate from './SectionTemplate.vue';
import { hymn_factory, text_factory } from '@/factories';

const prayers = useMainStore();
const actors = useActorStore();
const responses = useResponseStore();
const HYMN_1 = hymn_factory(
  '*Of Bematarissa. Number d´. He understood quickly. If you were a sun-shaped sept of Vimatodousis, I spent seventeen years in a well in the barbarian stream, when you rise with a living Wood, I spread the rays of your brilliant miracles, guarding the Monastery of Vatopedi, your poor sleepers. Glory be to the Father and to the Son and to the Holy Spirit. And now and forever and ever. Amen.',
  'Τῆς Βηματαρίσσης. Ἦχος δ´. Ταχὺ προκατάλαβε. Εἰκὼν ἡλιόμορφε Βηματοδούσης σεπτή, ἐν φρέατι δύσασα ἐν τῇ βαρβάρων ὁρμῇ ἑπτάδεκα ἔτεσιν, αὖθις σὺν ζωηφόρῳ Ξύλῳ ἐξανατέλλεις, πέμπουσα τὰς ἀκτῖνας τῶν λαμπρῶν σου θαυμάτων, Μονὴν Βατοπαιδίου φρουροῦσα, λιταῖς ἀκοιμήτοις σου.'
)
const HYMN_2 = hymn_factory(
  '*Brightly rising from the well, with the life-giving cross of the wooden septum, with the lamp of the sleeping beauty, Agni, guard your flock, which they have honored you with desire. e.',
  'Ἡ ἐκ τοῦ φρέατος λαμπρῶς ἀνελθοῦσα, σὺν ζωηφόρῳ τοῦ Σταυροῦ σεπτῷ ξύλῳ, μετὰ λαμπάδος αἴγλης ἀκοιμήτου Ἁγνή, φρούρησον τὴν ποίμνην σου, τὴν ἐκ πόθου τιμῶσάν σε, Ὄρος τε τὸ Ἅγιον τὸ τοῦ Ἄθωνος σκέπε, ἐξ ἐπηρείας πάσης δυσμενῶν, Βατοπαιδίου Μονῆς φύλαξ ἄγρυπνε.'
)
const PRIEST_PRAYER_1 = text_factory(
  '*You have fulfilled everything according to your word, O Lord, and you have caused on the earth to grow fruits everywhere for the enjoyment and food of this day; you have made the three children and Daniel of the Aphrodisiacs in Babylon the most brilliant of the seeds; he, all-good King, and these seeds with you to the various fruits bless you.',
  '*Ὁ πάντα τελεσφορήσας τῷ λόγῳ σου, Κύριε, καὶ κελεύσας τῇ γῇ παντοδαποὺς ἐκφύειν καρποὺς εἰς ἀπόλαυσιν καὶ τροφὴν ἡμετέραν· ὁ τοῖς σπέρμασι τοὺς Τρεῖς Παῖδας καὶ Δανιὴλ τῶν ἐν Βαβυλῶνι ἁβροδιαίτων λαμπροτέρους ἀναδείξας· αὐτός, πανάγαθε Βασιλεῦ, καὶ τὰ σπέρματα ταῦτα σὺν τοῖς διαφόροις καρποῖς σου εὐλόγησον·'
);
const PRIEST_PRAYER_2 = text_factory(
  'Καὶ τοὺς ἐξ αὐτῶν μεταλαμβάνοντας ἁγίασον· ὅτι εἰς δόξαν σὴν καὶ εἰς τιμὴν καὶ μνήμην τῆς πανυπερευλογημένης, ἐνδόξου, Δεσποίνης ἡμῶν, Θεοτόκου καὶ ἀειπαρθένου Μαρίας ταῦτα προετέθησαν παρὰ τῶν σῶν δούλων καὶ εἰς μνημόσυνον τῶν ἐν εὐσεβεῖ τῇ πίστει τελειωθέντων. Παράσχου δέ, ἀγαθέ, τοῖς τε εὐτρεπίσασι ταῦτα καὶ τοῖς τὴν μνήμην ἐπιτελοῦσι πάντα τὰ πρὸς σωτηρίαν αἰτήματα καὶ τῶν αἰωνίων σου ἀγαθῶν τὴν ἀπόλαυσιν· πρεσβείαις τῆς πανυπερευλογημένης, ἐνδόξου, Δεσποίνης ἡμῶν Θεοτόκου καὶ ἀειπαρθένου Μαρίας, ἧς καὶ τὴν σύναξιν ἐπιτελοῦμεν, καὶ πάντων σου τῶν ἁγίων. Ὅτι σὺ εἶ ὁ εὐλογῶν, ἁγιάζων τὰ σύμπαντα, Χριστὲ ὁ Θεὸς ἡμῶν, καὶ σοὶ τὴν δόξαν ἀναπέμπομεν σὺν τῷ ἀνάρχῳ σου Πατρὶ καὶ τῷ παναγίῳ καὶ ἀγαθῷ καὶ ζωοποιῷ σου Πνεύματι, νῦν καὶ ἀεὶ καὶ εἰς τοὺς αἰῶνας τῶν αἰώνων. ',
  'And by partaking of them, sanctify: for in the glory and honor and memory of our all-blessed, glorious, Lady, Theotokos and incorruptible Mary, these have been offered before your servants and in remembrance of those who have died in godly faith. Grant, O good one, to those who have granted these things and to those whose memory you fulfill all their requests for salvation and the enjoyment of your eternal goods; embassies of the all-blessed, glorious, Virgin Mary, our Theotokos and eternal Mary, that we also fulfill the union, and of all your saints. Because you are the one who blesses, sanctifies the universes, Christ our God, and we give you the glory together with your sovereign Father and your all-holy and good and life-giving Spirit, now and forever and to the ages of ages.'
)
const section = reactive({
  title: {
    english: 'The Final Wish',
    greek: 'Ὀπισθάμβωνος εὐχή'
  },
  body: [
    responses.AMEN,
    actors.CHOIR, HYMN_1,
    prayers.GLORIA_PATRI_EE_NOW_AND_EVER_AMEN,
    HYMN_2,
    actors.DEACON, prayers.LET_US_PRAY_TO_THE_LORD,
    responses.LORD_HAVE_MERCY,
    actors.LOW_VOICE_PRIEST,
    PRIEST_PRAYER_1,
    actors.CHOIR, responses.AMEN,
    actors.LOW_VOICE_PRIEST,
    PRIEST_PRAYER_2
  ]
});
</script>

<style></style>
