import { AppleIconButtons, AppleWindowBottomBarFill, 
  AppleWindowPlainBottomBarDiv, Div } from "../../../../../../../../../libs/Core/Core2/fCore2"
import { HeadLine } from "../../../../../../../../../libs/Pop/Pop3/fPop3"
import { QuizColor } from "../../../../../../CSS/QuizColor"
import { IQuizQuiz } from "../../../../../../Model/IQuizQuiz"
import { QuizTitle } from "./QuizTitle/QuizTitle"
import cl from "./MyQuizSettings.module.scss"

interface IMyQuizSettingsProp {
  quiz: IQuizQuiz
  setQuizTitle: (title: string)=>void
  backToQuizHome: ()=>void
}
export function MyQuizSettings({
  quiz,
  setQuizTitle,
  backToQuizHome
}: IMyQuizSettingsProp) {

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
      />
    </AppleWindowPlainBottomBarDiv>
  </>)
}