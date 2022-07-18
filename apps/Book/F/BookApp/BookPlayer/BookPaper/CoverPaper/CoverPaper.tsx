import { useState } from "react"
import { useShield } from "../../../../../../../libs/Core/Core1/fCore1"
import { IBook } from "../../../../Model/IBook"
import { MediaQuery } from "../MediaQuery/MediaQuery"
import { CoverPaperA } from "./CoverPaperA/CoverPaperA"
import { CoverPaperB } from "./CoverPaperB/CoverPaperB"

interface ICoverPaperProp {
  goChapter: ()=>void
  book?: IBook
}

export function CoverPaper({
  goChapter,
  book
}: ICoverPaperProp) {

  const [isWideScreen, setIsWideScreen] = useState<boolean>(false)
  return(<>
  {
    isWideScreen ?
    <CoverPaperB book={book} goChapter={goChapter}/>:
    <CoverPaperA book={book} goChapter={goChapter}/>
  }
  <MediaQuery setIsWideScreen={setIsWideScreen}/>
  </>)
}