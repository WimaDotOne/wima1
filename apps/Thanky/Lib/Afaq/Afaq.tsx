import { useState } from "react"
import { SvgIcon } from "../../../../libs/Core/Core2/Svg/SvgIcon"
import cl from "./Afaq.module.scss"

interface IAfaqProp {
  question: string
  answerParagrahs: Array<string> 
}

export function Afaq({
  question,
  answerParagrahs
}: IAfaqProp) {

  const [showAnswer, setShowAnswer] = useState<boolean>(false)

  function toggleShowAnswer() {
    setShowAnswer(!showAnswer)
  }

  const chevron = showAnswer ? "chevron.up" : "chevron.down"
  return(<>
  <div className={cl.faq}>
    <div className={cl.questionRow} onClick={toggleShowAnswer}>
      <div className={cl.question}>{question}</div>
      <div className={cl.collapseArrow}>
        <SvgIcon name={chevron}
          color="#333"
          width={15}/>
      </div>
    </div>
    {
      showAnswer ?
      <div className={cl.answer}>
      {
        answerParagrahs.map((paragrah, i)=>
        <p className={cl.paragraph}>
        {paragrah}
        </p>
        )
      }
      </div> : null
    }
  </div>
  </>)
}