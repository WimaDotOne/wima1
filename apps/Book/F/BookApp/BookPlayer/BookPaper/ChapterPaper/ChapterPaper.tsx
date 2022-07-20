import { useEffect, useState } from "react"
import { Get2, useShield } from "../../../../../../../libs/Core/Core1/fCore1"
import { IChapter } from "../../../../Model/IChapter"
import { MediaQuery } from "../MediaQuery/MediaQuery"
import { ChapterPaperA } from "./ChapterPaperA/ChapterPaperA"
import { ChapterPaperB } from "./ChapterPaperB/ChapterPaperB"

interface IChapterPaperProp {
  exhibitId?: string
  bookId?: string
  projectId?: string
  chapterIndex: number
  setChapterIndex: (index: number)=>void
  page: number,
  setPage: (page: number)=>void
  goCover: ()=>void
  chapters: Array<IChapter>
}

export function ChapterPaper({
  exhibitId,
  bookId,
  projectId,
  chapterIndex, setChapterIndex,
  page, setPage,
  goCover,
  chapters
}: IChapterPaperProp) {

  const [chapterText, setChapterText] = useState<string>("")
  const [chapterName, setChapterName] = useState<string>("")
  const [isWideScreen, setIsWideScreen] = useState<boolean>(false)

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
    } else if(exhibitId) {
      url = `/book/LoadChapterTextExhibit?exhibitId=${exhibitId}&chapterId=${chapterId}`
    }
    if(!url) return
    await Get2(shield, url, onOk)
  }

  useEffect(()=>{
    loadChapterText(chapterIndex, (res)=>{
      setChapterText(res.chapterText)
      setChapterName(res.chapterName)
    })
  }, [chapterIndex])

  function nextChapter(cb?: ()=>void) {
    if(!chapters) return
    if(chapterIndex < chapters.length) {
      const newChapterIndex = chapterIndex+1
      setChapterIndex(newChapterIndex)
      loadChapterText(newChapterIndex, (res)=>{
        setChapterText(res.chapterText)
        setChapterName(res.chapterName)
        if(cb){ cb() }
      })
    }
  }

  function prevChapter(cb?: (chapterText: string)=>void) {
    if(chapterIndex > 1) {
      const newChapterIndex = chapterIndex-1
      setChapterIndex(newChapterIndex)
      loadChapterText(newChapterIndex, (res)=>{
        const text = res.chapterText || ""
        setChapterText(text)
        setChapterName(res.chapterName)
        if(cb){ cb(text) }
      })
    } else {
      goCover()
    }
  }

  return(<>
  {
    isWideScreen ?
    <ChapterPaperB
      prevChapter={prevChapter} nextChapter={nextChapter}
      page={page} setPage={setPage}
      chapterIndex={chapterIndex}
      chapterName={chapterName}
      chapterText={chapterText}
     />:
    <ChapterPaperA 
      prevChapter={prevChapter} nextChapter={nextChapter}
      page={page} setPage={setPage}
      chapterIndex={chapterIndex}
      chapterName={chapterName}
      chapterText={chapterText}
    />
  }
  <MediaQuery setIsWideScreen={setIsWideScreen}/>
  </>)
}