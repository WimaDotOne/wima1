import { useState } from "react"
import { QuizBooks } from "../../Model/QuizBooks"
import { Landing } from "./Landing/Landing"
import { QuizBook } from "./QuizBook/QuizBook"

export function Learn() {

  const [learnTurn, setLearnTurn] = useState<string>("")
  const [bookIndex, setBookIndex] = useState<number>(0)

  function goBook(index: number) {
    if (index < 0  || index >= QuizBooks.length) return
    setBookIndex(index)
    setLearnTurn(LearnTurn.QuizBook)
  }

  function backToLanding() {
    setLearnTurn(LearnTurn.Landing)
  }

  switch(learnTurn) {
    case LearnTurn.QuizBook: return(
      <QuizBook bookIndex={bookIndex}
        backToLanding={backToLanding}/>
    )
    default: return(<Landing goBook={goBook}/>)
  }
}

export const LearnTurn = {
  Landing: "Landing",
  QuizBook: "QuizBook"
}