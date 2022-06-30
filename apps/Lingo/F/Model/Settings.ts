import { Lang } from "./Lang"
import { Options } from "./Options"

export function UnitOptions(lang: string) {

  let n = 0
  switch(lang) {
    case Lang.German: n = 14; break
    case Lang.French: n = 1; break
    default: n = 0
  }
  const options = new Options()
  for(let i=1; i<=n; i++) {
    options.Add(i+"", `Unit ${i}`)
  }
  return options
}

export function LanguageOptions() {
  const options = new Options(true) 

  const folder="/apps/Lingo/img/Flag/"
  options.Add("de-DE", "German", folder+"germany.svg")
  //options.Add("fr-FR", "French", folder+"france.svg")
  //options.Add("zh-CN", "Chinese", folder+"china.svg")
  //options.Add("uk-UA", "Ukrainian", folder+"ukraine.svg")

  return options
}