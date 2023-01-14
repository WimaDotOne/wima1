import { ISvg } from "../../H/ISvg"
import { Svg } from "../../H/Svg"

export function SvgHome2({
  width,
  stroke,
  strokeWidth
}: ISvg) {

  strokeWidth = strokeWidth || 1
  return(<>
    <Svg viewBox="0 0 16 16" width={width} stroke={stroke} strokeWidth={strokeWidth}>
    <path d="M0.800049 6.51136V14.2C0.800049 14.7523 1.24777 15.2 1.80005 15.2H5.90006V9.00006H10.1001V15.2H14.2C14.7523 15.2 15.2 14.7523 15.2 14.2V6.51136C15.2 6.19026 15.0459 5.88868 14.7855 5.70068L8.58554 1.2229C8.23602 0.970475 7.76407 0.970475 7.41456 1.2229L1.21456 5.70068C0.954246 5.88868 0.800049 6.19026 0.800049 6.51136Z" fill="transparent" stroke-linejoin="round" />
    </Svg>
  </>)
}