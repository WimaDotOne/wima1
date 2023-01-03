import { useState } from "react"
import { Get2, Post2, useShield } from "../../../../../../../../../../libs/Core/Core1/fCore1"
import { ReadEdit } from "../../../../../../../../../../libs/Pop/Pop1/fPop1"
import { QuizColor } from "../../../../../../../CSS/QuizColor"
import { IQuizQuiz } from "../../../../../../../Model/IQuizQuiz"
import { EditQuizTitle } from "./EditQuizTitle/EditQuizTitle"
import { ViewQuizTitle } from "./ViewQuizTitle/ViewQuizTitle"

interface IQuizQuizTitleProp {
  quiz: IQuizQuiz
  setQuizTitle: (title: string)=>void
}
export function QuizTitle({
  quiz,
  setQuizTitle
}: IQuizQuizTitleProp) {

  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [title, setTitle] = useState<string>(quiz.title)
  const shield = useShield()

  async function loadQuizTitle(onOk?:(res:any)=>void) {
    await Get2(shield, `/quiz/LoadSettingsMyQuizTitle?quizId=${quiz._id}`,
      onOk
    )
  }

  async function saveQuizTitle(onOk?:(res:any)=>void) {
    await Post2(shield, "/quiz/SaveSettingsMyQuizTitle",
      {
        quizId: quiz._id,
        title
      }, onOk
    )
  }

  function onCancel() {
    loadQuizTitle((res)=>{
      setTitle(res.quizTitle)
      setIsEdit(false)
    })
  }

  async function onSave() {
    saveQuizTitle((res)=>{
      setTitle(res.quizTitle)
      setQuizTitle(res.quizTitle)
      setIsEdit(false)
    })
  }

  return(<>
    <ReadEdit title="Quiz title" isEdit={isEdit}
      setIsEdit={setIsEdit}
      onCancel={onCancel}
      onSave={onSave}
      color={QuizColor.themeRed}
    >
    {
      isEdit ? 
      <EditQuizTitle title={title} setTitle={setTitle}/>:
      <ViewQuizTitle title={title}/>
    }
    </ReadEdit>
  </>)
}