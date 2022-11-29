import { Div } from "../../../../../../../libs/Core/Core2/fCore2"
import { IDrink } from "../../../../Model/Drink"
import { Box } from "./Box/Box"
import cl from "./Cup.module.scss"

interface ICupProp {
  decaf?: boolean
  shots?: string
  drink: IDrink
  syrup?: string
  milk?: string
  crossableValue?: string
  cross?: boolean
  custom?: string
}

export function Cup({
  decaf,
  shots,
  syrup,
  milk,
  crossableValue,
  cross,
  custom,
  drink
}: ICupProp) {
  return(<>
  
    <div className={cl.cupInner}>
      <Box title="Decaf" value={decaf ? "X": ""}/>
      <Div height={15} />
      <Box title="Shots" value={shots} />
      <Div height={15} />
      <Box title="Syrup" value={syrup} />
      <Div height={15} />
      <Box title="Milk" value={milk} />
      <Div height={15} />
      <Box title="Custom" cross={cross} value={custom}
        crossableValue={crossableValue} />
      <Div height={15} />
      <Box title="Drink" value={drink.code}/>
    </div>
  </>)
}