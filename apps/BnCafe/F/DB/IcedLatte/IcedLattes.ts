import { ExpressoInPitcher2Step, Stir2Step, StirStep, WhippedCreamStep } from "../HotLatte/HotLatteStep";
import { UseShakerStep } from "../IcedTea/IcedTeaSteps";
import { AddIceShaker2Step, AddIceStep, BrowSugarSyrupStep, CinnamonPowderStep, FinishBOSE, IcedEspressoInCupStep, IcedMochaStep, IcedWhiteChocolateMochaStep, PourColdMilkMiddleLineStep, PourColdMilkTopLineStep, PourExpressoShakeStep, ShakeCinnamonPowderStep } from "./IcedLatteStep";

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
            PourColdMilkTopLineStep, AddIceStep, WhippedCreamStep],
    price1: 0,
    price2: 0,
    price3: 0
  },
  {
    id: "WCM",
    name: "White Chocolate Mocha",
    code: "WCM",
    steps: [IcedWhiteChocolateMochaStep, IcedEspressoInCupStep, StirStep, 
            PourColdMilkTopLineStep, AddIceStep, WhippedCreamStep],
    price1: 0,
    price2: 0,
    price3: 0
  },
  {
    id: "BOSE",
    name: "Brown Sugar Oatmilk Shaken Expresso",
    code: "BOSE",
    steps: [UseShakerStep, AddIceShaker2Step, BrowSugarSyrupStep,
      CinnamonPowderStep, ExpressoInPitcher2Step, 
      PourExpressoShakeStep, FinishBOSE
    ],
    price1: 0,
    price2: 0,
    price3: 0
  }
]