import { useLayoutEffect, useRef, useState } from "react"
import { PaperTurner } from "../../../PaperTurner/PaperTurner"
import { FormatPagesA } from "../../H/FormatPages"
import cl from "./ChapterPaperA.module.scss"

interface IChapterPaperAProp {
  prevChapter: (cb?:(chapterText: string)=>void)=>void
  nextChapter: (cb?:()=>void)=>void
  chapterIndex: number
  chapterText: string
  chapterName: string
  page: number,
  setPage: (page: number)=>void
}

export function ChapterPaperA({
  prevChapter, nextChapter,
  chapterIndex,
  chapterText,
  chapterName,
  page, setPage
}: IChapterPaperAProp) {

  const [paperArea, setPaperArea] = useState<number>(0)
  const [pages, setPages] = useState<Array<string>>([])

  const paperRef = useRef<HTMLDivElement>(null)

  function GetPaperSize() {
    const paper = paperRef.current
    if(!paper) return [100, 100]
    const paperWidth = paper.clientWidth
    const paperHeight = paper.clientHeight
    const xMax = paperWidth
    const yMax = paperHeight
    return [xMax, yMax]
  }

  function Format(text: string) {
    const [xMax, yMax] = GetPaperSize()
    const pages2 = FormatPagesA(text, Math.floor(xMax/10.5) , Math.floor(yMax/24))
    return pages2
  }

  function resize() {
    const pages2 = Format(chapterText)
    const [xMax, yMax] = GetPaperSize()
    const area = xMax * yMax
    setPaperArea(area)
    setPages(pages2)

    if(page > pages2.length) {
      setPage(pages2.length)
    }
  }

  useLayoutEffect(()=>{

    const pages2 = Format(chapterText)
    setPages(pages2)

    let timeId = 0
    window?.addEventListener("resize", ()=>{
      clearTimeout(timeId)
      timeId = window.setTimeout(resize, 500)
    })
  }, [chapterText, paperArea])

  function next() {
    if(page < pages.length) {
      setPage(page+1)
    } else {
      nextChapter(
        ()=>{ setPage(1) }
      )
    }
  }

  function prev() {
    if(page > 1) {
      setPage(page-1)
    } else {
      prevChapter((text)=>{
        const pages2 = Format(text)
        setPage(pages2.length)
      })
    }
  }

  return(<>
  <div className={cl.topLine}>§{chapterIndex}. {chapterName}</div>
  <div className={cl.paperSpace}>
    <div className={cl.paper} ref={paperRef}>
      {pages[page-1]}
    </div>
  </div>
  <div className={cl.bottomLine}>{page}/{pages.length}</div>
  <PaperTurner prev={prev} next={next} />
  </>)
}