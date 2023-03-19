import { useRouter } from "next/router"
import { useState } from "react"
import { IUnit } from "../../Model/IUnit"
import { LanguageHome } from "./LanguageHome/LanguageHome"
import { NewUnit } from "./NewUnit/NewUnit"

export function Language() {

  const [languageTurn, setLanguageTurn] = useState<string>("")
  const router = useRouter()

  const query = router.query
  const language = query.language as string

  function backToLanguagesHome() {
    router.push("/admin/Lingo/")
  }

  function backToLanguageHome() {
    setLanguageTurn(LanguageTurn.Home)
  }

  function goToNewUnit() {
    setLanguageTurn(LanguageTurn.NewUnit)
  }

  function goToSelectedUnit(unit: IUnit) {
    router.push(`/admin/Lingo/Unit?language=${language}&unitId=${unit._id}&unitName=${unit.name}&unitNumber=${unit.number}`)
  }

  switch(languageTurn) {
    case LanguageTurn.NewUnit: return (
      <NewUnit language={language}
        backToLanguageHome={backToLanguageHome}/>
    )
    default: return (
      <LanguageHome language={language}
        goToNewUnit={goToNewUnit}
        goToSelectedUnit={goToSelectedUnit}
        backToLanguagesHome={backToLanguagesHome}
      />
    )
  }
}

export const LanguageTurn = {
  Home: "Home",
  NewUnit: "NewUnit"
}