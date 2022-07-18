import { useEffect, useState } from "react"
import { Get2, useShield } from "../../../../../../../libs/Core/Core1/fCore1"
import { IChapter } from "../../../../Model/IChapter"
import { MediaQuery } from "../MediaQuery/MediaQuery"
import { ChapterPaperA } from "./ChapterPaperA/ChapterPaperA"
import { ChapterPaperB } from "./ChapterPaperB/ChapterPaperB"

interface IChapterPaperProp {
  bookId?: string
  projectId?: string
  chapterIndex: number
  setChapterIndex: (index: number)=>void
  goCover: ()=>void
  chapters: Array<IChapter>
}

export function ChapterPaper({
  bookId,
  projectId,
  chapterIndex, setChapterIndex,
  goCover,
  chapters
}: IChapterPaperProp) {

  const [textLoaded, setTextLoaded] = useState<boolean>(false)
  const [chapterText, setChapterText] = useState<string>("")
  const [chapterName, setChapterName] = useState<string>("")
  const [isWideScreen, setIsWideScreen] = useState<boolean>(false)
  const [goLastPage, setGoLastPage] = useState<boolean>(false)

  const shield = useShield()

  async function loadChapterText(chapterIndex: number, onOk: (res: any)=>void) {
    if(!chapters || !chapterIndex || chapterIndex < 1 || 
        chapterIndex > chapters.length) {
      return
    }
    const chapter = chapters[chapterIndex-1]
    const chapterId = chapter.id
    if(!chapterId) return
    let url = ""
    if(projectId) {
      url = `/book/LoadChapterTextPreview?projectId=${projectId}&chapterId=${chapterId}`
    }
    else if(bookId) {
      url = `/book/LoadChapterText?bookId=${bookId}&chapterId=${chapterId}`
    }
    if(!url) return
    await Get2(shield, url, onOk)
  }

  useEffect(()=>{
    if(textLoaded) return
    console.log("load chapter text")
    loadChapterText(chapterIndex, (res)=>{
      setTextLoaded(true)
      setChapterText(res.chapterText)
      setChapterName(res.chapterName)
    })
  })

  function nextChapter() {
    if(!chapters) return
    if(chapterIndex < chapters.length) {
      const newChapterIndex = chapterIndex+1
      setChapterIndex(newChapterIndex)
      loadChapterText(newChapterIndex, (res)=>{
        setChapterText(res.chapterText)
        setChapterName(res.chapterName)
        setGoLastPage(false)
      })
    }
  }

  function prevChapter() {
    if(chapterIndex > 1) {
      const newChapterIndex = chapterIndex-1
      setChapterIndex(newChapterIndex)
      loadChapterText(newChapterIndex, (res)=>{
        setChapterText(res.chapterText)
        setChapterName(res.chapterName)
        setGoLastPage(true)
      })
    }
  }

  return(<>
  {
    isWideScreen ?
    <ChapterPaperB
      goLastPage={goLastPage}
      prevChapter={prevChapter} nextChapter={nextChapter}
      chapterIndex={chapterIndex}
      chapterName={chapterName}
      chapterText={chapterText}
     />:
    <ChapterPaperA 
      goLastPage={goLastPage}
      prevChapter={prevChapter} nextChapter={nextChapter}
      chapterIndex={chapterIndex}
      chapterName={chapterName}
      chapterText={chapterText}
    />
  }
  <MediaQuery setIsWideScreen={setIsWideScreen}/>
  </>)
}