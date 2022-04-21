import { ISvg } from "../../H/ISvg";
import { Svg } from "../../H/Svg";

export function SvgFolderFill({
  width,
  fill
}: ISvg) {

  return(<>
    <Svg viewBox="0 0 60 60" width={width} fill={fill}>
      <path d="M56.981,11.5H28.019V6.52c0-1.665-1.354-3.02-3.019-3.02H3.019C1.354,3.5,0,4.854,0,6.52V20.5h60v-5.98
		  C60,12.854,58.646,11.5,56.981,11.5z"/>
	    <path d="M0,53.48c0,1.665,1.354,3.02,3.019,3.02h53.962c1.665,0,3.019-1.354,3.019-3.02V22.5H0V53.48z"/>
    </Svg>
  </>)
}