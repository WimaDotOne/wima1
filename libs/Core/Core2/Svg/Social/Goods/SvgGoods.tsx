import { ISvg } from "../../H/ISvg";
import { Svg } from "../../H/Svg";

export function SvgGoods({
  stroke,
  strokeWidth,
  width
}: ISvg) {

  stroke =  stroke || "black"
  strokeWidth = strokeWidth || 4
  return(<>
    <Svg viewBox="0 0 48 48" width={width} strokeWidth={strokeWidth} stroke={stroke}>
      <path d="M44 14L24 4L4 14V34L24 44L44 34V14Z" strokeLinejoin="round"/>
      <path d="M4 14L24 24" strokeLinejoin="round"/>
      <path d="M24 44V24" strokeLinejoin="round"/>
      <path d="M44 14L24 24" strokeLinejoin="round"/>
      <path d="M34 9L14 19" strokeLinejoin="round"/>
    </Svg>
  </>)
}