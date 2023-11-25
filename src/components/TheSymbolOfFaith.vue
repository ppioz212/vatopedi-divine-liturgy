<template>
  <SectionTemplate :section="section" />
</template>

<script setup lang="ts">
import { useActorStore } from '@/store';
import { reactive } from 'vue';
import SectionTemplate from './SectionTemplate.vue';
import { text_factory } from '@/factories'

const actors = useActorStore()
const I_BELIEVE_IN_ONE_GOD = text_factory(
  "I believe in one God, the Father Almighty, maker of heaven and earth, and of all things visible and invisible. And in one Lord Jesus Christ, the only-begotten Son of God, begotten of the Father before all ages; Light of Light, true God of true God, begotten, not created, of one essence with the Father, by Whom all things were made. Who for us men and for our salvation came down from heaven and was incarnate of the Holy Spirit and the Virgin Mary and became man. And He was crucified for us under Pontius Pilate, and suffered and was buried; And on the third day He rose again, according to the Scriptures. And ascended into heaven and is seated at the right hand of the Father. And He shall come again with glory to judge the living and the dead; Whose kingdom shall have no end.",
  "Πιστεύω εἰς ἕνα Θεόν, Πατέρα, παντοκράτορα, ποιητὴν οὐρανοῦ καὶ γῆς, ὁρατῶν τε πάντων καὶ ἀοράτων. Καὶ εἰς ἕνα Κύριον Ἰησοῦν Χριστόν, τὸν Υἱὸν τοῦ Θεοῦ τὸν μονογενῆ, τὸν ἐκ τοῦ Πατρὸς γεννηθέντα πρὸ πάντων τῶν αἰώνων· φῶς ἐκ φωτός, Θεὸν ἀληθινὸν ἐκ Θεοῦ ἀληθινοῦ, γεννηθέντα οὐ ποιηθέντα, ὁμοούσιον τῷ Πατρί, δι᾿ οὗ τὰ πάντα ἐγένετο. Τὸν δι᾿ ἡμᾶς τοὺς ἀνθρώπους καὶ διὰ τὴν ἡμετέραν σωτηρίαν κατελθόντα ἐκ τῶν οὐρανῶν, καὶ σαρκωθέντα ἐκ Πνεύματος Ἁγίου καὶ Μαρίας τῆς Παρθένου, καὶ ἐνανθρωπήσαντα. Σταυρωθέντα τε ὑπὲρ ἡμῶν ἐπὶ Ποντίου Πιλάτου, καὶ παθόντα καὶ ταφέντα. Καὶ ἀναστάντα τῇ τρίτῃ ἡμέρᾳ κατὰ τὰς Γραφάς. Καὶ ἀνελθόντα εἰς τοὺς οὐρανούς, καὶ καθεζόμενον ἐκ δεξιῶν τοῦ Πατρός. Καὶ πάλιν ἐρχόμενον μετὰ δόξης κρῖναι ζῶντας καὶ νεκρούς, οὗ τῆς βασιλείας οὐκ ἔσται τέλος."
)
const AND_IN_THE_HOLY_SPIRIT = text_factory(
  "And in the Holy Spirit, the Lord, the Giver of life, Who proceeds from the Father, Who together with the Father and the Son is worshiped and glorified, Who spoke by the prophets.",
  "Καὶ εἰς τὸ Πνεῦμα τὸ ἅγιον, τὸ Κύριον, τὸ ζωοποιόν, τὸ ἐκ τοῦ Πατρὸς ἐκπορευόμενον, τὸ σὺν Πατρὶ καὶ Υἱῷ συμπροσκυνούμενον καὶ συνδοξαζόμενον, τὸ λαλῆσαν διὰ τῶν προφητῶν.")
const AND_IN_ONE_HOLY_CATHOLIC_AND_APOSTOLIC_CHURCH = text_factory(
  "And in one, holy, catholic, and apostolic Church. I confess one baptism for the remission of sins. I look for the resurrection of the dead, and the life of the age to come.",
  "Εἰς μίαν, ἁγίαν, καθολικὴν καὶ ἀποστολικὴν Ἐκκλησίαν. Ὁμολογῶ ἓν βάπτισμα εἰς ἄφεσιν ἁμαρτιῶν. Προσδοκῶ ἀνάστασιν νεκρῶν. Καὶ ζωὴν τοῦ μέλλοντος αἰῶνος.")
const section = reactive({
  title: {
    english: 'The Symbol Of Faith',
    greek: 'Σύμβολο τῆς Πίστεως'
  },
  body: [
    actors.PEOPLE,
    I_BELIEVE_IN_ONE_GOD,
    AND_IN_THE_HOLY_SPIRIT,
    AND_IN_ONE_HOLY_CATHOLIC_AND_APOSTOLIC_CHURCH
  ]
});
</script>

<style scoped></style>
