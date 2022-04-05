import { ISvgArrow } from "../../H/ISvg"
import { Svg } from "../../H/Svg"

export function SvgFatArrow({
  width,
  fill,
  stroke, strokeWidth,
  left, right, up, down
}: ISvgArrow) {

  fill = fill || "none"
  strokeWidth = strokeWidth || 1.5
  let content = null
  if(left) {
    content = <>
      <g strokeLinejoin="round">
      <polygon transform="translate(12, 12) rotate(-90) translate(-12, -12)" 
        points="12 4 3 15 9 15 9 20 15 20 15 15 21 15">
      </polygon>
      </g>
    </>
  }
  if(right) {
    content = <>
      <g strokeLinejoin="round">
      <polygon transform="translate(12, 12) rotate(90) translate(-12, -12)" 
        points="12 4 3 15 9 15 9 20 15 20 15 15 21 15">
      </polygon>
      </g>
    </>
  }
  if(up) {
    content = <>
      <g strokeLinejoin="round">
        <polygon points="12 4 3 15 9 15 9 20 15 20 15 15 21 15">
        </polygon>
      </g>
    </>
  }
  if(down) {
    content = <>
      <g strokeLinejoin="round">
      <polygon transform="translate(12, 12) rotate(-180) translate(-12, -12)" 
        points="12 4 3 15 9 15 9 20 15 20 15 15 21 15">
      </polygon>
      </g>
    </>
  }

  return(<>
    <Svg viewBox="0 0 24 24" 
      width={width}
      stroke={stroke} 
      strokeWidth={strokeWidth} 
      fill={fill}>
      {content}
    </Svg>
  </>)
}