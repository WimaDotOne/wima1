import { ClassNames } from "../../../../../../libs/Core/Core1/fCore1"
import cl from "./NeedCard.module.scss"

interface INeedCardProp {
  name: string,
  shortDescription?: string
  willPay?: boolean
  onClick?: ()=>void
}

export function NeedCard({
  name,
  shortDescription,
  willPay,
  onClick
}: INeedCardProp) {
  const willPayTooltip =  willPay ? "willing to pay": ""

  const clClick = onClick ? cl.click : ""
  return(<>
  <div className={cl.needCardSpace}>
    <div className={ClassNames([cl.needCard, clClick])} onClick={onClick}>
      <div className={cl.name}>{name}</div>
      <div className={cl.shortDescription}>{shortDescription}</div>
      <div className={cl.willPay} title={willPayTooltip}>
      { willPay? "$": ""}
      </div>
    </div>
  </div>
  </>)
}