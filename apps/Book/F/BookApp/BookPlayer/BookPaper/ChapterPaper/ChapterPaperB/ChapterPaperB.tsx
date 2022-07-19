import { useLayoutEffect, useRef, useState } from "react"
import { Div } from "../../../../../../../../libs/Core/Core2/fCore2"
import { PaperTurner } from "../../../PaperTurner/PaperTurner"
import { FormatPagesA } from "../../H/FormatPages"
import cl from "./ChapterPaperB.module.scss"

interface IChapterPaperBProp {
  prevChapter: (cb?:(chapterText: string)=>void)=>void
  nextChapter: (cb?:()=>void)=>void
  chapterIndex: number
  chapterText: string
  chapterName: string
  page: number,
  setPage: (page: number)=>void
}

export function ChapterPaperB({
  prevChapter, nextChapter,
  chapterIndex,
  chapterText,
  chapterName,
  page, setPage
}: IChapterPaperBProp) {

  const [paperArea, setPaperArea] = useState<number>(0)
  const [pages, setPages] = useState<Array<string>>([])

  const paperRef = useRef<HTMLDivElement>(null)

  function GetPaperSize() {
    const paper = paperRef.current
    if(!paper) return [100, 100]
    const paperWidth = paper.clientWidth
    const paperHeight = paper.clientHeight
    const middlePadding = 30
    const xMax = Math.floor((paperWidth - middlePadding)/2)
    const yMax = paperHeight
    return [xMax, yMax]
  }

  function Format(text: string) {
    const [xMax, yMax] = GetPaperSize()
    const pages2 = FormatPagesA(text, Math.floor(xMax/8) , Math.floor(yMax/24))
    return pages2
  }

  function resize() {
    const pages2 = Format(chapterText)
    const [xMax, yMax] = GetPaperSize()
    const area = xMax * yMax
    setPaperArea(area)
    setPages(pages2)
  
    const totalPage = TotalPageB(pages2)
    if(page > totalPage) {
      setPage(totalPage)
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
    if(page < TotalPageB(pages)) {
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
        setPage(TotalPageB(pages2))
      })
    }
  }

  return(<>
  <div className={cl.topLine}>§{chapterIndex}. {chapterName}</div>
  <div className={cl.paperSpace}>
    <div className={cl.paper} ref={paperRef}>
      <div className={cl.page}>
        {pages[2*page-2]}
      </div>
      <Div width={30} />
      <div className={cl.page}>
        {pages[2*page-1]}
      </div>
    </div>
  </div>
  <div className={cl.bottomLine}>{page}/{TotalPageB(pages)}</div>
  <PaperTurner prev={prev} next={next} />
  </>)
}

function TotalPageB(pages: Array<string>) {
  if(!pages) return 0
  return Math.ceil(pages.length /2)
}