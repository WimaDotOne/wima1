import { BN_HotLattes } from "../../../DB/HotLatte/HotLattes"
import { BN_HotSeasonalLattes } from "../../../DB/HotSeasonalLatte/HotSeasonalLatte"
import { IDrink } from "../../../Model/Drink"
import cl from "./CafeMenu.module.scss"
import { MenuCard } from "./MenuCard/MenuCard"

interface ICafeMenuProp {
  goRecipe: (drink: IDrink, size: string) =>void
}

export function CafeMenu({
  goRecipe
} : ICafeMenuProp) {

  function onSelectDrink(drink: IDrink, size: string) {
    goRecipe(drink, size)
  }

  return(<>
  <div className={cl.menus}>
    <div className={cl.menuSpace}>
      <MenuCard categoryName="Hot Latte"
       drinks={BN_HotLattes} onSelect={onSelectDrink}/>
    </div>
    <div className={cl.menuSpace}>
      <MenuCard categoryName="Hot Seasonal Latte"
       drinks={BN_HotSeasonalLattes} onSelect={onSelectDrink}/>
    </div>

  </div>

  </>)
}