<template>
  <SectionTemplate :id="useIdStore().SMALL_ENTRANCE_ID" :section="section" />
</template>

<script setup lang="ts">
import { useActorStore, useIdStore } from '@/store';
import { reactive } from 'vue';
import SectionTemplate from './SectionTemplate.vue';
import { hymn_factory } from '@/factories'

const actors = useActorStore()
const SAVE_US_O_SON_OF_GOD_HYMN_1 = hymn_factory(
  "Come, let us worship and bow down before Christ. Save us, O Son of God, who are wondrous in your Saints. We sing to You, Alleluia.",
  "Δεῦτε προσκυνήσωμεν καὶ προσπέσωμεν Χριστῷ. Σῶσον ἡμᾶς Υἱὲ Θεοῦ, ὁ ἐν Ἁγίοις θαυμαστός, ψάλλοντάς σοι, Ἀλληλούϊα."
)
const ENTRANCE_HYMN_2 = hymn_factory(
  "*And the beautiful Pacing venerable, in the shaft of the barbarians I have darkened in the midst of the barbarians, Thou shalt rise again in life-giving Wood, Thou shalt rise again, Thou shalt cast forth the beam of thy glorious miracles, Monastery of Vatopedi guard, thou shalt sleep frugally.*",
  "ΕΕἰκὼν ἡλιόμορφε Βηματοδούσης σεπτή, ἐν φρέατι δύσασα ἐν τῇ βαρβάρων ὁρμῇ ἑπτάδεκα ἔτεσιν, αὖθις σὺν ζωηφόρῳ Ξύλῳ ἐξανατέλλεις, πέμπουσα τὰς ἀκτῖνας τῶν λαμπρῶν σου θαυμάτων, Μονὴν Βατοπαιδίου φρουροῦσα, λιταῖς ἀκοιμήτοις σου."
)
const ANNUNCIATION_HYMN_3 = hymn_factory(
  "Today is the beginning of our salvation. And the revelation of the mystery of ages. The Son of God, becomes the Son of the Virgin. And Gabriel proclaims this Gift from God. Together with him, we cry out, to you O Theotokos: Hail Thou full of grace, the Lord is with you!",
  "Σήμερον τῆς σωτηρίας ἡμῶν τὸ κεφάλαιον, καὶ τοῦ ἀπ᾿ αἰῶνος μυστηρίου ἡ φανέρωσις· ὁ Υἱὸς τοῦ Θεοῦ, Υἱὸς τῆς Παρθένου γίνεται, καὶ Γαβριὴλ τὴν χάριν εὐαγγελίζεται. Διὸ καὶ ἡμεῖς σὺν αὐτῷ τῇ Θεοτόκῳ βοήσωμεν· Χαῖρε Κεχαριτωμένη, ὁ Κύριος μετὰ σοῦ. "
)
const ENTRANCE_HYMN_4 = hymn_factory(
  "*Vimatarissa Metter, Antiphonistria, Slaughtered lady, Elaiovrytissa, Fairytale admirable, Aunt Pantanassa, and Vlitheusa out of the enemy, guard well, the flock of Vatopedi, Euicon they worshipped you, and magnified in praise of you.*",
  "Βηματάρισσα Μῆτερ, Ἀντιφωνήτρια, Ἐσφαγμένη κυρία, Ἐλαιοβρύτισσα, Παραμυθία θαυμαστή, θεία Παντάνασσα, καὶ Βληθεῖσα ἐξ ἐχθροῦ, περιφύλαττε καλῶς, τὴν ποίμνην Βατοπαιδίου, Εἰκόνας σου προσκυνοῦσαν, καὶ μεγαλύνουσαν ἐν ὕμνοις σε."
)
const ENTRANCE_HYMN_5 = hymn_factory(
  "*Myron of Vatopedi, thy sleepless miracles, thou hast shown thrice makar Eudokime, the fragrant soul and the bodies, the merits of thy remains; God-given Christ of God supplied, you gave us the great mercy. *",
  "Μύρον εὔοσμον Βατοπαιδίου, ἡδυπνόοις σου ὀδμαῖς θαυμάτων, ἀνεδείχθης τρισμάκαρ Εὐδόκιμε, εὐωδιάζων ψυχὰς καὶ τὰ σώματα, τῶν προσιόντων σορῷ τῶν λειψάνων σου· θεοδόξαστε Χριστὸν τὸν Θεὸν ἱκέτευε, δωρήσασθαι ἡμῖν τὸ μέγα ἔλεος. "
)
const ENTRANCE_HYMN_6 = hymn_factory(
  "*The Fathers of Athos, and Angels in body, Confessors and Saints, Hierarch and Martyr, we honor in praise and in praise, imitating this virtue, the Holy multitude of the Monastics, crying out in unison. Glory be to our sanctity; glory to the crown; Glory be to our dangers, protect us.*",
  "Τοὺς τοῦ Ἄθω Πατέρας, καὶ Ἀγγέλους ἐν σώματι, Ὁμολογητὰς καὶ Ὁσίους, Ἱεράρχας καὶ Μάρτυρας, τιμήσωμεν ἐν ὕμνοις καὶ ᾠδαῖς, μιμούμενοι αὐτῶν τὰς ἀρετάς, ἡ τοῦ Ὄρους πληθὺς πᾶσα τῶν Μοναστῶν, κραυγάζοντες ὁμοφώνως. Δόξα τῷ ἁγιάσαντι ὑμᾶς· δόξα τῷ στεφανώσαντι· δόξα τῷ ἐν κινδύνοις ἡμῶν, προστάτας δείξαντι."
)
const ENTRANCE_HYMN_7 = hymn_factory(
  "*The victorious General, who has redeemed the sufferings of thanksgiving, I write to Thee Thy City, Theotokos. But if I had the state in battle, against all dangers of liberation, I cry out to Thee; Hail Nymph, marry.*",
  "Τῇ Ὑπερμάχῳ Στρατηγῷ τὰ νικητήρια, ὡς λυτρωθεῖσα τῶν δεινῶν εὐχαριστήρια, ἀναγράφω Σοι ἡ Πόλις Σου Θεοτόκε. Ἀλλ᾿ ὡς ἔχουσα τὸ κράτος ἀπροσμάχητον, ἐκ παντοίων με κινδύνων ἐλευθέρωσον, ἵνα κράζω Σοι· Χαῖρε Νύμφη ἀνύμφευτε."
)
const section = reactive({
  title: {
    english: 'The Small Entrance',
    greek: 'Μικρὴ Εἴσοδος'
  },
  body: [
    actors.CHOIR,
    SAVE_US_O_SON_OF_GOD_HYMN_1,
    ENTRANCE_HYMN_2,
    ANNUNCIATION_HYMN_3,
    ENTRANCE_HYMN_4,
    ENTRANCE_HYMN_5,
    ENTRANCE_HYMN_6,
    ENTRANCE_HYMN_7
  ]
});
</script>

<style scoped></style>
