import { ISvg } from "../../H/ISvg";
import { Svg } from "../../H/Svg";

export function SvgExclamationTriangleFill({
  width,
  fill
}: ISvg) {

  return(<>
    <Svg viewBox="0 0 16 16" fill={fill} width={width}>
      <path d="M10.115 1.308l5.635 11.269A2.365 2.365 0 0 1 13.634 16H2.365A2.365 2.365 0 0 1 .25 12.577L5.884 1.308a2.365 2.365 0 0 1 4.231 0zM8 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM8 9c.552 0 1-.32 1-.714V4.714C9 4.32 8.552 4 8 4s-1 .32-1 .714v3.572C7 8.68 7.448 9 8 9z" fillRule="evenodd">
      </path>
    </Svg>
  </>)
}