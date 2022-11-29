import { IDrink } from "../../Model/Drink";
import { ExpressoInPitcher2Step, Stir2Step, StirStep, WhippedCreamStep } from "../HotLatte/HotLatteStep";
import { UseShakerStep } from "../IcedTea/IcedTeaSteps";
import { 
  AddIceShaker2Step, 
  AddIceStep, 
  BrowSugarSyrupStep, 
  CinnamonPowderStep, 
  FinishBOSE, 
  IcedEspressoInCupStep, 
  IcedMochaStep, 
  IcedWhiteChocolateMochaStep, 
  PourColdMilkMiddleLineStep, 
  PourColdMilkTopLineStep, 
  PourExpressoShakeStep 
} from "./IcedLatteStep";

export const BN_IcedLattes: Array<IDrink> = [
  {
    id: "iceL",
    name: "Latte",
    code: "L",
    canDecaf: true,
    twoPercent: true,
    canLightIce: true,
    steps: [PourColdMilkMiddleLineStep, IcedEspressoInCupStep, Stir2Step, AddIceStep],
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
    canLightIce: true,
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
    canDecaf: true,
    twoPercent: true,
    whippedCream: true,
    canLightIce: true,
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
    oat: true,
    canDecaf: true,
    canLightIce: true,
    steps: [UseShakerStep, AddIceShaker2Step, BrowSugarSyrupStep,
      CinnamonPowderStep, ExpressoInPitcher2Step, 
      PourExpressoShakeStep, FinishBOSE
    ],
    price1: 0,
    price2: 0,
    price3: 0
  }
]