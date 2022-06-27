import { TextDate1 } from "../../../../../../../../libs/Core/Core1/fCore1"
import { ISocialReceipt } from "../../../../../Model/ISocialReceipt"
import cl from "./ReceiptRow.module.scss"

interface IReceiptRowProp {
  receipt: ISocialReceipt
}

export function ReceiptRow({
  receipt
}: IReceiptRowProp) {
  return(<>
  <div className={cl.row}>
    <div className={cl.nameRow}>
      <div className={cl.name}>{receipt.serviceName}</div>
      <div className={cl.date}>{TextDate1(receipt.createdAt)}</div>
    </div>

    <div className={cl.shortDescription}>{receipt.serviceShortDescription}</div>
  </div>
  </>)
}