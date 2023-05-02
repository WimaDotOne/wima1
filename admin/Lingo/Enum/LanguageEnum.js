
export const LanguageEnum = {
  Chinese: "@chinese",
  French: "@french",
  German: "@german",
  Spanish: "@spanish"
}

export const LangCode = {
  English: "en-US",
  Chinese: "zh-CN",
  German: "de-DE",
  French: "fr-FR",
  Spanish: "es-ES"
}

export function IsValidLanguageEnum(language) {
  switch(language) {
    case LanguageEnum.Chinese:
    case LanguageEnum.French:
    case LanguageEnum.German:
    case LanguageEnum.Spanish:
      return true
    default:
      return false
  }
}

export function LanguageEnumText(language) {
  switch(language) {
    case LanguageEnum.Chinese: return "Chinese"
    case LanguageEnum.French: return "French"
    case LanguageEnum.German: return "German"
    case LanguageEnum.Spanish: return "Spanish"
    default:
      return ""
  }
}


export function LanguageEnumCode(language) {
  switch(language) {
    case LanguageEnum.Chinese: return LangCode.Chinese
    case LanguageEnum.French: return LangCode.French
    case LanguageEnum.German: return LangCode.German
    case LanguageEnum.Spanish: return LangCode.Spanish
    default:
      return ""
  }
}

