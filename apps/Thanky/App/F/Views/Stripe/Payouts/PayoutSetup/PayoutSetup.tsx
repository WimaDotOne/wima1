import { CoffeeWindowViewCard } from "../../../../../../../../libs/Core/Core2/CoffeeWindow/fCoffeeWindow"
import { ThankyWindow } from "../../../ThankyWindow/ThankyWindow"
import { ThankyMenuTurn } from "../../../ThankyWindow/ThankyWindow"
import cl from "./PayoutSetup.module.scss"
import { Div, SvgIcon } from "../../../../../../../../libs/Core/Core2/fCore2"
import { Post2, StripeButton, useShield } from "../../../../../../../../libs/Core/Core1/fCore1"
import { useRouter } from "next/router"
import { TwoStickyNotes } from "../../../../../../Lib/TwoStickyNotes/TwoStickyNotes"
import { QueAns } from "../../../../../../Lib/QueAns/QueAns"
import { useWimaEnv } from "../../../../../../../Wima/fWima"

interface IPayoutSetupProp {
  hasSetupStarted?: boolean
}

export function PayoutSetup({
  hasSetupStarted
}: IPayoutSetupProp) {

  const shield = useShield()
  const router = useRouter()
  const wimaEnv = useWimaEnv()

  async function connectStripe() {
    await Post2(shield, "/thanky/GetOrCreateConnectedAccount", {},
      (res)=>{
        router.push(res.accountUrl)
      }
    )
  }

  const titleText = hasSetupStarted ? "Finish Setting up Payout" : "Set up Payout"
  return(<>
  <ThankyWindow selectItemId={ThankyMenuTurn.Payouts}>
    <div className={cl.pageTitle}>Payouts</div>
    <CoffeeWindowViewCard>
      <div className={cl.instructionFrame}>
        <SvgIcon name="lightening" width={32} color="#333"/>
        <div className={cl.instruction}>
          <div className={cl.instructionTitle}>
            {titleText}
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
    <div className={cl.explainSpace}>
      <div className={cl.explainHeader}>
        <span className={cl.explainWord}>explain</span> 
        <span className={cl.stripeWord}>Stripe</span>
      </div>
      <div className={cl.explainLiners}>
        <div className={cl.explainOneliner1}>
          <span className={cl.stripe}>
            Stripe
          </span> is a company that provides the financial infrastructure for the internet. 
        </div>
      </div>
      <Div height={40} />
      <TwoStickyNotes title1="" 
        text1="In order to receive tips online, you need to create a Stripe account." 
        text2="Stripe treats payment receiver as a business that provides a service for a fee."
      />
      <div className={cl.explainLiners}>
        <div className={cl.explainLiners}>
          <div className={cl.explainOneliner2}>
            To create a stripe account, you will need to answer questions like Email, Phone, Legal name, DOB, SSN, Bank account etc.
          </div>
        </div>
      </div>
    </div>
    <CoffeeWindowViewCard>
      <div className={cl.explainOneliner3}>
         Stripe asks some more business oriented questions. The following are some pointers of how to answer them.
      </div>
      <QueAns questionAnswers={[
        {Question: "Country:", Answer: "United States"},
        {Question: "Type of Business:", Answer: "Individual"},
        {Question: "Industry:", Answer: "Select one that best describes your job or one of your two jobs."},
        {Question: "Website:", Answer: `${wimaEnv?.domain}/apps/Thanky`},
      ]}/>
    </CoffeeWindowViewCard>
  </ThankyWindow>
  </>)
}