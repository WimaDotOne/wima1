import { CSSProperties, ReactNode } from "react";

interface IDivProp {
  children?: ReactNode
  height?: number | string
  width?: number | string
  padding?: number
  paddingTop?: number
  paddingBottom?: number
  paddingLeft?: number
  paddingRight?: number
  margin?: number
}
export function Div({
  children,
  height,
  width,
  padding,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  margin
}: IDivProp) {

  const style: CSSProperties = {}

  if(height !== undefined) {
    style.height = isNaN(+height) ? height : height + "px"
  }
  if(width !== undefined) { 
    style.width = isNaN(+width) ? width : width + "px"
  }
  if(padding !== undefined) { style.padding = padding + "px"}
  if(paddingTop !== undefined) { style.paddingTop = paddingTop + "px"}
  if(paddingBottom !== undefined) { style.paddingBottom = paddingBottom + "px"}
  if(paddingLeft !== undefined) { style.paddingLeft = paddingLeft + "px"}
  if(paddingRight !== undefined) { style.paddingRight = paddingRight + "px"}
  if(margin !== undefined) { style.margin = margin + "px"}

  return(<>
    <div style={style}>
      {children}
    </div>
  </>)
}
