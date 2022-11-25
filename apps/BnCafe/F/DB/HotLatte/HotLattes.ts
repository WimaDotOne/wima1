import { ExpressoInCupStep, SteamLatteStep, SteamCappuccinoStep, PourLatteStep, PourCappuccinoStep, SteamWholeMilkStep, RistrettoInCupStep, MochaStep, StirStep, WhippedCreamStep, WhiteChocolateMochaStep } from "./HotLatteStep";

export const BN_HotLattes = [
  {
    id: "L",
    name: "Latte",
    code: "L",
    steps: [ SteamLatteStep, ExpressoInCupStep, PourLatteStep],
    price1: 0,
    price2: 0,
    price3: 0
  },
  {
    id: "C",
    name: "Cappuccino",
    code: "C",
    steps: [ SteamCappuccinoStep, ExpressoInCupStep, PourCappuccinoStep],
    price1: 0,
    price2: 0,
    price3: 0
  },
  {
    id: "FW",
    name: "Flat White",
    code: "FW",
    steps: [ SteamWholeMilkStep, RistrettoInCupStep, PourLatteStep],
    price1: 0,
    price2: 0,
    price3: 0
  },
  {
    id: "M",
    name: "Mocha",
    code: "M",
    steps: [ SteamLatteStep, MochaStep, ExpressoInCupStep, StirStep, PourLatteStep, WhippedCreamStep],
    price1: 0,
    price2: 0,
    price3: 0
  },
  {
    id: "WCM",
    name: "White Chocolate Mocha",
    code: "WCM",
    steps: [ SteamLatteStep, WhiteChocolateMochaStep, ExpressoInCupStep, StirStep, PourLatteStep, WhippedCreamStep],
    price1: 0,
    price2: 0,
    price3: 0
  },
]