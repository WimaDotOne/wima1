import { ReactNode } from "react"
import cl from "./Panel.module.scss"

interface IPanelProp {
  children: ReactNode
}

export function Panel({
  children
}: IPanelProp) {
  return(<>
    <div className={cl.panel}>
      {children}
    </div>
  </>)
}