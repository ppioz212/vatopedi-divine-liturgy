export function text_factory(englishText: string, greekText: string, obj = {}): object {
  return {
    english: {
      text: englishText
    },
    greek: {
      text: greekText
    },
    ...obj
  }
}

export function low_voice_factory(englishText: string, greekText: string): object {
  return text_factory(englishText, greekText, { isInaudible: true })
}

export function response_factory(englishText: string, greekText: string): object {
  return text_factory(englishText, greekText, { isItalics: true })
}

export function actor_factory(englishText: string, greekText: string): object {
  return text_factory(englishText, greekText, { isActor: true })
}

export function verse_factory(verseNumber: string, englishText: string, greekText: string): object {
  return text_factory(englishText, greekText, { verseNum: verseNumber })
}

export function subHeading_factory(englishText: string, greekText: string): object {
  return text_factory(englishText, greekText, { isSubHeading: true })
}

export function hymn_factory(englishText: string, greekText: string): object {
  return text_factory(englishText, greekText, { isHymn: true })
}

export function chap_verse_factory(englishText: string, greekText: string): object {
  return text_factory(englishText, greekText, { isChapVerse: true })
}
