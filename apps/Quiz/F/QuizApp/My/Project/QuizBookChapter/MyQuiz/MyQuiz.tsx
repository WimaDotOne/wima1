import { useState } from "react"
import { IQuizQuiz } from "../../../../../Model/IQuizQuiz"
import { MyQuizHome } from "./MyQuizHome/MyQuizHome"

interface IMyQuizProp {
  quiz?: IQuizQuiz
  backToQuizzesHome: ()=>void
}

export function MyQuiz({
  quiz,
  backToQuizzesHome
}: IMyQuizProp) {

  const [myQuizTurn, setMyQuizTurn] = useState<string>("")

  if(!quiz) return null

  switch(myQuizTurn) {

    default: return(
      <MyQuizHome quiz={quiz}
        backToQuizzesHome={backToQuizzesHome}
        setMyQuizTurn={setMyQuizTurn}
      />
    )
  }
}

export const MyQuizTurn = {
  Home: "Home",
}