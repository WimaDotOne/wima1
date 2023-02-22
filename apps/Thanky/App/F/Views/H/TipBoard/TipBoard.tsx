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
        console.log(session)
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
      <CheckField1 big prompt={DollarText(ThankyConfig.tip1)} 
        checked={tipIndex===ThankyConfig.tip1.index}
        onChange={()=>{selectDollar(1)}}
      />
      <CheckField1 big prompt={DollarText(ThankyConfig.tip2)}  
        checked={tipIndex===ThankyConfig.tip2.index}
        onChange={()=>{selectDollar(2)}}
      />
      <CheckField1 big prompt={DollarText(ThankyConfig.tip3)}  
        checked={tipIndex===ThankyConfig.tip3.index}
        onChange={()=>{selectDollar(3)}}
      />
      <CheckField1 big prompt={DollarText(ThankyConfig.tip4)}  
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
  </div>
  </>)
}

function DollarText(tip: {price: number}) {
  const cents = tip.price
  if(!cents) return ""
  const dollar = cents/100
  return "$"+dollar
}