import { AppleIconButtons, AppleWindowBottomBarFill, 
  AppleWindowPlainBottomBarDiv, Div } from "../../../../../../../../libs/Core/Core2/fCore2"
import { HeadLine } from "../../../../../../../../libs/Pop/Pop3/fPop3"
import { QuizColor } from "../../../../../CSS/QuizColor"
import { IQuizChapter } from "../../../../../Model/IQuizChapter"
import { QuizChapterTitle } from "./QuizChapterTitle/QuizChapterTitle"
import { Publish } from "./Publish/Publish"
import cl from "./QuizBookChapterSettings.module.scss"
import { Post2, useShield } from "../../../../../../../../libs/Core/Core1/fCore1"

interface IQuizBookChapterSettingsProp {
  chapter: IQuizChapter
  setChapterTitle: (title: string)=>void
  backToChapterHome: ()=>void
  backToChaptersHome: ()=>void
}
export function QuizBookChapterSettings({
  chapter,
  setChapterTitle,
  backToChapterHome,
  backToChaptersHome
}: IQuizBookChapterSettingsProp) {

  const shield = useShield()

  async function deleteChapter() {
    if(!window.confirm("Are you sure to delete the chapter?")) {
      return
    }

    await Post2(shield, "/quiz/DeleteMyChapter", {
      chapterId: chapter._id
    }, (res)=>{
      backToChaptersHome()
    })
  }

  return(<>
  <div className={cl.settings}>
    <HeadLine text={chapter.title} h={3} />
    <Div height={10} />
    <QuizChapterTitle chapter={chapter} setChapterTitle={setChapterTitle}/>
    <Div height={20} />
    <Publish chapter={chapter}/>
    <Div height={20} />
  </div>
  <AppleWindowBottomBarFill />
    <AppleWindowPlainBottomBarDiv>
      <AppleIconButtons color={QuizColor.themeRed}
        icon1="chevron.left" onClick1={backToChapterHome}
        icon5="trashbin" onClick5={deleteChapter}
      />
    </AppleWindowPlainBottomBarDiv>
  </>)
}