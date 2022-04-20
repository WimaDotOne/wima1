import { useState } from "react"
import { MovicWindow } from "../../MovicWindow/MovicWindow"
import cl from "./ClapperBoard.module.scss"
import { ClapperBoardHome } from "./ClapperBoardHome/ClapperBoardHome"

interface IClapperBoardProp {

}
export function ClapperBoard({

}: IClapperBoardProp) {

  const [clapperBoardTurn, setClapperBoardTurn] = useState<string>("")
  
  let clapperBoard = null
  switch(clapperBoardTurn) {

    default: clapperBoard = <ClapperBoardHome />
  }

  return (<>
    <MovicWindow>
      {clapperBoard}
    </MovicWindow>
  </>)
}

export const ClapperBoardTurn = {
  Home: "Home"
}