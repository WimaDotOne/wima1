import { ClassNames } from "../../../../../Core1/fCore1"
import { SvgIcon } from "../../../../Svg/SvgIcon"
import cl from "./IconButtons.module.scss"

interface IIconButtonsProp {
  color?: string
  strokeWidth?: number
  icon1?: string
  icon2?: string
  icon3?: string
  icon4?: string
  icon5?: string
  icon6?: string
  icon7?: string
  icon8?: string
  icon9?: string
  text1?: string
  text2?: string
  text3?: string
  text4?: string
  text5?: string
  text6?: string
  text7?: string
  text8?: string
  text9?: string
  disabled1?: boolean
  disabled2?: boolean
  disabled3?: boolean
  disabled4?: boolean
  disabled5?: boolean
  disabled6?: boolean
  disabled7?: boolean
  disabled8?: boolean
  disabled9?: boolean
  onClick1?: ()=>void
  onClick2?: ()=>void
  onClick3?: ()=>void
  onClick4?: ()=>void
  onClick5?: ()=>void
  onClick6?: ()=>void
  onClick7?: ()=>void
  onClick8?: ()=>void
  onClick9?: ()=>void
}
export function IconButtons({
  color, strokeWidth,
  icon1, text1, onClick1, disabled1,
  icon2, text2, onClick2, disabled2,
  icon3, text3, onClick3, disabled3,
  icon4, text4, onClick4, disabled4,
  icon5, text5, onClick5, disabled5,
  icon6, text6, onClick6, disabled6,
  icon7, text7, onClick7, disabled7,
  icon8, text8, onClick8, disabled8,
  icon9, text9, onClick9, disabled9
}: IIconButtonsProp) {

  const iconWidth = text1 || text2 || text3 || 
    text4 || text5 || text6 || text7 || 
    text8 || text9 ? 18 : 20
  
  color = color || "#666"
  return(<>
    <div className={cl.buttons}>
      <div className={cl.left}>
      <AIconButton icon={icon1} onClick={onClick1} color={color} iconWidth={iconWidth}
        disabled={disabled1} strokeWidth={strokeWidth} text={text1}/>
      <AIconButton icon={icon2} onClick={onClick2} color={color} iconWidth={iconWidth}
        disabled={disabled2} strokeWidth={strokeWidth} text={text2}/>
      <AIconButton icon={icon3} onClick={onClick3} color={color} iconWidth={iconWidth}
        disabled={disabled3} strokeWidth={strokeWidth} text={text3}/>
      <AIconButton icon={icon4} onClick={onClick4} color={color} iconWidth={iconWidth}
        disabled={disabled4} strokeWidth={strokeWidth} text={text4}/>
      </div>
      <div className={cl.right}>
        <AIconButton icon={icon5} onClick={onClick5} color={color} iconWidth={iconWidth}
        disabled={disabled5} strokeWidth={strokeWidth} text={text5}/>
        <AIconButton icon={icon6} onClick={onClick6} color={color} iconWidth={iconWidth}
        disabled={disabled6} strokeWidth={strokeWidth} text={text6}/>
        <AIconButton icon={icon7} onClick={onClick7} color={color} iconWidth={iconWidth}
        disabled={disabled7} strokeWidth={strokeWidth} text={text7}/>
        <AIconButton icon={icon8} onClick={onClick8} color={color} iconWidth={iconWidth}
        disabled={disabled8} strokeWidth={strokeWidth} text={text8}/>
        <AIconButton icon={icon9} onClick={onClick9} color={color} iconWidth={iconWidth}
        disabled={disabled9} strokeWidth={strokeWidth} text={text9}/>
      </div>
    </div>
  </>)
}

interface IAIconButtonProp {
  color: string
  iconWidth: number
  strokeWidth?: number
  icon?: string
  text?: string
  disabled?: boolean
  onClick?: ()=>void
}
function AIconButton({
  color,
  iconWidth,
  strokeWidth,
  icon,
  text,
  disabled,
  onClick
}: IAIconButtonProp) {
  if(!icon || !onClick) return null
  
  if(disabled) color = "#ccc"
  const textStyle = { color }
  const clHover = disabled ? "" : cl.hover

  return(<>
  <div className={cl.buttonDivWrap}>
    <div className={ClassNames([cl.buttonDiv, clHover])} onClick={ ()=>{
      if(!disabled){ onClick!() }
    }}>
      <SvgIcon name={icon} color={color} width={iconWidth} strokeWidth={strokeWidth}/>
      <div className={cl.text} style={textStyle}>{text}</div>
    </div>
  </div>
  </>)
}