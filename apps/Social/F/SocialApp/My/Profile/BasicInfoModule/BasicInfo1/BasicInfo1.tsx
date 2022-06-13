import { useEffect, useState } from "react"
import { ReadEdit } from "../../../../../../../../libs/Pop/Pop1/fPop1"
import { SocialColor } from "../../../../../CSS/SocialColor"
import { BasicInfo1Edit } from "./BasicInfo1Edit/BasicInfo1Edit"
import { BasicInfo1Read } from "./BasicInfo1Read/BasicInfo1Read"

interface IBasicInfo1Prop {

}

export function BasicInfo1({

}: IBasicInfo1Prop) {

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
  <ReadEdit title="Name" isEdit={isEdit}
    setIsEdit={setIsEdit}
    onCancel={onCancel}
    onSave={onSave}
    color={SocialColor.themeBlue}
  >
  {
    isEdit ? 
    <BasicInfo1Edit />:
    <BasicInfo1Read />
  }
  </ReadEdit>
  </>)
}