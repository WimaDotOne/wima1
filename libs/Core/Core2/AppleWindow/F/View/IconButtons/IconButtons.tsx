import { SvgIcon } from "../../../../Svg/SvgIcon"
import cl from "./IconButtons.module.scss"

interface IIconButtonsProp {
  color?: string
  strokeWidth?: number
  icon1?: string
  text1?: string
  onClick1?: ()=>void
  icon2?: string
  text2?: string
  onClick2?: ()=>void
  icon3?: string
  text3?: string
  onClick3?: ()=>void
  icon4?: string
  text4?: string
  onClick4?: ()=>void
  icon5?: string
  text5?: string
  onClick5?: ()=>void
}
export function IconButtons({
  color, strokeWidth,
  icon1, text1, onClick1,
  icon2, text2, onClick2,
  icon3, text3, onClick3,
  icon4, text4, onClick4,
  icon5, text5, onClick5
}: IIconButtonsProp) {

  const iconWidth = text1 || text2 || text3 || text4 || text5 ? 18 : 20
  const textStyle: { color?: string} = {}
  if(color) {
    textStyle.color = color
  }
  return(<>
    <div className={cl.buttons}>
      <div className={cl.left}>
      {
        icon1 && onClick1 ?
        <div className={cl.buttonDivWrap}>
          <div className={cl.buttonDiv} onClick={onClick1}>
          <SvgIcon name={icon1} color={color} width={iconWidth} strokeWidth={strokeWidth}/>
          <div className={cl.text} style={textStyle}>{text1}</div>
        </div>
        </div>:null
      }
      {
        icon2 && onClick2 ? 
        <div className={cl.buttonDivWrap}>

        <div className={cl.buttonDiv} onClick={onClick2}>
          <SvgIcon name={icon2} color={color} width={iconWidth} strokeWidth={strokeWidth}/>
          <div className={cl.text} style={textStyle}>{text2}</div>
        </div>
        </div>:null
      }
      </div>
      <div className={cl.right}>
      {
        icon3 && onClick3 ?
        <div className={cl.buttonDivWrap}>
         <div className={cl.buttonDiv} onClick={onClick3}>
          <SvgIcon name={icon3} color={color} width={iconWidth} strokeWidth={strokeWidth}/>
          <div className={cl.text} style={textStyle}>{text3}</div>
        </div>
        </div>:null
      }
      {
        icon4 && onClick4 ? 
        <div className={cl.buttonDivWrap}>
        <div className={cl.buttonDiv} onClick={onClick4}>
          <SvgIcon name={icon4} color={color} width={iconWidth} strokeWidth={strokeWidth}/>
          <div className={cl.text} style={textStyle}>{text4}</div>
        </div>
        </div>:null
      }
      {
        icon5 && onClick5 ? 
        <div className={cl.buttonDivWrap}>
        <div className={cl.buttonDiv} onClick={onClick5}>
          <SvgIcon name={icon5} color={color} width={iconWidth} strokeWidth={strokeWidth}/>
          <div className={cl.text} style={textStyle}>{text5}</div>
        </div>
        </div>:null
      }
      </div>
    </div>
  </>)
}