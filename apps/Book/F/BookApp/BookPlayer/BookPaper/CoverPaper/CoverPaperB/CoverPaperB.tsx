import { Div } from "../../../../../../../../libs/Core/Core2/fCore2"
import { IBook } from "../../../../../Model/IBook"
import { PaperTurner } from "../../../PaperTurner/PaperTurner"
import cl from "./CoverPaperB.module.scss"

interface ICoverPaperBProp {
  book?: IBook
  goChapter: ()=>void
}

export function CoverPaperB({
  book,
  goChapter
}: ICoverPaperBProp) {

  function prev() {

  }

  return(<>
  <div className={cl.coverB}>
    <div className={cl.coverLeft}>
      <div className={cl.coverImage} 
        style={{backgroundImage: `url(${book?.coverImgUrl})`}}/>
    </div>
    <div className={cl.coverRight}>
      <div className={cl.center}>
        <div className={cl.title}>{book?.title}</div>
        <Div height={100} />
        <div className={cl.author}>{book?.author}</div>
        <Div height={50} />
        <div className={cl.dedication}>{book?.dedication}</div>
      </div>
    </div>
  </div>
  <PaperTurner prev={prev} next={goChapter} />
  </>)
}