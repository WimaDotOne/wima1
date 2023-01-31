import { Div } from "../../../../../../libs/Core/Core2/fCore2"
import { BN_Fraps } from "../../../DB/Frap/Fraps"
import { BN_HotCoffees } from "../../../DB/HotCoffee/HotCoffees"
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
  goMarkCup: (drink: IDrink) =>void
}

export function CafeMenu({
  goRecipe,
  goMarkCup
} : ICafeMenuProp) {

  function onClickPrice(drink: IDrink, size: string) {
    goRecipe(drink, size)
  }
  function onClickDrinkName(drink: IDrink) {
    goMarkCup(drink)
  }


  return(<>
  <div className={cl.logoSpace}>
    <div className={cl.logo} style={{backgroundImage: `url(/apps/BnCafe/Logo/bnCafeLogo.png)`}}/>
  </div>
  <div className={cl.instruction}>Click on price to see the recipe</div>
  <Div height={5} />
  <div className={cl.instruction}>Click on drink name to see how to mark cups</div>
  <Div height={5} />
  <div className={cl.menus}>
    <div className={cl.menuSpace}>
      <MenuCard categoryName="Hot Coffee"
        backgroundColor="#333"
        onClickDrinkName={onClickDrinkName}
        drinks={BN_HotCoffees} onClickPrice={onClickPrice}/>
    </div>
    <div className={cl.menuSpace}>
      <MenuCard categoryName="Iced Coffee"
        backgroundColor="#333c" hasTrenta
        onClickDrinkName={onClickDrinkName}
        drinks={BN_IcedCoffees} onClickPrice={onClickPrice}/>
    </div>
    <div className={cl.menuSpace}>
      <MenuCard categoryName="Hot Latte"
        backgroundColor="#f6cd8b" darkText
        onClickDrinkName={onClickDrinkName}
        drinks={BN_HotLattes} onClickPrice={onClickPrice}/>
    </div>
    <div className={cl.menuSpace}>
      <MenuCard categoryName="Hot Seasonal Latte"
        backgroundColor="#930C24"
        onClickDrinkName={onClickDrinkName}
        drinks={BN_HotSeasonalLattes} onClickPrice={onClickPrice}/>
    </div>
    <div className={cl.menuSpace}>
      <MenuCard categoryName="Iced Latte"
        backgroundColor="#267ca3"
        onClickDrinkName={onClickDrinkName}
        drinks={BN_IcedLattes} onClickPrice={onClickPrice}/>
    </div>
    <div className={cl.menuSpace}>
      <MenuCard categoryName="Iced Tea"
        backgroundColor="#49592a" hasTrenta
        onClickDrinkName={onClickDrinkName}
        drinks={BN_IcedTeas} onClickPrice={onClickPrice}/>
    </div>
    <div className={cl.menuSpace}>
      <MenuCard categoryName="Refresher" darkText
        backgroundColor="#fcc555" hasTrenta
        onClickDrinkName={onClickDrinkName}
        drinks={BN_Refreshers} onClickPrice={onClickPrice}/>
    </div>
    <div className={cl.menuSpace}>
      <MenuCard categoryName="Frappuccino"
        backgroundColor="#6c359499"
        onClickDrinkName={onClickDrinkName}
        drinks={BN_Fraps} onClickPrice={onClickPrice}/>
    </div>
  </div>
  <Div height={100} />
  </>)
}