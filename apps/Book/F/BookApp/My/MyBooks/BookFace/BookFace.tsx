import cl from "./BookFace.module.scss"

interface IBookFaceProp {
  bookTitle: string
  coverImageUrl?: string
  onClick: ()=>void
}

export function BookFace({
  bookTitle,
  coverImageUrl,
  onClick
}: IBookFaceProp) {

  coverImageUrl = coverImageUrl || "/apps/Book/Img/bookCover.jpg"
  return(<>
    <div className={cl.book} onClick={onClick}>
    <div className={cl.coverImage}
      style={{backgroundImage: `url(${coverImageUrl})`}}/>
    <div className={cl.title}>
      {bookTitle}
    </div>
    </div>
  </>)
}