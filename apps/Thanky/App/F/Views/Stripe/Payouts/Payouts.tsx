import { CoffeeWindowViewCard } from "../../../../../../../libs/Core/Core2/CoffeeWindow/fCoffeeWindow"
import { ThankyWindow } from "../../ThankyWindow/ThankyWindow"
import { ThankyMenuTurn } from "../../ThankyWindow/ThankyWindow"
import cl from "./Payouts.module.scss"
import { Div, SvgIcon } from "../../../../../../../libs/Core/Core2/fCore2"
import { Post2, StripeButton, useShield } from "../../../../../../../libs/Core/Core1/fCore1"
import { useRouter } from "next/router"

interface IPayoutsProp {

}

export function Payouts({
  
}: IPayoutsProp) {

  const shield = useShield()
  const router = useRouter()

  async function connectStripe() {
    await Post2(shield, "/thanky/GetOrCreateConnectedAccount", {},
      (res)=>{
        router.push(res.accountUrl)
      }
    )
  }

  return(<>
  <ThankyWindow selectItemId={ThankyMenuTurn.Payouts}>
    <div className={cl.pageTitle}>Payouts</div>
    <CoffeeWindowViewCard>
      <div className={cl.instructionFrame}>
        <SvgIcon name="lightening" width={32} color="#333"/>
        <div className={cl.instruction}>
          <div className={cl.instructionTitle}>
            Set up Instant Payouts
          </div>
          <div className={cl.instuctionText}>
            Get paid to your local bank account automatically. No minimum threshold. If you don't have a Stripe account, you'll be asked to create one for free.
          </div>
        </div>
        <Div height={30} />
        <StripeButton text="Connect Stripe" 
          onClick={connectStripe}
        />
      </div>
    </CoffeeWindowViewCard>
  </ThankyWindow>
  </>)
}