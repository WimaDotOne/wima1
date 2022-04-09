import { ReactNode } from "react"
import { ClassNames } from "../../../../../Core1/fCore1"
import cl from "./BottomBarDiv.module.scss"

interface IBottomBarDivProp {
  children: ReactNode
  isLeftBarOpen: boolean
}
export function BottomBarDiv({
  children,
  isLeftBarOpen
}:IBottomBarDivProp) {
  const clOpen = isLeftBarOpen ? cl.open : ""
  return(<>
    <div className={ClassNames([cl.bottomBarDiv, clOpen])}>
      { children }
    </div>
  </>)
}