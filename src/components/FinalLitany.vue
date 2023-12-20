<template>
  <SectionTemplate :id="useIdStore().FINAL_LITANY_ID" :section="section" />
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useMainStore, useActorStore, useResponseStore, useIdStore } from '@/store';
import SectionTemplate from './SectionTemplate.vue';
import { text_factory, subHeading_factory, hymn_factory } from '@/factories';

const prayers = useMainStore();
const actors = useActorStore();
const responses = useResponseStore();
const AMONG_THE_FIRST_REMEMBER = text_factory(
  'Among the first remember, Lord, our Archbishop Bartholomew grant him to Your holy churches in peace, safety, honor, and health, unto length of days, rightly teaching the word of Your truth.',
  'Ἐν πρώτοις μνήσθητι, Κύριε, τοῦ ἀρχιεπισκόπου ἡμῶν Βαρθολομαίου, ὃν χάρισαι ταῖς ἁγίαις σου Ἐκκλησίαις ἐν εἰρήνῃ, σῷον, ἔντιμον, ὑγιᾶ, μακροημερεύοντα καὶ ὀρθοτομοῦντα τὸν λόγον τῆς σῆς ἀληθείας. '
);
const AND_GRANT_THAT_WITH_ONE_HEART = text_factory(
  'And grant that with one voice and one heart we may glorify and praise Your most honorable and majestic name, of the Father and of the Son and of the Holy Spirit, now and forever and to the ages of ages.',
  'Καὶ δὸς ἡμῖν ἐν ἑνὶ στόματι καὶ μιᾷ καρδίᾳ δοξάζειν καὶ ἀνυμνεῖν τὸ πάντιμον καὶ μεγαλοπρεπὲς ὄνομά σου, τοῦ Πατρὸς καὶ τοῦ Υἱοῦ καὶ τοῦ ἁγίου Πνεύματος, νῦν καὶ ἀεὶ καὶ εἰς τοὺς αἰῶνας τῶν αἰώνων.'
);
const AND_THE_MERCIES_OF_OUR_GREAT_GOD = text_factory(
  'And the mercies of our great God and Savior, Jesus Christ, be with you all.',
  'Καὶ ἔσται τὰ ἐλέη τοῦ μεγάλου Θεοῦ καὶ Σωτῆρος ἡμῶν Ἰησοῦ Χριστοῦ μετὰ πάντων ὑμῶν.'
);
const COMMEMORATED_SAINTS_AGAIN_AND_AGAIN = text_factory(
  'Having commemorated all the saints, again and again, in peace, let us pray to the Lord.',
  'Πάντων τῶν ἁγίων μνημονεύσαντες, ἔτι καὶ ἔτι ἐν εἰρήνῃ τοῦ Κυρίου δεηθῶμεν.'
);
const THAT_OUR_GOD_HAVING_ACCEPTED_THEM = text_factory(
  'That our God Who loves mankind, having accepted them at His holy and celestial and mystical altar as an offering of spiritual fragrance, may in return send down upon us the divine grace and the gift of the Holy Spirit, let us pray.',
  'Ὅπως ὁ φιλάνθρωπος Θεὸς ἡμῶν, ὁ προσδεξάμενος αὐτὰ εἰς τὸ ἅγιον καὶ ὑπερουράνιον καὶ νοερὸν αὐτοῦ θυσιαστήριον εἰς ὀσμὴν εὐωδίας πνευματικῆς, ἀντικαταπέμψῃ ἡμῖν τὴν θείαν χάριν καὶ τὴν δωρεὰν τοῦ ἁγίου Πνεύματος, δεηθῶμεν.'
);
const HAVING_ASKED_FOR_THE_UNITY_OF_FAITH = text_factory(
  'Having asked for the unity of the faith and for the communion of the Holy Spirit, let us commend ourselves and one another and our whole life to Christ our God.',
  'Τὴν ἑνότητα τῆς πίστεως καὶ τὴν κοινωνίαν τοῦ Ἁγίου Πνεύματος αἰτησάμενοι, ἑαυτοὺς καὶ ἀλλήλους καὶ πᾶσαν τὴν ζωὴν ἡμῶν Χριστῷ τῷ Θεῷ παραθώμεθα.'
);
const FOR_THE_PRECIOUS_GIFTS_PRESENTED_HERE = text_factory(
  'For the precious Gifts here presented and consecrated, let us pray to the Lord.',
  'Ὑπὲρ τῶν προσκομισθέντων καὶ ἁγιασθέντων τιμίων δώρων, τοῦ Κυρίου δεηθῶμεν.'
);
const AND_GRANT_US_MASTER_WITH_BOLDNESS = text_factory(
  'And grant us, Master, with boldness and without condemnation, to dare call You, the heavenly God, Father, and to say:',
  'Καὶ καταξίωσον ἡμᾶς, Δέσποτα, μετὰ παῤῥησίας ἀκατακρίτως τολμᾶν ἐπικαλεῖσθαι σὲ τὸν ἐπουράνιον Θεὸν Πατέρα καὶ λέγειν·'
);
const THE_LORDS_PRAYER_SUBHEADING = subHeading_factory(
  'THE LORD\'S PRAYER',
  'ΚΥΡΙΑΚΗ ΠΡΟΣΕΥΧΗ'
);
const THE_LORDS_PRAYER = hymn_factory(
  'Our Father, who art in heaven, hallowed be Thy name. Thy kingdom come, Thy will be done, on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses, as we forgive those who trespass against us. And lead us not into temptation, but deliver us from evil.',
  'Πάτερ ἡμῶν ὁ ἐν τοῖς οὐρανοῖς, ἁγιασθήτω τὸ ὄνομά σου. Ἐλθέτω ἡ βασιλεία σου. Γενηθήτω τὸ θέλημά σου, ὡς ἐν οὐρανῷ καὶ ἐπὶ τῆς γῆς. Τὸν ἄρτον ἡμῶν τὸν ἐπιούσιον δὸς ἡμῖν σήμερον. Καὶ ἄφες ἡμῖν τὰ ὀφειλήματα ἡμῶν, ὡς καὶ ἡμεῖς ἀφίεμεν τοῖς ὀφειλέταις ἡμῶν. Καὶ μὴ εἰσενέγκῃς ἡμᾶς εἰς πειρασμόν, ἀλλὰ ῥῦσαι ἡμᾶς ἀπὸ τοῦ πονηροῦ.'
);
const LET_US_BOW_OUR_HEADS = text_factory(
  'Let us bow our heads to the Lord.',
  'Τὰς κεφαλὰς ἡμῶν τῷ Κυρίῳ κλίνωμεν.'
);
const THE_HOLY_GIFTS_ARE_FOR_THE_HOLY = text_factory(
  'The Holy Gifts for the holy people of God.',
  "Τὰ ἅγια τοῖς ἁγίοις."
);
const ONE_IS_HOLY_ONE_IS_LORD = text_factory(
  'One is holy, one is Lord, Jesus Christ, to the glory of God the Father. Amen.',
  'Εἷς ἅγιος, εἷς Κύριος, Ἰησοῦς Χριστός, εἰς δόξαν Θεοῦ Πατρός. Ἀμήν.'
);

const section = reactive({
  title: {
    english: 'Final Litany',
    greek: 'Ἐκτενὴς δέησις'
  },
  body: [
    actors.PRIEST, AMONG_THE_FIRST_REMEMBER,
    actors.READER, responses.LORD_HAVE_MERCY,
    actors.PRIEST, AND_GRANT_THAT_WITH_ONE_HEART,
    responses.AMEN,
    AND_THE_MERCIES_OF_OUR_GREAT_GOD,
    actors.CHOIR, responses.AND_WITH_YOUR_SPIRIT_TOU,
    actors.DEACON, COMMEMORATED_SAINTS_AGAIN_AND_AGAIN,
    responses.LORD_HAVE_MERCY,
    THAT_OUR_GOD_HAVING_ACCEPTED_THEM,
    responses.LORD_HAVE_MERCY,
    FOR_THE_PRECIOUS_GIFTS_PRESENTED_HERE,
    responses.LORD_HAVE_MERCY,
    prayers.FOR_DELIVERANCE_DANGER,
    responses.LORD_HAVE_MERCY,
    prayers.HELP_US_SAVE_US,
    responses.LORD_HAVE_MERCY,
    prayers.THAT_THE_WHOLE_DAY_MAY_BE,
    actors.CHOIR,
    responses.GRANT_THIS_O_LORD,
    prayers.FOR_AN_ANGEL_OF_PEACE,
    responses.GRANT_THIS_O_LORD,
    prayers.FOR_PARDON_REMISSION_OF_SINS,
    responses.GRANT_THIS_O_LORD,
    prayers.FOR_THAT_WHICH_IS_GOOD,
    responses.GRANT_THIS_O_LORD,
    prayers.THAT_WE_MAY_COMPLETE_REMAIN_TIME,
    responses.GRANT_THIS_O_LORD,
    prayers.A_CHRISTIAN_ENDING,
    responses.GRANT_THIS_O_LORD,
    prayers.COMMEMORATING_THE_PANAGIA,
    responses.TO_YOU_O_LORD,
    HAVING_ASKED_FOR_THE_UNITY_OF_FAITH,
    responses.TO_YOU_O_LORD,
    AND_GRANT_US_MASTER_WITH_BOLDNESS,
    THE_LORDS_PRAYER_SUBHEADING,
    THE_LORDS_PRAYER,
    actors.PRIEST, prayers.FOR_THINE_IS_THE_KINGDON_AND_THE_POWER_AND_THE_GLORY,
    responses.AMEN,
    prayers.PEACE_BE_WITH_YOU_ALL,
    responses.AND_WITH_YOUR_SPIRIT,
    actors.DEACON, LET_US_BOW_OUR_HEADS,
    responses.TO_YOU_O_LORD,
    actors.PRIEST, prayers.THROUGH_THE_GRACE_AND_COMPASSION_AND_LOVE,
    responses.AMEN,
    actors.DEACON, prayers.LET_US_ATTEND,
    actors.PRIEST, THE_HOLY_GIFTS_ARE_FOR_THE_HOLY,
    actors.CHOIR, ONE_IS_HOLY_ONE_IS_LORD
  ]
});
</script>

<style></style>
