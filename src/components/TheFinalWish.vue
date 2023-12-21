<template>
  <SectionTemplate :id="useIdStore().THE_FINAL_WISH_ID" :section="section" />
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useMainStore, useActorStore, useResponseStore, useIdStore } from '@/store';
import SectionTemplate from './SectionTemplate.vue';
import { text_factory } from '@/factories';

const prayers = useMainStore();
const actors = useActorStore();
const responses = useResponseStore();
const HOLY_FATHER_BLESS = text_factory(
  'Holy Father, bless.',
  'Πάτερ ἅγιε, εὐλόγησον.'
);
const O_LORD_BLESS_THOSE_WHO = text_factory(
  'O Lord, Who blesses those who bless You and sanctifies those who put their trust in You, save Your people and bless Your inheritance.',
  'Ὁ εὐλογῶν τοὺς εὐλογοῦντάς σε, Κύριε, καὶ ἁγιάζων τοὺς ἐπὶ σοὶ πεποιθότας, σῶσον τὸν λαόν σου καὶ εὐλόγησον τὴν κληρονομίαν σου.'
);
const PROTECT_THE_WHOLE_BODY_OF_YOUR_CHURCH = text_factory(
  'Protect the whole body of Your Church.',
  'Τὸ πλήρωμα τῆς Ἐκκλησίας σου φύλαξον. '
);
const SANCTIFY_THOSE_WHO_LOVE_BEAUTY = text_factory(
  'Sanctify those who love the beauty of Your house.',
  'Ἁγίασον τοὺς ἀγαπῶντας τὴν εὐπρέπειαν τοῦ οἴκου σου.'
);
const GLORIFY_THEM_IN_RETURN = text_factory(
  'Glorify them in return by Your divine power, and forsake us not who have set our hope in You. Grant peace to Your world, to Your churches, to the clergy, to our civic leaders, to the armed forces, and to all Your people. For every good and perfect gift is from above, coming down from You, the Father of lights. To You we give glory, thanksgiving, and worship, to the Father and to the Son and to the Holy Spirit, now and forever and to the ages of ages.',
  'Σὺ αὐτοὺς ἀντιδόξασον τῇ θεϊκῇ σου δυνάμει, καὶ μὴ ἐγκαταλίπῃς ἡμᾶς τοὺς ἐλπίζοντας ἐπὶ σέ. Εἰρήνην τῷ κόσμῳ σου δώρησαι, ταῖς Ἐκκλησίαις σου, τοῖς ἱερεῦσι, τοῖς βασιλεῦσιν ἡμῶν, τῷ στρατῷ καὶ παντὶ τῷ λαῷ σου· ὅτι πᾶσα δόσις ἀγαθὴ καὶ πᾶν δώρημα τέλειον ἄνωθέν ἐστι, καταβαῖνον ἐκ σοῦ τοῦ Πατρὸς τῶν φώτων· καὶ σοὶ τὴν δόξαν καὶ εὐχαριστίαν καὶ προσκύνησιν ἀναπέμπομεν, τῷ Πατρὶ καὶ τῷ Υἱῷ καὶ τῷ Ἁγίῳ Πνεύματι, νῦν καὶ ἀεὶ καὶ εἰς τοὺς αἰῶνας τῶν αἰώνων.'
)
const section = reactive({
  title: {
    english: 'The Final Wish',
    greek: 'Ὀπισθάμβωνος εὐχή'
  },
  body: [
    actors.PRIEST, prayers.LET_US_GO_FORTH_IN_PEACE,
    responses.IN_THE_NAME_OF_THE_LORD,
    actors.DEACON, prayers.LET_US_PRAY_TO_THE_LORD,
    responses.LORD_HAVE_MERCY_X3,
    HOLY_FATHER_BLESS,
    actors.PRIEST, O_LORD_BLESS_THOSE_WHO,
    responses.AMEN,
    PROTECT_THE_WHOLE_BODY_OF_YOUR_CHURCH,
    responses.AMEN,
    SANCTIFY_THOSE_WHO_LOVE_BEAUTY,
    responses.AMEN,
    GLORIFY_THEM_IN_RETURN
  ]   
});
</script>

<style></style>
