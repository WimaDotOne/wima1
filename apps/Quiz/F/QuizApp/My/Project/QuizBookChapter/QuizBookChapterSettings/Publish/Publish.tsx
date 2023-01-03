import { useEffect, useState } from "react"
import { Get2, Post2, useShield } from "../../../../../../../../../libs/Core/Core1/fCore1"
import { ReadEdit } from "../../../../../../../../../libs/Pop/Pop1/fPop1"
import { QuizColor } from "../../../../../../CSS/QuizColor"
import { IQuizChapter } from "../../../../../../Model/IQuizChapter"
import { EditPublish } from "./EditPublish/EditPublish"
import { ViewPublish } from "./ViewPublish/ViewPublish"

interface IPublishProp {
  chapter: IQuizChapter
}
export function Publish({
  chapter
}: IPublishProp) {

  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [isQuizChapterPublic, setIsQuizChapterPublic] = useState<boolean>(false)
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  
  const shield = useShield()

  async function loadIsQuizChapterPublic(onOk?:(res:any)=>void) {
    if(!chapter) return
    await Get2(shield, `/quiz/LoadSettingsIsQuizChapterPublic?chapterId=${chapter._id}`,
      onOk
    )
  }

  async function saveIsQuizChapterPublic(onOk?:(res:any)=>void) {
    await Post2(shield, "/quiz/SaveSettingsIsQuizChapterPublic",
      {
        chapterId: chapter._id,
        isQuizChapterPublic
      }, onOk
    )
  }

  function onCancel() {
    loadIsQuizChapterPublic((res)=>{
      setIsQuizChapterPublic(res.isQuizChapterPublic)
      setIsEdit(false)
    })
  }

  function onSave() {
    saveIsQuizChapterPublic((res)=>{
      setIsQuizChapterPublic(res.isQuizChapterPublic)
      setIsEdit(false)
    })
  }

  useEffect(()=>{
    if(isLoaded) return
    loadIsQuizChapterPublic((res)=>{
      setIsLoaded(true)
      setIsQuizChapterPublic(res.isQuizChapterPublic)
    })
  })

  return(<>
    <ReadEdit title="Publish" isEdit={isEdit}
      setIsEdit={setIsEdit}
      onCancel={onCancel}
      onSave={onSave}
      color={QuizColor.themeRed}
    >
    {
      isEdit ? 
      <EditPublish checked={isQuizChapterPublic} setChecked={setIsQuizChapterPublic}/>:
      <ViewPublish chapter={chapter} isQuizChapterPublic={isQuizChapterPublic}/>
    }
    </ReadEdit>
  </>)
}