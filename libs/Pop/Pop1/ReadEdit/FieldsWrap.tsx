import { ReactNode } from "react"
import cl from "./FieldsWrap.module.scss"

interface IFieldsWrapProp {
  children: ReactNode
}

interface IFieldWrapProp {
  width?: number
  vPadding?: number
  hPadding?: number
  children: ReactNode
}

export function FieldsWrap({
  children
}: IFieldsWrapProp) {
  return(<>
  <div className={cl.fieldsWrap}>
  {children}
  </div>
  </>)
}

export function FieldWrap({
  width,
  vPadding, hPadding,
  children
}: IFieldWrapProp) {
  
  vPadding = vPadding || 2
  hPadding = hPadding || 3

  
  const style = {
    padding:  `${vPadding}px ${hPadding}px`,
    width: ""
  }
  if(width) {
    style.width = width + "px"
  }
  return(<>
  <div className={cl.fieldWrap} style={style}>
  {children}
  </div>
  </>)
}