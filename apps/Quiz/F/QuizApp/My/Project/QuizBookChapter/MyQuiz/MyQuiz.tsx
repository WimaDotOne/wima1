import { useState } from "react"
import { IQuizChapter } from "../../../../../Model/IQuizChapter"
import { IQuizQuiz } from "../../../../../Model/IQuizQuiz"
import { MyQuizHome } from "./MyQuizHome/MyQuizHome"
import { MyQuizPreview } from "./MyQuizPreview/MyQuizPreview"
import { MyQuizSettings } from "./MyQuizSettings/MyQuizSettings"
import { MyQuizYouTube } from "./MyQuizYouTube/MyQuizYouTube"
import { QuestionsEditor } from "./QuestionsEditor/QuestionsEditor"

interface IMyQuizProp {
  quiz?: IQuizQuiz
  chapter: IQuizChapter
  setQuizTitle: (title: string)=>void
  setQuizYouTubeId: (youTubeId: string)=>void
  backToQuizzesHome: ()=>void
}

export function MyQuiz({
  quiz,
  chapter,
  setQuizTitle,
  setQuizYouTubeId,
  backToQuizzesHome
}: IMyQuizProp) {

  const [myQuizTurn, setMyQuizTurn] = useState<string>("")

  function backToQuizHome() {
    setMyQuizTurn(MyQuizTurn.Home)
  }

  if(!quiz || !chapter) return null

  switch(myQuizTurn) {
    case MyQuizTurn.Preview: return(
      <MyQuizPreview quizId={quiz._id} 
        backToQuizHome={backToQuizHome}
      />
    )
    case MyQuizTurn.QuestionsText: return(
      <QuestionsEditor quiz={quiz} 
        chapterId={chapter._id}
        backToQuizHome={backToQuizHome}
      />
    )
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
  QuestionsText: "QuestionsText",
  YouTube: "YouTube",
  Preview: "Preview",
  Settings: "Settings"
}