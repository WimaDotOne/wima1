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

  const [dollarIndex, setDollarIndex] = useState<number>(1)
  const [customerName, setCustomerName] = useState<string>("")
  const [customerComment, setCustomerComment] = useState<string>("")
  const shield = useShield()
  
  function selectDollar(index: number) {
    if(index !== dollarIndex) {
      setDollarIndex(index)
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
        dollarIndex
      },
      (res)=>{
        console.log(res.session)
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
      <CheckField1 big prompt="$2" checked={dollarIndex===1}
        onChange={()=>{selectDollar(1)}}
      />
      <CheckField1 big prompt="$5" checked={dollarIndex===2}
        onChange={()=>{selectDollar(2)}}
      />
      <CheckField1 big prompt="$10" checked={dollarIndex===3}
        onChange={()=>{selectDollar(3)}}
      />
      <CheckField1 big prompt="$15" checked={dollarIndex===4}
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