import { ReactNode } from "react"
import { ISvg } from "./ISvg"

interface ISvgProp extends ISvg {
  children: ReactNode
  viewBox: string
}

export function Svg({
  children,
  viewBox,
  width,
  fill,
  stroke,
  strokeWidth
}: ISvgProp) {
  
  if(!fill) { fill = "none" }

  return(<>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox} 
      fill={fill} 
      width={width+"px"}
      stroke={stroke}
      strokeWidth={strokeWidth+"px"}>
      {children}
    </svg>
  </>)
}