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
  return(<>
  <div className={cl.needCardSpace}>
    <div className={cl.needCard} onClick={onClick}>
      <div className={cl.name}>{name}</div>
      <div className={cl.shortDescription}>{shortDescription}</div>
      <div className={cl.willPay} title={willPayTooltip}>
      { willPay? "$": ""}
      </div>
    </div>
  </div>
  </>)
}