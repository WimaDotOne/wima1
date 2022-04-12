import { SvgIcon } from "../../../../../Core2/Svg/SvgIcon"
import { color } from "../../CSS/Color"
import cl from "./Error.module.scss"

interface IErrorProp {
  text: string
}

export function Error({
  text
}: IErrorProp) {
  return(<>
    <div className={cl.div0}>
      <SvgIcon name="exclamation.triangle.fill" width={12} color={color.errorRed} />
      <div>{text}</div>
    </div>
  </>)
}