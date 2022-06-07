import { ISvg } from "../../H/ISvg";
import { Svg } from "../../H/Svg";

export function SvgGraduationCap({
  width,
  stroke,
  strokeWidth
}: ISvg) {

  strokeWidth = strokeWidth || 2
  return(<>
    <Svg viewBox="0 0 32 32" width={width} stroke={stroke} strokeWidth={strokeWidth}>
      <g strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10}>
        <polygon points="16,4 1,12 16,20 31,12 "/>
        <path d="M7,15.2V22c0,2.2,4,5,9,5c5,0,9-2.8,9-5v-6.8"/>
        <line x1="31" y1="12" x2="31" y2="25"/>
      </g>
    </Svg>
  </>)
}