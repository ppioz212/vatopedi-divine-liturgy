<template>
  <SectionTemplate :section="section" />
</template>

<script setup lang="ts">
import { useMainStore, useActorStore, useResponseStore } from '@/store';
import { reactive } from 'vue';
import SectionTemplate from './SectionTemplate.vue';
import { text_factory } from '@/factories'

const prayers = useMainStore()
const actors = useActorStore()
const responses = useResponseStore()

const LET_US_SAY_WITH_OUR_SOUL = text_factory(
  'Let us all say with all our soul and with all our mind, let us all say.',
  'Εἴπωμεν πάντες ἐξ ὅλης τῆς ψυχῆς, καὶ ἐξ ὅλης τῆς διανοίας ἡμῶν εἴπωμεν.'
)
const LORD_ALMIGHTY_GOD_OF_OUR_FATHERS = text_factory(
  'Lord almighty, God of our fathers, we pray You, hear us and have mercy.',
  'Κύριε, Παντοκράτορ, ὁ Θεὸς τῶν πατέρων ἡμῶν, δεόμεθά Σου, ἐπάκουσον καὶ ἐλέησον.'
)
const HAVE_MERCY_ON_ME_O_GOD = text_factory(
  'Have mercy on us, O God, according to Your great mercy, we pray You, hear us and have mercy.',
  'Ἐλέησον ἡμᾶς, ὁ Θεός, κατὰ τὸ μέγα ἔλεός Σου· δεόμεθά Σου, ἐπάκουσον καὶ ἐλέησον.'
)
const AGAIN_FOR_PIOUS_ORTHO_CHRISTIANS = text_factory(
  'Again we pray for pious and orthodox Christians.',
  'Ἔτι δεόμεθα ὑπὲρ τῶν εὐσεβῶν καὶ ὀρθοδόξων χριστιανῶν.'
)
const AGAIN_FOR_OUR_ARCHBISHOP = text_factory(
  'Again we pray for our Archbishop and Father Bartholomew.',
  'Ἔτι δεόμεθα ὑπὲρ τοῦ Ἀρχιεπισκόπου ἡμῶν Βαρθολομαίου.'
)
const AGAIN_FATHER_EPHRAIM_AND_BROTHERS = text_factory(
  'Again we pray for our father Ephraim the priest and for all our brotherhood in Christ.',
  'Ἔτι δεόμεθα ὑπὲρ τοῦ πατρὸς ἡμῶν Ἐφραὶμ ἱερομονάχου καὶ πάσης τῆς ἐν Χριστῷ ἡμῶν ἀδελφότητος.'
)
const AGAIN_FOR_BUILDERS_OF_THIS_MONASTERY = text_factory(
  '*Again we pray for the most reverend and late rulers and builders of this holy monastery, Theodosius, Arkadius, Honorius, Constantine, Plakidias, Joasaph and Andronicus.*',
  'Ἔτι δεόμεθα ὑπὲρ τῶν εὐσεβεστάτων καὶ ἀειμνήστων βασιλέων καὶ κτιτόρων τῆς ἁγίας Μονῆς ταύτης Θεοδοσίου, Ἀρκαδίου, Ὀνωρίου, Κωνσταντίνου, Πλακιδίας, Ἰωάσαφ καὶ Ἀνδρονίκου.'
)
const AGAIN_FOR_FORGIVENESS = text_factory(
  '*Again we pray for the forgiveness of the sins of the servants of God, the donors, and devotees of this holy Monastery, and for all of our departed fathers and brothers, of the pious and Orthodox Christians.*',
  'Ἔτι δεόμεθα ὑπὲρ ἀφέσεως ἁμαρτιῶν τῶν δούλων τοῦ Θεοῦ, τῶν δωρητῶν, ἀφιερωτῶν καὶ συνδρομητῶν τῆς ἁγίας Μονῆς ταύτης, καὶ ὑπὲρ πάντων τῶν προαναπαυσαμένων πατέρων καὶ ἀδελφῶν ἡμῶν, τῶν ἐνθάδε εὐσεβῶς κειμένων καὶ ἁπανταχοῦ ὀρθοδόξων.'
)
const AGAIN_FOR_MERCY_LIFE_PEACE = text_factory(
  '*Again we pray for mercy, life, peace, health, salvation, visitation, forgiveness and remission of the sins of the servants of God, the pious pilgrims of this holy Monastery, its donors, devotees, subscribers, and for all our fathers and brothers of trained in the holy name of this.*',
  'Ἔτι δεόμεθα ὑπὲρ ἐλέους, ζωῆς, εἰρήνης, ὑγείας, σωτηρίας, ἐπισκέψεως, συγχωρήσεως καὶ ἀφέσεως τῶν ἁμαρτιῶν τῶν δούλων τοῦ Θεοῦ, τῶν εὐλαβῶν προσκυνητῶν τῆς ἁγίας Μονῆς ταύτης, τῶν δωρητῶν, ἀφιερωτῶν, συνδρομητῶν αὐτῆς, καὶ ὑπὲρ πάντων τῶν πατέρων καὶ ἀδελφῶν ἡμῶν τῶν ἐνασκουμένων ἐν τῷ ἁγιωνύμῳ Ὄρει τούτῳ.'
)
const AGAIN_FOR_OUR_BROTHERS_IN_MINISTRY = text_factory(
  '*Again we pray for our brothers who are in ministry, and for all those who have mercy, who have mercy, who minister and minister to us, in this holy Monastery.*',
  'Ἔτι δεόμεθα ὑπέρ τῶν ἀδελφῶν ἡμῶν τῶν ἐν ταῖς διακονίαις ὄντων, καὶ πάντων τῶν ἐλεούντων, ἐλεησάντων, διακονούντων καὶ διακονησάντων ἡμῖν, ἐν τῇ ἁγίᾳ Μονῇ ταύτῃ.'
)
const CATECHUMEN_PRAYER_1 = text_factory(
  'Catechumens, pray to the Lord.',
  'Εὔξασθε, οἱ κατηχούμενοι, τῷ Κυρίῳ.'
)
const CATECHUMEN_PRAYER_2 = text_factory(
  'Let us, the faithful, pray for the catechumens.',
  'Οἱ πιστοὶ ὑπὲρ τῶν κατηχουμένων δεηθῶμεν·'
)
const CATECHUMEN_PRAYER_3 = text_factory(
  'That the Lord will have mercy on them.',
  'Ἵνα ὁ Κύριος αὐτοὺς ἐλεήσῃ·'
)
const CATECHUMEN_PRAYER_4 = text_factory(
  'That He will teach them the word of truth.',
  'Κατηχήσῃ αὐτοὺς τὸν λόγον τῆς ἀληθείας·'
)
const CATECHUMEN_PRAYER_5 = text_factory(
  'That He will reveal to them the gospel of righteousness.',
  'Ἀποκαλύψῃ αὐτοῖς τὸ εὐαγγέλιον τῆς δικαιοσύνης·'
)
const CATECHUMEN_PRAYER_6 = text_factory(
  'That He will unite them to His holy, catholic, and apostolic Church.',
  'Ἑνώσῃ αὐτοὺς τῇ ἁγίᾳ αὐτοῦ καθολικῇ καὶ ἀποστολικῇ Ἐκκλησίᾳ.'
)
const CATECHUMEN_PRAYER_7 = text_factory(
  'Save them, have mercy on them, help them, and protect them, O God, by Your grace.',
  'Σῶσον, ἐλέησον, ἀντιλαβοῦ καὶ διαφύλαξον αὐτούς, ὁ Θεός, τῇ σῇ χάριτι.'
)
const CATECHUMEN_PRAYER_8 = text_factory(
  'Catechumens, bow your heads to the Lord.',
  'Οἱ κατηχούμενοι τὰς κεφαλὰς ὑμῶν τῷ Κυρίῳ κλίνατε.'
)
const MAY_THEY_ALSO_GLORIFY_YOUR_MAJESTICAL_NAME = text_factory(
  'So that with us they also may glorify Your most honorable and majestic name, of the Father and of the Son and of the Holy Spirit, now and forever and to the ages of ages.',
  'Ἵνα καὶ αὐτοὶ σὺν ἡμῖν δοξάζωσι τὸ πάντιμον καὶ μεγαλοπρεπὲς ὄνομά σου, τοῦ Πατρὸς καὶ τοῦ Υἱοῦ καὶ τοῦ Ἁγίου Πνεύματος, νῦν καὶ ἀεὶ καὶ εἰς τοὺς αἰῶνας τῶν αἰώνων.'
)
const CATECHUMENS_DEPART = text_factory(
  'Those who are catechumens, depart; catechumens depart; all those who are catechumens, depart. Let none of the catechumens remain. In faith, again and again, in peace, let us pray to the Lord.',
  'Ὅσοι κατηχούμενοι προέλθετε· οἱ κατηχούμενοι προέλθετε· ὅσοι κατηχούμενοι προέλθετε· μή τις τῶν κατηχουμένων. Ὅσοι πιστοί, ἔτι καὶ ἔτι ἐν εἰρήνῃ τοῦ Κυρίου δεηθῶμεν.'
)

const section = reactive({
  title: {
    english: 'The Litany of Supplication and Catechumens',
    greek: 'Ἐκτενής, αἰτήσεις Κατηχουμένων Πιστῶν'
  },
  body: [
    actors.DEACON,
    LET_US_SAY_WITH_OUR_SOUL,
    actors.READER,
    responses.LORD_HAVE_MERCY_X3,
    LORD_ALMIGHTY_GOD_OF_OUR_FATHERS,
    responses.LORD_HAVE_MERCY_X3,
    HAVE_MERCY_ON_ME_O_GOD,
    responses.LORD_HAVE_MERCY_X3,
    AGAIN_FOR_PIOUS_ORTHO_CHRISTIANS,
    responses.LORD_HAVE_MERCY_X3,
    AGAIN_FOR_OUR_ARCHBISHOP,
    responses.LORD_HAVE_MERCY_X3,
    AGAIN_FATHER_EPHRAIM_AND_BROTHERS,
    responses.LORD_HAVE_MERCY_X3,
    AGAIN_FOR_BUILDERS_OF_THIS_MONASTERY,
    responses.LORD_HAVE_MERCY_X3,
    AGAIN_FOR_FORGIVENESS,
    responses.LORD_HAVE_MERCY_X3,
    AGAIN_FOR_MERCY_LIFE_PEACE,
    responses.LORD_HAVE_MERCY_X3,
    AGAIN_FOR_OUR_BROTHERS_IN_MINISTRY,
    responses.LORD_HAVE_MERCY,
    actors.PRIEST,
    prayers.FOR_YOU_O_GOD_ARE_MERCIFUL_AND_LOVE_MANKIND,
    responses.AMEN,
    actors.DEACON,
    CATECHUMEN_PRAYER_1,
    actors.READER,
    responses.LORD_HAVE_MERCY,
    CATECHUMEN_PRAYER_2,
    responses.LORD_HAVE_MERCY,
    CATECHUMEN_PRAYER_3,
    responses.LORD_HAVE_MERCY,
    CATECHUMEN_PRAYER_4,
    responses.LORD_HAVE_MERCY,
    CATECHUMEN_PRAYER_5,
    responses.LORD_HAVE_MERCY,
    CATECHUMEN_PRAYER_6,
    responses.LORD_HAVE_MERCY,
    CATECHUMEN_PRAYER_7,
    responses.LORD_HAVE_MERCY,
    CATECHUMEN_PRAYER_8,
    responses.TO_YOU_O_LORD,
    actors.PRIEST,
    MAY_THEY_ALSO_GLORIFY_YOUR_MAJESTICAL_NAME,
    responses.AMEN,
    actors.DEACON,
    CATECHUMENS_DEPART,
    responses.LORD_HAVE_MERCY,
    prayers.HELP_US_SAVE_US,
    responses.LORD_HAVE_MERCY,
    prayers.SOPHIA,
    actors.PRIEST,
    prayers.FOR_TO_YOU_BELONG_ALL_GLORY_HONOR_WORSHIP,
    responses.AMEN,
    actors.DEACON,
    prayers.AGAIN_AND_AGAIN_IN_PEACE_LET_US_PRAY,
    responses.LORD_HAVE_MERCY,
    prayers.SOPHIA,
    actors.PRIEST,
    prayers.THAT_EVER_GUARDED_BY_YOUR_MIGHT,
    responses.AMEN
  ]
});
</script>

<style scoped></style>
