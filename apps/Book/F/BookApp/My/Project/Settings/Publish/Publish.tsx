import { useEffect, useState } from "react"
import { Get2, Post2, useShield } from "../../../../../../../../libs/Core/Core1/fCore1"
import { ReadEdit } from "../../../../../../../../libs/Pop/Pop1/fPop1"
import { BookColor } from "../../../../../CSS/BookColor"
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
  const [isBookPublic, setIsBookPublic] = useState<boolean>(false)
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  
  const shield = useShield()

  async function loadIsBookPublic(onOk?:(res:any)=>void) {
    if(!project) return
    await Get2(shield, `/book/LoadSettingsIsBookPublic?projectId=${project.id}`,
      onOk
    )
  }

  async function saveIsBookPublic(onOk?:(res:any)=>void) {
    await Post2(shield, "/book/SaveSettingsIsBookPublic",
      {
        projectId: project.id,
        isBookPublic
      }, onOk
    )
  }

  function onCancel() {
    loadIsBookPublic((res)=>{
      setIsBookPublic(res.isBookPublic)
      setIsEdit(false)
    })
  }

  function onSave() {
    saveIsBookPublic((res)=>{
      setIsBookPublic(res.isBookPublic)
      setIsEdit(false)
    })
  }

  useEffect(()=>{
    if(isLoaded) return
    loadIsBookPublic((res)=>{
      setIsLoaded(true)
      setIsBookPublic(res.isBookPublic)
    })
  })

  return(<>
    <ReadEdit title="Publish" isEdit={isEdit}
      setIsEdit={setIsEdit}
      onCancel={onCancel}
      onSave={onSave}
      color={BookColor.themeGreen}
    >
    {
      isEdit ? 
      <EditPublish checked={isBookPublic} setChecked={setIsBookPublic}/>:
      <ViewPublish project={project} isBookPublic={isBookPublic}/>
    }
    </ReadEdit>
  </>)
}