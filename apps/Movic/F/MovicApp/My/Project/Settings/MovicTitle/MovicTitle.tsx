import { useState } from "react"
import { SettingSection } from "../H/SettingSection/SettingSection"
import { EditMovicTitle } from "./EditMovicTitle/EditMovicTitle"
import cl from "./MovicTitle.module.scss"
import { ViewMovicTitle } from "./ViewMovicTitle/ViewMovicTitle"

interface IMovicTitleProp {
  title0: string
}
export function MovicTitle({
  title0
}: IMovicTitleProp) {

  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [title, setTitle] = useState<string>(title0)

  async function onCancel() {
    
    setIsEdit(false)
  }

  async function onSave() {
    setIsEdit(false)
  }

  return(<>
    <SettingSection title="Movic title" isEdit={isEdit}
      setIsEdit={setIsEdit}
      onCancel={onCancel}
      onSave={onSave}
    >
    {
      isEdit ? 
      <EditMovicTitle title={title} setTitle={setTitle}/>:
      <ViewMovicTitle title={title}/>
    }
    </SettingSection>
  </>)
}