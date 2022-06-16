import { ISelectOption } from "./ISelectOption"
import cl from "./SelectField1.module.scss"

interface ISelectField1Prop {
  prompt?: string
  value?: string
  onChange: (newValue: string)=>void
  options: Array<ISelectOption>
  defaultValue?: string
}
export function SelectField1({
  prompt,
  value,
  onChange,
  options,
  defaultValue
}:ISelectField1Prop) {

  options = options || []

  return(<>
    <div>
      {
        prompt ?
        <div className={cl.prompt}>{prompt}</div>:null
      }
      <select className={cl.select} value={value || ""}
        onChange={(e)=>{onChange(e.target.value)}}
      >
      {
        defaultValue ? null:
        <option value=""></option>
      }
      {
        options.map((opt, i)=>
        <option key={i} value={opt.value}>
          {opt.text}
        </option>
        )
      }
      </select>
    </div>
  </>)
}