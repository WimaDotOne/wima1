import { useState } from "react"
import { IQuizChapter } from "../../../../../Model/IQuizChapter"
import { MyQuizzesHome } from "./MyQuizzesHome/MyQuizzesHome"
import { NewQuiz } from "./NewQuiz/NewQuiz"
import { IQuizQuiz } from "../../../../../Model/IQuizQuiz"
import { MyQuiz } from "../MyQuiz/MyQuiz"

interface IMyQuizzesProp {
  chapter: IQuizChapter
  backToChapterHome: ()=>void
}

export function MyQuizzes({
  chapter,
  backToChapterHome
}: IMyQuizzesProp) {

  const [quizzesTurn, setQuizzesTurn] = useState<string>("")
  const [selectedQuiz, setSelectedQuiz] = useState<IQuizQuiz>()

  function backToQuizzesHome() {
    setQuizzesTurn(QuizzesTurn.Home)
  }

  function goToSelectedQuiz(quiz: IQuizQuiz) {
    setSelectedQuiz(quiz)
    setQuizzesTurn(QuizzesTurn.SelectedQuiz)
  }

  function goToNewQuiz() {
    setQuizzesTurn(QuizzesTurn.NewQuiz)
  }

  switch(quizzesTurn) {
    case QuizzesTurn.NewQuiz: return(
      <NewQuiz 
        chapter={chapter}
        backToQuizzesHome={backToQuizzesHome}
      />
    )
    case QuizzesTurn.SelectedQuiz: return(
      <MyQuiz quiz={selectedQuiz}
        backToQuizzesHome={backToQuizzesHome}/>
    )
    default: return(
      <MyQuizzesHome
        chapter={chapter}
        goToNewQuiz={goToNewQuiz} 
        goToSelectedQuiz={goToSelectedQuiz}
        backToChapterHome={backToChapterHome}
      />
    )
  }
}

export const QuizzesTurn ={
  Home: "Home",
  NewQuiz: "NewQuiz",
  SelectedQuiz: "SelectedQuiz"
}