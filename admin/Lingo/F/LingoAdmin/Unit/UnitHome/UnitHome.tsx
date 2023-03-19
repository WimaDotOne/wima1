import { useEffect } from "react"
import { AppleIconButtons, AppleWindowPlainBottomBarDiv, AutoRepeatGrid } from "../../../../../../libs/Core/Core2/fCore2"
import { AppleFolder, File, FileType, HeadLine } from "../../../../../../libs/Pop/Pop3/fPop3"
import { LanguageEnumText } from "../../../../Enum/LanguageEnum"
import { LingoAdminColor } from "../../../CSS/LingoAdminColor"
import { IUnit } from "../../../Model/IUnit"
import { UnitTurn } from "../Unit"
import cl from "./UnitHome.module.scss"

interface IUnitHomeProp {
  unit: IUnit
  backToLanguageHome: ()=>void
  setUnitTurn: (unitTurn: string)=>void
}
export function UnitHome({
  unit,
  backToLanguageHome,
  setUnitTurn
}: IUnitHomeProp) {

  useEffect(()=>{
    window.scrollTo(0,0)
  })

  function openImagesFolder() {
    setUnitTurn(UnitTurn.ImagesFolder)
  }

  function openLingoScript() {
    setUnitTurn(UnitTurn.LingoScript)
  }

  function preview() {
    setUnitTurn(UnitTurn.Preview)
  }

  function openSettings() {
    setUnitTurn(UnitTurn.Settings)
  }

  return(<>
    <div className={cl.home}>
      <HeadLine text={LanguageEnumText(unit.language) +" "+ unit.name} h={3}/>
      <AutoRepeatGrid autoFill cellMinWidth={100} columnGap={10} rowGap={10} paddingTop={25} paddingBottom={10}>
        <AppleFolder text="Images" onClick={openImagesFolder}/>
        <File text="Lingo Script" iconName="textfile" type={FileType.text} 
          onClick={openLingoScript} />
        <File text="Preview" iconName="film" iconColor={LingoAdminColor.themeBlue}
          onClick={preview} />
        <File text="Settings" iconName="gear" type={FileType.settings}
          onClick={openSettings} />
      </AutoRepeatGrid>
    </div>
    <AppleWindowPlainBottomBarDiv>
      <AppleIconButtons color={LingoAdminColor.themeBlue} strokeWidth={20}
        icon1="chevron.left" onClick1={backToLanguageHome} text1=""
      /> 
    </AppleWindowPlainBottomBarDiv>
  </>)
}