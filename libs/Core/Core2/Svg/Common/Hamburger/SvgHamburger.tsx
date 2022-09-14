import { ISvg } from "../../H/ISvg";
import { Svg } from "../../H/Svg";

export function SvgHamburger({
  width,
  stroke,
  strokeWidth
}: ISvg) {

  strokeWidth = strokeWidth || 24
  return(<>
    <Svg viewBox="0 0 240 240" width={width} stroke={stroke} strokeWidth={strokeWidth}>
      <g strokeLinecap="round" strokeLinejoin="miter" strokeMiterlimit="1.92" fill="none">
        <path transform="translate(20.4801271307446, 47.194991257585)" d="M0 0L199.04 0"/>

        <path transform="matrix(0.999999966951736 0 0 0.999999966951736 20.4800032889632 115.896087716732)" d="M0 0L199.04 0"/>

        <path transform="matrix(0.999999938038826 0 0 0.999999938038826 20.480006166376 190.875498165614)" d="M0 0L199.04 0"/>
      </g>
    </Svg>
  </>)
}