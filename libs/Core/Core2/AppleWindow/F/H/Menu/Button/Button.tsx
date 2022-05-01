import { MouseEvent } from "react"
import { ClassNames } from "../../../../../../Core1/fCore1"
import { SvgIcon } from "../../../../../Svg/SvgIcon"
import cl from "./Button.module.scss"

interface IButtonProp {
  text: string
  iconName?: string
  themeColor?: string
  selected?: boolean
  onClick: (e: MouseEvent<HTMLDivElement>) => void
  grayedOut?: boolean
}

export function Button({
  text,
  iconName,
  themeColor,
  selected,
  onClick,
  grayedOut
}:IButtonProp) {

  const clSelected = selected ? cl.selected : ""
  const clGrayedOut = grayedOut ? cl.grayedOut : ""
  const iconColor = grayedOut ? "#aaa" : themeColor
  return(<>
    <div className={cl.row} onClick={onClick}>
      <div className={ClassNames([cl.rowInner, clSelected])}>
        <div className={cl.iconDiv}>
        {
          iconName ? <SvgIcon name={iconName} width={13} color={iconColor}/>:null
        }
        </div>
        <div className={cl.textDiv}>
          <div className={ClassNames([cl.text, clGrayedOut])}>
            {text}
          </div>
        </div>
      </div>
    </div>
  </>)
}