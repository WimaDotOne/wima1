import { ISvg } from "../../H/ISvg";
import { Svg } from "../../H/Svg";

export function SvgCheckMarkDisk({
  width,
  fill
}: ISvg) {

  return(<>
    <Svg viewBox="0 0 18 18" width={width} fill={fill}>
      <path fill={fill} d="M9 0a9 9 0 1 0 9 9 9 9 0 0 0-9-9zm4.49 6.924l-5.02 5.51a.983.983 0 0 1-1.442 0l-2.48-2.482a.983.983 0 0 1 .008-1.417 1.027 1.027 0 0 1 1.4.02L7.712 10.3l4.3-4.73a1.018 1.018 0 0 1 1.4-.075 1.006 1.006 0 0 1 .078 1.43z"/>
    </Svg>
  </>)
}