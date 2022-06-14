import { SvgIcon } from "../../../Core2/Svg/SvgIcon"
import { FieldColor } from "../CSS/FieldColor"
import cl from "./ErrorLine.module.scss"

interface IErrorLineProp {
  text?: string
}

export function ErrorLine({
  text
}: IErrorLineProp) {
  if(!text) return null
  return(<>
    <div className={cl.div0}>
      <SvgIcon name="exclamation.triangle.fill" width={12} color={FieldColor.errorRed} />
      <div>{text}</div>
    </div>
  </>)
}