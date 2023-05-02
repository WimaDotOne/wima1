import { LangCode } from "../../../../admin/Lingo/Enum/LanguageEnum"

const Lang = {
  English: LangCode.English,
  Chinese: LangCode.Chinese,
  German: LangCode.German,
  French: LangCode.French,
  Spanish: LangCode.Spanish
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