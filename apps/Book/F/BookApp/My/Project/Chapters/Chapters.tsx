import { useState } from "react"
import { IProject } from "../../../../Model/IProject"
import { NewChapter } from "./NewChapter/NewChapter"
import { ChaptersHome } from "./ChaptersHome/ChaptersHome"

interface IChaptersProp {
  project: IProject
  backToProjectHome: ()=>void
}
export function Chapters({
  project,
  backToProjectHome
}: IChaptersProp) {
  const [chaptersTurn, setChaptersTurn] = useState<string>("")

  function backToChaptersHome() {
    setChaptersTurn(ChaptersTurn.Home)
  }

  function goToNewChapter() {
    setChaptersTurn(ChaptersTurn.NewChapter)
  }

  switch(chaptersTurn) {
    case ChaptersTurn.NewChapter:
      return (<NewChapter backToChaptersHome={backToChaptersHome}/>)
    default: return (
      <ChaptersHome
        project={project}
        backToProjectHome={backToProjectHome}
        goToNewChapter={goToNewChapter}/>)
  }
}

export const ChaptersTurn = {
  Home: "Home",
  NewChapter: "NewChapter"
}