import { useState } from "react"
import { GENERAL_INPUT_MAX } from "../../../../../../../bConfig"
import { Post2, TextField1, useShield } from "../../../../../../../libs/Core/Core1/fCore1"
import { AppleIconButtons, AppleWindowBottomBarFill, AppleWindowPlainBottomBarDiv, Div } from "../../../../../../../libs/Core/Core2/fCore2"
import { HeadLine } from "../../../../../../../libs/Pop/Pop3/fPop3"
import { MovicColor } from "../../../../CSS/MovicColor"
import cl from "./NewProject.module.scss"

interface INewProjectProp {
  backToProjectsHome: ()=>void
}
export function NewProject({
  backToProjectsHome
}:INewProjectProp) {

  const [movicName, setMovicName] = useState<string>("")

  const shield = useShield()

  async function CreateNewProject() {
    await Post2(shield, "/movic/CreateMovicProject", {
      movicName
    }, (res)=>{
      backToProjectsHome()
    })
  }

  function IsNewProjectInfoValid() {
    if(!movicName) return false
    return true
  }
  
  return(<>
    <div className={cl.newProject}>
      <HeadLine text="Start a new movic"/>
      <Div height={30} />
      <div className={cl.fields}>
        <TextField1 value={movicName} 
          maxLength={GENERAL_INPUT_MAX}
          prompt="Movic title"
          onChange={(newValue)=>{setMovicName(newValue)}} />
      </div>
    </div>
    <AppleWindowBottomBarFill />
    <AppleWindowPlainBottomBarDiv>
      <AppleIconButtons color={MovicColor.themeRed}
        icon1="x" onClick1={backToProjectsHome}
        icon5="floppydisk" onClick5={CreateNewProject} disabled5={!IsNewProjectInfoValid()}
      />
    </AppleWindowPlainBottomBarDiv>
  </>)
}