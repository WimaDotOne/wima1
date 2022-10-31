import { CheckField1 } from "../../../../../../../../libs/Core/Core1/Fields/CheckField/CheckField1"
import cl from "./EditPublish.module.scss"

interface IEditPublishProp {
  checked: boolean,
  setChecked: (checked: boolean)=>void
}
export function EditPublish({
  checked,
  setChecked
}: IEditPublishProp) {

  function onChange(checked: boolean) {
    setChecked(checked)
  }
  return(<>
    <div className={cl.editPublish}>
      <CheckField1 prompt="Make job public" checked={checked}
        onChange={onChange} />
    </div>
  </>)
}