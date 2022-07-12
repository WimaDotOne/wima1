import { ReactNode } from "react"
import { ClassNames } from "../../../../../Core1/fCore1"
import cl from "./ViewDiv.module.scss"

interface IViewDivProp {
  children: ReactNode
  isLeftBarOpen?: boolean
  nonMovableViewDiv?: boolean
}

/*
  Screen is wide, isLeftBarOpen=true => blank left region width = left bar width
  Screen is wide, isLeftBarOpen=false => blank left region width=0
  Screen is narrow => blank left region width=0
*/
export function ViewDiv({
  children,
  isLeftBarOpen,
  nonMovableViewDiv
}: IViewDivProp) {

  const clOpen = isLeftBarOpen ? cl.open : ""
  const clMove = nonMovableViewDiv ? "" : cl.move
  return(<>
    <div className={ClassNames([cl.viewDiv, clOpen, clMove])}>
      <div className={cl.viewDivInner}>
        {children}
      </div>
    </div>
  </>)
}