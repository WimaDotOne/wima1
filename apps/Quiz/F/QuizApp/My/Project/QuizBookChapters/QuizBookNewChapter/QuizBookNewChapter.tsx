import { useState } from "react"
import { GENERAL_INPUT_MAX } from "../../../../../../../../bConfig"
import { Post2, TextField1, useShield } from "../../../../../../../../libs/Core/Core1/fCore1"
import { AppleIconButtons, AppleWindowBottomBarFill, 
  AppleWindowPlainBottomBarDiv, Div } from "../../../../../../../../libs/Core/Core2/fCore2"
import { HeadLine } from "../../../../../../../../libs/Pop/Pop3/fPop3"
import { QuizColor } from "../../../../../CSS/QuizColor"
import { IProject } from "../../../../../Model/IProject"
import cl from "./QuizBookNewChapter.module.scss"

interface IQuizBookNewChapterProp {
  project: IProject
  backToChaptersHome: ()=>void
}
export function QuizBookNewChapter({
  project,
  backToChaptersHome
}:IQuizBookNewChapterProp) {

  const [chapterTitle, setChapterTitle] = useState<string>("")

  const shield = useShield()

  async function CreateQuizChapter() {
    await Post2(shield, "/quiz/CreateQuizChapter", {
      projectId: project.id,
      chapterTitle
    }, (res)=>{
      backToChaptersHome()
    })
  }

  function IsQuizBookNewChapterInfoValid() {
    if(!chapterTitle || !chapterTitle.trim()) return false
    return true
  }
  
  return(<>
    <div className={cl.newChapter}>
      <HeadLine text="Create a new chapter"/>
      <Div height={30} />
      <div className={cl.fields}>
        <TextField1 value={chapterTitle} 
          maxLength={GENERAL_INPUT_MAX}
          prompt="Chapter title"
          onChange={(newValue)=>{setChapterTitle(newValue)}} />
      </div>
    </div>
    <AppleWindowBottomBarFill />
    <AppleWindowPlainBottomBarDiv>
      <AppleIconButtons color={QuizColor.themeRed}
        icon1="x" onClick1={backToChaptersHome}
        icon5="floppydisk" onClick5={CreateQuizChapter} disabled5={!IsQuizBookNewChapterInfoValid()}
      />
    </AppleWindowPlainBottomBarDiv>
  </>)
}