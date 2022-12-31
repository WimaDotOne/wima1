import { useState } from "react"
import { Button1, Div, LimitWidth } from "../../../../../../libs/Core/Core2/fCore2"
import { IQuizQuestion } from "../../../Model/IQuizQuestion"
import { IQuizQuiz } from "../../../Model/IQuizQuiz"
import { ParseQuizQuestionsText } from "../../H/ParseQuizQuestionsText"
import { QuestionCard } from "./QuestionCard/QuestionCard"
import cl from "./QuizSheet.module.scss"
import { RandomColorCard } from "./RandomColorCard/RandomColorCard"

interface IQuizSheetProp {
  quiz?: IQuizQuiz
  onBack?: ()=>void
}

export function QuizSheet({
  quiz,
  onBack
}: IQuizSheetProp) {

  const questions: Array<IQuizQuestion> = ParseQuizQuestionsText(quiz?.questionsText)
  const [showMark, setShowMark] = useState<boolean>(false)
  
  function gradeQuiz() {
    setShowMark(true)
  }

  function hideMarks() {
    setShowMark(false)
  }

  if(!quiz) return null
  
  return(<>
  <LimitWidth maxWidth={700}>
    <RandomColorCard>
      {quiz.title}
    </RandomColorCard>
    <RandomColorCard>
      <iframe className={cl.youTubeFrame} width="400" height="300"
        src={`https://www.youtube.com/embed/${quiz.youTubeId}`}/>
    </RandomColorCard>
    {
      questions.map((question: IQuizQuestion, i)=>
      <div key={i}>
        <RandomColorCard>
          <QuestionCard question={question} showMark={showMark}/>
        </RandomColorCard>
      </div>
      )
    }
    <div className={cl.buttonsSpace}>
      <Button1 text="Hide Grading" onClick={hideMarks} color={"#aaa"}/>
      <Div width={10} />
      <Button1 text="Grade Quiz" onClick={gradeQuiz} color={"#0a95ff"}/>
    </div>
    {
      onBack ?
      <div className={cl.backButtonSpace}>
        <Button1 text="Back" onClick={onBack} color={"#aaa"} />
      </div>: null
    }
 
  </LimitWidth>
  </>)
}