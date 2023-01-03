import { useEffect, useState } from "react"
import { Get2, Post2, useShield } from "../../../../../../../../libs/Core/Core1/fCore1"
import { ReadEdit } from "../../../../../../../../libs/Pop/Pop1/fPop1"
import { QuizColor } from "../../../../../CSS/QuizColor"
import { IProject } from "../../../../../Model/IProject"
import { EditPublish } from "./EditPublish/EditPublish"
import { ViewPublish } from "./ViewPublish/ViewPublish"

interface IPublishProp {
  project: IProject
}
export function Publish({
  project
}: IPublishProp) {

  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [isQuizBookPublic, setIsQuizBookPublic] = useState<boolean>(false)
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  
  const shield = useShield()

  async function loadIsQuizBookPublic(onOk?:(res:any)=>void) {
    if(!project) return
    await Get2(shield, `/quiz/LoadSettingsIsQuizBookPublic?projectId=${project.id}`,
      onOk
    )
  }

  async function saveIsQuizBookPublic(onOk?:(res:any)=>void) {
    await Post2(shield, "/quiz/SaveSettingsIsQuizBookPublic",
      {
        projectId: project.id,
        isQuizBookPublic
      }, onOk
    )
  }

  function onCancel() {
    loadIsQuizBookPublic((res)=>{
      setIsQuizBookPublic(res.isQuizBookPublic)
      setIsEdit(false)
    })
  }

  function onSave() {
    saveIsQuizBookPublic((res)=>{
      setIsQuizBookPublic(res.isQuizBookPublic)
      setIsEdit(false)
    })
  }

  useEffect(()=>{
    if(isLoaded) return
    loadIsQuizBookPublic((res)=>{
      setIsLoaded(true)
      setIsQuizBookPublic(res.isQuizBookPublic)
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
      <EditPublish checked={isQuizBookPublic} setChecked={setIsQuizBookPublic}/>:
      <ViewPublish project={project} isQuizBookPublic={isQuizBookPublic}/>
    }
    </ReadEdit>
  </>)
}