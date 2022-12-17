import { useEffect, useState } from "react"
import { Get2, useShield } from "../../../../../../../../../libs/Core/Core1/fCore1"
import { AppleIconButtons, AppleWindowBottomBarFill, 
  AppleWindowPlainBottomBarDiv, AutoRepeatGrid, Div } from "../../../../../../../../../libs/Core/Core2/fCore2"
import { AppleFolder, HeadLine } from "../../../../../../../../../libs/Pop/Pop3/fPop3"
import { QuizColor } from "../../../../../../CSS/QuizColor"
import { IQuizChapter } from "../../../../../../Model/IQuizChapter"
import cl from "./MyQuizzesHome.module.scss"

interface IMyQuizzesHomeProp {
  chapter: IQuizChapter
  goToNewQuiz: ()=>void
  goToSelectedQuiz: (chapter: IQuizChapter)=>void
  backToChapterHome: ()=>void
}

export function MyQuizzesHome({
  chapter,
  goToNewQuiz,
  goToSelectedQuiz,
  backToChapterHome
}: IMyQuizzesHomeProp) {

  const [loaded, setLoaded] = useState<boolean>(false)
  const [quizzes, setQuizzes] = useState<Array<IQuizChapter>>([])
  const shield = useShield()

  function openQuiz(quiz: IQuizChapter) {
    goToSelectedQuiz(quiz)
  }

  async function loadQuizzes() {
    if(loaded) return
    await Get2(shield, `/quiz/LoadMyQuizzes?chapterId=${chapter._id}`,
     (res) => {
      setLoaded(true)
      setQuizzes(res.quizzes)
     }
    )
  }

  useEffect(()=>{
    loadQuizzes()
  })

  return(<>
  <div className={cl.quizzes}>
    <HeadLine text={chapter.title} buttonText="New Quiz" 
      buttonOnClick={goToNewQuiz}
      color={QuizColor.themeRed} h={3}/>
    
    <AutoRepeatGrid autoFill cellMinWidth={100} columnGap={10} rowGap={10} paddingTop={25} paddingBottom={10}>
    {
      quizzes.map((quiz, i)=>
      <AppleFolder key={quiz._id} text={quiz.title} onClick={
        ()=>{openQuiz(quiz)}
      }/>)
    }
    </AutoRepeatGrid>

  </div>
  <Div height={10} />

  <AppleWindowBottomBarFill />
  <AppleWindowPlainBottomBarDiv>
    <AppleIconButtons color={QuizColor.themeRed}
      icon1="chevron.left" onClick1={backToChapterHome}
    />
  </AppleWindowPlainBottomBarDiv>
  </>)
}