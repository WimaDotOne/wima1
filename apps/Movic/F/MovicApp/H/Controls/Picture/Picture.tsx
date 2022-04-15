import { SvgIcon } from "../../../../../../../libs/Core/Core2/Svg/SvgIcon"
import cl from "./Picture.module.scss"

interface IPictureProp {
  url: string
  svgName?: string
  svgColor?: string
  svgWidth?: number
}

export function Picture({
  url, 
  svgName, 
  svgColor,
  svgWidth
}: IPictureProp) {


  const pictureStyle = { backgroundImage: `url(${url})`}
  return(<>
    <div className={cl.pictureWrap}>
    {
      svgName && svgWidth ?
      <div className={cl.svgDiv}>
        <SvgIcon name={svgName} width={svgWidth} color={svgColor}/>
      </div>: null
    }
      <div className={cl.picture} style={pictureStyle}></div>
    </div>
  </>)
}