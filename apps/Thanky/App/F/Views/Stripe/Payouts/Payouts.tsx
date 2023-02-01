import { CoffeeWindowViewCard } from "../../../../../../../libs/Core/Core2/CoffeeWindow/fCoffeeWindow"
import { ThankyWindow } from "../../ThankyWindow/ThankyWindow"
import { ThankyMenuTurn } from "../../ThankyWindow/ThankyWindow"
import cl from "./Payouts.module.scss"
import { Div, SvgIcon } from "../../../../../../../libs/Core/Core2/fCore2"
import { Post2, StripeButton, useShield } from "../../../../../../../libs/Core/Core1/fCore1"
import { useRouter } from "next/router"
import { TwoStickyNotes } from "../../../../../Lib/TwoStickyNotes/TwoStickyNotes"
import { QueAns } from "../../../../../Lib/QueAns/QueAns"

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
    <div className={cl.explainSpace}>
      <div className={cl.explainHeader}>
        <span className={cl.explainWord}>explain</span> <span className={cl.stripeWord}>Stripe</span></div>
      <div className={cl.explainOneliner}>
        Stripe is the name of a company that handles online payment.
      </div>
      <Div height={40} />
      <TwoStickyNotes title1="" 
        text1="In order to receive tips online, you need to create a Stripe account." 
        text2="Stripe treats payment receiver as a business that provides a service for a fee."
      />
    </div>
    <QueAns />

    <CoffeeWindowViewCard>
      <div>Explain Stripe</div>
      <ul>
        <li>Country</li>
        <li>Type of business</li>
        <li>Email</li>
        <li>Phone number</li>
        <li>Legal name</li>
        <li>Date of birth</li>
        <li>Home address</li>
        <li>Last 4 digits of Social Security Number</li>
        <li>Industry</li>
        <li>Website</li>
        <li>Bank account or Debit card</li>
      </ul>
    </CoffeeWindowViewCard>
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