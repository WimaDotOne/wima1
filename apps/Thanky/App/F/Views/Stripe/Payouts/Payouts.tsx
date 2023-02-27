import { useEffect, useState } from "react";
import { ThankyConfig } from "../../../../../../../bConfig";
import { Get2, useShield } from "../../../../../../../libs/Core/Core1/fCore1";
import { PayoutHasSetup } from "./PayoutHasSetup/PayoutHasSetup";
import { PayoutSetup } from "./PayoutSetup/PayoutSetup";

interface IPayoutsProp {

}

export function Payouts({

}: IPayoutsProp) {

  const [status, setStatus] = useState<number>(0)

  const shield = useShield()

  async function loadStripeStatus() {
    await Get2(shield, "/thanky/LoadConnectedAccountStatus",
      (res)=>{
        setStatus(+res.status)
      }
    )
  }

  function falsifySetUp() {
    setStatus(ThankyConfig.connectedAccountStatus.setupStarted)
  }

  useEffect(()=>{
    loadStripeStatus()
  }, [])

  if(status === ThankyConfig.connectedAccountStatus.setupFinished) {
    return (<PayoutHasSetup falsifySetUp={falsifySetUp}/>)
  }

  return(
    <PayoutSetup hasSetupStarted={
      status === ThankyConfig.connectedAccountStatus.setupStarted
    }/>
  )
}