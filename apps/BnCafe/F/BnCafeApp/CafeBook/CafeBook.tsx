import { useState } from "react"
import { IDrink } from "../../Model/Drink"
import { CafeMenu } from "./CafeMenu/CafeMenu"
import { Recipe } from "./Recipe/Recipe"

export function CafeBook() {

  const [turn, setTurn] = useState<string>("")
  const [drink, setDrink] = useState<IDrink>()
  const [size, setSize] = useState<string>("")

  function goMenu() {
    setTurn(CafeBookTurn.CafeMenu)
  }

  function goRecipe(drink: IDrink, size: string) {
    setDrink(drink)
    setSize(size)
    setTurn(CafeBookTurn.Recipe)
  }

  switch(turn) {
    case CafeBookTurn.Recipe: return(
      <Recipe drink={drink} size={size}
        goMenu={goMenu}/>
    )
    default:
      return (
        <CafeMenu goRecipe={goRecipe}/>
      )
  }

}

const CafeBookTurn = {
  CafeMenu: "CafeMenu",
  Recipe: "Recipe"
}