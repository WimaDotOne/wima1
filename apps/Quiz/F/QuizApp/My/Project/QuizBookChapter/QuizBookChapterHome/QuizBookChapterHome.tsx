import { AppleIconButtons, AppleWindowPlainBottomBarDiv, AutoRepeatGrid } from "../../../../../../../../libs/Core/Core2/fCore2"
import { AppleFolder, File, FileType, HeadLine } from "../../../../../../../../libs/Pop/Pop3/fPop3"
import { QuizColor } from "../../../../../CSS/QuizColor"
import { IQuizChapter } from "../../../../../Model/IQuizChapter"
import cl from "./QuizBookChapterHome.module.scss"

interface IQuizBookChapterHomeProp {
  chapter: IQuizChapter
  backToChaptersHome: ()=>void
}

export function QuizBookChapterHome({
  chapter,
  backToChaptersHome
}: IQuizBookChapterHomeProp) {

  function openQuizzesFolder() {

  }

  function openChapterSettings() {

  }

  return(<>
    <div className={cl.chapterHome}>
      <HeadLine text={chapter.title} />
      <AutoRepeatGrid autoFill cellMinWidth={100} columnGap={10} rowGap={10} paddingTop={25} paddingBottom={10}>
        <AppleFolder text="Chapters" onClick={openQuizzesFolder}/>
        <File text="Settings" iconName="gear" type={FileType.settings}
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