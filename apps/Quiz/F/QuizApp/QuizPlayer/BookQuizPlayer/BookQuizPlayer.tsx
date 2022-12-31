import { useEffect, useState } from 'react'
import { Get2, useShield } from '../../../../../../libs/Core/Core1/fCore1'
import { IQuizChapter } from '../../../Model/IQuizChapter'
import { BookCard } from '../BookCard/BookCard'
import { ChapterQuizPlayer } from '../ChapterQuizPlayer/ChapterQuizPlayer'
import cl from './BookQuizPlayer.module.scss'

interface IBookQuizPlayerProp {
  bookId: string
  onBack: ()=>void
}

export function BookQuizPlayer({
  bookId,
  onBack
}: IBookQuizPlayerProp) {

  const [loaded, setLoaded] = useState<boolean>(false)
  const [bookName, setBookName] = useState<string>("")
  const [chapters, setChapters] = useState<Array<IQuizChapter>>([])
  const [selectedChapter, setSelectedChapter] = useState<IQuizChapter>()
  const [bookQuizPlayerTurn, setBookQuizPlayerTurn] = useState<string>("")

  const shield = useShield()

  async function loadBookQuizzes() {
    
    if(loaded) return
    if(!bookId) return

    await Get2(shield, `/quiz/LoadPublishedBookChapters?bookId=${bookId}`,(res)=>{
      setLoaded(true)
      setBookName(res.bookName)
      setChapters(res.chapters)
    })
  }

  function goToChapter(chapter: IQuizChapter) {
    setSelectedChapter(chapter)
    setBookQuizPlayerTurn(BookQuizPlayerTurn.ChapterQuizPlayer)
  }

  function backToBookCard() {
    setBookQuizPlayerTurn(BookQuizPlayerTurn.BookCard)
  }

  useEffect(()=>{
    loadBookQuizzes()
  })

  switch(bookQuizPlayerTurn) {
    case BookQuizPlayerTurn.ChapterQuizPlayer: return(
      <ChapterQuizPlayer chapterId={selectedChapter?._id} onBack={backToBookCard}/>
    )
    default: return(<>
      <div className={cl.chapterQuizPlayer}>
        <BookCard bookName={bookName}
          chapters={chapters} onClickChapter={goToChapter}/>
      </div>
      </>)
  }



}

const BookQuizPlayerTurn = {
  BookCard: "BookCard",
  ChapterQuizPlayer: "ChapterQuizPlayer"
}