import { AppleIconButtons, AppleWindowPlainBottomBarDiv, AutoRepeatGrid } from "../../../../../../../../libs/Core/Core2/fCore2"
import { AppleFolder, File, FileType, HeadLine } from "../../../../../../../../libs/Pop/Pop3/fPop3"
import { QuizColor } from "../../../../../CSS/QuizColor"
import { IQuizChapter } from "../../../../../Model/IQuizChapter"
import { QuizBookChapterTurn } from "../QuizBookChapter"
import cl from "./QuizBookChapterHome.module.scss"

interface IQuizBookChapterHomeProp {
  chapter: IQuizChapter
  backToChaptersHome: ()=>void
  setQuizBookChapterTurn: (turn: string)=>void
}

export function QuizBookChapterHome({
  chapter,
  backToChaptersHome,
  setQuizBookChapterTurn
}: IQuizBookChapterHomeProp) {

  function openQuizzesFolder() {
    setQuizBookChapterTurn(QuizBookChapterTurn.ChapterQuizzes)
  }

  function openChapterSettings() {
    setQuizBookChapterTurn(QuizBookChapterTurn.ChapterSettings)
  }

  return(<>
    <div className={cl.chapterHome}>
      <HeadLine text={chapter.title} h={3}/>
      <AutoRepeatGrid autoFill cellMinWidth={100} columnGap={10} rowGap={10} paddingTop={25} paddingBottom={10}>
        <AppleFolder text="Quizzes" onClick={openQuizzesFolder}/>
        <File text="Chapter Settings" iconName="gear" type={FileType.settings}
          onClick={openChapterSettings} />
      </AutoRepeatGrid>
    </div>
    <AppleWindowPlainBottomBarDiv>
      <AppleIconButtons color={QuizColor.themeRed} strokeWidth={20}
        icon1="chevron.left" onClick1={backToChaptersHome} text1=""
      /> 
    </AppleWindowPlainBottomBarDiv>
  </>)
}