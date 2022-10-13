import { CSSProperties, ReactNode } from "react"
import { ClassNames } from "../../../Core1/fCore1"
import cl from "./LimitWidth.module.scss"

interface ILimitWidth {
  children: ReactNode
  gray?: boolean
  yellow?: boolean
  beige?: boolean
  maxWidth?: number
}

export function LimitWidth({
  children, 
  gray,
  yellow,
  beige,
  maxWidth
}: ILimitWidth) {

  const style: CSSProperties = {}
  if(maxWidth) {
    style.maxWidth = maxWidth + "px"
  }
  const clGray = gray ? cl.gray : ""
  const clYellow = yellow ? cl.yellow: ""
  const clBeige = beige ? cl.beige: ""
  return(<>
    <div className={
      ClassNames([cl.limitWidth, 
        clGray, clYellow, clBeige])}>
      <div className={cl.limitWidthInner} style={style}>
        {children}
      </div>
    </div>
  </>)
}