<template>
  <SectionTemplate :section="section" />
</template>

<script setup lang="ts">
import { useMainStore, useActorStore, useResponseStore } from '@/store';
import { reactive } from 'vue';
import SectionTemplate from './SectionTemplate.vue';
import { text_factory, chap_verse_factory } from '@/factories'

const prayers = useMainStore()
const actors = useActorStore()
const responses = useResponseStore()
const SOPHIA_LET_US_HEAR_THE_GOSPEL = text_factory(
  "Widsom. Arise. Let us hear the Holy Gospel.",
  "Σοφίᾳ· ὀρθοί· ἀκούσωμεν τοῦ ἁγίου Εὐαγγελίου."
)
const THE_READING_IS_FROM_LUKE = text_factory(
  "The reading is from the holy Gospel according to Luke.",
  "Ἐκ τοῦ κατὰ Λουκᾶν ἁγίου Εὐαγγελίου τὸ ἀνάγνωσμα."
)
const CHAP_VERSE_SUBHEADING = chap_verse_factory("Luke. 10:38-42, 11:27-28", "Λου. 10:38-42, 11:27-28")
const LUKE_CHAP_10_38_TO_42 = text_factory(
  "Now as they went on their way, Jesus entered a village. And a woman named Martha welcomed him into her house. And she had a sister called Mary, who sat at the Lord's feet and listened to his teaching. But Martha was distracted with much serving. And she went up to him and said, “Lord, do you not care that my sister has left me to serve alone? Tell her then to help me.” But the Lord answered her, “Martha, Martha, you are anxious and troubled about many things, but one thing is necessary. Mary has chosen the good portion, which will not be taken away from her.”",
  "Τῷ καιρῷ ἐκείνῳ, εἰσῆλθεν ὁ Ἰησοῦς εἰς κώμην τινά· γυνὴ δέ τις ὀνόματι Μάρθα ὑπεδέξατο αὐτὸν εἰς τὸν οἶκον αὐτῆς. Καὶ τῇδε ἦν ἀδελφὴ καλουμένη Μαρία, ἣ καὶ παρακαθίσασα παρὰ τοὺς πόδας τοῦ Ἰησοῦ ἤκουε τὸν λόγον αὐτοῦ. Ἡ δὲ Μάρθα περιεσπᾶτο περὶ πολλὴν διακονίαν· ἐπιστᾶσα δὲ εἶπε· Κύριε, οὐ μέλει σοι, ὅτι ἡ ἀδελφή μου μόνην με κατέλιπε διακονεῖν; Εἰπὲ οὖν αὐτῇ ἵνα μοι συναντιλάβηται. Ἀποκριθεὶς δὲ εἶπεν αὐτῇ ὁ Ἰησοῦς· Μάρθα, Μάρθα, μεριμνᾷς καὶ τυρβάζῃ περὶ πολλά· ἑνὸς δέ ἐστι χρεία· Μαρία δὲ τὴν ἀγαθὴν μερίδα ἐξελέξατο, ἥτις οὐκ ἀφαιρεθήσεται ἀπ᾿ αὐτῆς."
)
const LUKE_CHAP_11_27_TO_28 = text_factory(
  'As he said these things, a woman in the crowd raised her voice and said to him, “Blessed is the womb that bore you, and the breasts at which you nursed!” But he said, “Blessed rather are those who hear the word of God and keep it!”',
  "Ἐγένετο δὲ ἐν τῷ λέγειν αὐτὸν ταῦτα, ἐπάρασά τις γυνὴ φωνὴν ἐκ τοῦ ὄχλου, εἶπεν αὐτῷ· μακαρία ἡ κοιλία ἡ βαστάσασά σε καὶ μαστοὶ οὓς ἐθήλασας. Αὐτὸς δὲ εἶπε· μενοῦνγε, μακάριοι οἱ ἀκούοντες τὸν λόγον τοῦ Θεοῦ καὶ φυλάσσοντες αὐτόν."
)
const DOXA_SIE_KYRIE = text_factory('Glory to You, O Lord, glory to You.', 'Δόξα σοι, Κύριε, δόξα σοι.')
const PEACE_BE_WITH_THE_EVANGELIZED = text_factory(
  'Peace be with the evangelized and to all the people.',
  'Εἰρήνη σοι τῷ εὐαγγελιζομένῳ καὶ παντὶ τῷ λαῷ.'
)
const section = reactive({
  title: {
    english: 'The Gospel  ',
    greek: 'Εὐαγγελικὸν ἀνάγνωσμα καὶ'
  },
  body: [
    actors.PRIEST,
    SOPHIA_LET_US_HEAR_THE_GOSPEL,
    prayers.PEACE_BE_WITH_YOU_ALL,
    responses.AND_WITH_YOUR_SPIRIT,
    actors.DEACON,
    THE_READING_IS_FROM_LUKE,
    actors.PRIEST,
    prayers.LET_US_ATTEND,
    responses.GLORY_TO_YOU_O_LORD_GLORY_TO_YOU,
    actors.DEACON,
    CHAP_VERSE_SUBHEADING,
    LUKE_CHAP_10_38_TO_42,
    LUKE_CHAP_11_27_TO_28,
    actors.PRIEST,
    PEACE_BE_WITH_THE_EVANGELIZED,
    actors.CHOIR,
    DOXA_SIE_KYRIE
  ]
});
</script>

<style scoped></style>
