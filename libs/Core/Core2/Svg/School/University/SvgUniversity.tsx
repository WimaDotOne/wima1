import { ISvg } from "../../H/ISvg";
import { Svg } from "../../H/Svg";

export function SvgUniversity({
  width,
  fill
}: ISvg) {

  return(<>
    <Svg viewBox="0 0 24 24" width={width} fill={fill}>
      <path d="M21,10a.99974.99974,0,0,0,1-1V6a.9989.9989,0,0,0-.68359-.94824l-9-3a1.002,1.002,0,0,0-.63282,0l-9,3A.9989.9989,0,0,0,2,6V9a.99974.99974,0,0,0,1,1H4v7.18427A2.99507,2.99507,0,0,0,2,20v2a.99974.99974,0,0,0,1,1H21a.99974.99974,0,0,0,1-1V20a2.99507,2.99507,0,0,0-2-2.81573V10ZM20,21H4V20a1.001,1.001,0,0,1,1-1H19a1.001,1.001,0,0,1,1,1ZM6,17V10H8v7Zm4,0V10h4v7Zm6,0V10h2v7ZM4,8V6.7207l8-2.667,8,2.667V8Z"/>
    </Svg>
  </>)
}