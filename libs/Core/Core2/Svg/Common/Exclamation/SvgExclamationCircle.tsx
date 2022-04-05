import { ISvg } from "../../H/ISvg";
import { Svg } from "../../H/Svg";

export function SvgExclamationCircle({
  width,
  stroke,
  strokeWidth
}: ISvg) {

  return(<>
    <Svg viewBox="0 0 240 240" width={width} stroke={stroke} strokeWidth={strokeWidth}>
      <circle transform="translate(16.559999999996, 16.5599999999642)" r="103.44" cx="103.44" cy="103.44" />

      <path transform="translate(120, 72.7200000000003)" strokeLinecap="round" strokeWidth={1.2*strokeWidth!} d="M0 0L0 48.96" />

      <path transform="translate(120, 170.899426486222)" strokeWidth={1.2*strokeWidth!} strokeLinecap="round" d="M0 0L1.42109e-14 0.921147" />
    </Svg>
  </>)
}