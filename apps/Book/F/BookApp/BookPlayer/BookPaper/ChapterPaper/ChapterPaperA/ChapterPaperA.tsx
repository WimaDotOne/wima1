import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { PaperTurner } from "../../../PaperTurner/PaperTurner"
import { FormatPagesA } from "../../H/FormatPages"
import cl from "./ChapterPaperA.module.scss"

interface IChapterPaperAProp {
  goLastPage: boolean
  prevChapter: ()=>void
  nextChapter: ()=>void
  chapterIndex: number
  chapterText: string
  chapterName: string
}

export function ChapterPaperA({
  goLastPage,
  prevChapter, nextChapter,
  chapterIndex,
  chapterText,
  chapterName
}: IChapterPaperAProp) {

  const [paperArea, setPaperArea] = useState<number>(0)
  const [page, setPage] = useState<number>(1)
  const [pages, setPages] = useState<Array<string>>([])

  const paperRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(()=>{

    function resize() {
      const paper = paperRef.current
      if(!paper) return
      const paperWidth = paper.clientWidth
      const paperHeight = paper.clientHeight
      const pagePaddingLeft = 20
      const pagePaddingRight = 20
      const pagePaddingTop = 20
      const xMax = paperWidth - pagePaddingLeft - pagePaddingRight
      const yMax = paperHeight - pagePaddingTop * 2
      const area = xMax * yMax
      const pages2 = FormatPagesA(chapterText, Math.floor(xMax/7.5) , Math.floor(yMax/24))
      console.log(xMax/10, Math.floor(yMax/24))
      setPaperArea(area)
      setPages(pages2)
      if(goLastPage) {
        setPage(pages2.length)
      } else {
        setPage(1)
      }
    }

    resize()
    let timeId = 0
    window?.addEventListener("resize", ()=>{
      clearTimeout(timeId)
      timeId = window.setTimeout(resize, 500)
    })
  }, [chapterText, goLastPage, paperArea])

  function next() {
    if(page < pages.length) {
      setPage(page+1)
    } else {
      nextChapter()
    }
  }

  function prev() {
    if(page > 1) {
      setPage(page-1)
    } else {
      prevChapter()
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