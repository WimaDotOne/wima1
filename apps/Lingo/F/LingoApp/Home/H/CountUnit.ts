import { ISelectOption } from "../../../../../../libs/Core/Core1/Fields/SelectField/ISelectOption"

const LessonCountPerLevel = 8

export function LessonOptions(unitCount: number, level: number) {

  unitCount = unitCount || 1

  
  let lessonCount = LessonCountPerLevel
  const lastLevelLessonCount = unitCount - LessonCountPerLevel * (level - 1)
  if(lastLevelLessonCount > 0 && lastLevelLessonCount<LessonCountPerLevel) {
    lessonCount = lastLevelLessonCount
  }
  
  const options: Array<ISelectOption> = []
  for(let i=1; i<=lessonCount; i++) {
    options.push({
      value: i+"",
      text: `Lesson ${i}`
    })
  }
  return options
}

export function LevelOptions(unitCount: number) {

  unitCount = unitCount || 1

  const options: Array<ISelectOption> = []
  for(let i=1; i<=unitCount; i++) {
    options.push({
      value: i+"",
      text: `Level ${i}`
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

export function UnitIndex(level: number, lesson: number) {
  return (level - 1)*LessonCountPerLevel + lesson - 1
}