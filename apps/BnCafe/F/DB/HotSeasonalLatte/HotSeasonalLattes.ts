import { IDrink } from "../../Model/Drink";
import { ExpressoInCupStep, MochaStep, PourLatteStep, SteamLatteStep, StirStep, WhippedCreamStep } from "../HotLatte/HotLatteStep";
import { CaramelBruleeStep, CaramelBruleeToppingStep, ChocolateCurlToppingStep, PeppermintStep, PourAlmondMilkStep, PumpkinSpicePowderStep, PumpkinStep, RedGreenToppingStep, SteamAlmondMilkStep, SugarCookieStep, ToastedWhiteChocolateMochaStep, TwcmToppingStep } from "./HotSeasonalLatteStep";

export const BN_HotSeasonalLattes: Array<IDrink> = [
  {
    id: "PSL",
    name: "Pumpkin Spice Latte",
    code: "PSL",
    canDecaf: true,
    twoPercent: true,
    whippedCream: true,
    steps: [ SteamLatteStep, PumpkinStep, ExpressoInCupStep, StirStep, 
            PourLatteStep, WhippedCreamStep, PumpkinSpicePowderStep],
    price1: 0,
    price2: 0,
    price3: 0
  },
  {
    id: "PM",
    name: "Peppermint Mocha",
    code: "PM",
    canDecaf: true,
    twoPercent: true,
    whippedCream: true,
    steps: [ SteamLatteStep, MochaStep, PeppermintStep, ExpressoInCupStep, StirStep, 
            PourLatteStep, WhippedCreamStep, ChocolateCurlToppingStep],
    price1: 0,
    price2: 0,
    price3: 0
  },
  {
    id: "TWCM",
    name: "Toasted White Chocolate Mocha",
    code: "TWCM",
    canDecaf: true,
    twoPercent: true,
    whippedCream: true,
    steps: [ SteamLatteStep, ToastedWhiteChocolateMochaStep, ExpressoInCupStep, StirStep, 
            PourLatteStep, WhippedCreamStep, TwcmToppingStep],
    price1: 0,
    price2: 0,
    price3: 0
  },
  {
    id: "CBL",
    name: "Caramel Brulee Latte",
    code: "CBL",
    canDecaf: true,
    twoPercent: true,
    whippedCream: true,
    steps: [ SteamLatteStep, CaramelBruleeStep, ExpressoInCupStep, StirStep, 
            PourLatteStep, WhippedCreamStep, CaramelBruleeToppingStep],
    price1: 0,
    price2: 0,
    price3: 0
  },
  {
    id: "SCAL",
    name: "Sugar Cookie Almond Latte",
    code: "SCAL",
    canDecaf: true,
    almond: true,
    steps: [ SteamAlmondMilkStep, SugarCookieStep, ExpressoInCupStep, StirStep, 
            PourAlmondMilkStep, RedGreenToppingStep],
    price1: 0,
    price2: 0,
    price3: 0
  }
]