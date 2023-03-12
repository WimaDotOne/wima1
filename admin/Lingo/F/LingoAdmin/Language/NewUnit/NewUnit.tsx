import { useState } from "react"
import { GENERAL_INPUT_MAX } from "../../../../../../bConfig"
import { Post2, TextField1, useShield } from "../../../../../../libs/Core/Core1/fCore1"
import { AppleIconButtons, AppleWindowBottomBarFill, AppleWindowPlainBottomBarDiv, Div } from "../../../../../../libs/Core/Core2/fCore2"
import { HeadLine } from "../../../../../../libs/Pop/Pop3/fPop3"
import { LingoAdminColor } from "../../../CSS/LingoAdminColor"
import cl from "./NewUnit.module.scss"

interface INewUnitProp {
  language: string
  backToLanguageHome: ()=>void
}
export function NewUnit({
  language,
  backToLanguageHome
}:INewUnitProp) {

  const [unitName, setUnitName] = useState<string>("")
  const [unitNumber, setUnitNumber] = useState<string>("")

  const shield = useShield()

  async function CreateUnit() {
    await Post2(shield, "/lingoAdmin/CreateUnit", {
      language,
      unitName,
      unitNumber
    }, (res)=>{
      backToLanguageHome()
    })
  }
  
  return(<>
    <div className={cl.newUnit}>
      <HeadLine text="Create a new unit"/>
      <Div height={30} />
      <div className={cl.fields}>
        <TextField1 value={unitName} 
          maxLength={GENERAL_INPUT_MAX}
          prompt="Unit name"
          onChange={(newValue)=>{setUnitName(newValue)}} />
        <TextField1 value={unitNumber} 
          maxLength={GENERAL_INPUT_MAX}
          prompt="Unit number"
          onChange={(newValue)=>{setUnitNumber(newValue)}} />
      </div>
    </div>
    <AppleWindowBottomBarFill />
    <AppleWindowPlainBottomBarDiv>
      <AppleIconButtons color={LingoAdminColor.themeBlue}
        icon1="x" onClick1={backToLanguageHome}
        icon5="floppydisk" onClick5={CreateUnit}
      />
    </AppleWindowPlainBottomBarDiv>
  </>)
}