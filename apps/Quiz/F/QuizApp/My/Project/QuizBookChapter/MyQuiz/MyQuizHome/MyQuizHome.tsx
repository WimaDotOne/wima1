import { AppleIconButtons, AppleWindowPlainBottomBarDiv, 
  AutoRepeatGrid } from "../../../../../../../../../libs/Core/Core2/fCore2"
import { File, FileType, HeadLine } from "../../../../../../../../../libs/Pop/Pop3/fPop3"
import { QuizColor } from "../../../../../../CSS/QuizColor"
import { IQuizQuiz } from "../../../../../../Model/IQuizQuiz"
import { MyQuizTurn } from "../MyQuiz"
import cl from "./MyQuizHome.module.scss"

interface IMyQuizHomeProp {
  quiz: IQuizQuiz
  backToQuizzesHome: ()=>void
  setMyQuizTurn: (turn: string)=>void
}

export function MyQuizHome({
  quiz,
  backToQuizzesHome,
  setMyQuizTurn
}: IMyQuizHomeProp) {

  function openQuestionTxt() {
    setMyQuizTurn(MyQuizTurn.QuestionsText)
  }

  function openMyQuizSettings() {
    setMyQuizTurn(MyQuizTurn.Settings)
  }

  function openMyQuizYouTube() {
    setMyQuizTurn(MyQuizTurn.YouTube)
  }

  return(<>
    <div className={cl.myQuizHome}>
      <HeadLine text={quiz.title} h={3}/>
      <AutoRepeatGrid autoFill cellMinWidth={100} columnGap={10} rowGap={10} paddingTop={25} paddingBottom={10}>
        <File text="Questions" iconName="textfile" 
          onClick={openQuestionTxt} />
        <File text="YouTube video" iconName="youtube" type={FileType.youtube}
          onClick={openMyQuizYouTube}/>
        <File text="Settings" iconName="gear" type={FileType.settings}
          onClick={openMyQuizSettings} />
      </AutoRepeatGrid>
    </div>
    <AppleWindowPlainBottomBarDiv>
      <AppleIconButtons color={QuizColor.themeRed} strokeWidth={20}
        icon1="chevron.left" onClick1={backToQuizzesHome} text1=""
      /> 
    </AppleWindowPlainBottomBarDiv>
  </>)
}