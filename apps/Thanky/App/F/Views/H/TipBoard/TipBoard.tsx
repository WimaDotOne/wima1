import { useState } from "react"
import { CheckField1 } from "../../../../../../../libs/Core/Core1/Fields/CheckField/CheckField1"
import { IThankyJob } from "../../../Model/IThankyJob"
import cl from "./TipBoard.module.scss"
import { GENERAL_INPUT_MAX, GENERAL_TEXTAREA_MAX, ThankyConfig } from "../../../../../../../bConfig"
import { Post2, TextArea2, TextField2, useShield } from "../../../../../../../libs/Core/Core1/fCore1"
import { Div } from "../../../../../../../libs/Core/Core2/fCore2"
import { BigRoundButton } from "../../../../../../../libs/Core/Core2/fCore2"

interface ITipBoardProp {
  job?: IThankyJob
}

export function TipBoard({
  job
}: ITipBoardProp) {

  const [tipIndex, setTipIndex] = useState<number>(ThankyConfig.tip1.index)
  const [customerName, setCustomerName] = useState<string>("")
  const [customerComment, setCustomerComment] = useState<string>("")
  const shield = useShield()
  
  function selectDollar(index: number) {
    if(index !== tipIndex) {
      setTipIndex(index)
    }
  }

  function onChangeCustomerName(value: string) {
    setCustomerName(value)
  }

  function onChangeCustomerComment(value: string) {
    setCustomerComment(value)
  }

  async function onClickTip() {
    await Post2(shield, "/thanky/CreateCheckoutSession",
      {
        jobId: job?._id,
        tipIndex,
        customerName,
        customerComment
      },
      (res)=>{
        const session = res.session
        const url = session?.url
    
        if(url) {
          window.open(url)
        }
      }
    )
  }

  if(!job) return null

  return(<>
  <div className={cl.tipBoard}>
    <div className={cl.prompt}>
      Tip <span className={cl.employeeName}>{job?.firstName}</span>
    </div>
    <div className={cl.dollarAmount}>
      <CheckField1 big prompt={ThankyConfig.tip1.priceText} 
        checked={tipIndex===ThankyConfig.tip1.index}
        onChange={()=>{selectDollar(1)}}
      />
      <CheckField1 big prompt={ThankyConfig.tip2.priceText}  
        checked={tipIndex===ThankyConfig.tip2.index}
        onChange={()=>{selectDollar(2)}}
      />
      <CheckField1 big prompt={ThankyConfig.tip3.priceText}  
        checked={tipIndex===ThankyConfig.tip3.index}
        onChange={()=>{selectDollar(3)}}
      />
      <CheckField1 big prompt={ThankyConfig.tip4.priceText}  
        checked={tipIndex===ThankyConfig.tip4.index}
        onChange={()=>{selectDollar(4)}}
      />
    </div>

    <Div height={15} />
    <TextField2 
      ghost="Name (optional)"
      value={customerName} 
      onChange={onChangeCustomerName}
      maxLength={GENERAL_INPUT_MAX}
    />
    <Div height={15} />
    <TextArea2
      rows={5}
      ghost="Say something nice… (optional)"
      value={customerComment}
      onChange={onChangeCustomerComment}
      maxLength={GENERAL_TEXTAREA_MAX}
    />
    <Div height={20} />
    <BigRoundButton text="Tip" onClick={onClickTip}/>
    <Div height={20} />
    <div className={cl.feeText}>{FeeText(tipIndex)}</div>
  </div>
  </>)
}

function FeeText(tipIndex: number) {
  let fee = ""
  
  switch(tipIndex) {
    case ThankyConfig.tip1.index:
      fee = ThankyConfig.tip1.appFeeText
      break
    case ThankyConfig.tip2.index:
      fee = ThankyConfig.tip2.appFeeText
      break
    case ThankyConfig.tip3.index:
      fee = ThankyConfig.tip3.appFeeText
      break
    case ThankyConfig.tip4.index:
      fee = ThankyConfig.tip4.appFeeText
      break
    default:
      return ""
  }
  return `A fee of ${fee} will be taken away from the employee, part of which is for credit card transaction.`
}