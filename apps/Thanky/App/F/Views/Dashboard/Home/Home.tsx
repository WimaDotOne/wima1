import { ThankyMenuTurn, ThankyWindow } from "../../ThankyWindow/ThankyWindow"
import cl from "./Home.module.scss"

interface IHomeProp {

}

export function Home({

}: IHomeProp) {
  return(<>
  <ThankyWindow selectItemId={ThankyMenuTurn.Home}>
    
  </ThankyWindow>
  </>)
}