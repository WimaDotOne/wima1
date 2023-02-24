import { CoffeeWindowViewCard } from "../../../../../../../../libs/Core/Core2/CoffeeWindow/fCoffeeWindow"
import { ThankyMenuTurn, ThankyWindow } from "../../../ThankyWindow/ThankyWindow"
import cl from "./PayoutHasSetup.module.scss"
import { Div } from "../../../../../../../../libs/Core/Core2/fCore2"
import { Button1 } from "../../../../../../../../libs/Core/Core2/fCore2"
import { Get2, Post2, useShield } from "../../../../../../../../libs/Core/Core1/fCore1"
import { IconButton } from "../../../../../../../../libs/Core/Core2/AppleWindow/F/View/IconButton/IconButton"
import { useState } from "react"

interface IPayoutHasSetupProp {
  falsifySetUp: ()=>void
}

export function PayoutHasSetup({
  falsifySetUp
}: IPayoutHasSetupProp) {

  const [showDisconnect, setShowDisconnect] = useState<boolean>(false)
  const shield = useShield()

  async function openExpressDashboard() {
    await Get2(shield, "/thanky/GetExpressDashboardLoginLink", (res)=>{
      const url = res.url
      console.log(url)
      window.open(url, "_blank")
    })
  }

  async function disconnectStripe() {
    if(!window.confirm("Are you sure to disconnect the Stripe account?")) {
      return
    }
    await Post2(shield, "/thanky/DeleteConnectedAccount", {}, ()=>{
      falsifySetUp()
    })
  }

  function toggleShowDisconnect() {
    setShowDisconnect(!showDisconnect)
  }

  return(<>
  <ThankyWindow selectItemId={ThankyMenuTurn.Payouts}>
    <div className={cl.pageTitle}>Payouts</div>
    <CoffeeWindowViewCard>
      <div className={cl.instructionFrame}>
        <div className={cl.stripe}>Stripe</div> 
        <div className={cl.info}>Payout via Stripe is 
          <span className={cl.connected}>connected</span>
        </div>
        <Div height={50} />
        <div className={cl.disconnectSpace}>
          <Button1 text="Express Dashboard" color="#635bff" 
            onClick={openExpressDashboard}/>

          <div className={cl.buttons}>
          {
            showDisconnect ?
            <Button1 text="Disconnect" onClick={disconnectStripe} color="red"/>
            : null
          }
            <div className={cl.gear}>
              <IconButton svgName="gear.nonfill" onClick={toggleShowDisconnect} />
            </div>
          </div>
        </div>
      </div>
    </CoffeeWindowViewCard>
  </ThankyWindow>
  </>)
}