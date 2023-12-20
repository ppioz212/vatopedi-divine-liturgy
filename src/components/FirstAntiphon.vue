<template>
  <SectionTemplate :id="useIdStore().FIRST_ANTIPHON_ID" :section="section" />
</template>

<script setup lang="ts">
import { useMainStore, useActorStore, useIdStore, useResponseStore } from '@/store';
import { reactive } from 'vue';
import SectionTemplate from './SectionTemplate.vue';
import { text_factory, verse_factory, subHeading_factory } from '@/factories';

const prayers = useMainStore()
const actors = useActorStore()
const responses = useResponseStore()
const PSALM_102_SUBHEADING = subHeading_factory('Psalm 102 (103)', 'Ψαλμὸς 102 (103)'); // 
const INTRO = text_factory(
  'Bless the Lord, O my soul, Bless the Lord!',
  'Εὐλόγει ἡ ψυχή μου, τὸν Κύριον, εὐλογητὸς εἶ, Κύριε!'
);
const VERSE1 = verse_factory(
  '1',
  'Bless the Lord, O my soul, And all that is within me, bless His holy name!',
  'Εὐλόγει ἡ ψυχή μου, τὸν Κύριον, καὶ πάντα τὰ ἐντός μου, τὸ ὄνομα τὸ ἅγιον αὐτοῦ.'
);
const VERSE2 = verse_factory(
  '2',
  'Bless the Lord, O my soul, And forget not all His benefits.',
  'Εὐλόγει ἡ ψυχή μου, τὸν Κύριον, καὶ μὴ ἐπιλανθάνου πάσας τὰς ἀνταποδόσεις αὐτοῦ.'
);
const VERSE3 = verse_factory(
  '3',
  'Who forgives all your iniquities, Who heals all your diseases.',
  'Τὸν εὐϊλατεύοντα πάσας τὰς ἀνομίας σου, τὸν ἰώμενον πάσας τὰς νόσους σου.'
);
const VERSE4 = verse_factory(
  '4',
  'Who redeems your life from destruction, Who crowns you with loving kindness and tender mercies.',
  'Τὸν λυτρούμενον ἐκ φθορᾶς τὴν ζωήν σου, τὸν στεφανοῦντά σε ἐν ἐλέει καὶ οἰκτιρμοῖς.'
);
const VERSE5 = verse_factory(
  '5',
  'Who satisfies your mouth with good things, So that your youth is renewed like the eagle’s.',
  'τὸν ἐμπιπλῶντα ἐν ἀγαθοῖς τὴν ἐπιθυμίαν σου ἀνακαινισθήσεται ὡς ἀετοῦ ἡ νεότης σου'
);
const VERSE6 = verse_factory(
  '6',
  'The Lord executes righteousness, And justice for all who are oppressed.',
  'ποιῶν ἐλεημοσύνας ὁ κύριος καὶ κρίμα πᾶσι τοῖς ἀδικουμένοις.'
);
const VERSE7 = verse_factory(
  '7',
  'He made known His ways to Moses, His acts to the children of Israel.',
  'Ἐγνώρισε τὰς ὁδοὺς αὐτοῦ τῷ Μωϋσῇ, τοῖς υἱοῖς Ἰσραὴλ τὰ θελήματα αὐτοῦ.'
);
const VERSE8 = verse_factory(
  '8',
  'The Lord is merciful and gracious, Slow to anger, and abounding in mercy.',
  'οἰκτίρμων καὶ ἐλεήμων ὁ κύριος μακρόθυμος καὶ πολυέλεος'
);
const VERSE9 = verse_factory(
  '9',
  'He will not always strive with us, Nor will He keep His anger forever.',
  'οὐκ εἰς τέλος ὀργισθήσεται οὐδὲ εἰς τὸν αἰῶνα μηνιεῖ'
);
const VERSE10 = verse_factory(
  '10',
  'He has not dealt with us according to our sins, Nor punished us according to our iniquities.',
  'οὐ κατὰ τὰς ἁμαρτίας ἡμῶν ἐποίησεν ἡμῖν οὐδὲ κατὰ τὰς ἀνομίας ἡμῶν ἀνταπέδωκεν ἡμῖν'
);
const VERSE11 = verse_factory(
  '11',
  'For as the heavens are high above the earth, So great is His mercy toward those who fear Him;',
  'ὅτι κατὰ τὸ ὕψος τοῦ οὐρανοῦ ἀπὸ τῆς γῆς ἐκραταίωσεν κύριος τὸ ἔλεος αὐτοῦ ἐπὶ τοὺς φοβουμένους αὐτόν'
);
const VERSE12 = verse_factory(
  '12',
  'As far as the east is from the west, So far has He removed our transgressions from us.',
  'καθ᾽ ὅσον ἀπέχουσιν ἀνατολαὶ ἀπὸ δυσμῶν ἐμάκρυνεν ἀφ᾽ ἡμῶν τὰς ἀνομίας ἡμῶν'
);
const VERSE13 = verse_factory(
  '13',
  'As a father pities his children, So the Lord pities those who fear Him.',
  'καθὼς οἰκτίρει πατὴρ υἱούς οἰκτίρησεν κύριος τοὺς φοβουμένους αὐτόν'
);
const VERSE14 = verse_factory(
  '14',
  'For He knows our frame; He remembers that we are dust.',
  'ὅτι αὐτὸς ἔγνω τὸ πλάσμα ἡμῶν μνήσθητι ὅτι χοῦς ἐσμεν'
);
const VERSE15 = verse_factory(
  '15',
  'As for man, his days are like grass; As a flower of the field, so he flourishes.',
  'ἄνθρωπος ὡσεὶ χόρτος αἱ ἡμέραι αὐτοῦ ὡσεὶ ἄνθος τοῦ ἀγροῦ οὕτως ἐξανθήσει'
);
const VERSE16 = verse_factory(
  '16',
  'For the wind passes over it, and it is gone, And its place remembers it no more.',
  'ὅτι πνεῦμα διῆλθεν ἐν αὐτῷ καὶ οὐχ ὑπάρξει καὶ οὐκ ἐπιγνώσεται ἔτι τὸν τόπον αὐτοῦ'
);
const VERSE17 = verse_factory(
  '17',
  'But the mercy of the Lord is from everlasting to everlasting on those who fear Him, And His righteousness to children’s children',
  'τὸ δὲ ἔλεος τοῦ κυρίου ἀπὸ τοῦ αἰῶνος καὶ ἕως τοῦ αἰῶνος ἐπὶ τοὺς φοβουμένους αὐτόν καὶ ἡ δικαιοσύνη αὐτοῦ ἐπὶ υἱοὺς υἱῶν'
);
const VERSE18 = verse_factory(
  '18',
  'To such as keep His covenant, And to those who remember His commandments to do them.',
  'τοῖς φυλάσσουσιν τὴν διαθήκην αὐτοῦ καὶ μεμνημένοις τῶν ἐντολῶν αὐτοῦ τοῦ ποιῆσαι αὐτάς'
);
const VERSE19 = verse_factory(
  '19',
  'The Lord has established His throne in heaven, And His kingdom rules over all.',
  'κύριος ἐν τῷ οὐρανῷ ἡτοίμασεν τὸν θρόνον αὐτοῦ καὶ ἡ βασιλεία αὐτοῦ πάντων δεσπόζει'
);
const VERSE20 = verse_factory(
  '20',
  'Bless the Lord, you His angels, Who excel in strength, who do His word, Heeding the voice of His word.',
  'εὐλογεῖτε τὸν κύριον πάντες οἱ ἄγγελοι αὐτοῦ δυνατοὶ ἰσχύι ποιοῦντες τὸν λόγον αὐτοῦ τοῦ ἀκοῦσαι τῆς φωνῆς τῶν λόγων αὐτοῦ'
);
const VERSE21 = verse_factory(
  '21',
  'Bless the Lord, all you His hosts, You ministers of His, who do His pleasure.',
  'εὐλογεῖτε τὸν κύριον πᾶσαι αἱ δυνάμεις αὐτοῦ λειτουργοὶ αὐτοῦ ποιοῦντες τὸ θέλημα αὐτοῦ'
);
const VERSE22 = verse_factory(
  '22',
  'Bless the Lord, all His works, In all places of His dominion. Bless the Lord, O my soul!',
  'εὐλογεῖτε τὸν κύριον πάντα τὰ ἔργα αὐτοῦ ἐν παντὶ τόπῳ τῆς δεσποτείας αὐτοῦ εὐλόγει ἡ ψυχή μου τὸν κύριον'
)
const OUTRO = text_factory(
  'Bless the Lord, O my soul, And all that is within me, bless His holy name! Bless the Lord!',
  'Εὐλόγει ἡ ψυχή μου, τὸν Κύριον, καὶ πάντα τὰ ἐντός μου, τὸ ὄνομα τὸ ἅγιον αὐτοῦ. εὐλογητὸς εἶ, Κύριε!'
)
const section = reactive({
  title: {
    english: 'First Antiphon',
    greek: 'Α΄ Στάσις Τυπικῶν'
  },
  body: [
    PSALM_102_SUBHEADING,
    actors.CHOIR,
    INTRO,
    VERSE1,
    VERSE2,
    VERSE3,
    VERSE4,
    VERSE5,
    VERSE6,
    VERSE7,
    VERSE8,
    VERSE9,
    VERSE10,
    VERSE11,
    VERSE12,
    VERSE13,
    VERSE14,
    VERSE15,
    VERSE16,
    VERSE17,
    VERSE18,
    VERSE19,
    VERSE20,
    VERSE21,
    VERSE22,
    prayers.GLORIA_PATRI_EE_NOW_AND_EVER_AMEN,
    OUTRO,
    actors.DEACON,
    prayers.AGAIN_AND_AGAIN_IN_PEACE_LET_US_PRAY,
    responses.LORD_HAVE_MERCY,
    prayers.HELP_US_SAVE_US,
    responses.LORD_HAVE_MERCY,
    prayers.COMMEMORATING_THE_PANAGIA,
    responses.TO_YOU_O_LORD,
    actors.PRIEST,
    prayers.FOR_YOURS_IS_DOMINION_POWER_GLORY,
    responses.AMEN
  ]
});
</script>

<style scoped></style>
