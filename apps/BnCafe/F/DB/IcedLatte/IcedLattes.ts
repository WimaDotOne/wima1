import { Stir2Step, StirStep, WhippedCreamStep } from "../HotLatte/HotLatteStep";
import { AddIceStep, IcedEspressoInCupStep, IcedMochaStep, IcedWhiteChocolateMochaStep, PourColdMilkMiddleLineStep, PourColdMilkTopLineStep } from "./IcedLatteStep";

export const BN_IcedLattes = [
  {
    id: "iceL",
    name: "Latte",
    code: "L",
    steps: [PourColdMilkMiddleLineStep, IcedEspressoInCupStep, Stir2Step, AddIceStep],
    price1: 0,
    price2: 0,
    price3: 0
  },
  {
    id: "M",
    name: "Mocha",
    code: "M",
    steps: [IcedMochaStep, IcedEspressoInCupStep, StirStep, 
            PourColdMilkTopLineStep, WhippedCreamStep],
    price1: 0,
    price2: 0,
    price3: 0
  },
  {
    id: "WCM",
    name: "White Chocolate Mocha",
    code: "WCM",
    steps: [IcedWhiteChocolateMochaStep, IcedEspressoInCupStep, StirStep, 
            PourColdMilkTopLineStep, WhippedCreamStep],
    price1: 0,
    price2: 0,
    price3: 0
  },
]