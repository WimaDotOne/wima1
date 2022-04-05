import { ISvgArrow } from "../../H/ISvg"
import { Svg } from "../../H/Svg"

export function SvgArrow({
  width,
  stroke, strokeWidth,
  left, right, up, down
}: ISvgArrow) {

  strokeWidth = strokeWidth || 45
  let content = null
  if(left) {
    content = <>
      <path transform="translate(23.28, 42.24)" strokeLinecap="round" strokeLinejoin="miter" strokeMiterlimit="1.91999995708466" d="M76.8 0L0 76.8" />
  
      <path transform="translate(23.28, 120.72)" strokeLinecap="round" strokeLinejoin="miter" strokeMiterlimit="1.91999995708466" d="M0 0C25.6 25.6 51.2 51.2 76.8 76.8" />
  
      <path transform="matrix(-0.00352864061609579 0.999993774328336 -0.999993774328336 -0.00352864061609579 217.199395041147 120.342933868198)" strokeLinecap="round" strokeLinejoin="miter" strokeMiterlimit="1.91999995708466" d="M0 0L0.0001 194.4" />
    </>
  }
  if(right) {
    content = <>
      <path transform="translate(138.72, 122.64)" strokeLinecap="round" strokeLinejoin="miter" strokeMiterlimit="1.91999995708466" d="M76.8 0L0 76.8" />
  
      <path transform="translate(139.034785373609, 41.5394594594594)" strokeLinecap="round" strokeLinejoin="miter" strokeMiterlimit="1.91999995708466" d="M0 0C25.6 25.6 51.2 51.2 76.8 76.8" />
  
      <path transform="matrix(-0.00352864061609579 0.999993774328336 -0.999993774328336 -0.00352864061609579 217.199395041147 120.342933868198)" strokeLinecap="round" strokeLinejoin="miter" strokeMiterlimit="1.91999995708466" d="M0 0L0.0001 194.4" />
    </>
  }
  if(up) {
    content = <>
      <path transform="translate(42, 22.08)" strokeLinecap="round" strokeLinejoin="miter" strokeMiterlimit="1.92" d="M76.8 0L0 76.8"/>
  
      <path id="shape1" transform="translate(120.72, 22.08)" strokeLinecap="round" strokeLinejoin="miter" strokeMiterlimit="1.92" d="M0 0C25.6 25.6 51.2 51.2 76.8 76.8" />
  
      <path id="shape2" transform="translate(119.99995, 22.8)" strokeLinecap="round" strokeLinejoin="miter" strokeMiterlimit="1.92" d="M0 0L0.0001 194.4"/>
    </>
  }
  if(down) {
    content = <>
      <path transform="translate(120.48, 140.4)" strokeLinecap="round" strokeLinejoin="miter" strokeMiterlimit="1.91999995708466" d="M76.8 0L0 76.8" />
  
      <path transform="translate(41.28, 140.4)" strokeLinecap="round" strokeLinejoin="miter" strokeMiterlimit="1.91999995708466" d="M0 0C25.6 25.6 51.2 51.2 76.8 76.8" />
  
      <path transform="translate(119.99995, 22.8)" strokeLinecap="round" strokeLinejoin="miter" strokeMiterlimit="1.91999995708466" d="M0 0L0.0001 194.4" />
    </>
  }

  return(<>
    <Svg viewBox="0 0 240 240" 
      width={width}
      stroke={stroke} 
      strokeWidth={strokeWidth} 
      fill="none">
      {content}
    </Svg>
  </>)
}