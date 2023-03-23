import { UnitName } from "./UnitName/UnitName"
import cl from "./Settings.module.scss"
import { IUnit } from "../../../Model/IUnit"
import { HeadLine } from "../../../../../../libs/Pop/Pop3/fPop3"
import { AppleIconButtons, AppleWindowBottomBarFill, AppleWindowPlainBottomBarDiv, Div } from "../../../../../../libs/Core/Core2/fCore2"
import { LingoAdminColor } from "../../../CSS/LingoAdminColor"
import { useState } from "react"
import { Publish } from "./Publish/Publish"

interface ISettingsProp {
  unit: IUnit
  setUnitIsPublic: (isPublic: boolean)=>void
  setUnitNameNumber: (name: string, number: string)=>void
  backToUnitHome: ()=>void
}
export function Settings({
  unit,
  setUnitIsPublic,
  setUnitNameNumber,
  backToUnitHome
}: ISettingsProp) {

  return(<>
  <div className={cl.settings}>
    <HeadLine text={unit.name} h={3} />
    <Div height={10} />
    <UnitName unit={unit}
      setUnitNameNumber={setUnitNameNumber}/>
    <Div height={20} />
    <Publish unit={unit} 
      setUnitIsPublic={setUnitIsPublic}/>
    <Div height={20} />
  </div>
  <AppleWindowBottomBarFill />
    <AppleWindowPlainBottomBarDiv>
      <AppleIconButtons color={LingoAdminColor.themeBlue}
        icon1="chevron.left" onClick1={backToUnitHome}
      />
    </AppleWindowPlainBottomBarDiv>
  </>)
}