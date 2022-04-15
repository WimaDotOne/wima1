import { ClassNames } from "../../../../../Core/Core1/fCore1"
import cl from "./WrapCell.module.scss"

interface IWrapCellProp {
  text?: string
  width?: number
  prompt?: string
}
export function WrapCell({
  text,
  width,
  prompt
}: IWrapCellProp) {
  width = width || 100

  const cellStyle = {
    width: width+"px"
  }

  return(<>
    <div className={cl.cellWrap} style={cellStyle}>
      <div className={cl.prompt}>{prompt}</div>
      <div className={cl.cell}>
          {text}
      </div>
    </div>
  </>)
}