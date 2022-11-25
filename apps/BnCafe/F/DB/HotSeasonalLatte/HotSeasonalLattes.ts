import { ExpressoInCupStep, MochaStep, PourLatteStep, SteamLatteStep, StirStep, WhippedCreamStep } from "../HotLatte/HotLatteStep";
import { CaramelBruleeStep, CaramelBruleeToppingStep, ChocolateCurlToppingStep, PeppermintStep, PourAlmondMilkStep, PumpkinSpicePowderStep, PumpkinStep, RedGreenToppingStep, SteamAlmondMilkStep, SugarCookieStep, ToastedWhiteChocolateMochaStep, TwcmToppingStep } from "./HotSeasonalLatteStep";

export const BN_HotSeasonalLattes = [
  {
    id: "PSL",
    name: "Pumpkin Spice Latte",
    code: "PSL",
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
    steps: [ SteamAlmondMilkStep, SugarCookieStep, ExpressoInCupStep, StirStep, 
            PourAlmondMilkStep, RedGreenToppingStep],
    price1: 0,
    price2: 0,
    price3: 0
  }
]