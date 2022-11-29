import { IDrink } from "../../Model/Drink";
import { ExpressoInCupStep, SteamLatteStep, SteamCappuccinoStep, PourLatteStep, PourCappuccinoStep, SteamWholeMilkStep, RistrettoInCupStep, MochaStep, StirStep, WhippedCreamStep, WhiteChocolateMochaStep } from "./HotLatteStep";

export const BN_HotLattes: Array<IDrink> = [
  {
    id: "L",
    name: "Latte",
    code: "L",
    canDecaf: true,
    twoPercent: true,
    steps: [ SteamLatteStep, ExpressoInCupStep, PourLatteStep],
    price1: 0,
    price2: 0,
    price3: 0
  },
  {
    id: "C",
    name: "Cappuccino",
    code: "C",
    canDecaf: true,
    twoPercent: true,
    steps: [ SteamCappuccinoStep, ExpressoInCupStep, PourCappuccinoStep],
    price1: 0,
    price2: 0,
    price3: 0
  },
  {
    id: "FW",
    name: "Flat White",
    code: "FW",
    canDecaf: true,
    whole: true,
    steps: [ SteamWholeMilkStep, RistrettoInCupStep, PourLatteStep],
    price1: 0,
    price2: 0,
    price3: 0
  },
  {
    id: "M",
    name: "Mocha",
    code: "M",
    canDecaf: true,
    twoPercent: true,
    whippedCream: true,
    steps: [ SteamLatteStep, MochaStep, ExpressoInCupStep, StirStep, PourLatteStep, WhippedCreamStep],
    price1: 0,
    price2: 0,
    price3: 0
  },
  {
    id: "WCM",
    name: "White Chocolate Mocha",
    code: "WCM",
    canDecaf: true,
    twoPercent: true,
    whippedCream: true,
    steps: [ SteamLatteStep, WhiteChocolateMochaStep, ExpressoInCupStep, StirStep, PourLatteStep, WhippedCreamStep],
    price1: 0,
    price2: 0,
    price3: 0
  },
]