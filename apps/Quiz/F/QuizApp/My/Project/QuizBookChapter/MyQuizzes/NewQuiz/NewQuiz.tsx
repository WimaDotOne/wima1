import { useState } from "react"
import { GENERAL_INPUT_MAX } from "../../../../../../../../../bConfig"
import { Post2, TextField1, useShield } from "../../../../../../../../../libs/Core/Core1/fCore1"
import { AppleIconButtons, AppleWindowBottomBarFill, 
  AppleWindowPlainBottomBarDiv, Div } from "../../../../../../../../../libs/Core/Core2/fCore2"
import { HeadLine } from "../../../../../../../../../libs/Pop/Pop3/fPop3"
import { QuizColor } from "../../../../../../CSS/QuizColor"
import { IQuizChapter } from "../../../../../../Model/IQuizChapter"
import cl from "./NewQuiz.module.scss"

interface INewQuizProp {
  chapter: IQuizChapter
  backToQuizzesHome: ()=>void
}
export function NewQuiz({
  chapter,
  backToQuizzesHome
}:INewQuizProp) {

  const [quizTitle, setQuizTitle] = useState<string>("")

  const shield = useShield()

  async function CreateNewQuiz() {
    await Post2(shield, "/quiz/CreateQuizQuiz", {
      quizTitle,
      chapterId: chapter._id
    }, (res)=>{
      backToQuizzesHome()
    })
  }

  function IsNewQuizInfoValid() {
    if(!quizTitle) return false
    return true
  }
  
  return(<>
    <div className={cl.newQuiz}>
      <HeadLine text="Create a new quiz"/>
      <Div height={30} />
      <div className={cl.fields}>
        <TextField1 value={quizTitle} 
          maxLength={GENERAL_INPUT_MAX}
          prompt="Quiz title"
          onChange={(newValue)=>{setQuizTitle(newValue)}} />
      </div>
    </div>
    <AppleWindowBottomBarFill />
    <AppleWindowPlainBottomBarDiv>
      <AppleIconButtons color={QuizColor.themeRed}
        icon1="x" onClick1={backToQuizzesHome}
        icon5="floppydisk" onClick5={CreateNewQuiz} disabled5={!IsNewQuizInfoValid()}
      />
    </AppleWindowPlainBottomBarDiv>
  </>)
}