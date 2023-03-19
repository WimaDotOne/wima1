import { useState } from "react"
import { Get2, Post2, useShield } from "../../../../../../../libs/Core/Core1/fCore1"
import { ReadEdit } from "../../../../../../../libs/Pop/Pop1/fPop1"
import { LingoAdminColor } from "../../../../CSS/LingoAdminColor"
import { IUnit } from "../../../../Model/IUnit"
import { EditUnitName } from "./EditUnitName/EditUnitName"
import { ViewUnitName } from "./ViewUnitName/ViewUnitName"

interface IUnitNameProp {
  unit: IUnit
  setUnitName: (movicTitle: string)=>void
}
export function UnitName({
  unit,
  setUnitName
}: IUnitNameProp) {

  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [title, setTitle] = useState<string>(unit.name)
  const shield = useShield()

  async function loadUnitName(onOk?:(res:any)=>void) {
    await Get2(shield, `/lingoAdmin/LoadSettingsUnitName?unitId=${unit._id}`,
      onOk
    )
  }

  async function saveUnitName(onOk?:(res:any)=>void) {
    await Post2(shield, "/lingoAdmin/SaveSettingsUnitName",
      {
        unitId: unit._id,
        title
      }, onOk
    )
  }

  function onCancel() {
    loadUnitName((res)=>{
      setTitle(res.movicTitle)
      setIsEdit(false)
    })
  }

  async function onSave() {
    saveUnitName((res)=>{
      setTitle(res.movicTitle)
      setUnitName(res.movicTitle)
      setIsEdit(false)
    })
  }

  return(<>
    <ReadEdit title="Unit name" isEdit={isEdit}
      setIsEdit={setIsEdit}
      onCancel={onCancel}
      onSave={onSave}
      color={LingoAdminColor.themeBlue}
    >
    {
      isEdit ? 
      <EditUnitName title={title} setTitle={setTitle}/>:
      <ViewUnitName title={title}/>
    }
    </ReadEdit>
  </>)
}