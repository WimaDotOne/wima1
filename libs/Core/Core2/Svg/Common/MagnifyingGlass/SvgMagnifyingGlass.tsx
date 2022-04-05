import { ISvg } from "../../H/ISvg";
import { Svg } from "../../H/Svg";

export function SvgMagnifyingGlass({
  width,
  stroke,
  strokeWidth
}: ISvg) {

  strokeWidth = strokeWidth || 1
  const strokeWidth2 = strokeWidth * 1.286
  return(<>
    <Svg viewBox="0 0 240 240" width={width} stroke={stroke} strokeWidth={strokeWidth}>
      <g strokeLinecap="round" strokeMiterlimit="1.92" fill="none">
        <ellipse transform="translate(14.1666073122973, 12.8025519956356)" rx="81.3637558230847" ry="81.2125220762016" cx="81.3637558230847" cy="81.2125220762016" strokeLinejoin="bevel"/>
        <path id="shape1" transform="translate(153.161898855323, 154.892541780242)" strokeWidth={strokeWidth2} strokeLinejoin="miter" d="M0 0L70.9564 68.7931"/>
      </g>
    </Svg>
  </>)
}