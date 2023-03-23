import { useState } from "react"
import { Post2, useShield } from "../../../../../../../libs/Core/Core1/fCore1"
import { ReadEdit } from "../../../../../../../libs/Pop/Pop1/fPop1"
import { LingoAdminColor } from "../../../../CSS/LingoAdminColor"
import { IUnit } from "../../../../Model/IUnit"
import { EditPublish } from "./EditPublish/EditPublish"
import { ViewPublish } from "./ViewPublish/ViewPublish"

interface IPublishProp {
  unit: IUnit
  setUnitIsPublic: (isPublic: boolean)=>void
}
export function Publish({
  unit,
  setUnitIsPublic
}: IPublishProp) {

  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [isPublic, setIsPublic] = useState<boolean>(unit.isPublic)
  
  const shield = useShield()

  async function saveIsUnitPublic(onOk?:(res:any)=>void) {
    await Post2(shield, "/lingoAdmin/SaveSettingsIsUnitPublic",
      {
        unitId: unit._id,
        isPublic
      }, onOk
    )
  }

  function onCancel() {
    setIsPublic(unit.isPublic)
    setIsEdit(false)
  }

  function onSave() {
    saveIsUnitPublic((res)=>{
      setIsPublic(res.isPublic)
      setUnitIsPublic(res.isPublic)
      setIsEdit(false)
    })
  }

  return(<>
    <ReadEdit title="Publish" isEdit={isEdit}
      setIsEdit={setIsEdit}
      onCancel={onCancel}
      onSave={onSave}
      color={LingoAdminColor.themeBlue}
    >
    {
      isEdit ? 
      <EditPublish checked={isPublic} setChecked={setIsPublic}/>:
      <ViewPublish unit={unit} isUnitPublic={isPublic}/>
    }
    </ReadEdit>
  </>)
}