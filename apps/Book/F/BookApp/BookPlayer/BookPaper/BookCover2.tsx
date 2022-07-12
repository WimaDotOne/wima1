import cl from "./BookCover2.module.scss"

interface IBookCover2Prop {
  bookTitle: string
  author?: string
  dedication?: string
  imageUrl?: string
  page: number
}

export function BookCover2({
  bookTitle,
  author,
  dedication,
  imageUrl,
  page
}: IBookCover2Prop) {

  page = page || 1

  return(<>
  <div className={cl.page}>
    <div className={cl.page1}>
      <div className={cl.image}
        style={{backgroundImage: `url(${imageUrl})`}}/>
    </div>
    <div className={cl.page2}>
      <div>
        <div className={cl.bookTitle}>{bookTitle}</div>
        <div className={cl.author}>{author}</div>
        <div className={cl.dedication}>{dedication}</div>
      </div>
    </div>
  </div>
  </>)
}

