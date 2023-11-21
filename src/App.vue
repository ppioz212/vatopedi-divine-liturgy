<template>
  <h1>Thia Litourgia by Choir of Vatopedi Fathers</h1>
  <main v-for="(section, index) in sections" :key="index">
    <section>
      <h2>{{ section.title.english }}</h2>
      <div v-for="(bodySection, index) in section.body" :key="index">
        <p class="actor">{{ bodySection.english.actor }}</p>
        <p> {{ bodySection.english.text }}</p>
      </div>
    </section>
    <section>
      <h2>{{ section.title.greek }}</h2>
      <div v-for="(bodySection, index) in section.body" :key="index">
        <p class="actor">{{ bodySection.greek.actor }}</p>
        <p> {{ bodySection.greek.text }}</p>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const deaconEnglish = 'DEACON';
const priestEnglish = 'PRIEST';
const choirEnglish = 'CHOIR';
const deaconGreek = 'ΔΙΑΚΟΝΟΣ';
const priestGreek = 'ΙΕΡΕΥΣ';
const choirGreek = 'ΧΟΡΟΣ';
const lordHaveMercy = {
  english: {
    text: '( Lord, have mercy. )'
  },
  greek: {
    text: '( Κύριε, ἐλέησον. )'
  }
};
const amen = {
  english: {
    text: '( Amen. )'
  },
  greek: {
    text: '( Ἀμήν. )'
  }
};
const sections = ref([{
  title: {
    english: 'Evlogimeni i Vasilia, Irinika',
    greek: 'Εὐλογημένη ἡ Βασιλεία, Εἰρηνικά'
  },
  body: [{
    english: {
      actor: deaconEnglish,
      text: 'Master, give the blessing.'
    },
    greek: {
      actor: deaconGreek,
      text: 'Εὐλόγησον, Δέσποτα.',
    }
  },
  {
    english: {
      actor: priestEnglish,
      text: 'Blessed is the Kingdom of the Father and of the Son and of the Holy Spirit, now and forever and to the ages of ages.'
    },
    greek: {
      actor: priestGreek,
      text: 'Εὐλογημένη ἡ Βασιλεία τοῦ Πατρὸς καὶ τοῦ Υἱοῦ καὶ τοῦ Ἁγίου Πνεύματος, νῦν καὶ ἀεὶ καὶ εἰς τοὺς αἰῶνας τῶν αἰώνων.',
    }
  },
    amen,
  {
    english: {
      actor: deaconEnglish,
      text: 'In peace, let us pray to the Lord.'
    },
    greek: {
      actor: deaconGreek,
      text: 'Ἐν εἰρήνῃ τοῦ Κυρίου δεηθῶμεν.'
    }
  },
    lordHaveMercy,
  {
    english: {
      text: 'For the peace from above and for the salvation of our souls, let us pray to the Lord.'
    },
    greek: {
      text: 'Ὑπὲρ τῆς ἄνωθεν εἰρήνης καὶ τῆς σωτηρίας τῶν ψυχῶν ἡμῶν, τοῦ Κυρίου δεηθῶμεν.'
    }
  },
    lordHaveMercy
  ]
}]);
const sectionTitleList = ref<string[]>(['Evlogimeni i Vasilia, Irinika', 'Proti Stasi Tipokon', 'Defteri Stasi Tipikon',
  'Makarismi', 'Mikri Isodos, apolitikia', 'Trisagios Imnos', 'Dinamis Trisagiou Meta Kratimaton', 'Prokimeno Apostolou kai Apostolos',
  'Allilouia', 'Evaggelio kai Doxa si Kirie', 'Ektenis, Etisis katihoumenon Piston', 'Herouvikos Imnos', 'Plirotika', 'Simvolo tis Pisteos',
  'Agia Anafora', 'Axion Estin', 'Ektenis Deisis', 'Potirion Sotiriou Lipsome, Kinoniko', 'Thia Metalispi', 'Opisthamvonos Efhi',
  'Apolitikia, Efhi Kollivon', 'li To Onoma', 'Apolisi', 'Panagia Despina'])

</script>

<style>
body {
  margin: 0;
  background-color: beige;
}

main {
  text-align: center;
  margin: 0;
  display: flex;
}

main section:nth-child(1) {
  border-right: 1px solid black;
  margin: 10px;
  padding: 0 10px;
}

h2 {
  color: brown;
  font-size: 1.1em;
}

.actor {
  color: red;
  text-align: left;
  font-weight: 600;
}
</style>
