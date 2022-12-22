import { useState } from "react"
import { IQuizQuiz } from "../../../../../Model/IQuizQuiz"
import { MyQuizHome } from "./MyQuizHome/MyQuizHome"
import { MyQuizSettings } from "./MyQuizSettings/MyQuizSettings"
import { MyQuizYouTube } from "./MyQuizYouTube/MyQuizYouTube"

interface IMyQuizProp {
  quiz?: IQuizQuiz
  setQuizTitle: (title: string)=>void
  setQuizYouTubeId: (youTubeId: string)=>void
  backToQuizzesHome: ()=>void
}

export function MyQuiz({
  quiz,
  setQuizTitle,
  setQuizYouTubeId,
  backToQuizzesHome
}: IMyQuizProp) {

  const [myQuizTurn, setMyQuizTurn] = useState<string>("")

  function backToQuizHome() {
    setMyQuizTurn(MyQuizTurn.Home)
  }

  if(!quiz) return null

  switch(myQuizTurn) {
    case MyQuizTurn.YouTube: return(
      <MyQuizYouTube quiz={quiz}
        setQuizYouTubeId={setQuizYouTubeId}
        backToQuizHome={backToQuizHome}
      />
    )
    case MyQuizTurn.Settings: return(
      <MyQuizSettings quiz={quiz}
        setQuizTitle={setQuizTitle}
        backToQuizHome={backToQuizHome}
      />
    )
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
  QuestionTxt: "QuestionTxt",
  YouTube: "YouTube",
  Settings: "Settings"
}