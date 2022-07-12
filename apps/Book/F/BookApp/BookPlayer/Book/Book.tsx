import { useState } from "react"
import { IChapter } from "../../../Model/IChapter"
import { BookCover1 } from "../BookPaper/BookCover1"
import { BookCover2 } from "../BookPaper/BookCover2"
import { BookPaper } from "../BookPaper/BookPaper"
import { MediaQuery } from "../BookPaper/MediaQuery"
import cl from "./Book.module.scss"

interface IBookProp {
  projectId?: string
  chapters: Array<IChapter>
  bookTitle: string
  author?: string
  dedication?: string
  bookCoverImageUrl?: string
}

export function Book({
  projectId,  
  chapters,
  bookTitle,
  author,
  dedication,
  bookCoverImageUrl
}: IBookProp) {

  const [chapterIndex, setChapterIndex] = useState<number>(-1)
  const [chapterLoaded, setChapterLoaded] = useState<boolean>(false)
  const [chapterText, setChapterText] = useState<string>("")
  const [isWideScreen, setIsWideScreen] = useState<boolean>(false)
  const [page, setPage] = useState<number>(1)
  
  if(!chapters || chapters.length < 1) return null

  const chapter = chapters[chapterIndex]

  async function LoadChapterText() {
    
  }

  function nextChapter() {
    setChapterIndex((chapterIndex+1)%chapters.length)
  }
  function prevChapter() {
    if(chapterIndex > 0) {
      setChapterIndex(chapterIndex-1)
    } else {
      setChapterIndex(0)
    }
  }

  if(chapterIndex < 0) {
    return(<>
    {
      isWideScreen ?
      <BookCover2 bookTitle={bookTitle} 
        author={author} dedication={dedication}
        page={page} imageUrl={bookCoverImageUrl}/>:
      <BookCover1 bookTitle={bookTitle}
        author={author} dedication={dedication}
        page={page} imageUrl={bookCoverImageUrl}/>
    }
    <MediaQuery isWideScreen={isWideScreen}
      setIsWideScreen={setIsWideScreen}/>
    </>)
  }
  return(<>
  <BookPaper text={chapterText} title={chapter.name}/>
  <MediaQuery isWideScreen={isWideScreen}
    setIsWideScreen={setIsWideScreen}/>
  </>)
}