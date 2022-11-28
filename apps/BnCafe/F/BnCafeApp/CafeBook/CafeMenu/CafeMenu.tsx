import { Image } from "../../../../../../libs/Core/Core1/Fields/SelectField/SelectField2"
import { Div } from "../../../../../../libs/Core/Core2/fCore2"
import { BN_Fraps } from "../../../DB/Frap/Fraps"
import { BN_HotLattes } from "../../../DB/HotLatte/HotLattes"
import { BN_HotSeasonalLattes } from "../../../DB/HotSeasonalLatte/HotSeasonalLattes"
import { BN_IcedCoffees } from "../../../DB/IcedCoffee/IcedCoffees"
import { BN_IcedLattes } from "../../../DB/IcedLatte/IcedLattes"
import { BN_IcedTeas } from "../../../DB/IcedTea/IcedTeas"
import { BN_Refreshers } from "../../../DB/Refresher/Refreshers"
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
  <div className={cl.logoSpace}>
    <div className={cl.logo} style={{backgroundImage: `url(/apps/BnCafe/Logo/bnCafeLogo.png)`}}/>
  </div>
  <div className={cl.instruction}>Click on price to see the recipe</div>
  <div className={cl.menus}>
    <div className={cl.menuSpace}>
      <MenuCard categoryName="Hot Latte"
        backgroundColor="#f6cd8b" darkText
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
    <div className={cl.menuSpace}>
      <MenuCard categoryName="Iced Tea"
        backgroundColor="#49592a" hasTrenta
        drinks={BN_IcedTeas} onSelect={onSelectDrink}/>
    </div>
    <div className={cl.menuSpace}>
      <MenuCard categoryName="Iced Coffee"
        backgroundColor="#333"
        drinks={BN_IcedCoffees} onSelect={onSelectDrink}/>
    </div>
    <div className={cl.menuSpace}>
      <MenuCard categoryName="Refresher" darkText
        backgroundColor="#fcc500" hasTrenta
        drinks={BN_Refreshers} onSelect={onSelectDrink}/>
    </div>
    <div className={cl.menuSpace}>
      <MenuCard categoryName="Frappuccino"
        backgroundColor="#6c359499"
        drinks={BN_Fraps} onSelect={onSelectDrink}/>
    </div>
  </div>
  <Div height={100} />
  </>)
}