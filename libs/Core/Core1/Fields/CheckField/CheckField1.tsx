import cl from "./CheckField1.module.scss"

interface ITextField1Prop {
  prompt?: string
  checked: boolean
  onChange: (checked: boolean)=>void
  disabled?: boolean
}
export function CheckField1({
  prompt,
  checked,
  onChange,
  disabled
}:ITextField1Prop) {
  return(<>
  <div className={cl.checkboxRow}>
    <input type="checkbox" disabled={disabled} className={cl.input}
      checked={!!checked} 
      onChange={(e)=>{onChange(e.target.checked)}} />
    <div className={cl.prompt}>{prompt}</div>
  </div>
  </>)
}