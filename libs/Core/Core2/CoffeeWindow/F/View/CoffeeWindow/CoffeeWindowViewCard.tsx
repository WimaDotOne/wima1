import { ReactNode } from "react"
import { ClassNames } from "../../../../../Core1/fCore1"
import cl from "./CoffeeWindow.module.scss"

interface ICoffeeWindowViewCardProp {
  children: ReactNode
  shiftUp?: boolean
}

export function CoffeeWindowViewCard({
  children,
  shiftUp
}: ICoffeeWindowViewCardProp) {

  const clShiftUp = shiftUp ? cl.shiftUp : ""
  return(<>
  <div className={ClassNames([cl.viewCardSpace, clShiftUp])}>
    <div className={cl.viewCard}>
    {
      children
    }
    </div>
  </div>
  </>)
}