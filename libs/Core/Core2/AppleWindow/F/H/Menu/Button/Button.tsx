import { MouseEvent } from "react"
import { ClassNames } from "../../../../../../Core1/fCore1"
import { SvgIcon } from "../../../../../Svg/SvgIcon"
import cl from "./Button.module.scss"

interface IButtonProp {
  text: string
  iconName?: string
  iconColor?: string
  selected?: boolean
  onClick: (e: MouseEvent<HTMLDivElement>) => void
}

export function Button({
  text,
  iconName,
  iconColor,
  selected,
  onClick
}:IButtonProp) {

  const clSelected = selected ? cl.selected : ""
  return(<>
    <div className={cl.row} onClick={onClick}>
      <div className={ClassNames([cl.rowInner, clSelected])}>
        <div className={cl.iconDiv}>
        {
          iconName ? <SvgIcon name={iconName} width={13} color={iconColor}/>:null
        }
        </div>
        <div className={cl.textDiv}>
          <div className={cl.text}>
            {text}
          </div>
        </div>
      </div>
    </div>
  </>)
}