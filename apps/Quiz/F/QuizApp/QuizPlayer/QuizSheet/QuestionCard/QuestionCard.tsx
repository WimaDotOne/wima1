import { useState } from "react"
import { CheckField1 } from "../../../../../../../libs/Core/Core1/Fields/CheckField/CheckField1"
import { SvgIcon } from "../../../../../../../libs/Core/Core2/Svg/SvgIcon"
import { IQuizQuestion } from "../../../../Model/IQuizQuestion"
import cl from "./QuestionCard.module.scss"

interface IQuestionCardProp {
  question: IQuizQuestion,
  showMark: boolean
}

export function QuestionCard({
  question,
  showMark
}: IQuestionCardProp) {

  const [checkedIndex, setCheckedIndex] = useState<number>(0)

  function onCheckChange(checked: boolean, index: number) {
    if(checked) {
      setCheckedIndex(index)
    } else {
      setCheckedIndex(0)
    }
  }

  const isCorrect = checkedIndex === question.answer
  const markName = isCorrect ? "checkmark" : "xmark"
  const markColor = isCorrect ? "#3bb143" : "red"

  return(<>
  <div className={cl.questionCard}>
    {
      showMark ? 
      <div className={cl.markSpace}>
        <SvgIcon name={markName} color={markColor} width={70}/>
      </div>
      :null
    }
    <div className={cl.question}>{question.question}</div>
    <div>
    {
      question.options.map((option, i)=>
      <div className={cl.optionRow} key={i}>
        <CheckField1 checked={i+1 === checkedIndex} onChange={(checked)=>{
          onCheckChange(checked, i+1)
        }}/> 
        <div className={cl.option}>
        {option}
        </div>
      </div>
      )
    }
    </div>
  </div>
  </>)
}