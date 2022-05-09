import { ISvgArrow } from "../../H/ISvg"
import { Svg } from "../../H/Svg"

export function SvgWideArrow({
  width,
  fill,
  left, right
}: ISvgArrow) {

  let content = null
  if(left) {
    content = <>
    	<path transform="rotate(180, 185, 266)" d="M122.305,532.157c15.141,0,29.964-7.491,38.721-21.193l140.674-220.173c9.627-15.067,9.627-34.358,0-49.425
			L161.026,21.192C147.373-0.172,118.995-6.421,97.636,7.227C76.271,20.874,70.022,49.259,83.67,70.618l124.885,195.46
			L83.67,461.539c-13.648,21.364-7.393,49.743,13.966,63.391C105.292,529.825,113.848,532.157,122.305,532.157z"/>
    </>
  }
  if(right) {
    content = <>
      <path d="M122.305,532.157c15.141,0,29.964-7.491,38.721-21.193l140.674-220.173c9.627-15.067,9.627-34.358,0-49.425
        L161.026,21.192C147.373-0.172,118.995-6.421,97.636,7.227C76.271,20.874,70.022,49.259,83.67,70.618l124.885,195.46
        L83.67,461.539c-13.648,21.364-7.393,49.743,13.966,63.391C105.292,529.825,113.848,532.157,122.305,532.157z"/>
    </>
  }

  return(<>
    <Svg viewBox="-80 0 532.157 532.157" 
      width={width}
      fill={fill}>
      {content}
    </Svg>
  </>)
}