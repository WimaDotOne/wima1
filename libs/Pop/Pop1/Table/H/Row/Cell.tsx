import { ClassNames } from "../../../../../Core/Core1/fCore1"
import cl from "./Cell.module.scss"

interface ICellProp {
  text?: string
  width?: number
  isHead?: boolean
}
export function Cell({
  text,
  width,
  isHead
}: ICellProp) {
  width = width || 100

  const cellStyle = {
    width: width+"px"
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