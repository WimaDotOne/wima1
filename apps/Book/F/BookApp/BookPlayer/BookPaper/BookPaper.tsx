import { IBook } from "../../../Model/IBook"
import { IChapter } from "../../../Model/IChapter"
import { ChapterPaper } from "./ChapterPaper/ChapterPaper"
import { CoverPaper } from "./CoverPaper/CoverPaper"

interface IBookPaperProp {
  exhibitId?: string
  bookId?: string
  projectId?: string
  chapterIndex: number
  setChapterIndex: (index: number)=>void
  page: number
  setPage: (page: number)=>void
  chapters: Array<IChapter>
  book?: IBook
  isCover: boolean
  setIsCover: (isCover: boolean)=>void
}

export function BookPaper({
  exhibitId,
  bookId,
  projectId,
  chapterIndex, setChapterIndex,
  page, setPage,
  chapters,
  book,
  isCover, setIsCover
}: IBookPaperProp) {

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
      exhibitId={exhibitId}
      bookId={bookId}
      projectId={projectId}
      chapterIndex={chapterIndex} setChapterIndex={setChapterIndex}
      page={page} setPage={setPage}
      goCover={goCover} 
      chapters={chapters}/>
  }
  </>)
}