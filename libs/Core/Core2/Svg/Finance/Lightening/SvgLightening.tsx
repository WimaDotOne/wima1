import { ISvg } from "../../H/ISvg";
import { Svg } from "../../H/Svg";

export function SvgLightening({
  width,
  fill
}: ISvg) {

  return(<>
    <Svg viewBox="0 0 32 32" width={width} fill={fill}>
    <path d="M13.3606 30L14.8841 19.0882H9.77824C9.36647 19.0882 9.11941 18.9856 9.03706 18.7802C8.95471 18.5738 9.00961 18.2922 9.20176 17.9353L18.0135 2H19.5371L18.0135 12.9118H23.1194C23.5037 12.9118 23.7442 13.0144 23.8408 13.2198C23.9364 13.4262 23.888 13.7078 23.6959 14.0647L14.8841 30H13.3606Z"></path>
    </Svg>
  </>)
}