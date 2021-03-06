import { useEffect, useState } from "react"
import { Get2, Post2, useShield } from "../../../../../../../../libs/Core/Core1/fCore1"
import { ReadEdit } from "../../../../../../../../libs/Pop/Pop1/fPop1"
import { MovicColor } from "../../../../../CSS/MovicColor"
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
  const [isMovicPublic, setIsMovicPublic] = useState<boolean>(false)
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  
  const shield = useShield()

  async function loadIsMovicPublic(onOk?:(res:any)=>void) {
    if(!project) return
    await Get2(shield, `/movic/LoadSettingsIsMovicPublic?projectId=${project.id}`,
      onOk
    )
  }

  async function saveIsMovicPublic(onOk?:(res:any)=>void) {
    await Post2(shield, "/movic/SaveSettingsIsMovicPublic",
      {
        projectId: project.id,
        isMovicPublic
      }, onOk
    )
  }

  function onCancel() {
    loadIsMovicPublic((res)=>{
      setIsMovicPublic(res.isMovicPublic)
      setIsEdit(false)
    })
  }

  function onSave() {
    saveIsMovicPublic((res)=>{
      setIsMovicPublic(res.isMovicPublic)
      setIsEdit(false)
    })
  }

  useEffect(()=>{
    if(isLoaded) return
    loadIsMovicPublic((res)=>{
      setIsLoaded(true)
      setIsMovicPublic(res.isMovicPublic)
    })
  })

  return(<>
    <ReadEdit title="Publish" isEdit={isEdit}
      setIsEdit={setIsEdit}
      onCancel={onCancel}
      onSave={onSave}
      color={MovicColor.themeRed}
    >
    {
      isEdit ? 
      <EditPublish checked={isMovicPublic} setChecked={setIsMovicPublic}/>:
      <ViewPublish project={project} isMovicPublic={isMovicPublic}/>
    }
    </ReadEdit>
  </>)
}