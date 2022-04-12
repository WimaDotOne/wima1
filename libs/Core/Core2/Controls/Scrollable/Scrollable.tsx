import { ReactNode } from "react"
import cl from "./Scrollable.module.scss"

interface IScrollableProp {
  children: ReactNode
}
export function Scrollable({
  children
}: IScrollableProp) {
  return(<>
    <div className={cl.scrollDiv}>
      {children}
    </div>
  </>)
}