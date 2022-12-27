import { LimitWidth } from "../../../../../../libs/Core/Core2/fCore2"
import { IQuizQuestion } from "../../../Model/IQuizQuestion"
import { IQuizQuiz } from "../../../Model/IQuizQuiz"
import { ParseQuizQuestionsText } from "../../H/ParseQuizQuestionsText"
import { QuestionCard } from "./QuestionCard/QuestionCard"
import cl from "./QuizSheet.module.scss"
import { RandomColorCard } from "./RandomColorCard/RandomColorCard"

interface IQuizSheetProp {
  quiz: IQuizQuiz
}

export function QuizSheet({
  quiz
}: IQuizSheetProp) {

  const questions: Array<IQuizQuestion> = ParseQuizQuestionsText(quiz.questionsText)
  
  return(<>
  <LimitWidth maxWidth={700}>
    <RandomColorCard>
      <iframe width="400" height="300"
        src={`https://www.youtube.com/embed/${quiz.youTubeId}`}/>
    </RandomColorCard>
    {
      questions.map((question: IQuizQuestion, i)=>
      <div key={i}>
        <QuestionCard question={question}/>
      </div>
      )
    }
  </LimitWidth>
  </>)
}