import { AppleWindowBottomBarFill } from "../../../../../../../libs/Core/Core2/fCore2";
import { AppleWindowBottomBar } from "../../../../../../H/AppleWindowBottomBar";
import { TipWindow } from "../../../TipWindow/TipWindow";

interface IPaymentSetupHomeProp {

}
export function PaymentSetupHome({

}: IPaymentSetupHomeProp) {
  return(<><TipWindow>
  Payment Setup home
  <AppleWindowBottomBarFill />
  <AppleWindowBottomBar>
  {}
  </AppleWindowBottomBar>
  </TipWindow></>)
}