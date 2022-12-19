import { useState } from "react"
import { Get2, Post2, useShield } from "../../../../../../../../../libs/Core/Core1/fCore1"
import { ReadEdit } from "../../../../../../../../../libs/Pop/Pop1/fPop1"
import { QuizColor } from "../../../../../../CSS/QuizColor"
import { IQuizChapter } from "../../../../../../Model/IQuizChapter"
import { EditQuizChapterTitle } from "./EditQuizChapterTitle/EditQuizChapterTitle"
import { ViewQuizChapterTitle } from "./ViewQuizChapterTitle/ViewQuizChapterTitle"

interface IQuizChapterTitleProp {
  chapter: IQuizChapter
  setChapterTitle: (title: string)=>void
}
export function QuizChapterTitle({
  chapter,
  setChapterTitle
}: IQuizChapterTitleProp) {

  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [title, setTitle] = useState<string>(chapter.title)
  const shield = useShield()

  async function loadQuizChapterTitle(onOk?:(res:any)=>void) {
    await Get2(shield, `/quiz/LoadSettingsMyQuizChapterTitle?chapterId=${chapter._id}`,
      onOk
    )
  }

  async function saveQuizChapterTitle(onOk?:(res:any)=>void) {
    await Post2(shield, "/quiz/SaveSettingsMyQuizChapterTitle",
      {
        chapterId: chapter._id,
        title
      }, onOk
    )
  }

  function onCancel() {
    loadQuizChapterTitle((res)=>{
      setTitle(res.quizChapterTitle)
      setIsEdit(false)
    })
  }

  async function onSave() {
    saveQuizChapterTitle((res)=>{
      setTitle(res.quizChapterTitle)
      setChapterTitle(res.quizChapterTitle)
      setIsEdit(false)
    })
  }

  return(<>
    <ReadEdit title="Quiz chapter title" isEdit={isEdit}
      setIsEdit={setIsEdit}
      onCancel={onCancel}
      onSave={onSave}
      color={QuizColor.themeRed}
    >
    {
      isEdit ? 
      <EditQuizChapterTitle title={title} setTitle={setTitle}/>:
      <ViewQuizChapterTitle title={title}/>
    }
    </ReadEdit>
  </>)
}