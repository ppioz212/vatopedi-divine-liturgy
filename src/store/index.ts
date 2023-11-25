import { defineStore } from 'pinia'
import { actor_factory, text_factory, response_factory } from '@/factories'

const DEACON_ACTOR_ENG = 'DEACON'
const PRIEST_ACTOR_ENG = 'PRIEST'
const CHOIR_ACTOR_ENG = 'CHOIR'
const PEOPLE_ACTOR_ENG = 'PEOPLE'
const READER_ACTOR_ENG = 'READER'

const DEACON_ACTOR_GREEK = 'ΔΙΑΚΟΝΟΣ'
const PRIEST_ACTOR_GREEK = 'ΙΕΡΕΥΣ'
const CHOIR_ACTOR_GREEK = 'ΧΟΡΟΣ'
const PEOPLE_ACTOR_GREEK = 'ΛΑΟΣ'
const READER_ACTOR_GREEK = 'ΑΝΑΓΝΩΣΤΗΣ'

export const useActorStore = defineStore('actor', {
  state: () => {
    return {
      PRIEST: actor_factory(PRIEST_ACTOR_ENG, PRIEST_ACTOR_GREEK),
      DEACON: actor_factory(DEACON_ACTOR_ENG, DEACON_ACTOR_GREEK),
      CHOIR: actor_factory(CHOIR_ACTOR_ENG, CHOIR_ACTOR_GREEK),
      PEOPLE: actor_factory(PEOPLE_ACTOR_ENG, PEOPLE_ACTOR_GREEK),
      READER: actor_factory(READER_ACTOR_ENG, READER_ACTOR_GREEK)
    }
  }
})

export const useResponseStore = defineStore('response', {
  state: () => {
    return {
      LORD_HAVE_MERCY: response_factory('( Lord, have mercy. )', '( Κύριε, ἐλέησον. )'),
      AMEN: response_factory('( Amen. )', '( Ἀμήν. )'),
      TO_YOU_O_LORD: response_factory('( To You, O Lord. )', '( Σοί, Κύριε. )'),
      AND_WITH_YOUR_SPIRIT: response_factory(
        '( And with your spirit. )',
        '( Καὶ τῷ πνεύματί σου. )'
      )
    }
  }
})

export const useMainStore = defineStore('main', {
  state: () => {
    return {
      LORD_HAVE_MERCY: response_factory('( Lord, have mercy. )', '( Κύριε, ἐλέησον. )'),
      AMEN: response_factory('( Amen. )', '( Ἀμήν. )'),
      TO_YOU_O_LORD: response_factory('( To You, O Lord. )', '( Σοί, Κύριε. )'),
      AND_WITH_YOUR_SPIRIT: response_factory('( And with your spirit. )', '( Καὶ τῷ πνεύματί σου. )'),
      LET_US_ATTEND: text_factory('Let us be attentive.', 'Πρόσχωμεν.'),
      HELP_US_SAVE_US: {
        english: {
          text: 'Help us, save us, have mercy on us, and protect us, O God, by Your grace.'
        },
        greek: {
          text: 'Ἀντιλαβοῦ, σῶσον, ἐλέησον καὶ διαφύλαξον ἡμᾶς, ὁ Θεός, τῇ σῇ χάριτι.'
        }
      },
      COMMEMORATING_THE_PANAGIA: {
        english: {
          text: 'Commemorating our most holy, pure, blessed, and glorious Lady, the Theotokos and ever-virgin Mary, with all the saints, let us commend ourselves and one another and our whole life to Christ our God.'
        },
        greek: {
          text: 'Τῆς παναγίας, ἀχράντου, ὑπερευλογημένης, ἐνδόξου, δεσποίνης ἡμῶν Θεοτόκου καὶ ἀειπαρθένου Μαρίας μετὰ πάντων τῶν ἁγίων μνημονεύσαντες, ἑαυτοὺς καὶ ἀλλήλους καὶ πᾶσαν τὴν ζωὴν ἡμῶν Χριστῷ τῷ Θεῷ παραθώμεθα.'
        }
      },
      PEACE_BE_WITH_YOU_ALL: text_factory('Peace be with you all.', 'Εἰρήνη πᾶσι.'),
      SOPHIA: text_factory('Wisdom!', 'Σοφίᾳ!'),
      PEACE_BE_WITH_YOU: text_factory('Peace be with you.', 'Εἰρήνη σοί.'),
      SOPHIA_ARISE: text_factory('Wisdom. Arise.', 'Σοφία. Ὀρθοί.'),
      FOR_DELIVERANCE_DANGER: {
        english: {
          text: 'For our deliverance from all affliction, wrath, danger, and distress, let us pray to the Lord.'
        },
        greek: {
          text: 'Ὑπὲρ τοῦ ῥυσθῆναι ἡμᾶς ἀπὸ πάσης θλίψεως, ὀργῆς, κινδύνου καὶ ἀνάγκης, τοῦ Κυρίου δεηθῶμεν.'
        }
      },
      FOR_THIS_HOLY_HOUSE: {
        english: {
          text: 'For this holy house and for those who enter it with faith, reverence, and the fear of God, let us pray to the Lord.'
        },
        greek: {
          text: 'Ὑπὲρ τοῦ ἁγίου οἴκου τούτου, καὶ τῶν μετὰ πίστεως, εὐλαβείας καὶ φόβου Θεοῦ εἰσιόντων ἐν αὐτῷ, τοῦ Κυρίου δεηθῶμεν.'
        }
      },
      FOR_TO_YOU_BELONG_ALL_GLORY_HONOR_WORSHIP: {
        english: {
          text: 'For to You belong all glory, honor, and worship, to the Father and to the Son and to the Holy Spirit, now and forever and to the ages of ages.'
        },
        greek: {
          text: 'Ὅτι πρέπει σοι πᾶσα δόξα, τιμὴ καὶ προσκύνησις, τῷ Πατρὶ καὶ τῷ Υἱῷ καὶ τῷ Ἁγίῳ Πνεύματι, νῦν καὶ ἀεὶ καὶ εἰς τοὺς αἰῶνας τῶν αἰώνων.'
        }
      },
      FOR_YOURS_IS_DOMINION_POWER_GLORY: {
        english: {
          text: 'For Yours is the dominion, and Yours is the kingdom and the power and the glory, of the Father and of the Son and of the Holy Spirit, now and forever and to the ages of ages.'
        },
        greek: {
          text: 'Ὅτι σὸν τὸ κράτος καὶ σοῦ ἐστιν ἡ βασιλεία καὶ ἡ δύναμις καὶ ἡ δόξα, τοῦ Πατρὸς καὶ τοῦ Υἱοῦ καὶ τοῦ Ἁγίου Πνεύματος, νῦν καὶ ἀεὶ εἰς τοὺς αἰῶνας τῶν αἰώνων.'
        }
      },
      FOR_YOU_O_GOD_ARE_GOOD_AND_LOVE_MANKIND: {
        english: {
          text: 'For You, O God, are good and love mankind, and to You we offer glory, to the Father and to the Son and to the Holy Spirit, now and forever, and to the ages of ages.'
        },
        greek: {
          text: 'Ὅτι ἀγαθὸς καὶ φιλάνθρωπος Θεὸς ὑπάρχεις καὶ σοὶ τὴν δόξαν ἀναπέμπομεν, τῷ Πατρὶ καὶ τῷ Υἱῷ καὶ τῷ Ἁγίῳ Πνεύματι, νῦν καὶ ἀεὶ καὶ εἰς τοὺς αἰῶνας τῶν αἰώνων.'
        }
      },
      GLORIA_PATRI_EE_NOW_AND_EVER_AMEN: {
        english: {
          text: 'Glory to the Father and to the Son and to the Holy Spirit. Now and forever and to the ages of ages. Amen.'
        },
        greek: {
          text: 'Δόξα Πατρὶ καὶ Υἱῷ καὶ Ἁγίῳ Πνεύματι. Καὶ νῦν καὶ ἀεὶ καὶ εἰς τοὺς αἰῶνας τῶν αἰώνων. Ἀμήν.'
        }
      },
      GLORIA_PATRI_TOU: {
        english: {
          text: 'Glory to the Father and to the Son and to the Holy Spirit.'
        },
        greek: {
          text: 'Δόξα τῷ Πατρὶ καὶ τῷ Υἱῷ καὶ τῷ Ἁγίῳ Πνεύματι.'
        }
      },
      NOW_AND_EVER_AND_UNTO_AGES_AMEN: {
        english: {
          text: 'Now and forever and to the ages of ages. Amen.'
        },
        greek: {
          text: 'Καὶ νῦν καὶ ἀεὶ καὶ εἰς τοὺς αἰῶνας τῶν αἰώνων. Ἀμήν.'
        }
      },
      AGAIN_AND_AGAIN_IN_PEACE_LET_US_PRAY: {
        english: {
          text: 'Again and again, in peace, let us pray to the Lord.'
        },
        greek: {
          text: 'Ἔτι καὶ ἔτι ἐν εἰρήνῃ τοῦ Κυρίου δεηθῶμεν.'
        }
      }
    }
  }
})
