function get_transliteration(greekText: string) {
  const transliteration_map = [
    { regex: /α|ἀ|ὰ|ά|ἁ/g, replacement: 'a' },
    { regex: /β/g, replacement: 'b' },
    { regex: /γ/g, replacement: 'g' },
    { regex: /δ/g, replacement: 'd' },
    { regex: /ε|έ|έ|ἐ|ὲ|ἔ/g, replacement: 'e' },
    { regex: /ζ/g, replacement: 'z' },
    { regex: /η|ἡ|ή|ή|ῆ|ῇ/g, replacement: 'i' },
    { regex: /θ/g, replacement: 'th' },
    { regex: /ι|ί|ὶ/g, replacement: 'i' },
    { regex: /κ/g, replacement: 'k' },
    { regex: /λ/g, replacement: 'l' },
    { regex: /μ/g, replacement: 'm' },
    { regex: /ν/g, replacement: 'n' },
    { regex: /ξ/g, replacement: 'x' },
    { regex: /ο|ό|ό|ὸ|ὁ|ῶ|ῷ|ῳ|ώ/g, replacement: 'o' },
    { regex: /π/g, replacement: 'p' },
    { regex: /ρ|ῤ/g, replacement: 'r' },
    { regex: /σ/g, replacement: 's' },
    { regex: /τ/g, replacement: 't' },
    { regex: /υ|ῦ/g, replacement: 'u' },
    { regex: /ὐ/g, replacement: 'v' },
    { regex: /φ/g, replacement: 'f' },
    { regex: /χ/g, replacement: 'ch' },
    { regex: /ψ/g, replacement: 'ps' },
    { regex: /ω/g, replacement: 'o' },
    { regex: /ς/g, replacement: 's' },
    { regex: /Α/g, replacement: 'A' },
    { regex: /Β/g, replacement: 'V' },
    { regex: /Γ/g, replacement: 'G' },
    { regex: /Δ/g, replacement: 'D' },
    { regex: /Ε/g, replacement: 'E' },
    { regex: /Ζ/g, replacement: 'Z' },
    { regex: /Η/g, replacement: 'H' },
    { regex: /Θ/g, replacement: 'Th' },
    { regex: /Ι/g, replacement: 'I' },
    { regex: /Κ/g, replacement: 'K' },
    { regex: /Λ/g, replacement: 'L' },
    { regex: /Μ/g, replacement: 'M' },
    { regex: /Ν/g, replacement: 'N' },
    { regex: /Ξ/g, replacement: 'X' },
    { regex: /Ο/g, replacement: 'O' },
    { regex: /Π/g, replacement: 'P' },
    { regex: /Ρ/g, replacement: 'R' },
    { regex: /Σ/g, replacement: 'S' },
    { regex: /Τ/g, replacement: 'T' },
    { regex: /Υ/g, replacement: 'U' },
    { regex: /Φ/g, replacement: 'F' },
    { regex: /Χ/g, replacement: 'Ch' },
    { regex: /Ψ/g, replacement: 'P' },
    { regex: /Ω/g, replacement: 'O' }
  ]
  transliteration_map.forEach((element) => {
    greekText = greekText.replace(element.regex, element.replacement)
  })
  return greekText
}
export function text_factory(englishText: string, greekText: string, obj = {}): object {
  return {
    english: {
      text: englishText
    },
    greek: {
      text: greekText
    },
    transliteration: get_transliteration(greekText),
    ...obj
  }
}

export function low_voice_factory(englishText: string, greekText: string): object {
  return text_factory(englishText, greekText, { isInaudible: true })
}

export function response_factory(englishText: string, greekText: string): object {
  englishText = ('( ' + englishText.trim() + ' )').replace('  ', ' ')
  greekText = ('( ' + greekText.trim() + ' )').replace('  ', ' ')
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
