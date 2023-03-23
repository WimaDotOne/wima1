import { useEffect, useState } from "react"
import { Get2, useShield } from "../../../../../../libs/Core/Core1/fCore1"
import { AppleIconButtons, 
  AppleWindowBottomBarFill, 
  AppleWindowPlainBottomBarDiv, 
  AutoRepeatGrid, 
  Div } from "../../../../../../libs/Core/Core2/fCore2"
import { AppleFolder, HeadLine } from "../../../../../../libs/Pop/Pop3/fPop3"
import { LanguageEnumText } from "../../../../Enum/LanguageEnum"
import { LingoAdminColor } from "../../../CSS/LingoAdminColor"
import { IUnit } from "../../../Model/IUnit"
import cl from "./LanguageHome.module.scss"

interface ILanguageHomeProp {
  language: string
  goToNewUnit: ()=>void
  goToSelectedUnit: (unit: IUnit)=>void
  backToLanguagesHome: ()=>void
}

export function LanguageHome({
  language,
  goToNewUnit,
  goToSelectedUnit,
  backToLanguagesHome
}: ILanguageHomeProp) {

  const [loaded, setLoaded] = useState<boolean>(false)
  const [units, setUnits] = useState<Array<IUnit>>([])
  const shield = useShield()

  function openUnit(unit: IUnit) {
    goToSelectedUnit(unit)
  }

  async function loadChapters() {
    
    if(!language) return

    // use loaded flag instead of [] in useEffect 
    // because language might be undefined the first time load
    if(loaded) return
  
    await Get2(shield, `/lingoAdmin/LoadLanguageUnits?language=${encodeURIComponent(language)}`,
     (res) => {
      setLoaded(true)
      setUnits(res.units)
     }
    )
  }

  useEffect(()=>{
    loadChapters()
  })

  return(<>
  <div className={cl.units}>
    <HeadLine text={LanguageEnumText(language)} buttonText="New Unit" 
      buttonOnClick={goToNewUnit} 
      color={LingoAdminColor.themeBlue} h={3}/>
    
    <AutoRepeatGrid autoFill cellMinWidth={100} columnGap={10} rowGap={10} paddingTop={25} paddingBottom={10}>
    {
      units.map((unit, i)=>
      <AppleFolder key={unit._id} text={unit.name} onClick={
        ()=>{openUnit(unit)}
      }/>)
    }
    </AutoRepeatGrid>

  </div>
  <Div height={10} />

  <AppleWindowBottomBarFill />
  <AppleWindowPlainBottomBarDiv>
    <AppleIconButtons color={LingoAdminColor.themeBlue}
      icon1="chevron.left" onClick1={backToLanguagesHome}
    />
  </AppleWindowPlainBottomBarDiv>
  </>)
}