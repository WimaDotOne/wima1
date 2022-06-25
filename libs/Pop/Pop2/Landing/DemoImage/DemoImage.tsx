import { ClassNames } from "../../../../Core/Core1/fCore1"
import cl from "./DemoImage.module.scss"

interface IDemoImageProp {
  url: string
  height?: number
  vPadding?: number
  noShadow?: boolean
}
export function DemoImage({
  url,
  height,
  vPadding,
  noShadow
}: IDemoImageProp) {

  height = height || 300
  const cardStyle: {
    paddingTop?: string, 
    paddingBottom?: string}={}
  if(vPadding) {
    cardStyle.paddingTop = vPadding + "px"
    cardStyle.paddingBottom = vPadding + "px"
  }

  const clShadow = noShadow ? "" : cl.shadow
  return(<>
  <div className={cl.imageSpace}>
    <div style={cardStyle} className={ClassNames([cl.card, clShadow])}>
      <div className={cl.image} 
        style={{
          backgroundImage: `url(${url})`,
          height: height+"px"
        }}/>
    </div>

  </div>
  </>)
}