import { LimitWidth } from "../../../../../../libs/Core/Core2/fCore2"
import cl from "./BookCover1.module.scss"

interface IBookCover1Prop {
  bookTitle: string
  author?: string
  dedication?: string
  imageUrl?: string
  page: number
}

export function BookCover1({
  bookTitle,
  author,
  dedication,
  imageUrl,
  page
}: IBookCover1Prop) {
  imageUrl = "/favicon.ico"
  bookTitle = "Ariadne and Hey there Delilah and we don't know and xxx xxx"
  author = "Ben Lawrence"
  dedication = "To Dear, Alice"
  page = 1
  page = page || 1

  if(page === 1 && imageUrl) {
    return(<>
    <LimitWidth maxWidth={700}>
      <div className={cl.bookCoverImage}
        style={{backgroundImage: `url(${imageUrl})`}}
      >
      </div>
    </LimitWidth>
    </>)
  }

  return(<>
  <LimitWidth maxWidth={400}>
    <div className={cl.page}>
      <div className={cl.center}>
        <div className={cl.bookTitle}>{bookTitle}</div>
        <div className={cl.author}>{author}</div>
        <div className={cl.dedication}>{dedication}</div>
      </div>
    </div>
  </LimitWidth>
  </>)
}

