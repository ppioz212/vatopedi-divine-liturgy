import { defineStore } from 'pinia'
import { actor_factory, text_factory, response_factory } from '@/factories'

export const useIdStore = defineStore('ids', {
  state: () => {
    return {
      LITANY_OF_PEACE_ID: 'litany-of-peace',
      FIRST_ANTIPHON_ID: 'first-antiphon',
      SECOND_ANTIPHON_ID: 'second-antiphon',
      THE_BEATITUDES_ID: 'the-beatitudes',
      SMALL_ENTRANCE_ID: 'small-entrance',
      TRISAGION_HYMN_ID: 'trisagion-hymn',
      DYNAMIS_TRISAGION_HYMN_ID: 'dynamis-trisagion-hymn',
      THE_EPISTLE_ID: 'the-epistle',
      ALLELUIA_CHANT_ID: 'alleluia-chant',
      THE_GOSPEL_ID: 'the-gospel',
      THE_LITANY_OF_SUPPLICATION_AND_CATECHUMENS_ID: 'the-litany-of-supplication-and-catechumens',
      CHERUBIC_HYMN_ID: 'cherubic-hymn',
      LITANY_OF_COMPLETION_ID: 'litany-of-completion',
      THE_SYMBOL_OF_FAITH_ID: 'the-symbol-of-faith',
      HOLY_ANAPHORA_ID: 'holy-anaphora',
      AXION_ESTIN_ID: 'axion-estin',
      RECIEVE_THE_CUP_ID: 'recieve-the-cup',
      FINAL_LITANY_ID: 'final-litany',
      THE_EUCHARIST_ID: 'the-eucharist',
      THE_FINAL_WISH_ID: 'the-final-wish',
    }
  }
})

export const useActorStore = defineStore('actor', {
  state: () => {
    return {
      PRIEST: actor_factory('PRIEST', 'ΙΕΡΕΥΣ'),
      LOW_VOICE_PRIEST: actor_factory('PRIEST (in a low voice)', 'ΙΕΡΕΥΣ (in a low voice)'),
      DEACON: actor_factory('DEACON', 'ΔΙΑΚΟΝΟΣ'),
      CHOIR: actor_factory('CHOIR', 'ΧΟΡΟΣ'),
      PEOPLE: actor_factory('PEOPLE', 'ΛΑΟΣ'),
      READER: actor_factory('READER', 'ΑΝΑΓΝΩΣΤΗΣ')
    }
  }
})

export const useResponseStore = defineStore('response', {
  state: () => {
    return {
      LORD_HAVE_MERCY: response_factory('Lord, have mercy.', 'Κύριε, ἐλέησον.'),
      AMEN: response_factory('Amen.', 'Ἀμήν.'),
      TO_YOU_O_LORD: response_factory('To You, O Lord.', 'Σοί, Κύριε.'),
      GRANT_THIS_O_LORD: response_factory('Grant this, O Lord.', 'Παράσχου, Κύριε.'),
      AND_WITH_YOUR_SPIRIT: response_factory(
        'And with your spirit.',
        'Καὶ τῷ πνεύματί σου.'
      ),
      GLORY_TO_YOU_O_LORD_GLORY_TO_YOU: response_factory(
        'Glory to you O Lord, Glory to You.',
        'Δόξα σοι, Κύριε, δόξα σοι.'
      ),
      LORD_HAVE_MERCY_X3: response_factory(
        'Lord have mercy, Lord have mercy, Lord have mercy.',
        'Κύριε ἐλέησον, Κύριε ἐλέησον, Κύριε ἐλέησον.'
      ),
      AND_WITH_YOUR_SPIRIT_TOU: text_factory(
        'And with your spirit.',
        'Καὶ μετὰ τοῦ πνεύματός σου.'
      ),
      IN_THE_NAME_OF_THE_LORD: response_factory('In the Name of the Lord.', 'Ἐν ὀνόματι Κυρίου.')
    }
  }
})

export const useMainStore = defineStore('main', {
  state: () => {
    return {
      LORD_HAVE_MERCY: response_factory('( Lord, have mercy. )', '( Κύριε, ἐλέησον. )'),
      AMEN: response_factory('( Amen. )', '( Ἀμήν. )'),
      TO_YOU_O_LORD: response_factory('( To You, O Lord. )', '( Σοί, Κύριε. )'),
      AND_WITH_YOUR_SPIRIT: response_factory(
        '( And with your spirit. )',
        '( Καὶ τῷ πνεύματί σου. )'
      ),
      LET_US_ATTEND: text_factory('Let us be attentive.', 'Πρόσχωμεν.'),
      PEACE_BE_WITH_YOU_ALL: text_factory('Peace be with you all.', 'Εἰρήνη πᾶσι.'),
      SOPHIA: text_factory('Wisdom!', 'Σοφίᾳ!'),
      PEACE_BE_WITH_YOU: text_factory('Peace be with you.', 'Εἰρήνη σοί.'),
      SOPHIA_ARISE: text_factory('Wisdom. Arise.', 'Σοφία. Ὀρθοί.'),
      LET_US_PRAY_TO_THE_LORD: text_factory('Let us pray to the Lord.', 'Τοῦ Κυρίου δεηθῶμεν.'),
      LET_US_GO_FORTH_IN_PEACE: text_factory('Let us go forth in peace.', 'Ἐν εἰρήνῃ προέλθωμεν.'),
      HELP_US_SAVE_US: text_factory(
        'Help us, save us, have mercy on us, and protect us, O God, by Your grace.',
        'Ἀντιλαβοῦ, σῶσον, ἐλέησον καὶ διαφύλαξον ἡμᾶς, ὁ Θεός, τῇ σῇ χάριτι.'
      ),
      COMMEMORATING_THE_PANAGIA: text_factory(
        'Commemorating our most holy, pure, blessed, and glorious Lady, the Theotokos and ever-virgin Mary, with all the saints, let us commend ourselves and one another and our whole life to Christ our God.',
        'Τῆς παναγίας, ἀχράντου, ὑπερευλογημένης, ἐνδόξου, δεσποίνης ἡμῶν Θεοτόκου καὶ ἀειπαρθένου Μαρίας μετὰ πάντων τῶν ἁγίων μνημονεύσαντες, ἑαυτοὺς καὶ ἀλλήλους καὶ πᾶσαν τὴν ζωὴν ἡμῶν Χριστῷ τῷ Θεῷ παραθώμεθα.'
      ),
      FOR_DELIVERANCE_DANGER: text_factory(
        'For our deliverance from all affliction, wrath, danger, and distress, let us pray to the Lord.',
        'Ὑπὲρ τοῦ ῥυσθῆναι ἡμᾶς ἀπὸ πάσης θλίψεως, ὀργῆς, κινδύνου καὶ ἀνάγκης, τοῦ Κυρίου δεηθῶμεν.'
      ),
      FOR_THIS_HOLY_HOUSE: text_factory(
        'For this holy house and for those who enter it with faith, reverence, and the fear of God, let us pray to the Lord.',
        'Ὑπὲρ τοῦ ἁγίου οἴκου τούτου, καὶ τῶν μετὰ πίστεως, εὐλαβείας καὶ φόβου Θεοῦ εἰσιόντων ἐν αὐτῷ, τοῦ Κυρίου δεηθῶμεν.'
      ),
      FOR_TO_YOU_BELONG_ALL_GLORY_HONOR_WORSHIP: text_factory(
        'For to You belong all glory, honor, and worship, to the Father and to the Son and to the Holy Spirit, now and forever and to the ages of ages.',
        'Ὅτι πρέπει σοι πᾶσα δόξα, τιμὴ καὶ προσκύνησις, τῷ Πατρὶ καὶ τῷ Υἱῷ καὶ τῷ Ἁγίῳ Πνεύματι, νῦν καὶ ἀεὶ καὶ εἰς τοὺς αἰῶνας τῶν αἰώνων.'
      ),
      FOR_YOURS_IS_DOMINION_POWER_GLORY: text_factory(
        'For Yours is the dominion, and Yours is the kingdom and the power and the glory, of the Father and of the Son and of the Holy Spirit, now and forever and to the ages of ages.',
        'Ὅτι σὸν τὸ κράτος καὶ σοῦ ἐστιν ἡ βασιλεία καὶ ἡ δύναμις καὶ ἡ δόξα, τοῦ Πατρὸς καὶ τοῦ Υἱοῦ καὶ τοῦ Ἁγίου Πνεύματος, νῦν καὶ ἀεὶ εἰς τοὺς αἰῶνας τῶν αἰώνων.'
      ),
      FOR_YOU_O_GOD_ARE_GOOD_AND_LOVE_MANKIND: text_factory(
        'For You, O God, are good and love mankind, and to You we offer glory, to the Father and to the Son and to the Holy Spirit, now and forever, and to the ages of ages.',
        'Ὅτι ἀγαθὸς καὶ φιλάνθρωπος Θεὸς ὑπάρχεις καὶ σοὶ τὴν δόξαν ἀναπέμπομεν, τῷ Πατρὶ καὶ τῷ Υἱῷ καὶ τῷ Ἁγίῳ Πνεύματι, νῦν καὶ ἀεὶ καὶ εἰς τοὺς αἰῶνας τῶν αἰώνων.'
      ),
      FOR_YOU_O_GOD_ARE_MERCIFUL_AND_LOVE_MANKIND: text_factory(
        'For You, O God, are merciful and love mankind, and to You we offer glory, to the Father and to the Son and to the Holy Spirit, now and forever, and to the ages of ages.',
        'Ὅτι ἐλεήμων καὶ φιλάνθρωπος Θεὸς ὑπάρχεις καὶ σοὶ τὴν δόξαν ἀναπέμπομεν, τῷ Πατρὶ καὶ τῷ Υἱῷ καὶ τῷ Ἁγίῳ Πνεύματι, νῦν καὶ ἀεὶ καὶ εἰς τοὺς αἰῶνας τῶν αἰώνων.'
      ),
      FOR_YOU_OUR_GOD_ARE_HOLY_AND_OFFER_GLORY: text_factory(
        'For You, our God, are holy, and to You we offer up glory, to the Father and to the Son and to the Holy Spirit, now and forever...',
        'Ὅτι ἅγιος εἶ, ὁ Θεὸς ἡμῶν, καὶ σοὶ τὴν δόξαν ἀναπέμπομεν, τῷ Πατρὶ καὶ τῷ Υἱῷ καὶ τῷ Ἁγίῳ Πνεύματι, νῦν καὶ ἀεί…'
      ),
      FOR_YOU_ARE_OUR_SANCTIFICATION: text_factory(
        'For You are our sanctification, and to You we give glory, to the Father and to the Son and to the Holy Spirit, now and forever and to the ages of ages.',
        'Ὅτι σὺ εἶ ὁ ἁγιασμὸς ἡμῶν, καὶ σοὶ τὴν δόξαν ἀναπέμπομεν, τῷ Πατρὶ καὶ τῷ Υἱῷ καὶ τῷ ἁγίῳ Πνεύματι, νῦν καὶ ἀεὶ καὶ εἰς τοὺς αἰῶνας τῶν αἰώνων.'
      ),
      THAT_EVER_GUARDED_BY_YOUR_MIGHT: text_factory(
        'That, ever guarded by Your might, we may ascribe glory to You, to the Father and to the Son and to the Holy Spirit, now and forever and to the ages of ages.',
        'Ὅπως ὑπὸ τοῦ κράτους σου πάντοτε φυλαττόμενοι, σοὶ δόξαν ἀναπέμπωμεν, τῷ Πατρὶ καὶ τῷ Υἱῷ καὶ τῷ Ἁγίῳ Πνεύματι, νῦν καὶ ἀεὶ καὶ εἰς τοὺς αἰῶνας τῶν αἰώνων.'
      ),
      FOR_THINE_IS_THE_KINGDON_AND_THE_POWER_AND_THE_GLORY: text_factory(
        'For Thine is the kingdom and the power and the glory, of the Father and the Son and the Holy Spirit, now and forever and to ages of ages.',
        'Ὅτι σοῦ ἐστιν ἡ βασιλεία καὶ ἡ δύναμις καὶ ἡ δόξα τοῦ Πατρὸς καὶ τοῦ Υἱοῦ καὶ τοῦ ἁγίου Πνεύματος, νῦν καὶ ἀεὶ καὶ εἰς τοὺς αἰῶνας τῶν αἰώνων.'
      ),
      THROUGH_THE_GRACE_AND_COMPASSION_AND_LOVE: text_factory(
        'Through the grace, compassion, and love for mankind of Your only-begotten Son, with whom You are blessed, together with Your all-holy, good, and life-creating Spirit, now and forever and to the ages of ages.',
        'Χάριτι καὶ οἰκτιρμοῖς καὶ φιλανθρωπίᾳ τοῦ μονογενοῦς σου Υἱοῦ, μεθʼ οὗ εὐλογητὸς εἶ, σὺν τῷ παναγίῳ καὶ ἀγαθῷ καὶ ζωοποιῷ σου Πνεύματι, νῦν καὶ ἀεὶ καὶ εἰς τοὺς αἰῶνας τῶν αἰώνων.'
      ),
      GLORIA_PATRI_EE_NOW_AND_EVER_AMEN: text_factory(
        'Glory to the Father and to the Son and to the Holy Spirit. Now and forever and to the ages of ages. Amen.',
        'Δόξα Πατρὶ καὶ Υἱῷ καὶ Ἁγίῳ Πνεύματι. Καὶ νῦν καὶ ἀεὶ καὶ εἰς τοὺς αἰῶνας τῶν αἰώνων. Ἀμήν.'
      ),
      GLORIA_PATRI_TOU: text_factory(
        'Glory to the Father and to the Son and to the Holy Spirit.',
        'Δόξα τῷ Πατρὶ καὶ τῷ Υἱῷ καὶ τῷ Ἁγίῳ Πνεύματι.'
      ),
      AND_UNTO_AGES_OF_AGES: text_factory(
        'And to the ages of ages.',
        'καὶ εἰς τοὺς αἰῶνας τῶν αἰώνων.'
      ),
      NOW_AND_EVER_AND_UNTO_AGES_AMEN: text_factory(
        'Now and forever and to the ages of ages. Amen.',
        'Καὶ νῦν καὶ ἀεὶ καὶ εἰς τοὺς αἰῶνας τῶν αἰώνων. Ἀμήν.'
      ),
      AGAIN_AND_AGAIN_IN_PEACE_LET_US_PRAY: text_factory(
        'Again and again, in peace, let us pray to the Lord.',
        'Ἔτι καὶ ἔτι ἐν εἰρήνῃ τοῦ Κυρίου δεηθῶμεν.'
      ),
      ALWAYS_NOW_AND_FOREVER_AND_TO_THE_AGES_OF_AGES: text_factory(
        'Always, now and forever and to the ages of ages.',
        'Πάντοτε, νῦν καὶ ἀεὶ καὶ εἰς τοὺς αἰῶνας τῶν αἰώνων.'
      ),
      THAT_THE_WHOLE_DAY_MAY_BE: text_factory(
        'That the whole day may be perfect, holy, peaceful, and sinless, let us ask the Lord.',
        'Τὴν ἡμέραν πᾶσαν τελείαν, ἁγίαν, εἰρηνικὴν καὶ ἀναμάρτητον, παρὰ τοῦ Κυρίου αἰτησώμεθα.'
      ),
      FOR_AN_ANGEL_OF_PEACE: text_factory(
        'For an angel of peace, a faithful guide, a guardian of our souls and bodies, let us ask the Lord.',
        'Ἄγγελον εἰρήνης, πιστὸν ὁδηγόν, φύλακα τῶν ψυχῶν καὶ τῶν σωμάτων ἡμῶν, παρὰ τοῦ Κυρίου αἰτησώμεθα.'
      ),
      FOR_PARDON_REMISSION_OF_SINS: text_factory(
        'For pardon and remission of our sins and transgressions, let us ask the Lord.',
        'Συγγνώμην καὶ ἄφεσιν τῶν ἁμαρτιῶν καὶ τῶν πλημμελημάτων ἡμῶν, παρὰ τοῦ Κυρίου αἰτησώμεθα.'
      ),
      FOR_THAT_WHICH_IS_GOOD: text_factory(
        'For that which is good and beneficial for our souls, and for peace for the world, let us ask the Lord.',
        'Τὰ καλὰ καὶ συμφέροντα ταῖς ψυχαῖς ἡμῶν καὶ εἰρήνην τῷ κόσμῳ, παρὰ τοῦ Κυρίου αἰτησώμεθα.'
      ),
      THAT_WE_MAY_COMPLETE_REMAIN_TIME: text_factory(
        'That we may complete the remaining time of our life in peace and repentance, let us ask the Lord.',
        'Τὸν ὑπόλοιπον χρόνον τῆς ζωῆς ἡμῶν ἐν εἰρήνῃ καὶ μετανοίᾳ ἐκτελέσαι, παρὰ τοῦ Κυρίου αἰτησώμεθα.'
      ),
      A_CHRISTIAN_ENDING: text_factory(
        'And let us ask for a Christian end to our life, peaceful, without shame and suffering, and for a good defense before the awesome judgment seat of Christ.',
        'Χριστιανὰ τὰ τέλη τῆς ζωῆς ἡμῶν, ἀνώδυνα, ἀνεπαίσχυντα, εἰρηνικά, καὶ καλὴν ἀπολογίαν τὴν ἐπὶ τοῦ φοβεροῦ βήματος τοῦ Χριστοῦ αἰτησώμεθα.'
      )
    }
  }
})
