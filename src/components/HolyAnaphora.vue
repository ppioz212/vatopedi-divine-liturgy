<template>
  <SectionTemplate :section="section" />
</template>

<script setup lang="ts">
import { useActorStore, useResponseStore } from '@/store';
import { reactive } from 'vue';
import SectionTemplate from './SectionTemplate.vue';
import { hymn_factory, text_factory, low_voice_factory } from '@/factories'

const actors = useActorStore();
const responses = useResponseStore();
const LET_US_STAND_ARIGHT = text_factory(
  'Let us stand aright! Let us stand in awe! Let us be attentive, that we may present the Holy Offering in peace.',
  'Στῶμεν καλῶς· στῶμεν μετὰ φόβου. Πρόσσχωμεν, τὴν ἁγίαν ἀναφορὰν ἐν εἰρήνῃ προσφέρειν.'
)
const A_MERCY_OF_PEACE = text_factory(
  'A mercy of peace, a sacrifice of praise.',
  'Ἔλεον εἰρήνης, θυσίαν αἰνέσεως.'
)
const THE_GRACE_OF_OUR_LORD_JESUS_CHRIST = text_factory(
  'The grace of our Lord Jesus Christ, and the love of God and Father, and the communion of the Holy Spirit, be with you all.',
  'Ἡ χάρις τοῦ Κυρίου ἡμῶν Ἰησοῦ Χριστοῦ καὶ ἡ ἀγάπη τοῦ Θεοῦ καὶ Πατρὸς καὶ ἡ κοινωνία τοῦ ἁγίου Πνεύματος εἴη μετὰ πάντων ὑμῶν.'
)
const AND_WITH_YOUR_SPIRIT = text_factory(
  'And with your spirit.',
  'Καὶ μετὰ τοῦ πνεύματός σου.'
)
const LET_US_LIFT_UP_OUR_HEARTS = text_factory(
  'Let us lift up our hearts.',
  'Ἄνω σχῶμεν τὰς καρδίας.'
)
const we_lift_them_upto_the_lord = text_factory(
  'We lift them up to the Lord.',
  'Ἔχομεν πρὸς τὸν Κύριον.'
)
const let_give_thanks_unto_the_lord = text_factory(
  'Let us give thanks to the Lord.',
  'Εὐχαριστήσωμεν τῷ Κυρίῳ.'
)
const it_is_meet_and_right = text_factory(
  'It is proper and right.',
  'Ἄξιον καὶ δίκαιον.'
)
const priestly_prayer = low_voice_factory(
  'It is proper and right to hymn You, to bless You, to praise You, to give thanks to You, and to worship You in every place of Your dominion. For You, O God, are ineffable, inconceivable, invisible, incomprehensible, existing forever, forever the same, You and Your only-begotten Son and Your Holy Spirit. You brought us out of nothing into being, and when we had fallen away, You raised us up again. You left nothing undone until you had led us up to heaven and granted us Your Kingdom, which is to come. For all these things, we thank You and Your only-begotten Son and Your Holy Spirit: for all things we know and do not know, for blessings manifest and hidden that have been bestowed on us. We thank You also for this Liturgy, which You have deigned to receive from our hands, even though thousands of archangels and tens of thousands of angels stand around You, the Cherubim and Seraphim, six-winged, many­ eyed, soaring aloft upon their wings,',
  'Ἄξιον καὶ δίκαιον σὲ ὑμνεῖν, σὲ εὐλογεῖν, σὲ αἰνεῖν, σοὶ εὐχαριστεῖν, σὲ προσκυνεῖν ἐν παντὶ τόπῳ τῆς δεσποτείας σου. Σὺ γὰρ εἶ Θεὸς ἀνέκφραστος, ἀπερινόητος, ἀόρατος, ἀκατάληπτος, ἀεὶ ὤν, ὡσαύτως ὤν· σὺ καὶ ὁ μονογενής σου Υἱός, καὶ τὸ Πνεῦμά σου τὸ ἅγιον. Σὺ ἐκ τοῦ μὴ ὄντος εἰς τὸ εἶναι ἡμᾶς παρήγαγες καὶ παραπεσόντας ἀνέστησας πάλιν καὶ οὐκ ἀπέστης πάντα ποιῶν, ἕως ἡμᾶς εἰς τὸν οὐρανὸν ἀνήγαγες καὶ τὴν βασιλείαν σου ἐχαρίσω τὴν μέλλουσαν. Ὑπὲρ τούτων ἁπάντων εὐχαριστοῦμέν σοι καὶ τῷ μονογενεῖ σου Υἱῷ καὶ τῷ Πνεύματί σου τῷ ἁγίῳ· ὑπὲρ πάντων, ὧν ἴσμεν καὶ ὧν οὐκ ἴσμεν, τῶν φανερῶν καὶ ἀφανῶν εὐεργεσιῶν τῶν εἰς ἡμᾶς γεγενημένων. Εὐχαριστοῦμέν σοι καὶ ὑπὲρ τῆς λειτουργίας ταύτης, ἥν ἐκ τῶν χειρῶν ἡμῶν δέξασθαι κατηξίωσας, καίτοι σοι παρεστήκασι χιλιάδες ἀρχαγγέλων καὶ μυριάδες ἀγγέλων, τὰ Χερουβεὶμ καὶ τὰ Σεραφείμ, ἑξαπτέρυγα, πολυόμματα, μετάρσια, πτερωτά,'
)
const singing_the_triumphal_hymn = text_factory(
  'Singing the triumphal hymn, exclaiming, proclaiming, and saying…',
  'Τὸν ἐπινίκιον ὕμνον ᾄδοντα, βοῶντα, κεκραγότα καὶ λέγοντα'
)
const holy_holy_holy_lord_sabbaoth = hymn_factory(
  'Holy, holy, holy, Lord Sabaoth, heaven and earth are filled with Your glory. Hosanna in the highest. Blessed is He Who comes in the name of the Lord. Hosanna in the highest.',
  'Ἅγιος, ἅγιος, ἅγιος, Κύριος Σαβαώθ· πλήρης, ὁ οὐρανὸς καὶ ἡ γῆ τῆς δόξης σου. Ὡσαννά, ἐν τοῖς ὑψίστοις· εὐλογημένος ὁ ἐρχόμενος ἐν ὀνόματι Κυρίου. Ὡσαννά, ἐν τοῖς ὑψίστοις.'
)
const priestly_prayer_2 = low_voice_factory(
  'Together with these blessed powers, Master, Who loves mankind, we also exclaim and say: Holy are You and most holy, You and Your only­begotten Son and Your Holy Spirit. Holy are You and most holy, and sublime is Your glory. You so loved Your world that You gave Your only-begotten Son so that everyone who believes in Him should not perish, but have eternal life. When He had come and fulfilled for our sake the entire plan of salvation, on the night in which He was delivered up, or rather when He delivered Himself up for the life of the world, He took bread in His holy, pure, and blameless hands, and, giving thanks and blessing, He hallowed and broke it, and gave it to His holy disciples and apostles, saying:',
  "Μετὰ τούτων καὶ ἡμεῖς τῶν μακαρίων δυνάμεων, Δέσποτα φιλάνθρωπε, βοῶμεν καὶ λέγομεν· Ἅγιος εἶ καὶ πανάγιος, σὺ καὶ ὁ μονογενής σου Υἱὸς καὶ τὸ Πνεῦμά σου τὸ ἅγιον. Ἅγιος εἶ καὶ πανάγιος καὶ μεγαλοπρεπὴς ἡ δόξα σου· ὃς τὸν κόσμον σου οὕτως ἠγάπησας, ὥστε τὸν Υἱόν σου τὸν μονογενῆ δοῦναι, ἵνα πᾶς ὁ πιστεύων εἰς αὐτὸν μὴ ἀπόλυται, ἀλλ' ἔχῃ ζωὴν αἰώνιον.Ὃς ἐλθὼν καὶ πᾶσαν τὴν ὑπὲρ ἡμῶν οἰκονομίαν πληρώσας, τῇ νυκτὶ ᾗ παρεδίδοτο, μᾶλλον δὲ ἑαυτὸν παρεδίδου ὑπὲρ τῆς τοῦ κόσμου ζωῆς, λαβὼν ἄρτον ἐν ταῖς ἁγίαις αὐτοῦ καὶ ἀχράντοις καὶ ἀμωμήτοις χερσίν, εὐχαριστήσας καὶ εὐλογήσας, ἁγιάσας, κλάσας, ἔδωκε τοῖς ἁγίοις αὐτοῦ μαθηταῖς καὶ ἀποστόλοις, εἰπών·"
)
const take_eat_this_is_my_body = text_factory(
  'Take, eat, this is My Body, which is broken for you for the remission of sins.',
  'Λάβετε, φάγετε· τοῦτό μού ἐστι τὸ σῶμα, τὸ ὑπὲρ ὑμῶν κλώμενον εἰς ἄφεσιν ἁμαρτιῶν.'
)
const priestly_prayer_3 = low_voice_factory(
  'Likewise, after partaking of the supper, He took the cup, saying,',
  'Ὁμοίως καὶ τὸ ποτήριον μετὰ τὸ δειπνῆσαι, λέγων·'
)
const drink_of_this_all_of_you = text_factory(
  'Drink of this, all of you; this is My Blood of the new covenant, which is shed for you and for many for the remission of sins.',
  'Πίετε ἐξ αὐτοῦ πάντες· τοῦτό ἐστι τὸ αἷμά μου, τὸ τῆς καινῆς διαθήκης, τὸ ὑπὲρ ὑμῶν καὶ πολλῶν ἐκχυνόμενον εἰς ἄφεσιν ἁμαρτιῶν.'
)
const priestly_prayer_4 = low_voice_factory(
  'Remembering, therefore, this saving commandment and all that has been done for our sake: the Cross, the tomb, the Resurrection on the third day, the Ascension into heaven, the enthronement at the right hand, and the second and glorious coming again.',
  'Μεμνημένοι τοίνυν τῆς σωτηρίου ταύτης ἐντολῆς καὶ πάντων τῶν ὑπὲρ ἡμῶν γεγενημένων, τοῦ σταυροῦ, τοῦ τάφου, τῆς τριημέρου ἀναστάσεως, τῆς εἰς οὐρανοὺς ἀναβάσεως, τῆς ἐκ δεξιῶν καθέδρας, τῆς δευτέρας καὶ ἐνδόξου πάλιν παρουσίας,'
)
const thine_of_thine_own = text_factory(
  'Your own of Your own we offer to You, in all and for all.',
  'Τὰ σὰ ἐκ τῶν σῶν σοὶ προσφέρομεν κατὰ πάντα καὶ διὰ πάντα.'
)
const we_praise_bless_give_thanks = hymn_factory(
  'We praise You, we bless You, we give thanks to You, and we pray to You, Lord our God.',
  'Σὲ ὑμνοῦμεν, σὲ εὐλογοῦμεν, σοὶ εὐχαριστοῦμεν, Κύριε, καὶ δεόμεθά σου, ὁ Θεὸς ἡμῶν.'
)
const especially_for_the_panagia = text_factory(
  'Especially for our most holy, pure, blessed, and glorious Lady, the Theotokos and ever-virgin Mary.',
  'Ἐξαιρέτως τῆς παναγίας, ἀχράντου, ὑπερευλογημένης, ἐνδόξου, δεσποίνης ἡμῶν, Θεοτόκου καὶ ἀειπαρθένου Μαρίας.'
)
const section = reactive({
  title: {
    english: 'The Holy Anaphora',
    greek: 'Ἁγία Ἀναφορά'
  },
  body: [
    actors.PRIEST, LET_US_STAND_ARIGHT,
    actors.CHOIR, A_MERCY_OF_PEACE,
    actors.PRIEST, THE_GRACE_OF_OUR_LORD_JESUS_CHRIST,
    actors.CHOIR, AND_WITH_YOUR_SPIRIT,
    actors.PRIEST, LET_US_LIFT_UP_OUR_HEARTS,
    actors.CHOIR, we_lift_them_upto_the_lord,
    actors.PRIEST, let_give_thanks_unto_the_lord,
    actors.CHOIR, it_is_meet_and_right,
    actors.LOW_VOICE_PRIEST, //low voice *
    priestly_prayer,
    actors.PRIEST, singing_the_triumphal_hymn,
    actors.CHOIR, holy_holy_holy_lord_sabbaoth,
    actors.LOW_VOICE_PRIEST, //low voice *
    priestly_prayer_2,
    actors.PRIEST, take_eat_this_is_my_body,
    responses.AMEN,
    actors.LOW_VOICE_PRIEST, //low voice
    priestly_prayer_3,
    actors.PRIEST, drink_of_this_all_of_you,
    responses.AMEN,
    actors.LOW_VOICE_PRIEST, //low voice
    priestly_prayer_4,
    actors.PRIEST, thine_of_thine_own,
    actors.CHOIR,
    we_praise_bless_give_thanks,
    actors.PRIEST,
    especially_for_the_panagia
  ]
});
</script>

<style scoped></style>
