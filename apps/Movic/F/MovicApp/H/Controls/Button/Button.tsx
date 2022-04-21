import { ClassNames } from "../../../../../../../libs/Core/Core1/fCore1"
import cl from "./Button.module.scss"

interface IButtonProp {
  text: string
  onClick: ()=>void
  
}
export function Button({
  text,
  onClick,
}: IButtonProp) {

  return(<>
    <button className={ClassNames([cl.button])} onClick={onClick}>
      {text}
    </button>
  </>)
}