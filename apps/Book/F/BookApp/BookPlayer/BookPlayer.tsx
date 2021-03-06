import Head from "next/head"
import { useEffect, useState } from "react"
import { Get2, useShield } from "../../../../../libs/Core/Core1/fCore1"
import { IBook } from "../../Model/IBook"
import { IChapter } from "../../Model/IChapter"
import { BookPaper } from "./BookPaper/BookPaper"
import { TocWindow } from "./TocWindow/TocWindow"

interface IBookPlayerProp {
  exhibitId?: string
  bookId?: string
  projectId?: string
  onCloseBook: ()=>void
}

export function BookPlayer({
  exhibitId,
  bookId,
  projectId,
  onCloseBook
}: IBookPlayerProp) {

  const [page, setPage] = useState<number>(1)
  const [chapterIndex, setChapterIndex] = useState<number>(1)
  const [isLeftBarOpen, setIsLeftBarOpen] = useState<boolean>(false)
  const [chapters, setChapters] = useState<Array<IChapter>>([])
  const [book, setBook] = useState<IBook>()
  const [bookLoaded, setBookLoaded] = useState<boolean>(false)
  const [isCover, setIsCover] = useState<boolean>(true)

  const shield = useShield()

  async function loadBook() {
    if(bookLoaded) return
    let url = ""
    if(projectId) {
      url = `/book/LoadBookPreview?projectId=${projectId}`
    }
    else if(bookId) {
      url = `/book/LoadBook?bookId=${bookId}`
    } else if(exhibitId) {
      url = `/book/LoadBookExhibit?exhibitId=${exhibitId}`
    }
    if(!url) return
    await Get2(shield, url,
      (res)=>{
        setBookLoaded(true)
        setChapters(res.chapters)
        setBook(res.book)
      } 
    )
  }

  useEffect(()=>{
    loadBook()
  })

  return(<>
  <Head>
    <title>{book?.title || "Book"}</title>
  </Head>
  <TocWindow 
    setIsCover={setIsCover}
    isLeftBarOpen={isLeftBarOpen}
    setIsLeftBarOpen={setIsLeftBarOpen}
    setChapterIndex={setChapterIndex}
    setPage={setPage}
    chapters={chapters}
    onClose={onCloseBook}>
    <BookPaper
      exhibitId={exhibitId}
      projectId={projectId}
      bookId={bookId}
      chapterIndex={chapterIndex}
      setChapterIndex={setChapterIndex}
      page={page} setPage={setPage}
      chapters={chapters}
      book={book}
      isCover={isCover} setIsCover={setIsCover}
    />
  </TocWindow>
  </>)
}