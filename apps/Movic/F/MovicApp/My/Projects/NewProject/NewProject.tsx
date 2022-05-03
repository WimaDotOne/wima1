import { AppleIconButtons, AppleWindowBottomBarFill, AppleWindowPlainBottomBarDiv } from "../../../../../../../libs/Core/Core2/fCore2"
import { MovicColor } from "../../../../CSS/MovicColor"
import { MovicWindow } from "../../../MovicWindow/MovicWindow"
import cl from "./NewProject.module.scss"

interface INewProjectProp {
  backToProjectsHome: ()=>void
}
export function NewProject({
  backToProjectsHome
}:INewProjectProp) {

  function CreateNewProject() {

  }

  function IsNewProjectInfoValid() {
    return true
  }
  
  return(<>
    
    <AppleWindowBottomBarFill />
    <AppleWindowPlainBottomBarDiv>
      <AppleIconButtons color={MovicColor.themeRed}
        icon1="x" onClick1={backToProjectsHome}
        icon5="floppydisk" onClick5={CreateNewProject} disabled5={!IsNewProjectInfoValid()}
      />
    </AppleWindowPlainBottomBarDiv>
  </>)
}