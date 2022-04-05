import { ISvg } from "../../H/ISvg";
import { Svg } from "../../H/Svg";


export function SvgAudio({
  width,
  fill
}: ISvg) {

  return(<>
    <Svg viewBox="-0.5 0.5 42 42" width={width} fill={fill}>
    <g>
	    <path d="M27.5,9.045c4.91,1.982,8.37,6.799,8.37,12.425c0,5.627-3.46,10.441-8.37,12.424v2.795c6.391-2.092,11-8.119,11-15.219c0-7.099-4.609-13.125-11-15.228V9.045z M27.5,15.644c1.641,1.402,2.68,3.494,2.68,5.827c0,2.334-1.039,4.424-2.68,5.826v2.844c2.99-1.731,5-4.966,5-8.67c0-3.703-2.01-6.937-5-8.67V15.644z M4.5,29.479h8l9,11.015c1,1.44,3.34,1.331,4-0.302V2.83c-0.811-1.632-2.939-1.763-4-0.382l-9,11.053h-8c-2.561,0-3,0.461-3,2.964v10.012C1.5,28.919,2,29.479,4.5,29.479z"/>
</g>
    </Svg>
  </>)
}