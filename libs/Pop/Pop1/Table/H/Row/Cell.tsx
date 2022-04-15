import { ClassNames } from "../../../../../Core/Core1/fCore1"
import cl from "./Cell.module.scss"

interface ICellProp {
  text?: string
  textColor?: string
  width?: number
  isHead?: boolean
}
export function Cell({
  text,
  textColor,
  width,
  isHead
}: ICellProp) {
  width = width || 100
  textColor = textColor || "black"

  const cellStyle = {
    width: width+"px",
    color: textColor
  }
  const clHead = isHead ? cl.head : ""

  return(<>
    <div className={cl.cellWrap} style={cellStyle}>
      <div className={ClassNames([cl.cell, clHead])}>
          {text}
      </div>
    </div>
  </>)
}