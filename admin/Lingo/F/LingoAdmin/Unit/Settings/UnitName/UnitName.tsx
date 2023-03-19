import { useState } from "react"
import { Get2, Post2, useShield } from "../../../../../../../libs/Core/Core1/fCore1"
import { ReadEdit } from "../../../../../../../libs/Pop/Pop1/fPop1"
import { LingoAdminColor } from "../../../../CSS/LingoAdminColor"
import { IUnit } from "../../../../Model/IUnit"
import { EditUnitName } from "./EditUnitName/EditUnitName"
import { ViewUnitName } from "./ViewUnitName/ViewUnitName"

interface IUnitNameProp {
  unit: IUnit
  setUnitName: (name: string)=>void
  setUnitNumber: (number: string)=>void
}
export function UnitName({
  unit,
  setUnitName,
  setUnitNumber
}: IUnitNameProp) {

  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [name, setName] = useState<string>(unit.name)
  const [number, setNumber] = useState<string>(unit.number+"")
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
        unitName: name,
        unitNumber: number
      }, onOk
    )
  }

  function onCancel() {
    loadUnitName((res)=>{
      setName(res.unitName)
      setNumber(res.unitNumber)
      setUnitName(res.unitName)
      setUnitNumber(res.unitNumber)
      setIsEdit(false)
    })
  }

  async function onSave() {
    saveUnitName((res)=>{
      setName(res.unitName)
      setUnitName(res.unitName)
      setNumber(res.unitNumber)
      setUnitNumber(res.unitNumber)
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
      <EditUnitName name={name} setName={setName} 
        number={number} setNumber={setNumber}/>:
      <ViewUnitName name={name} number={number}/>
    }
    </ReadEdit>
  </>)
}