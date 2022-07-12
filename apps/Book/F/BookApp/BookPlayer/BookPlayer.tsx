import Head from "next/head";
import { useEffect, useState } from "react";
import { Get2, useShield } from "../../../../../libs/Core/Core1/fCore1";
import { TocWindow } from "./TocWindow/TocWindow";
import { IChapter } from "../../Model/IChapter";
import { Book } from "./Book/Book";

interface IBookPlayer2Prop {
  bookId?: string
  projectId?: string
  onClose: ()=>void
}

export function BookPlayer2({
  bookId,
  projectId,
  onClose
}: IBookPlayer2Prop) {

  const [chapters, setChapters] = useState<Array<IChapter>>([{
    id: "1", name: "Book1", chapterNumber: "1"
  },{
    id: "2", name: "Book2", chapterNumber: "2"

  }])
  const [chaptersLoaded, setChaptersLoaded] = useState<boolean>(true)
  const [bookTitle, setBookTitle] = useState<string>("Hey there Diliah")
  const [bookCoverImageUrl, setBookCoverImageUrl] = useState<string>("/favicon.ico")
  const [author, setAuthor] = useState<string>("Ben Lawrence")
  const [dedication, setDedication] = useState<string>("To Dear, Alice")

  const shield = useShield()

  async function loadPages() {
    if(chaptersLoaded) return
    let url = ""
    if(projectId) {
      url = `/book/LoadBookPreview?projectId=${projectId}`
    }
    else if(bookId) {
      url = `/book/LoadBook?bookId=${bookId}`
    }
    if(!url) return
    await Get2(shield, url,
      (res)=>{
        setChaptersLoaded(true)
        setChapters(res.chapters)
        setBookTitle(res.bookTitle || "")
      } 
    )
  }

  useEffect(()=>{
    loadPages()
  })

  return(<>
    <BookPlayer 
      projectId={projectId}
      bookTitle={bookTitle}
      bookCoverImageUrl={bookCoverImageUrl}
      author={author}
      dedication={dedication}
      chapters={chapters} onClose={onClose}/>
  </>)

}

interface IBookPlayerProp {
  projectId?: string
  bookTitle: string
  bookCoverImageUrl: string
  author: string
  dedication: string
  chapters: Array<IChapter>
  onClose: ()=>void
}

export function BookPlayer({
  projectId,
  bookTitle,
  bookCoverImageUrl,
  author,
  dedication,
  chapters,
  onClose
}: IBookPlayerProp) {

  const [isLeftBarOpen, setIsLeftBarOpen] = useState<boolean>(false)
  const [chapterId, setChapterId] = useState<string>("")

  return(<>
  {
    bookTitle?
    <Head>
      <title>{bookTitle}</title>
    </Head>: null
  }
  <TocWindow isLeftBarOpen={isLeftBarOpen}
    setIsLeftBarOpen={setIsLeftBarOpen}
    chapterId={chapterId}
    setChapterId={setChapterId}
    chapters={chapters}
    onClose={onClose}>
    <Book projectId={projectId} 
      chapters={chapters}
      bookTitle={bookTitle}
      bookCoverImageUrl={bookCoverImageUrl}
      author={author}
      dedication={dedication}
    />
  </TocWindow>
  </>)
}