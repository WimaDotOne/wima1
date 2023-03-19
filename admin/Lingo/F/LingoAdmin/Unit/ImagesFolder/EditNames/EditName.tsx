import { GENERAL_INPUT_MAX } from "../../../../../../../bConfig"
import { TextField1 } from "../../../../../../../libs/Core/Core1/fCore1"
import cl from "./EditName.module.scss"

interface IEditNameProp {
  url: string
  value: string
  onChange: (newValue: string)=>void
}
export function EditName({
  url,
  value,
  onChange
}: IEditNameProp) {

  return(<>
    <div className={cl.editName}>
      <div className={cl.imageDiv}>
        <div className={cl.image} style={{backgroundImage: `url(${url})`}}>
        </div>
      </div>
      <TextField1 value={value} onChange={onChange} 
        maxLength={GENERAL_INPUT_MAX}/>
    </div>
  </>)
}