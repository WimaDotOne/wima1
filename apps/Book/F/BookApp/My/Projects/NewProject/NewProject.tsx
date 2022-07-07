import { useState } from "react"
import { GENERAL_INPUT_MAX } from "../../../../../../../bConfig"
import { Post2, TextField1, useShield } from "../../../../../../../libs/Core/Core1/fCore1"
import { AppleIconButtons, AppleWindowBottomBarFill, AppleWindowPlainBottomBarDiv, Div } from "../../../../../../../libs/Core/Core2/fCore2"
import { HeadLine } from "../../../../../../../libs/Pop/Pop3/fPop3"
import { BookColor } from "../../../../CSS/BookColor"
import cl from "./NewProject.module.scss"

interface INewProjectProp {
  backToProjectsHome: ()=>void
}
export function NewProject({
  backToProjectsHome
}:INewProjectProp) {

  const [bookName, setBookName] = useState<string>("")

  const shield = useShield()

  async function CreateNewProject() {
    await Post2(shield, "/book/CreateBookProject", {
      bookName
    }, (res)=>{
      backToProjectsHome()
    })
  }

  function IsNewProjectInfoValid() {
    if(!bookName) return false
    return true
  }
  
  return(<>
    <div className={cl.newProject}>
      <HeadLine text="Start a new book"/>
      <Div height={30} />
      <div className={cl.fields}>
        <TextField1 value={bookName} 
          maxLength={GENERAL_INPUT_MAX}
          prompt="Book title"
          onChange={(newValue)=>{setBookName(newValue)}} />
      </div>
    </div>
    <AppleWindowBottomBarFill />
    <AppleWindowPlainBottomBarDiv>
      <AppleIconButtons color={BookColor.themeGreen}
        icon1="x" onClick1={backToProjectsHome}
        icon5="floppydisk" onClick5={CreateNewProject} disabled5={!IsNewProjectInfoValid()}
      />
    </AppleWindowPlainBottomBarDiv>
  </>)
}