import { ReactNode } from "react"
import cl from "./Title.module.scss"

interface ITitleProp {
  children: ReactNode
}
export function Title({children}: ITitleProp) {
  return(<>
    <div className={cl.title}>
      {children}
    </div>
  </>)
}