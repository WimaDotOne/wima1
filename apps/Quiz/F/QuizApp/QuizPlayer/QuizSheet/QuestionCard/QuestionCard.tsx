import { useState } from "react"
import { CheckField1 } from "../../../../../../../libs/Core/Core1/Fields/CheckField/CheckField1"
import { IQuizQuestion } from "../../../../Model/IQuizQuestion"
import cl from "./QuestionCard.module.scss"

interface IQuestionCardProp {
  question: IQuizQuestion
}

export function QuestionCard({
  question
}: IQuestionCardProp) {

  const [checkedIndex, setCheckedIndex] = useState<number>(0)

  function onCheckChange(checked: boolean, index: number) {
    if(checked) {
      setCheckedIndex(index)
    } else {
      setCheckedIndex(0)
    }
  }

  return(<>
  <div>
    <div>{question.question}</div>
    <div>
    {
      question.options.map((option, i)=>
      <div className={cl.option} key={i}>
        <CheckField1 checked={i+1 === checkedIndex} onChange={(checked)=>{
          onCheckChange(checked, i+1)
        }}/> {option}
      </div>
      )
    }
    </div>
  </div>
  </>)
}