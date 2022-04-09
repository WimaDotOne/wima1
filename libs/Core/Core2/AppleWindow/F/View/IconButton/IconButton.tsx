import { ClassNames } from "../../../../../Core1/fCore1"
import { SvgIcon } from "../../../../Svg/SvgIcon"
import { color } from "../../CSS/Color"
import cl from "./IconButton.module.scss"

interface IIconButtonProp {
  svgName: string
  onClick: () => void
  disabled?: boolean
}
export function IconButton({
  svgName,
  onClick,
  disabled
}: IIconButtonProp) {

  const clEnabled = disabled ?  "" : cl.enabled
  const svgColor = disabled ? color.iconLightGray : color.iconGray
  
  return(<>
    <div className={ClassNames([cl.wrap, clEnabled])} onClick={onClick}>
      <SvgIcon name={svgName} width={16} color={svgColor} strokeWidth={24}/>
    </div>
  </>)
}