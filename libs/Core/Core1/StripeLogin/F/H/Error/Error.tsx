import { SvgIcon } from "../../../../../Core2/Svg/SvgIcon"
import { StripeColor } from "../../CSS/StripeColor"
import cl from "./Error.module.scss"

interface IErrorProp {
  text: string
}

export function Error({
  text
}: IErrorProp) {
  return(<>
    <div className={cl.div0}>
      <SvgIcon name="exclamation.triangle.fill" width={12} color={StripeColor.errorRed} />
      <div>{text}</div>
    </div>
  </>)
}