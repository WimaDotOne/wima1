import { useState } from "react"
import { CheckField1 } from "../../../../../../../libs/Core/Core1/Fields/CheckField/CheckField1"
import { IThankyJob } from "../../../Model/IThankyJob"
import cl from "./TipBoard.module.scss"
import { ThankyConfig } from "../../../../../../../bConfig"

interface ITipBoardProp {
  job?: IThankyJob
}

export function TipBoard({
  job
}: ITipBoardProp) {

  const [dollarIndex, setDollarIndex] = useState<number>(1)

  function selectDollar(index: number) {
    setDollarIndex(index)
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
  </div>
  </>)
}