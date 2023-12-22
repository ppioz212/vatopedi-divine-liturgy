<template>
  <SectionTemplate :id="useIdStore().ALL_HOLY_LADY_ID" :section="section" />
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useActorStore, useIdStore } from '@/store';
import SectionTemplate from './SectionTemplate.vue';
import { hymn_factory } from '@/factories';

const actors = useActorStore();
const PANAGIA_DESPINA = hymn_factory(
  '*All-Holy Lady, the help of the world and the hope of Christians, we turn to you now, and we beseech you, for us sinners and those who are in despair, your Son and Lord, be merciful to you, Theotokos, for you have the power, in your motherly love for him. O Pure one, come and intercede, and save your people from the present threat, by tender mercies, do not forsake those who praise you.',
  'Παναγία Δέσποινα, τοῦ κόσμου βοήθεια, καὶ ἐλπὶς Χριστιανῶν, σὲ νῦν ἐκδυσωποῦμεν, καὶ σὲ παρακαλοῦμεν ἀγαθή, ὑπὲρ ἡμῶν ἡμαρτηκότων καὶ ἀπεγνωσμένων, τὸν Υἱόν σου καὶ Κύριον, ἵλεων ποιῆσαι Θεοτόκε· ἔχεις γὰρ τὸ δύνασθαι, τῇ μητρικῇ σου πρὸς αὐτὸν χρωμένη παῤῥησίᾳ. Πρόφθασον Ἄχραντε, πρόφθασον μεσίτευσον, καὶ σῶσον τὸν λαόν σου τῆς ἐνεστώσης ἀπειλῆς, διὰ σπλάγχνα ἐλέους, μὴ παρίδῃς τοὺς ὑμνοῦντας σε.'
)
const section = reactive({
  title: {
    english: 'All Holy Lady',
    greek: 'Παναγία Δέσποινα'
  },
  body: [
    actors.CHOIR, PANAGIA_DESPINA
  ]
});
</script>

<style></style>
