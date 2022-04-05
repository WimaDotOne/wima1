import { SvgIcon } from "../../../../../../Svg/SvgIcon"
import cl from "./BigIconButton.module.scss"

interface IBigIconButtonProp {
  name: string
  text: string
  iconWidth: number
  onClick: ()=>void
  color?: string,
  strokeWidth?: number
}
export function BigIconButton({
  name,
  text,
  iconWidth,
  onClick,
  color,
  strokeWidth
}: IBigIconButtonProp) {

  return(<>
    <div className={cl.div0}>
      <div className={cl.icon} onClick={onClick}>
        <SvgIcon name={name} width={iconWidth} color={color} strokeWidth={strokeWidth}/>
      </div>
      <div className={cl.text}>{text}</div>
    </div>
  </>)
}