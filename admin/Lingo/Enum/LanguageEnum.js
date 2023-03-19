
export const LanguageEnum = {
  Chinese: "@chinese",
  French: "@french",
  German: "@german",
  Spanish: "@spanish"
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