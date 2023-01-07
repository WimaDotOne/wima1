import { ISelectOption } from "../../../../libs/Core/Core1/Fields/SelectField/ISelectOption"
import { Lang } from "./Lang"

const Settings = {
  German: [8, 6], // [8,5] means 2 levels with 8 units and 5 units
  French: [1],
  Spanish: [4],
  Chinese: [8, 5]
}

export function CalcUnit(lang: string, level: string, lesson: string) {
  let lessons: Array<number> = []
  switch(lang) {
    case Lang.German:
      lessons = Settings.German
      break
    case Lang.French:
      lessons = Settings.French
      break
    case Lang.Chinese:
      lessons = Settings.Chinese
      break
    default:
  }

  const numLevel = parseInt(level)
  const numLesson = parseInt(lesson)
  let sum = 0
  for(let i=0; i<numLevel-1; i++) {
    sum = sum + lessons[i]
  }
  return sum+numLesson
}

export function LessonOptions(lang: string, level: string) {

  let n = 1
  const index = (parseInt(level) || 0) - 1
  switch(lang) {
    case Lang.German:
      n = Settings.German[index]
      break
    case Lang.French:
      n = Settings.French[index]
      break
    case Lang.Spanish:
      n = Settings.Spanish[index]
      break
    case Lang.Chinese:
      n = Settings.Chinese[index]
      break
    default: n = 1
  }
  
  const options: Array<ISelectOption> = []
  for(let i=1; i<=n; i++) {
    options.push({
      value: i+"",
      text: `Lesson ${i}`
    })
  }
  return options
}

export function LevelOptions(lang: string) {
  let n = 0
  switch(lang) {
    case Lang.German:
      n = Settings.German.length || 1
      break
    case Lang.French:
      n = Settings.French.length || 1
      break
    case Lang.Spanish:
      n = Settings.Spanish.length || 1
      break
    case Lang.Chinese:
      n = Settings.Chinese.length || 1
      break
    default: n = 1
  }

  const options: Array<ISelectOption> = []
  for(let i=1; i<=n; i++) {
    options.push({
      value: i+"",
      text: `Unit ${i}`
    })
  }
  return options
}

export function LanguageOptions() {

  const folder="/apps/Lingo/img/Flag/"

  return [
    { value: "es-ES", text: "Spanish", imgUrl: folder+"spain.jpg" },
    { value: "de-DE", text: "German", imgUrl: folder+"germany.svg" },
    { value: "fr-FR", text: "French", imgUrl: folder+"france.svg" },
    { value: "zh-CN", text: "Chinese", imgUrl: folder+"china.svg" }
  ]
}