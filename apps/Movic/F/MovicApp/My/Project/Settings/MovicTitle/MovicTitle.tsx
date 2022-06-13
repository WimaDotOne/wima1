import { useState } from "react"
import { Get2, Post2, useShield } from "../../../../../../../../libs/Core/Core1/fCore1"
import { ReadEdit } from "../../../../../../../../libs/Pop/Pop1/fPop1"
import { MovicColor } from "../../../../../CSS/MovicColor"
import { IProject } from "../../../../../Model/IProject"
import { EditMovicTitle } from "./EditMovicTitle/EditMovicTitle"
import { ViewMovicTitle } from "./ViewMovicTitle/ViewMovicTitle"

interface IMovicTitleProp {
  project: IProject
  setProjectMovicTitle: (movicTitle: string)=>void
}
export function MovicTitle({
  project,
  setProjectMovicTitle
}: IMovicTitleProp) {

  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [title, setTitle] = useState<string>(project.movicTitle)
  const shield = useShield()

  async function loadMovicTitle(onOk?:(res:any)=>void) {
    await Get2(shield, `/movic/LoadSettingsMovicTitle?projectId=${project.id}`,
      onOk
    )
  }

  async function saveMovicTitle(onOk?:(res:any)=>void) {
    await Post2(shield, "/movic/SaveSettingsMovicTitle",
      {
        projectId: project.id,
        title
      }, onOk
    )
  }

  function onCancel() {
    loadMovicTitle((res)=>{
      setTitle(res.movicTitle)
      setIsEdit(false)
    })
  }

  async function onSave() {
    saveMovicTitle((res)=>{
      setTitle(res.movicTitle)
      setProjectMovicTitle(res.movicTitle)
      setIsEdit(false)
    })
  }

  return(<>
    <ReadEdit title="Movic title" isEdit={isEdit}
      setIsEdit={setIsEdit}
      onCancel={onCancel}
      onSave={onSave}
      color={MovicColor.themeRed}
    >
    {
      isEdit ? 
      <EditMovicTitle title={title} setTitle={setTitle}/>:
      <ViewMovicTitle title={title}/>
    }
    </ReadEdit>
  </>)
}