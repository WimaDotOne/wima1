import { useEffect, useState } from "react"
import { Get2, useShield } from "../../../../../../../libs/Core/Core1/fCore1"
import { LimitWidth } from "../../../../../../../libs/Core/Core2/fCore2"
import { AppleNewsHeader1 } from "../../../../../../../libs/Pop/Pop2/fPop2"
import { useWimaUser } from "../../../../../../Wima/fWima"
import { ISocialReceipt } from "../../../../Model/ISocialReceipt"
import { SocialWindow } from "../../../SocialWindow/SocialWindow"
import cl from "./ReceiptList.module.scss"
import { ReceiptRow } from "./ReceiptRow/ReceiptRow"

interface IReceiptListProp {

}

export function ReceiptList({

}: IReceiptListProp) {

  const [receipts, setReceipts] = useState<Array<ISocialReceipt>>([])
  const [loaded, setLoaded] = useState<boolean>(false)
  const shield = useShield()
  const user = useWimaUser()

  function onClickRow() {

  }

  async function loadReplyReceipts() {
    if(loaded) return
    if(!user?.isLoggedInUniv) return
    await Get2(shield, "/social/LoadReplyReceipts", (res)=>{
      setLoaded(true)
      setReceipts(res.replyReceipts)
    })
  }

  useEffect(()=>{
    loadReplyReceipts()
  })
  return(<>
  <SocialWindow>
    <LimitWidth maxWidth={1200} >
      <AppleNewsHeader1 text1="Receipts" text2="Services you have replied recently" h={2} />
      {
        receipts.map((receipt, i)=>
        <ReceiptRow key={i} receipt={receipt} onClick={
          ()=>{

          }
        } />
        )
      }
    </LimitWidth>
  </SocialWindow>
  </>)
}