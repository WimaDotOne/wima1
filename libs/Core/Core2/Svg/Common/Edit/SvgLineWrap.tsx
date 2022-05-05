import { ISvg } from "../../H/ISvg";
import { Svg } from "../../H/Svg";

export function SvgLineWrap({
  width,
  fill
}: ISvg) {

  return(<>
    <Svg viewBox="0 0 16 16" width={width} fill={fill}>
      <path d="M1 4h11a4 4 0 010 8H9.414l.293.293a1 1 0 11-1.414 1.414L5.586 11l2.707-2.707a1 1 0 011.414 1.414L9.414 10H12a2 2 0 100-4H1a1 1 0 010-2z"/>
      <path d="M0 11a1 1 0 011-1h3a1 1 0 110 2H1a1 1 0 01-1-1z"/>
    </Svg>
  </>)
}