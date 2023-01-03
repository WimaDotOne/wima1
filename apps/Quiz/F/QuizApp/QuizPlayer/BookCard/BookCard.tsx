import { useEffect, useState } from "react"
import { IQuizChapter } from "../../../Model/IQuizChapter"
import cl from "./BookCard.module.scss"

interface IBookCardProp {
  bookName: string
  chapters: Array<IQuizChapter>
  onClickChapter: (chapter: IQuizChapter) => void
}

export function BookCard({
  bookName,
  chapters,
  onClickChapter
}: IBookCardProp) {

  const [randomNum, setRandomNum] = useState<number>(0)

  useEffect(()=>{
    if(randomNum < 1) {
      const num = Math.floor(Math.random()*6)
      setRandomNum(num)
    }
  })

  const colors = [
    "#ff6651", "#8cae6f", "#4774c8",
    "#53baf3", "#feb908", "#705df2"
  ]

  chapters = chapters || []

  return(<>
  <div className={cl.bookCard}>
    <div className={cl.bookName} style={{color: colors[randomNum]}}>
      {bookName}
    </div>
    <div className={cl.chapters}>
    {
      chapters.map((chapter, i)=>
        <div key={i} className={cl.chapterSpace}>
          <div className={cl.chapter} 
            style={{backgroundColor: colors[(randomNum+i)%colors.length]}}
            onClick={()=>{onClickChapter(chapter)}}
          >
            <div className={cl.chapterNum}>
              {i+1}
            </div>
            <div className={cl.chapterTitle} >
              {chapter.title}
            </div>
          </div>
        </div>
      )
    }
    </div>
  </div>
  </>)
}