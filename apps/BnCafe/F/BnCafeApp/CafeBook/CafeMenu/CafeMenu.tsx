import { BN_HotLattes } from "../../../DB/HotLatte/HotLattes"
import { BN_HotSeasonalLattes } from "../../../DB/HotSeasonalLatte/HotSeasonalLatte"
import { BN_IcedLattes } from "../../../DB/IcedLatte/IcedLattes"
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
        backgroundColor="#333"
        drinks={BN_HotLattes} onSelect={onSelectDrink}/>
    </div>
    <div className={cl.menuSpace}>
      <MenuCard categoryName="Hot Seasonal Latte"
        backgroundColor="#930C24"
        drinks={BN_HotSeasonalLattes} onSelect={onSelectDrink}/>
    </div>
    <div className={cl.menuSpace}>
      <MenuCard categoryName="Iced Latte"
        backgroundColor="#267ca3"
        drinks={BN_IcedLattes} onSelect={onSelectDrink}/>
    </div>
    
  </div>

  </>)
}