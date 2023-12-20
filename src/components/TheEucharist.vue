<template>
  <SectionTemplate :id="useIdStore().THE_EUCHARIST_ID" :section="section" />
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useMainStore, useActorStore, useResponseStore, useIdStore } from '@/store';
import SectionTemplate from './SectionTemplate.vue';
import { text_factory, hymn_factory } from '@/factories';

const prayers = useMainStore();
const actors = useActorStore();
const responses = useResponseStore();
const WITH_FEAR_OF_GOD_FAITH_LOVE = text_factory(
  'With the fear of God, faith, and love, draw near.',
  'Μετὰ φόβου Θεοῦ, πίστεως καὶ ἀγάπης προσέλθετε.'
);
const AMENx3_BLESSED_IS_HE_WHO_COMES = text_factory(
  'Amen, amen, amen, Blessed is He who comes in the name of the Lord.',
  'Ἀμήν, ἀμήν, ἀμήν. Εὐλογημένος ὁ ἐρχόμενος ἐν ὀνόματι Κυρίου.'
);
const RECEIVE_THE_BODY = text_factory(
  'Receive the Body of Christ; taste the fountain of immortality.',
  'Σῶμα Χριστοῦ μεταλάβετε, πηγῆς ἀθανάτου γεύσασθε. '
);
const SAVE_YOUR_PEEP_BLESS_INHERITANCE = text_factory(
  'Save, O God, Your people, and bless Your inheritance.',
  "Σῶσον, ὁ Θεός, τὸν λαόν σου καὶ εὐλόγησον τὴν κληρονομίαν σου."
);
const THE_LORD_HAS_APPEARED_TO_US = text_factory(
  'The Lord has appeared to us.',
  'Θεὸς Κύριος καὶ ἐπέφανεν ἡμῖν.'
)
const WE_HAVE_SEEN_THE_TRUE_LIGHT = hymn_factory(
  'We have seen the true light; we have received the heavenly Spirit; we have found the true faith, worshiping the undivided Trinity, for the Trinity has saved us.',
  'Εἴδομεν τὸ φῶς τὸ ἀληθινόν, ἐλάβομεν Πνεῦμα ἐπουράνιον, εὓρομεν πίστιν ἀληθῆ, ἀδιαίρετον Τριάδα προσκυνοῦντες· αὕτη γὰρ ἡμᾶς ἔσωσεν.'
);
const AMENx3_THE_FORGIVENESS_OF_SINS = text_factory(
  'Amen, amen, amen. The forgiveness of sins and life eternal.',
  'Ἀμήν, ἀμήν, ἀμήν. Εἰς ἄφεσιν ἁμαρτιῶν καὶ ζωὴν τὴν αἰώνιον.'
);
const LET_OUR_MOUTHS_BE_FILLED = hymn_factory(
  'Let our mouths be filled with your praise O Lord. That we may sing of your glory. Because you have made us worthy to partake of your holy mysteries. Keep us in your sanctification, that all day long we may meditate upon your righteousness. Alleluia, alleluia, alleluia.',
  'Πληρωθήτω τὸ στόμα ἡμῶν αἰνέσεώς σου, Κύριε, ὅπως ὑμνήσωμεν τὴν δόξαν σου, ὅτι ἠξίωσας ἡμᾶς μετασχεῖν τῶν ἁγίων μυστηρίων σου· τήρησον ἡμᾶς ἐν τῷ σῷ ἁγιασμῷ, ὅλην τὴν ἡμέραν μελετᾶν τὴν δικαιοσύνην σου. Ἀλληλούϊα, ἀλληλούϊα, ἀλληλούϊα.'
);
const ARISE_HAVING_PARTAKEN = text_factory(
  'Arise! Having partaken of the divine, holy, pure, immortal, heavenly, life-creating, and awesome Mysteries of Christ, let us worthily give thanks to the Lord.',
  'Ὀρθοί· μεταλαβόντες τῶν θείων, ἁγίων, ἀχράντων, ἀθανάτων, ἐπουρανίων καὶ ζωοποιῶν, φρικτῶν τοῦ Χριστοῦ μυστηρίων, ἀξίως εὐχαριστήσωμεν τῷ Κυρίῳ.'
);
const THAT_THE_WHOLE_DAY_HAVING_COMMEMORATED = text_factory(
  'Having prayed for a perfect, holy, peaceful, and sinless day, let us commend ourselves and one another and our whole life to Christ our God.',
  'Τὴν ἡμέραν πᾶσαν, τελείαν, ἁγίαν, εἰρηνικὴν καὶ ἀναμάρτητον αἰτησάμενοι, ἑαυτοὺς καὶ ἀλλήλους καὶ πᾶσαν τὴν ζωὴν ἡμῶν Χριστῷ τῷ Θεῷ παραθώμεθα.'
)
const section = reactive({
  title: {
    english: 'The Eucharist',
    greek: 'Θεία Μετάληψις'
  },
  body: [
    actors.DEACON, WITH_FEAR_OF_GOD_FAITH_LOVE,
    actors.CHOIR, AMENx3_BLESSED_IS_HE_WHO_COMES, RECEIVE_THE_BODY,
    actors.PRIEST, SAVE_YOUR_PEEP_BLESS_INHERITANCE,
    actors.CHOIR, THE_LORD_HAS_APPEARED_TO_US,
    actors.CHOIR, WE_HAVE_SEEN_THE_TRUE_LIGHT,
    actors.PRIEST, prayers.ALWAYS_NOW_AND_FOREVER_AND_TO_THE_AGES_OF_AGES,
    actors.CHOIR, AMENx3_THE_FORGIVENESS_OF_SINS,
    LET_OUR_MOUTHS_BE_FILLED,
    actors.DEACON, ARISE_HAVING_PARTAKEN,
    responses.LORD_HAVE_MERCY,
    prayers.HELP_US_SAVE_US,
    responses.LORD_HAVE_MERCY,
    THAT_THE_WHOLE_DAY_HAVING_COMMEMORATED,
    responses.TO_YOU_O_LORD,
    prayers.FOR_YOU_ARE_OUR_SANCTIFICATION,
    responses.AMEN,
    
  ]
});
</script>

<style></style>
