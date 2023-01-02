import { AppleIconButtons, AppleWindowBottomBarFill, 
  AppleWindowPlainBottomBarDiv, Div } from "../../../../../../../../../libs/Core/Core2/fCore2"
import { HeadLine } from "../../../../../../../../../libs/Pop/Pop3/fPop3"
import { QuizColor } from "../../../../../../CSS/QuizColor"
import { IQuizQuiz } from "../../../../../../Model/IQuizQuiz"
import { QuizTitle } from "./QuizTitle/QuizTitle"
import cl from "./MyQuizSettings.module.scss"
import { Post2, useShield } from "../../../../../../../../../libs/Core/Core1/fCore1"

interface IMyQuizSettingsProp {
  quiz: IQuizQuiz
  setQuizTitle: (title: string)=>void
  backToQuizHome: ()=>void
  backToQuizzesHome: ()=>void
}
export function MyQuizSettings({
  quiz,
  setQuizTitle,
  backToQuizHome,
  backToQuizzesHome
}: IMyQuizSettingsProp) {

  const shield = useShield()

  async function deleteQuiz() {
    if(!window.confirm("Are you sure to delete the quiz?")) {
      return
    }
    await Post2(shield, "/quiz/DeleteMyQuiz", {
      quizId: quiz._id }, (res)=>{
        backToQuizzesHome()
      }
    )
  }

  return(<>
  <div className={cl.settings}>
    <HeadLine text={quiz.title} h={3} />
    <Div height={10} />
    <QuizTitle quiz={quiz} setQuizTitle={setQuizTitle}/>
    <Div height={20} />
  </div>
  <AppleWindowBottomBarFill />
    <AppleWindowPlainBottomBarDiv>
      <AppleIconButtons color={QuizColor.themeRed}
        icon1="chevron.left" onClick1={backToQuizHome}
        icon5="trashbin" onClick5={deleteQuiz}
      />
    </AppleWindowPlainBottomBarDiv>
  </>)
}