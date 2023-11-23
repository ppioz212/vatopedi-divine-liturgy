import { defineStore } from 'pinia'

const DEACON_ACTOR_ENG = 'DEACON'
const PRIEST_ACTOR_ENG = 'PRIEST'
const CHOIR_ACTOR_ENG = 'CHOIR'
const DEACON_ACTOR_GREEK = 'ΔΙΑΚΟΝΟΣ'
const PRIEST_ACTOR_GREEK = 'ΙΕΡΕΥΣ'
const CHOIR_ACTOR_GREEK = 'ΧΟΡΟΣ'

export const useMainStore = defineStore('main', {
  state: () => {
    return {
      DEACON_ACTOR_ENG: DEACON_ACTOR_ENG,
      PRIEST_ACTOR_ENG: PRIEST_ACTOR_ENG,
      CHOIR_ACTOR_ENG: CHOIR_ACTOR_ENG,
      DEACON_ACTOR_GREEK: DEACON_ACTOR_GREEK,
      PRIEST_ACTOR_GREEK: PRIEST_ACTOR_GREEK,
      CHOIR_ACTOR_GREEK: CHOIR_ACTOR_GREEK,
      CHOIR_OBJ: {
        english: {
          actor: CHOIR_ACTOR_ENG
        },
        greek: {
          actor: CHOIR_ACTOR_GREEK
        }
      },
      LORD_HAVE_MERCY: {
        isItalics: true,
        english: {
          text: '( Lord, have mercy. )'
        },
        greek: {
          text: '( Κύριε, ἐλέησον. )'
        }
      },
      AMEN: {
        isItalics: true,
        english: {
          text: '( Amen. )'
        },
        greek: {
          text: '( Ἀμήν. )'
        }
      },
      TO_YOU_O_LORD: {
        isItalics: true,
        english: {
          text: '( To You, O Lord. )'
        },
        greek: {
          text: '( Σοί, Κύριε. )'
        }
      },
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
          actor: PRIEST_ACTOR_ENG,
          text: 'For to You belong all glory, honor, and worship, to the Father and to the Son and to the Holy Spirit, now and forever and to the ages of ages.'
        },
        greek: {
          actor: PRIEST_ACTOR_GREEK,
          text: 'Ὅτι πρέπει σοι πᾶσα δόξα, τιμὴ καὶ προσκύνησις, τῷ Πατρὶ καὶ τῷ Υἱῷ καὶ τῷ Ἁγίῳ Πνεύματι, νῦν καὶ ἀεὶ καὶ εἰς τοὺς αἰῶνας τῶν αἰώνων.'
        }
      },
      FOR_YOURS_IS_DOMINION_POWER_GLORY: {
        english: {
          actor: PRIEST_ACTOR_ENG,
          text: 'For Yours is the dominion, and Yours is the kingdom and the power and the glory, of the Father and of the Son and of the Holy Spirit, now and forever and to the ages of ages.'
        },
        greek: {
          actor: PRIEST_ACTOR_GREEK,
          text: 'Ὅτι σὸν τὸ κράτος καὶ σοῦ ἐστιν ἡ βασιλεία καὶ ἡ δύναμις καὶ ἡ δόξα, τοῦ Πατρὸς καὶ τοῦ Υἱοῦ καὶ τοῦ Ἁγίου Πνεύματος, νῦν καὶ ἀεὶ εἰς τοὺς αἰῶνας τῶν αἰώνων.'
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
      AGAIN_AND_AGAIN_IN_PEACE_LET_US_PRAY: {
        english: {
          actor: DEACON_ACTOR_ENG,
          text: 'Again and again, in peace, let us pray to the Lord.'
        },
        greek: {
          actor: DEACON_ACTOR_GREEK,
          text: 'Ἔτι καὶ ἔτι ἐν εἰρήνῃ τοῦ Κυρίου δεηθῶμεν.'
        }
      }
    }
  }
})
