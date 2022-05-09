import { ISvg } from "../../H/ISvg";
import { Svg } from "../../H/Svg";

export function SvgStopButton({
  width,
  fill
}: ISvg) {

  return(<>
    <Svg viewBox="0 0 60 60" width={width} fill={fill}>
      <path d="M49.001,0H10.999C4.934,0,0,4.934,0,10.999v38.003C0,55.066,4.934,60,10.999,60h38.002C55.065,60,60,55.066,60,49.001
	      V10.999C60,4.934,55.065,0,49.001,0z"/>
    </Svg>
  </>)
}