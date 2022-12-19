import { useState } from "react"
import { IQuizChapter } from "../../../../Model/IQuizChapter"
import { MyQuizzes } from "./MyQuizzes/MyQuizzes"
import { QuizBookChapterHome } from "./QuizBookChapterHome/QuizBookChapterHome"
import { QuizBookChapterSettings } from "./QuizBookChapterSettings/QuizBookChapterSettings"

interface IQuizBookChapterProp {
  chapter?: IQuizChapter
  setChapterTitle: (title:  string)=>void
  backToChaptersHome: ()=>void
}

export function QuizBookChapter({
  chapter,
  setChapterTitle,
  backToChaptersHome
}: IQuizBookChapterProp) {

  const [quizBookChapterTurn, setQuizBookChapterTurn] = useState<string>("")
  
  function backToChapterHome() {
    setQuizBookChapterTurn(QuizBookChapterTurn.Home)
  }

  if(!chapter) return null

  switch(quizBookChapterTurn) {
    case QuizBookChapterTurn.ChapterQuizzes: return(
      <MyQuizzes 
        chapter={chapter}
        backToChapterHome={backToChapterHome}/>
    )
    case QuizBookChapterTurn.ChapterSettings: return(
      <QuizBookChapterSettings 
        chapter={chapter}
        setChapterTitle={setChapterTitle}
        backToChapterHome={backToChapterHome}
      />
    )
    default: return(
      <QuizBookChapterHome chapter={chapter}
        backToChaptersHome={backToChaptersHome}
        setQuizBookChapterTurn={setQuizBookChapterTurn}
      />
    )
  }
}

export const QuizBookChapterTurn = {
  Home: "Home",
  ChapterSettings: "ChapterSettings",
  ChapterQuizzes: "ChapterQuizzes"
}