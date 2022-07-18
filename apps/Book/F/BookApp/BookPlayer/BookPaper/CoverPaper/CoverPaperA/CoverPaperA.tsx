import { useState } from "react"
import { Div, LimitWidth } from "../../../../../../../../libs/Core/Core2/fCore2"
import { IBook } from "../../../../../Model/IBook"
import { PaperTurner } from "../../../PaperTurner/PaperTurner"
import cl from "./CoverPaperA.module.scss"

interface ICoverPaperAProp {
  book?: IBook
  goChapter: ()=>void
}

export function CoverPaperA({
  book,
  goChapter
}: ICoverPaperAProp) {

  const [isCoverImage, setIsCoverImage] = useState<boolean>(true)

  function prev() {
    if(!isCoverImage) {
      setIsCoverImage(true)
    }
  }
  function next() {
    if(isCoverImage) {
      setIsCoverImage(false)
    } else {
      goChapter()
    }
  }
  let coverImgUrl = book?.coverImgUrl
  if(book && !coverImgUrl) {
    coverImgUrl = "/apps/WimaHome/AppIcons/book.png"
  }
  return(<>
  {
    isCoverImage ?
    <LimitWidth maxWidth={700}>
    <div>
      <div className={cl.coverImage} 
        style={{backgroundImage: `url(${coverImgUrl})`}}/>
    </div>
    </LimitWidth>
    :
    <LimitWidth maxWidth={500}>
      <div className={cl.centerWrap}>
        <div>
          <div className={cl.title}>{book?.title}</div>
          <Div height={100} />
          <div className={cl.author}>{book?.author}</div>
          <Div height={50} />
          <div className={cl.dedication}>{book?.dedication}</div>
        </div>
      </div>
      
    </LimitWidth>
  }
  <PaperTurner prev={prev} next={next} />
  </>)
}