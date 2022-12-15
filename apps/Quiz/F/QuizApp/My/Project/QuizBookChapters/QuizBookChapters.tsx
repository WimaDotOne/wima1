import { useState } from "react"
import { IProject } from "../../../../Model/IProject"
import { QuizBookChaptersHome } from "./QuizBookChaptersHome/QuizBookChaptersHome"
import { QuizBookNewChapter } from "./QuizBookNewChapter/QuizBookNewChapter"

interface IQuizBookChaptersProp {
  project: IProject
  backToProjectHome: ()=>void
}

export function QuizBookChapters({
  project,
  backToProjectHome
}: IQuizBookChaptersProp) {

  const [chaptersTurn, setChaptersTurn] = useState<string>("")

  function backToChaptersHome() {
    setChaptersTurn(QuizBookChaptersTurn.Home)
  }

  function goToNewChapter() {
    setChaptersTurn(QuizBookChaptersTurn.NewChapter)
  }

  switch(chaptersTurn) {
    case QuizBookChaptersTurn.NewChapter: return(
      <QuizBookNewChapter 
        project={project}
        backToChaptersHome={backToChaptersHome}
      />
    )
    default: return(
      <QuizBookChaptersHome
        project={project}
        goToNewChapter={goToNewChapter} 
        backToProjectHome={backToProjectHome}
      />
    )
  }
}

export const QuizBookChaptersTurn ={
  Home: "Home",
  NewChapter: "NewChapter"
}