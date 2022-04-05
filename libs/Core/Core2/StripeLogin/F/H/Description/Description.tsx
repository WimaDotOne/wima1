import { ReactNode } from "react"
import cl from "./Description.module.scss"

interface IDescriptionProp {
  children: ReactNode
}
export function Description({children}: IDescriptionProp) {
  return(<>
    <div className={cl.description}>
      {children}
    </div>
  </>)
}