import { IQuizQuiz } from "../../../../../../Model/IQuizQuiz"
import cl from "./MyQuizHome.module.scss"

interface IMyQuizHomeProp {
  quiz: IQuizQuiz
  backToQuizzesHome: ()=>void
  setMyQuizTurn: (turn: string)=>void
}

export function MyQuizHome({
  quiz,
  backToQuizzesHome,
  setMyQuizTurn
}: IMyQuizHomeProp) {

  return(<>
  My Quiz Home {quiz.title}
  </>)
}