import { ThankyWindow } from "../../ThankyWindow/ThankyWindow"
import { ThankyMenuTurn } from "../../ThankyWindow/ThankyWindow"
import cl from "./Payouts.module.scss"

interface IPayoutsProp {

}

export function Payouts({
  
}: IPayoutsProp) {
  return(<>
  <ThankyWindow selectItemId={ThankyMenuTurn.Payouts}>
    Payouts
  </ThankyWindow>
  </>)
}