import { CoffeeWindowViewCard } from "../../../../../../../libs/Core/Core2/CoffeeWindow/fCoffeeWindow"
import { ThankyWindow } from "../../ThankyWindow/ThankyWindow"
import { ThankyMenuTurn } from "../../ThankyWindow/ThankyWindow"
import cl from "./Payouts.module.scss"
import { SvgIcon } from "../../../../../../../libs/Core/Core2/fCore2"

interface IPayoutsProp {

}

export function Payouts({
  
}: IPayoutsProp) {
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
      </div>
    </CoffeeWindowViewCard>
  </ThankyWindow>
  </>)
}