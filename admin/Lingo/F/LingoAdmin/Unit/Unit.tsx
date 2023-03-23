import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { ImagesFolder } from "./ImagesFolder/ImagesFolder"
import { LingoScript } from "./LingoScript/LingoScript"
import { Preview } from "./Preview/Preview"
import { UnitHome } from "./UnitHome/UnitHome"
import { Settings } from "./Settings/Settings"
import { IUnit } from "../../Model/IUnit"

interface IUnitProp {
}
export function Unit({

}: IUnitProp) {

  const router = useRouter()

  const [unit, setUnit] = useState<IUnit>()
  const [unitTurn, setUnitTurn] = useState<string>("")


  const language = router.query.language as string

  function backToLanguageHome() {
    if(!language) return
    router.push(`/admin/Lingo?language=${encodeURIComponent(language)}`)
  }

  function backToUnitHome() {
    setUnitTurn(UnitTurn.Home)
  }

  useEffect(()=>{
    const query = router.query
    const _id = query.unitId as string
    const unitName = query.unitName as string
    const unitNumber = query.unitNumber as string
    const isPublic = !!(query.isPublic as string)

    if(!unit || !unit._id) {
      //check unit to avoid infinitely setting
      //check unit.id to avoid setting a unit with undefined id.
      setUnit({
        _id,
        language, 
        name: unitName, 
        number: unitNumber, 
        isPublic
      })
    }
  })

  function setUnitNameNumber(name: string, number: string) {
    if(!unit) return 
    setUnit({...unit, name, number})
  }

  function setUnitIsPublic(isPublic: boolean) {
    if(!unit) return 
    setUnit({...unit, isPublic})
  }

  if(!unit) {
    return null
  }
  
  switch(unitTurn) {
    case UnitTurn.LingoScript: return(
      <LingoScript unit={unit} backToUnitHome={backToUnitHome}/>
    )
    case UnitTurn.ImagesFolder: return(
      <ImagesFolder unit={unit} backToUnitHome={backToUnitHome}/>
    )
    case UnitTurn.Preview: return(
      <Preview unit={unit} backToUnitHome={backToUnitHome}/>
    )
    case UnitTurn.Settings: return(
      <Settings unit={unit}
        setUnitNameNumber={setUnitNameNumber}
        setUnitIsPublic={setUnitIsPublic}
        backToUnitHome={backToUnitHome}/>
    )
    default: return (
      <UnitHome 
        unit={unit}
        backToLanguageHome={backToLanguageHome}
        setUnitTurn = {setUnitTurn} />
    )
  }
  
}

export const UnitTurn = {
  Home: "Home",
  ImagesFolder: "ImagesFolder",
  LingoScript: "LingoScript",
  Preview: "Preview",
  Settings: "Settings"
}