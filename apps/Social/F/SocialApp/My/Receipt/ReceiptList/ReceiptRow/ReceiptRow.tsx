import { ISocialReceipt } from "../../../../../Model/ISocialReceipt"
import cl from "./ReceiptRow.module.scss"

interface IReceiptRowProp {
  receipt: ISocialReceipt
  onClick: ()=>void
}

export function ReceiptRow({
  receipt,
  onClick
}: IReceiptRowProp) {
  return(<>
  <div className={cl.row} onClick={onClick}>
    <div className={cl.name}>{receipt.serviceName}</div>
    <div className={cl.shortDescription}>{receipt.serviceShortDescription}</div>
  </div>
  </>)
}