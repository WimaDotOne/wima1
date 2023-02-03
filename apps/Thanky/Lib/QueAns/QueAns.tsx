import cl from "./QueAns.module.scss"

export interface IQuestionAnswer {
  Question: String,
  Answer: String
}


interface IQueAnsProp {
  questionAnswers: Array<IQuestionAnswer>
}

export function QueAns({
  questionAnswers
}: IQueAnsProp) {

  questionAnswers = questionAnswers || []
  return(<>
  <div className={cl.queAnsSpace}>
  {
    questionAnswers.map((questionAnswer, i)=>
    <div className={cl.queAnsRow} key={i}>
      <div className={cl.question}>{questionAnswer.Question}</div>
      <div className={cl.answer}>{questionAnswer.Answer}</div>
    </div>)
  }
  </div>
  </>)
}