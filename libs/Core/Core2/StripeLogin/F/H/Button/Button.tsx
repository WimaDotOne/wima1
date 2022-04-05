import { ClassNames } from "../../../../../Core1/fCore1"
import cl from "./Button.module.scss"

interface IButtonProp {
  text: string
  onClick: ()=>void
  disable?: boolean
}
export function Button({
  text,
  disable,
  onClick
}:IButtonProp) {
  const clDisable = disable ? cl.disable:""
  return(<>
    <div className={ClassNames([cl.button, clDisable])} 
      onClick={()=>{if(!disable && onClick) { onClick() }}}>
      <span>{text}</span>
    </div>
  </>)
}