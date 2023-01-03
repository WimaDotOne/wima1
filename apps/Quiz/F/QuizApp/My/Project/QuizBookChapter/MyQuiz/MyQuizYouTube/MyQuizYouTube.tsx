import { AppleIconButtons, AppleWindowBottomBarFill, 
  AppleWindowPlainBottomBarDiv, Div } from "../../../../../../../../../libs/Core/Core2/fCore2"
import { HeadLine } from "../../../../../../../../../libs/Pop/Pop3/fPop3"
import { QuizColor } from "../../../../../../CSS/QuizColor"
import { IQuizQuiz } from "../../../../../../Model/IQuizQuiz"
import { YouTubeLink } from "./YouTubeLink/YouTubeLink"
import cl from "./MyQuizYouTube.module.scss"

interface IMyQuizYouTubeProp {
  quiz: IQuizQuiz
  setQuizYouTubeId: (youTubeId: string)=>void
  backToQuizHome: ()=>void
}
export function MyQuizYouTube({
  quiz,
  setQuizYouTubeId,
  backToQuizHome
}: IMyQuizYouTubeProp) {

  return(<>
  <div className={cl.settings}>
    <HeadLine text={quiz.title} h={3} />
    <Div height={10} />
    <YouTubeLink quiz={quiz} setQuizYouTubeId={setQuizYouTubeId}/>
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