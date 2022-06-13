import { useEffect, useState } from "react"
import { ReadEdit } from "../../../../../../../../libs/Pop/Pop1/fPop1"
import { SocialColor } from "../../../../../CSS/SocialColor"
import { BasicInfo2Edit } from "./BasicInfo2Edit/BasicInfo2Edit"
import { BasicInfo2Read } from "./BasicInfo2Read/BasicInfo2Read"

interface IBasicInfo2Prop {

}

export function BasicInfo2({

}: IBasicInfo2Prop) {

  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  async function loadMovicTitle(onOk?:(res:any)=>void) {
    // await Get2(shield, `/movic/LoadSettingsMovicTitle?projectId=${project.id}`,
    //   onOk
    // )
  }

  async function saveMovicTitle(onOk?:(res:any)=>void) {
    // await Post2(shield, "/movic/SaveSettingsMovicTitle",
    //   {
    //     projectId: project.id,
    //     title
    //   }, onOk
    // )
  }

  function onCancel() {
    setIsEdit(false)
    // loadMovicTitle((res)=>{
    //   setTitle(res.movicTitle)
    //   setIsEdit(false)
    // })
  }

  function onSave() {
    // saveIsMovicPublic((res)=>{
    //   setIsMovicPublic(res.isMovicPublic)
    //   setIsEdit(false)
    // })
  }

  useEffect(()=>{
    // if(isLoaded) return
    // loadIsMovicPublic((res)=>{
    //   setIsLoaded(true)
    //   setIsMovicPublic(res.isMovicPublic)
    // })
  })

  return(<>
  <ReadEdit title="Personality" isEdit={isEdit}
    setIsEdit={setIsEdit}
    onCancel={onCancel}
    onSave={onSave}
    color={SocialColor.themeBlue}
  >
  {
    isEdit ? 
    <BasicInfo2Edit />:
    <BasicInfo2Read />
  }
  </ReadEdit>
  </>)
}