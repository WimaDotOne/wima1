import { ISvg } from "../../H/ISvg";
import { Svg } from "../../H/Svg";

export function SvgFilm({
  width,
  fill
}: ISvg) {

  return(<>
    <Svg viewBox="0 0 330.008 330.008" width={width} fill={fill}>
      <path d="M315.008,300.004h-55.242c42.45-29.886,70.242-79.258,70.242-135.004
        c0-90.979-74.017-164.996-164.996-164.996C74.024,0.004,0,74.021,0,165c0,90.983,74.024,165.004,165.012,165.004h149.996
        c8.284,0,15-6.716,15-15C330.008,306.72,323.292,300.004,315.008,300.004z M30,165C30,90.563,90.566,30.004,165.012,30.004
        c74.437,0,134.996,60.559,134.996,134.996c0,74.441-60.559,135.004-134.996,135.004C90.566,300.004,30,239.441,30,165z"/>
      <circle cx="165.004" cy="225.004" r="30"/>
      <circle cx="165.004" cy="105.004" r="30"/>
      <circle cx="105.004" cy="165.004" r="30"/>
      <circle cx="225.004" cy="165.004" r="30"/>
    </Svg>
  </>)
}