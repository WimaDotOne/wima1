import { QuizBooks } from "../../../Model/QuizBooks"
import cl from "./QuizBook.module.scss"

interface IQuizBookProp {
  bookIndex: number
  backToLanding: ()=>void
}

export function QuizBook({
  bookIndex,
  backToLanding
}: IQuizBookProp) {
console.log(bookIndex)
  const bookId = QuizBooks[bookIndex]?.bookId
  const url = "https://www.wima.one/apps/Quiz/BookPlay/?bookId=" + bookId
  return(<>
  <div className={cl.back} onClick={backToLanding}>
    Years
  </div>
  <iframe src={url} className={cl.iframe}/>
  </>)
}