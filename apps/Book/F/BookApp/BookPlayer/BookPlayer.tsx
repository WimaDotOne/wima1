import Head from "next/head";
import { useEffect, useState } from "react";
import { Get2, useShield } from "../../../../../libs/Core/Core1/fCore1";
import { TocWindow } from "./TocWindow/TocWindow";
import { IChapter } from "../../Model/IChapter";

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

  const [chapters, setChapters] = useState<Array<IChapter>>([])
  const [chaptersLoaded, setChaptersLoaded] = useState<boolean>(true)
  const [bookTitle, setBookTitle] = useState<string>("")
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
        if(res.bookTitle) {
          setBookTitle(res.bookTitle)
        }
      } 
    )
  }

  useEffect(()=>{
    loadPages()
  })
  return(<>
    <BookPlayer bookTitle={bookTitle}
      chapters={chapters} onClose={onClose}/>
  </>)

}

interface IBookPlayerProp {
  bookTitle?: string,
  chapters: Array<IChapter>,
  onClose: ()=>void
}

export function BookPlayer({
  bookTitle,
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
  >

  </TocWindow>
  </>)
}