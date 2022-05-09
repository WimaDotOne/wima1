import { ISvg } from "../../H/ISvg"
import { Svg } from "../../H/Svg"

export function SvgUnPin({
  width,
  fill,
}: ISvg) {

  return(<>
    <Svg viewBox="0 0 463 463" width={width} fill={fill}>
      <path transform="rotate(-90, 231, 231)" d="M303.5,208h-1.151L287.582,45.568C296.571,42.265,303,33.62,303,23.5C303,10.542,292.458,0,279.5,0h-96  C170.542,0,160,10.542,160,23.5c0,10.12,6.429,18.765,15.418,22.068L160.651,208H159.5c-12.958,0-23.5,10.542-23.5,23.5  s10.542,23.5,23.5,23.5H224v200.5c0,4.143,3.357,7.5,7.5,7.5s7.5-3.357,7.5-7.5V255h64.5c12.958,0,23.5-10.542,23.5-23.5  S316.458,208,303.5,208z M183.5,15h96c4.687,0,8.5,3.813,8.5,8.5s-3.813,8.5-8.5,8.5h-96c-4.687,0-8.5-3.813-8.5-8.5  S178.813,15,183.5,15z M190.349,47h82.303l14.636,161H175.712L190.349,47z M303.5,240h-144c-4.687,0-8.5-3.813-8.5-8.5  s3.813-8.5,8.5-8.5h144c4.687,0,8.5,3.813,8.5,8.5S308.187,240,303.5,240z"/>
    </Svg>
  </>)
}