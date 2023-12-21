<template>
    <SectionTemplate :id="useIdStore().THE_DISMISSAL_ID" :section="section" />
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useMainStore, useActorStore, useResponseStore, useIdStore } from '@/store';
import SectionTemplate from './SectionTemplate.vue';
import { text_factory } from '@/factories';

const actors = useActorStore();
const prayers = useMainStore();
const responses = useResponseStore();
const MAY_THE_BLESSING = text_factory(
    'May the blessing and the mercy of the Lord come upon you by His divine grace and love for mankind, always, now and forever and to the ages of ages.',
    'Εὐλογία Κυρίου καὶ ἔλεος ἔλθοι ἐφʼ ὑμᾶς τῇ αὐτοῦ θείᾳ χάριτι καὶ φιλανθρωπίᾳ πάντοτε, νῦν καὶ ἀεὶ καὶ εἰς τοὺς αἰῶνας τῶν αἰώνων.'
);
const DISMISSAL_PRAYER = text_factory(
    'May Christ our true God, through the intercessions of His all-pure and all-immaculate holy Mother, the power of the precious and life-giving Cross, the protection of the honorable, bodiless powers of heaven, the supplications of the honorable, glorious prophet and forerunner John the Baptist, of the holy, glorious, and praiseworthy apostles, of the holy, glorious, and triumphant martyrs, of our righteous and God-bearing fathers, (local patron saint); of the holy and righteous ancestors of God Joachim and Anna, and the holy and glorious hieromartyr Ignatius the God-bearer, whose memory we are observing; and of all the saints, have mercy on us and save us, for He is good and merciful and loves mankind.',
    '*Χριστὸς ὁ ἀληθινὸς Θεὸς ἡμῶν, ταῖς πρεσβείαις τῆς παναχράντου Δεσποίνης ἡμῶν Θεοτόκου καὶ ἀειπαρθένου Μαρίας, ἧς καὶ τὴν σύναξιν ἐπιτελοῦμεν, χάριτι καὶ σκέπῃ τῆς τιμίας καὶ πανακηράτου Αὐτῆς Ἁγίας Ζώνης· δυνάμει τοῦ τιμίου καὶ ζωοποιοῦ Σταυροῦ· προστασίαις τῶν τιμίων ἐπουρανίων Δυνάμεων Ἀσωμάτων· ἱκεσίαις τοῦ τιμίου, ἐνδόξου, Προφήτου, Προδρόμου καὶ Βαπτιστοῦ Ἰωάννου· τῶν ἁγίων ἐνδόξων καὶ πανευφήμων Ἀποστόλων· τῶν ἁγίων ἐνδόξων θεοστέπτων μεγάλων βασιλέων καὶ ἰσαποστόλων Κωνσταντίνου καὶ Ἑλένης· τῶν ἐν ἁγίοις πατέρων ἡμῶν Σάβα ἀρχιεπισκόπου Σερβίας, Γρηγορίου τοῦ Παλαμᾶ καὶ Θεοφάνους Περιθεωρίου τῶν θαυματουργῶν· τῶν ἁγίων ἐνδόξων μεγαλομαρτύρων Γεωργίου τοῦ Τροπαιοφόρου, Δημητρίου τοῦ Μυροβλύτου καὶ ἰαματικοῦ Παντελεήμονος· τοῦ ἁγίου ἐνδόξου ὁσιομάρτυρος Εὐθυμίου καὶ τῶν σὺν αὐτῷ μαρτυρησάντων· τῶν ὁσίων καὶ θεοφόρων πατέρων ἡμῶν καὶ κτιτόρων τῆς ἁγίας Μονῆς ταύτης Νικολάου, Ἀθανασίου καὶ Ἀντωνίου, καὶ τῶν ὁσίων πατέρων ἡμῶν Σάβα τοῦ Βηματάρη, Σάβα τοῦ διὰ Χριστὸν Σαλοῦ, καὶ Συμεὼν τοῦ Μυροβλύτου, καὶ τῶν ὁσίων πατέρων ἡμῶν Εὐδοκίμου, Μαξίμου καὶ Ἰωακεὶμ τῶν νεοφανῶν καὶ θαυματουργῶν, καὶ πάντων τῶν ἐν ἀσκήσει καὶ ἀθλήσει διαλαμψάντων ἐν τῇ ἁγίᾳ Μονῇ ταύτῃ καὶ ἐν τῷ ἁγιωνύμῳ Ὄρει τούτῳ· τῶν ἁγίων καὶ δικαίων Θεοπατόρων Ἰωακεὶμ καὶ Ἄννης, καὶ τοῦ ἐν ἁγίοις πατρὸς ἡμῶν Ἰωάννου ἀρχιεπισκόπου Κωνσταντινουπόλεως τοῦ Χρυσοστόμου, καὶ πάντων τῶν Ἁγίων, ἐλεῆσαι καὶ σῶσαι ἡμᾶς, ὡς ἀγαθὸς καὶ φιλάνθρωπος.'
)
const section = reactive({
    title: {
        english: 'The Dismissal',
        greek: 'Ἀπόλυσις'
    },
    body: [
        actors.DEACON, prayers.LET_US_PRAY_TO_THE_LORD,
        responses.LORD_HAVE_MERCY,
        actors.PRIEST, MAY_THE_BLESSING,
        responses.AMEN,
        responses.GLORY_TO_YOU_O_LORD_GLORY_TO_YOU,
        prayers.GLORIA_PATRI_EE_NOW_AND_EVER_AMEN,
        responses.LORD_HAVE_MERCY_X3,
        prayers.HOLY_FATHER_BLESS,
        actors.PRIEST,
        DISMISSAL_PRAYER,
        prayers.THROUGH_THE_PRAYERS_OF_OUR_HOLY_FATHERS,
        responses.AMEN
    ]
});
</script>

<style></style>
