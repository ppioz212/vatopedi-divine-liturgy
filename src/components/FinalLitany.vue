<template>
  <SectionTemplate :id="useIdStore().FINAL_LITANY_ID" :section="section" />
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useMainStore, useActorStore, useResponseStore, useIdStore } from '@/store';
import SectionTemplate from './SectionTemplate.vue';
import { text_factory } from '@/factories';

const prayers = useMainStore()
const actors = useActorStore()
const responses = useResponseStore()
const AMONG_THE_FIRST_REMEMBER = text_factory(
  'Among the first remember, Lord, our Archbishop Bartholomew grant him to Your holy churches in peace, safety, honor, and health, unto length of days, rightly teaching the word of Your truth.',
  'Ἐν πρώτοις μνήσθητι, Κύριε, τοῦ ἀρχιεπισκόπου ἡμῶν Βαρθολομαίου, ὃν χάρισαι ταῖς ἁγίαις σου Ἐκκλησίαις ἐν εἰρήνῃ, σῷον, ἔντιμον, ὑγιᾶ, μακροημερεύοντα καὶ ὀρθοτομοῦντα τὸν λόγον τῆς σῆς ἀληθείας. '
)
const AND_GRANT_THAT_WITH_ONE_HEART = text_factory(
  'And grant that with one voice and one heart we may glorify and praise Your most honorable and majestic name, of the Father and of the Son and of the Holy Spirit, now and forever and to the ages of ages.',
  'Καὶ δὸς ἡμῖν ἐν ἑνὶ στόματι καὶ μιᾷ καρδίᾳ δοξάζειν καὶ ἀνυμνεῖν τὸ πάντιμον καὶ μεγαλοπρεπὲς ὄνομά σου, τοῦ Πατρὸς καὶ τοῦ Υἱοῦ καὶ τοῦ ἁγίου Πνεύματος, νῦν καὶ ἀεὶ καὶ εἰς τοὺς αἰῶνας τῶν αἰώνων.'
)
const AND_THE_MERCIES_OF_OUR_GREAT_GOD = text_factory(
  'And the mercies of our great God and Savior, Jesus Christ, be with you all.',
  'Καὶ ἔσται τὰ ἐλέη τοῦ μεγάλου Θεοῦ καὶ Σωτῆρος ἡμῶν Ἰησοῦ Χριστοῦ μετὰ πάντων ὑμῶν.'
)
const COMMEMORATED_SAINTS_AGAIN_AND_AGAIN = text_factory(
  'Having commemorated all the saints, again and again, in peace, let us pray to the Lord.',
  'Πάντων τῶν ἁγίων μνημονεύσαντες, ἔτι καὶ ἔτι ἐν εἰρήνῃ τοῦ Κυρίου δεηθῶμεν.'
)
const THAT_OUR_GOD_HAVING_ACCEPTED_THEM = text_factory(
  'That our God Who loves mankind, having accepted them at His holy and celestial and mystical altar as an offering of spiritual fragrance, may in return send down upon us the divine grace and the gift of the Holy Spirit, let us pray.',
  'Ὅπως ὁ φιλάνθρωπος Θεὸς ἡμῶν, ὁ προσδεξάμενος αὐτὰ εἰς τὸ ἅγιον καὶ ὑπερουράνιον καὶ νοερὸν αὐτοῦ θυσιαστήριον εἰς ὀσμὴν εὐωδίας πνευματικῆς, ἀντικαταπέμψῃ ἡμῖν τὴν θείαν χάριν καὶ τὴν δωρεὰν τοῦ ἁγίου Πνεύματος, δεηθῶμεν.'
)
const HAVING_ASKED_FOR_THE_UNITY_OF_FAITH = text_factory(
  'Having asked for the unity of the faith and for the communion of the Holy Spirit, let us commend ourselves and one another and our whole life to Christ our God.',
  'Τὴν ἑνότητα τῆς πίστεως καὶ τὴν κοινωνίαν τοῦ Ἁγίου Πνεύματος αἰτησάμενοι, ἑαυτοὺς καὶ ἀλλήλους καὶ πᾶσαν τὴν ζωὴν ἡμῶν Χριστῷ τῷ Θεῷ παραθώμεθα.'
)

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
    responses.TO_YOU_O_LORD
  ]
});
</script>

<style></style>
