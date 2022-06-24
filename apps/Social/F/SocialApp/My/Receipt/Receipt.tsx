import { useState } from "react"
import { ReceiptList } from "./ReceiptList/ReceipList"

interface IReceiptProp {

}

export function Receipt({

}: IReceiptProp) {
  const [profileTurn, setReceiptTurn] = useState<string>(ReceiptTurn.ReceiptHome)

  return(<>
    <ReceiptList />
  </>)
}

const ReceiptTurn = {
  ReceiptHome: "ReceiptHome"
}