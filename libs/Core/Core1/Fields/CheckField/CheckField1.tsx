import { useEffect, useRef } from "react"
import { ClassNames } from "../../fCore1"
import cl from "./CheckField1.module.scss"

interface ITextField1Prop {
  prompt?: string
  checked: boolean
  onChange: (checked: boolean)=>void
  disabled?: boolean,
  big?: boolean
}
export function CheckField1({
  prompt,
  checked,
  onChange,
  disabled,
  big
}:ITextField1Prop) {

  const inputRef = useRef<HTMLInputElement>(null)

  function onClickPrompt() {
    const input = inputRef.current
    if(!input) return
    input.click()
  }
  const clBig = big ? cl.big : ""

  return(<>
  <div className={ClassNames([cl.checkboxRow, clBig])}>
    <input ref={inputRef} type="checkbox" disabled={disabled} 
      className={ClassNames([cl.input, clBig])}
      checked={!!checked} 
      onChange={(e)=>{onChange(e.target.checked)}} />
    <div className={ClassNames([cl.prompt, clBig])} 
      onClick={onClickPrompt}>{prompt}</div>
  </div>
  </>)
}