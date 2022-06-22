import { ReactNode } from "react"
import cl from "./PlainBottomBarDiv.module.scss"

interface IPlainBottomBarDivProp {
  children: ReactNode
}
export function PlainBottomBarDiv({
  children
}:IPlainBottomBarDivProp) {
  return(<>
    <div className={cl.bottomBarDiv}>
      { children }
    </div>
  </>)
}