import { ReactNode } from "react"
import cl from "./Scrollable.module.scss"

interface IScrollableProp {
  children: ReactNode
}

// Parent of Scrollable needs to have a fixed height to work
export function Scrollable({
  children
}: IScrollableProp) {
  return(<>
    <div className={cl.scrollDiv}>
      {children}
    </div>
  </>)
}