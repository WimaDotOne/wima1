import { useState } from "react"
import { IBook } from "../../../Model/IBook"
import { IChapter } from "../../../Model/IChapter"
import { ChapterPaper } from "./ChapterPaper/ChapterPaper"
import { CoverPaper } from "./CoverPaper/CoverPaper"

interface IBookPaperProp {
  bookId?: string
  projectId?: string
  chapterIndex: number
  setChapterIndex: (index: number)=>void
  chapters: Array<IChapter>
  book?: IBook 
}

export function BookPaper({
  bookId,
  projectId,
  chapterIndex, setChapterIndex,
  chapters,
  book
}: IBookPaperProp) {

  const [isCover, setIsCover] = useState<boolean>(true)

  book = {
    title: book?.title || "My Summer of Love",
    author: 'Helen Cross',
    dedication: "To Alice & Roy",
    coverImgUrl: book?.coverImgUrl
  }
  function goCover() {
    setIsCover(true)
  }
  function goChapter() {
    setIsCover(false)
  }
  return(<>
  {
    isCover ?
    <CoverPaper goChapter={goChapter} 
      book={book}/>:
    <ChapterPaper 
      bookId={bookId}
      projectId={projectId}
      chapterIndex={chapterIndex} setChapterIndex={setChapterIndex}
      goCover={goCover} 
      chapters={chapters}/>
  }
  </>)
}