import { CoffeeWindowViewCard } from "../../../../../../../libs/Core/Core2/CoffeeWindow/fCoffeeWindow"
import { ThankyMenuTurn, ThankyWindow } from "../../ThankyWindow/ThankyWindow"
import cl from "./Home.module.scss"

interface IHomeProp {

}

export function Home({

}: IHomeProp) {
  return(<>
  <ThankyWindow selectItemId={ThankyMenuTurn.Home}>
    <CoffeeWindowViewCard shiftUp>
xxxx
    </CoffeeWindowViewCard>
  </ThankyWindow>
  </>)
}