import { useState } from "react"
import { Get2, Post2, useShield } from "../../../../../../../../libs/Core/Core1/fCore1"
import { ReadEdit } from "../../../../../../../../libs/Pop/Pop1/fPop1"
import { QuizColor } from "../../../../../CSS/QuizColor"
import { IProject } from "../../../../../Model/IProject"
import { EditQuizBookTitle } from "./EditQuizBookTitle/EditQuizBookTitle"
import { ViewQuizBookTitle } from "./ViewQuizBookTitle/ViewQuizBookTitle"

interface IQuizBookTitleProp {
  project: IProject
  setProjectQuizBookTitle: (quizBookTitle: string)=>void
}
export function QuizBookTitle({
  project,
  setProjectQuizBookTitle
}: IQuizBookTitleProp) {

  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [title, setTitle] = useState<string>(project.quizBookTitle)
  const shield = useShield()

  async function loadQuizBookTitle(onOk?:(res:any)=>void) {
    await Get2(shield, `/quiz/LoadSettingsMyQuizBookTitle?projectId=${project.id}`,
      onOk
    )
  }

  async function saveQuizBookTitle(onOk?:(res:any)=>void) {
    await Post2(shield, "/quiz/SaveSettingsMyQuizBookTitle",
      {
        projectId: project.id,
        title
      }, onOk
    )
  }

  function onCancel() {
    loadQuizBookTitle((res)=>{
      setTitle(res.quizBookTitle)
      setIsEdit(false)
    })
  }

  async function onSave() {
    saveQuizBookTitle((res)=>{
      setTitle(res.quizBookTitle)
      setProjectQuizBookTitle(res.quizBookTitle)
      setIsEdit(false)
    })
  }

  return(<>
    <ReadEdit title="Quiz book title" isEdit={isEdit}
      setIsEdit={setIsEdit}
      onCancel={onCancel}
      onSave={onSave}
      color={QuizColor.themeRed}
    >
    {
      isEdit ? 
      <EditQuizBookTitle title={title} setTitle={setTitle}/>:
      <ViewQuizBookTitle title={title}/>
    }
    </ReadEdit>
  </>)
}