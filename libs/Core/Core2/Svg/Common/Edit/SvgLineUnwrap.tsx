import { ISvg } from "../../H/ISvg";
import { Svg } from "../../H/Svg";

export function SvgLineUnwrap({
  width,
  fill
}: ISvg) {

  return(<>
    <Svg viewBox="0 0 16 16" width={width} fill={fill}>
      <path d="M1 4a1 1 0 000 2h14a1 1 0 100-2H1zm6.707 4.293L10.414 11l-2.707 2.707a1 1 0 01-1.414-1.414L6.586 12H1a1 1 0 110-2h5.586l-.293-.293a1 1 0 011.414-1.414zM11 11a1 1 0 011-1h3a1 1 0 110 2h-3a1 1 0 01-1-1z"/>
    </Svg>
  </>)
}