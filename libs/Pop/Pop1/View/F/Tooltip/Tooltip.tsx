import { ReactNode } from "react"
import cl from "./Tooltip.module.scss"

interface ITooltipProp {
  children: ReactNode
  text: string
}
export function Tooltip({
  children,
  text
}:ITooltipProp) {
  return(<>
    <div className={cl.tooltip}>
      <span className={cl.tooltipText}>{text}</span>
      { children }
    </div>
  </>)
}