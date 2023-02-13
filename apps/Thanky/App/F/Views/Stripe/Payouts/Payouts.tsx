import { useEffect, useState } from "react";
import { Get2, useShield } from "../../../../../../../libs/Core/Core1/fCore1";
import { PayoutHasSetup } from "./PayoutHasSetup/PayoutHasSetup";
import { PayoutSetup } from "./PayoutSetup/PayoutSetup";

interface IPayoutsProp {

}

export function Payouts({

}: IPayoutsProp) {

  const [hasSetup, setHasSetup] = useState<boolean>(false)
  const [email, setEmail] = useState<string>("")

  const shield = useShield()

  async function loadStripeStatus() {
    await Get2(shield, "/thanky/LoadConnectedAccountStatus",
      (res)=>{
        setHasSetup(res.setup)
      }
    )
  }

  function falsifySetUp() {
    setHasSetup(false)
  }

  useEffect(()=>{
    loadStripeStatus()
  }, [])

  return(<>
  {
    hasSetup ? 
    <PayoutHasSetup falsifySetUp={falsifySetUp}/> :
    <PayoutSetup />
  }
  
  </>)
}