import { useState } from "react"
import { Get2, Post2, useShield } from "../../../../../../../../../../libs/Core/Core1/fCore1"
import { ReadEdit } from "../../../../../../../../../../libs/Pop/Pop1/fPop1"
import { QuizColor } from "../../../../../../../CSS/QuizColor"
import { IQuizQuiz } from "../../../../../../../Model/IQuizQuiz"
import { EditYouTubeLink } from "./EditYouTubeLink/EditYouTubeLink"
import { ViewYouTubeLink } from "./ViewYouTubeLink/ViewYouTubeLink"

interface IYouTubeLinkProp {
  quiz: IQuizQuiz
  setQuizYouTubeId: (youTubeId: string)=>void
}
export function YouTubeLink({
  quiz,
  setQuizYouTubeId
}: IYouTubeLinkProp) {

  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [youTubeLink, setYouTubeLink] = useState<string>("")
  const shield = useShield()

  async function loadYouTubeId(onOk?:(res:any)=>void) {
    await Get2(shield, `/quiz/LoadSettingsMyQuizYouTubeId?quizId=${quiz._id}`,
      onOk
    )
  }

  async function saveYouTubeId(onOk?:(res:any)=>void) {
    if(!youTubeLink || !youTubeLink.trim()) {
      if(!window.confirm("You are setting the youtube link to empty. Continue?")) {
        return
      }
    }
    await Post2(shield, "/quiz/SaveSettingsMyQuizYouTubeId",
      {
        quizId: quiz._id,
        youTubeLink
      }, onOk
    )
  }

  function onCancel() {
    loadYouTubeId((res)=>{
      setQuizYouTubeId(res.youTubeId)
      setIsEdit(false)
    })
  }

  async function onSave() {
    saveYouTubeId((res)=>{
      setQuizYouTubeId(res.youTubeId)
      setIsEdit(false)
    })
  }

  const title = isEdit ? "New YouTube Link" : "YouTube"
  return(<>
    <ReadEdit title={title} isEdit={isEdit}
      setIsEdit={setIsEdit}
      onCancel={onCancel}
      onSave={onSave}
      color={QuizColor.themeRed}
    >
    {
      isEdit ? 
      <EditYouTubeLink youTubeLink={youTubeLink} setYouTubeLink={setYouTubeLink}/>:
      <ViewYouTubeLink youTubeId={quiz.youTubeId}/>
    }
    </ReadEdit>
  </>)
}