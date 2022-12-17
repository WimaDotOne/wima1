import { useState } from "react"
import { IProject } from "../../../../Model/IProject"
import { QuizBookChaptersHome } from "./QuizBookChaptersHome/QuizBookChaptersHome"
import { QuizBookNewChapter } from "./QuizBookNewChapter/QuizBookNewChapter"
import { QuizBookChapter } from "../QuizBookChapter/QuizBookChapter"
import { IQuizChapter } from "../../../../Model/IQuizChapter"

interface IQuizBookChaptersProp {
  project: IProject
  backToProjectHome: ()=>void
}

export function QuizBookChapters({
  project,
  backToProjectHome
}: IQuizBookChaptersProp) {

  const [chaptersTurn, setChaptersTurn] = useState<string>("")
  const [selectedChapter, setSelectedChapter] = useState<IQuizChapter>()

  function backToChaptersHome() {
    setChaptersTurn(QuizBookChaptersTurn.Home)
  }

  function goToSelectedChapter(chapter: IQuizChapter) {
    setSelectedChapter(chapter)
    setChaptersTurn(QuizBookChaptersTurn.SelectedChapter)
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
    case QuizBookChaptersTurn.SelectedChapter: return(
      <QuizBookChapter chapter={selectedChapter}
        backToChaptersHome={backToChaptersHome}/>
    )
    default: return(
      <QuizBookChaptersHome
        project={project}
        goToNewChapter={goToNewChapter} 
        goToSelectedChapter={goToSelectedChapter}
        backToProjectHome={backToProjectHome}
      />
    )
  }
}

export const QuizBookChaptersTurn ={
  Home: "Home",
  NewChapter: "NewChapter",
  SelectedChapter: "SelectedChapter"
}