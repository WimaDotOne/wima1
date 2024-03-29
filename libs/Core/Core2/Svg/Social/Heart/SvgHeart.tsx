import { ISvg } from "../../H/ISvg";
import { Svg } from "../../H/Svg";

export function SvgHeart({
  stroke,
  strokeWidth,
  width
}: ISvg) {

  stroke =  stroke || "black"
  strokeWidth = strokeWidth || 1.5

  return(<>
    <Svg viewBox="1 1 22 22" width={width} strokeWidth={strokeWidth} stroke={stroke}>
		<path d="M4.3314 12.0474L12 20L19.6686 12.0474C20.5211 11.1633 21 9.96429 21 8.71405C21 6.11055 18.9648 4 16.4543 4C15.2487 4 14.0925 4.49666 13.24 5.38071L12 6.66667L10.76 5.38071C9.90749 4.49666 8.75128 4 7.54569 4C5.03517 4 3 6.11055 3 8.71405C3 9.96429 3.47892 11.1633 4.3314 12.0474Z"  strokeLinecap="round" strokeLinejoin="round"/>
    </Svg>
  </>)
}