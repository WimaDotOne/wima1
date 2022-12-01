import { StripeButton } from "../../../../../../../libs/Core/Core1/StripePay/fStripePay";
import { AppleWindowBottomBarFill, LimitWidth } from "../../../../../../../libs/Core/Core2/fCore2";
import { AppleNewsHeader1 } from "../../../../../../../libs/Pop/Pop2/fPop2";
import { AppleWindowBottomBar } from "../../../../../../H/AppleWindowBottomBar";
import { TipWindow } from "../../../TipWindow/TipWindow";
import cl from "./PaymentSetupHome.module.scss"

interface IPaymentSetupHomeProp {

}
export function PaymentSetupHome({

}: IPaymentSetupHomeProp) {

  function connectWithStripe() {

  }

  
  return(<><TipWindow>
  <LimitWidth >
    <AppleNewsHeader1 text1="Payment Setup" text2="with Stripe" />
    <div className={cl.stripeButtonSpace}>
      <StripeButton text="Connect with Stripe"
        onClick={connectWithStripe}/>
    </div>
  </LimitWidth>
  <AppleWindowBottomBarFill />
  <AppleWindowBottomBar>
  {}
  </AppleWindowBottomBar>
  </TipWindow></>)
}