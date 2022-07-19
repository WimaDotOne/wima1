import { useEffect, useState } from "react"
import { Get2, useShield } from "../../../../../../libs/Core/Core1/fCore1"
import { AutoRepeatGrid } from "../../../../../../libs/Core/Core2/fCore2"
import { HeadLine } from "../../../../../../libs/Pop/Pop3/fPop3"
import { IBook } from "../../../Model/IBook"
import { BookPlayer } from "../../BookPlayer/BookPlayer"
import { BookWindow } from "../../BookWindow/BookWindow"
import { BookFace } from "./BookFace/BookFace"
import cl from "./MyBooks.module.scss"

interface IMyBooksProp {

}

export function MyBooks({

}: IMyBooksProp) {

  const [isReading, setIsReading] = useState<boolean>(false)
  const [bookId, setBookId] = useState<string>()
  const [books, setBooks] = useState<Array<IBook>>([])
  const [loaded, setLoaded] = useState<boolean>(false)
  const shield = useShield()

  function closeBook() {
    setIsReading(false)
  }

  async function loadMyBooks() {
    if(loaded) return
    await Get2(shield, "/book/LoadMyBooks",
    (res)=>{
      setLoaded(true)
      setBooks(res.books)
    })
  }

  useEffect(()=>{
    loadMyBooks()
  })
  return(<>
  {
    isReading ?
    <BookPlayer bookId={bookId} onCloseBook={closeBook}/>:
    <BookWindow>
      <div className={cl.myBooks}>
        <HeadLine text="My Books" h={2}/>
        <AutoRepeatGrid autoFill cellMinWidth={120} columnGap={10} rowGap={10} paddingTop={25} paddingBottom={10}>
        {
          books.map((book, i)=>
          <BookFace key={i} bookTitle={book.title}
            coverImageUrl={book.coverImgUrl}
            onClick={()=>{
              setBookId(book.id)
              setIsReading(true)
            }}
          />
          )
        }
        </AutoRepeatGrid>
      </div>
    </BookWindow>
  }
  </>)
}