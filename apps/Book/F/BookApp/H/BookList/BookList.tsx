import { IBook } from "../../../Model/IBook"
import { Book } from "./Book/Book"
import cl from "./BookList.module.scss"

interface IBookListProp {
  books: Array<IBook>
  onClick: (bookId: string)=>void
}

export function BookList({
  books,
  onClick
}: IBookListProp) {

  books = books || []
  return(<>
  <div className={cl.bookList}>
  {
    books.map((book, i)=>
    <div className={cl.bookSpace} key={book.id}>
      <Book imageUrl={book.coverImgUrl || ""} title={book.title}
        onClick={()=>{if(book.id) { onClick(book.id) }}}/>
    </div>
    )
  }
  </div>
  </>)
}