import { useState } from "react"
import { SettingSection } from "../H/SettingSection/SettingSection"
import { EditPublish } from "./EditPublish/EditPublish"
import cl from "./Publish.module.scss"
import { ViewPublish } from "./ViewPublish/ViewPublish"

interface IPublishProp {
}
export function Publish({
}: IPublishProp) {

  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [published, setPublished] = useState<boolean>(false)

  async function onCancel() {
    
    setIsEdit(false)
  }

  async function onSave() {
    setIsEdit(false)
  }

  return(<>
    <SettingSection title="Movic published" isEdit={isEdit}
      setIsEdit={setIsEdit}
      onCancel={onCancel}
      onSave={onSave}
    >
    {
      isEdit ? 
      <EditPublish checked={published} setChecked={setPublished}/>:
      <ViewPublish/>
    }
    </SettingSection>
  </>)
}