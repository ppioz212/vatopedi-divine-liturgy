export function text_factory(englishText: string, greekText: string): object {
  return {
    english: {
      text: englishText
    },
    greek: {
      text: greekText
    }
  }
}

export function response_factory(englishText: string, greekText: string): object {
  const generalText = text_factory(englishText, greekText)
  generalText.isItalics = true
  return generalText
}

export function actor_factory(englishText: string, greekText: string): object {
  const generalText = text_factory(englishText, greekText)
  generalText.isActor = true
  return generalText
}

export function verse_factory(verseNumber: string, englishText: string, greekText: string): object {
  const generalText = text_factory(englishText, greekText)
  generalText.verseNum = verseNumber
  return generalText
}

export function subHeading_factory(englishText: string, greekText: string): object {
  const generalText = text_factory(englishText, greekText)
  generalText.isSubHeading = true
  return generalText
}

export function hymn_factory(englishText: string, greekText: string): object {
  const generalText = text_factory(englishText, greekText)
  generalText.isHymn = true
  return generalText
}

export function chap_verse_factory(englishText: string, greekText: string): object {
  const generalText = text_factory(englishText, greekText)
  generalText.isChapVerse = true
  return generalText
}