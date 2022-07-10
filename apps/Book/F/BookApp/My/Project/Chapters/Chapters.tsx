import { useEffect, useState } from "react"
import { IProject } from "../../../../Model/IProject"
import { NewChapter } from "./NewChapter/NewChapter"
import { ChaptersHome } from "./ChaptersHome/ChaptersHome"
import { Get2, useShield } from "../../../../../../../libs/Core/Core1/fCore1"
import { IChapter } from "../../../../Model/IChapter"
import { ChapterEditor } from "./ChapterEditor/ChapterEditor"
import { ChapterSettings } from "./ChapterSettings/ChapterSettings"

interface IChaptersProp {
  project: IProject
  backToProjectHome: ()=>void
}
export function Chapters({
  project,
  backToProjectHome
}: IChaptersProp) {
  const [chaptersTurn, setChaptersTurn] = useState<string>("")
  const [chaptersLoaded, setChaptersLoaded] = useState<boolean>(false)
  const [chapters, setChapters] = useState<Array<IChapter>>([])
  const [selectedChapterId, setSelectedChapterId] = useState<string>("")

  const shield = useShield()

  function backToChaptersHome() {
    setChaptersTurn(ChaptersTurn.Home)
  }

  function goToNewChapter() {
    setChaptersTurn(ChaptersTurn.NewChapter)
  }

  function goToChapterEditor(chapterId: string) {
    setSelectedChapterId(chapterId)
    setChaptersTurn(ChaptersTurn.ChapterEditor)
  }

  function goToChapterSettings(chapterId: string) {
    setSelectedChapterId(chapterId)
    setChaptersTurn(ChaptersTurn.ChapterSettings)
  }

  async function loadChapters() {
    if(chaptersLoaded) return

    await Get2(shield, `/book/LoadMyChapters?projectId=${project.id}`,
      (res)=>{
        setChaptersLoaded(true)
        setChapters(res.chapters)
      }
    )
  }

  function reloadChapters() {
    setChaptersLoaded(false)
  }

  useEffect(()=>{
    loadChapters()
  })

  switch(chaptersTurn) {
    case ChaptersTurn.ChapterSettings: return(
      <ChapterSettings
        project={project}
        reloadChapters = {reloadChapters}
        chapterId={selectedChapterId}
        backToChaptersHome={backToChaptersHome}
        />)
    case ChaptersTurn.ChapterEditor: return(
      <ChapterEditor 
        project={project}
        chapterId={selectedChapterId}
        backToChaptersHome={backToChaptersHome}
        />)
    case ChaptersTurn.NewChapter: return (
      <NewChapter
        reloadChapters = {reloadChapters}
        project={project}
        backToChaptersHome={backToChaptersHome}
      />)
    default: return (
      <ChaptersHome
        project={project}
        chapters = { chapters }
        backToProjectHome={backToProjectHome}
        goToNewChapter={goToNewChapter}
        goToChapterEditor={goToChapterEditor}
        goToChapterSettings={goToChapterSettings}
      />)
  }
}

export const ChaptersTurn = {
  Home: "Home",
  NewChapter: "NewChapter",
  ChapterEditor: "ChapterEditor",
  ChapterSettings: "ChapterSettings"
}