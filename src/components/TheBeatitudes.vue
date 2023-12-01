<template>
  <SectionTemplate :id="useIdStore().THE_BEATITUDES_ID" :section="section" />
</template>

<script setup lang="ts">
import { useMainStore, useActorStore, useIdStore } from '@/store';
import { reactive } from 'vue';
import SectionTemplate from './SectionTemplate.vue';
import { verse_factory, hymn_factory, text_factory, subHeading_factory } from '@/factories'

const main = useMainStore()
const actors = useActorStore()
const PLAGAL_THE_FOURTH = subHeading_factory(
  "Plagal the Fourth",
  "Πλάγιος τοῦ Τετάρτου"
)
const IN_YOUR_KINGDOM_REMEMBER_US = text_factory(
  '*In your Kingdom remember us, Lord, when you come in your Kingdom*',
  'Ἐν τῇ Βασιλείᾳ σου μνήσθητι ἡμῶν, Κύριε, ὅταν ἔλθῃς ἐν τῇ Βασιλείᾳ σου'
)
const MATTHEW_5_SUBHEADING = subHeading_factory(
  'Matthew 5:3-11',
  'Ματταθίας 5:3-11'
)
function ode_factory(englishText: string, greekText: string) {
  return hymn_factory(englishText, greekText);
}
const ODE_1 = ode_factory(
  "*A long time ago, in the Sinai Despina, a fire burned, and they remained unburnt, Moses the greatest, they exemplified you, Virgin, whom we praise now, O Vimatarissa.*",
  "Βάτον πάλαι ἑώρα, ἐν τῷ Σινᾶ Δέσποινα, πυρὶ καιομένην, καὶ μένουσαν ἀκατάφλεκτον, Μωσῆς ὁ μέγιστος, σὲ προτυποῦσαν Παρθένε· ἣν ἡμεῖς ὑμνοῦμεν νῦν, ὦ Βηματάρισσα. "
)
const ODE_2 = ode_factory(
  "*A saving gate, a bridge to God, the fruitful land of life of the fast, a Vimatarissa, and a Solomonic bed, and faithful to the pride, you are pantanassa.*",
  "Ἡ σωτήριος πύλη, ἡ πρὸς Θεὸν γέφυρα, ἡ καρποφορήσασα χώρα ζωῆς τὸν ἄσταχυν, σὺ Βηματάρισσα, καὶ σολομώντειος κλίνη, καὶ πιστῶν τὸ καύχημα, πέλεις παντάνασσα. "
)
const ODE_3 = ode_factory(
  "*Myrrh of a divine vessel, and a holy mosque, of the heaven descended for love, and the pitcher of the soulful Maiden, god manna bearer, Vimatarissa.*",
  "Μύρου θείου δοχεῖον, καὶ ἱερὸν τέμενος, τοῦ ἐξ οὐρανοῦ κατελθόντος δι᾿ ἀγαθότητα, ὤφθης Πανύμνητε, καὶ στάμνος ἔμψυχος Κόρη, θεῖον μάννα φέρουσα, ὦ Βηματάρισσα. "
)
const ODE_4 = ode_factory(
  "*There was a gate, and a secret sea, of the first Lucifer, that is, he was sent again, without a mother or a Father, and at the end of time, a Vimatarissa, who was human.*",
  "Ἀδιόδευτε πύλη, καὶ μυστικὲ θάλαμε, τοῦ πρὸ ἑωσφόρου ἀῤῥήτως, ἐξανατείλαντος, δίχα μητρὸς ἐκ Πατρός, καὶ ἐπ᾿ ἐσχάτων τῶν χρόνων, ἐκ σοῦ Βηματάρισσα, ἐνανθρωπήσαντος. "
)
const ODE_5 = ode_factory(
  "*O hateful, O Holy One, Step of thy flock, Thou shalt armies, assist the dogs, the sheep of the ravenous child, the guardian of the air, the image of the shaft hid.*",
  "Ὁ ἔχθιστος, τῶν λῃστῶν Πανύμνητε, Βηματάρισσα τῇ ποίμνῃ σου ταύτῃ, ἅπας στρατός, συνδραμὼν οἶα κύνες, τοῖς σοῖς προβάτοις τὸν ὄλεθρον ἤγαγον, ὁ φύλαξ δὲ τοῦ ἱεροῦ, τὴν σὴν εἰκόνα τῷ φρέατι ἔκρυψε."
)
const ODE_6 = ode_factory(
  "*Elder in thee, and praying to us, the Cross with a lit candle, in the spring of the Virgin sat down, in the icon of thee Vimatarissa, and closed tears, securing the mouth of the shaft.*",
  "Γεραίρων σε, καὶ δεόμενος ἅμα, τὸν Σταυρὸν μετὰ λαμπάδος ἡμμένης, ἐν τῇ πηγῇ ὦ Παρθένε καθῆκε, σὺν τῇ εἰκόνι τῇ σῇ Βηματάρισσα, καὶ ἔκλεισε δακρυῤῥοῶν, ἀσφαλῶς τὸ τοῦ φρέατος στόμιον."
)
const ODE_7 = ode_factory(
  "*If they passed, thy Son redeemed, Stepping of the filthy nature, of the depths, of the earth, and of Adam the world resurrected; in imitation of Him, he opened the shaft of Namati.*",
  "Ἵν᾿ ἅπασαν, ὁ Υἱός σου λυτρώσῃ, Βηματάρισσα τὴν βρότειον φύσιν, ἐν τοῖς μυχοῖς, τοῖς τοῦ ᾍδου κατῆλθε, καὶ τὸν Ἀδὰμ παγγενῆ συνανέστησε· σὺ μιμουμένη δὲ Αὐτόν, ἐνοικεῖς τῷ τοῦ φρέατος νάματι."
)
const ODE_8 = ode_factory(
  "*Confiscate thy flock, thy flock and thy Virgin, thee pirates, in the midst of slavery, thou hast taken possession and conquered, the life of Crete unblemished, Step of sorrows multitude.*",
  "Κατάσχεσιν τῆς σῆς ποίμνης ἐάσας, ὁ οἰκέτης σου καὶ ἄκων Παρθένε, σὺν πειραταῖς, ἐν ὁδῷ τῆς δουλείας, ἀποδημεῖ καὶ τὴν νῆσον κατέλαβε, τῆς Κρήτης αἰχμάλωτος ζῶν, Βηματάρισσα θλίψεων πλήθεσι."
)
const BLESSED_ARE_THE_POOR_IN_SPIRIT = verse_factory("3",
  "Blessed are the poor in spirit, For theirs is the kingdom of heaven.",
  "Μακάριοι οἱ πτωχοὶ τῷ πνεύματι, ὅτι αὐτῶν ἐστιν ἡ Βασιλεία τῶν οὐρανῶν."
)
const BLESSED_ARE_THOSE_WHO_MOURN = verse_factory("4",
  "Blessed are those who mourn, For they shall be comforted.",
  "Μακάριοι οἱ πενθοῦντες, ὅτι αὐτοὶ παρακληθήσονται."
)
const BLESSED_ARE_THE_THE_MEEK = verse_factory("5",
  "Blessed are the meek, For they shall inherit the earth.",
  "Μακάριοι οἱ πραεῖς, ὅτι αὐτοὶ κληρονομήσουσι τὴν γῆν."
)
const BLESSED_ARE_THOSE_WHO_HUNGER_AND_THIRST_FOR_RIGHTEOUSNESS = verse_factory("6",
  "Blessed are those who hunger and thirst for righteousness, For they shall be filled.",
  "Μακάριοι οἱ πεινῶντες καὶ διψῶντες τὴν δικαιοσύνην, ὅτι αὐτοὶ χορτασθήσονται. "
)
const BLESSED_ARE_THE_MERCIFUL = verse_factory("7",
  "Blessed are the merciful, For they shall obtain mercy.",
  "Μακάριοι οἱ ἐλεήμονες, ὅτι αὐτοὶ ἐλεηθήσονται."
)
const BLESSED_ARE_THE_PURE_IN_HEART = verse_factory("8",
  "Blessed are the pure in heart, For they shall see God.",
  "Μακάριοι οἱ καθαροὶ τῇ καρδίᾳ, ὅτι αὐτοὶ τὸν Θεὸν ὄψονται."
)
const BLESSED_ARE_THE_PEACEMAKERS = verse_factory("9",
  "Blessed are the peacemakers, For they shall be called sons of God.",
  "Μακάριοι οἱ εἰρηνοποιοί, ὅτι αὐτοὶ υἱοὶ Θεοῦ κληθήσονται."
)
const BLESSED_ARE_THOSE_PERSECUTED = verse_factory("10",
  "Blessed are those who are persecuted for righteousness’ sake, For theirs is the kingdom of heaven.",
  "Μακάριοι οἱ δεδιωγμένοι ἕνεκεν δικαιοσύνης, ὅτι αὐτῶν ἐστιν ἡ βασιλεία τῶν οὐρανῶν."
)
const BLESSED_ARE_YOU_WHEN_THEY_REVILE_YOU = verse_factory("11",
  "Blessed are you when they revile and persecute you, and say all kinds of evil against you falsely for My sake.",
  "Μακάριοί ἐστε, ὅταν ὀνειδίσωσιν ὑμᾶς, καὶ διώξωσι, καὶ εἴπωσιν πᾶν πονηρὸν ῥῆμα καθ᾿ ὑμῶν, ψευδόμενοι ἕνεκεν ἐμοῦ."
)
const REJOICE_AND_BE_EXCEEDINGLY_GLAD = verse_factory("12",
  "Rejoice and be exceedingly glad, for great is your reward in heaven.",
  "Χαίρετε καὶ ἀγαλλιᾶσθε, ὅτι ὁ μισθὸς ὑμῶν πολὺς ἐν τοῖς οὐρανοῖς."
)
const section = reactive({
  title: {
    english: 'The Beatitudes',
    greek: 'Μακαρισμοί'
  },
  body: [
    PLAGAL_THE_FOURTH,
    MATTHEW_5_SUBHEADING,
    IN_YOUR_KINGDOM_REMEMBER_US,
    BLESSED_ARE_THE_POOR_IN_SPIRIT,
    BLESSED_ARE_THOSE_WHO_MOURN,
    BLESSED_ARE_THE_THE_MEEK,
    BLESSED_ARE_THOSE_WHO_HUNGER_AND_THIRST_FOR_RIGHTEOUSNESS,
    BLESSED_ARE_THE_MERCIFUL,
    actors.CHOIR,
    ODE_1,
    BLESSED_ARE_THE_PURE_IN_HEART,
    ODE_2,
    BLESSED_ARE_THE_PEACEMAKERS,
    ODE_3,
    BLESSED_ARE_THOSE_PERSECUTED,
    ODE_4,
    BLESSED_ARE_YOU_WHEN_THEY_REVILE_YOU,
    ODE_5,
    REJOICE_AND_BE_EXCEEDINGLY_GLAD,
    ODE_6,
    main.GLORIA_PATRI_TOU,
    ODE_7,
    main.NOW_AND_EVER_AND_UNTO_AGES_AMEN,
    ODE_8
  ]
});
</script>

<style scoped></style>
