const Lang = {
  English: "en-US",
  Chinese: "zh-CN",
  German: "de-DE",
  French: "fr-FR",
  Spanish: "es-MX"
}
export { Lang }

export function LangName(lang: string) {
  switch (lang) {
    case Lang.English: return "English"
    case Lang.Chinese: return "Chinese"
    case Lang.German: return "German"
    case Lang.French: return "French"
    case Lang.Spanish: return "Spanish"
    default: return ""
  }
}