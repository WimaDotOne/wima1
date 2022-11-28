import { WhippedCreamStep } from "../HotLatte/HotLatteStep";
import { AddIceBlenderStep } from "../IcedLatte/IcedLatteStep";
import { 
  AddWholeMilkBottomLineStep, 
  BlendOn1Step, 
  CaramelDrizzleStep, 
  CaramelSyrupIntoBlender, 
  ChocolateChipIntoBlenderStep, 
  ClassicSyrupIntoBlender, 
  CoffeeBaseStep, 
  CreamBaseStep, 
  FrapRoastStep, 
  MochaIntoBlenderStep, 
  PourIntoBlenderStep, 
  PourOutOfBlender, 
  StrawberryPureeStep, 
  VanillaBeanStep 
} from "./FrapStep";

export const BN_Fraps = [
  {
    id: "VBF",
    name: "Vanilla Bean Frappuccino",
    code: "VBF",
    steps: [AddWholeMilkBottomLineStep, PourIntoBlenderStep,
      VanillaBeanStep, CreamBaseStep, AddIceBlenderStep, BlendOn1Step,
      PourOutOfBlender, WhippedCreamStep],
    price1: 0,
    price2: 0,
    price3: 0
  },
  {
    id: "CrF",
    name: "Caramel Frappuccino",
    code: "CrF",
    steps: [FrapRoastStep, AddWholeMilkBottomLineStep, PourIntoBlenderStep,
      CaramelSyrupIntoBlender, CoffeeBaseStep, AddIceBlenderStep, BlendOn1Step,
      PourOutOfBlender, WhippedCreamStep, CaramelDrizzleStep],
    price1: 0,
    price2: 0,
    price3: 0
  },
  {
    id: "DCCF",
    name: "Double Chocolate Chip Frappuccino",
    code: "DCCF",
    steps: [AddWholeMilkBottomLineStep, PourIntoBlenderStep,
      MochaIntoBlenderStep, ChocolateChipIntoBlenderStep, CreamBaseStep, 
      AddIceBlenderStep, BlendOn1Step,
      PourOutOfBlender, WhippedCreamStep],
    price1: 0,
    price2: 0,
    price3: 0
  },
  {
    id: "JCF",
    name: "Java Chip Frappuccino",
    code: "JCF",
    steps: [FrapRoastStep, AddWholeMilkBottomLineStep, PourIntoBlenderStep,
      MochaIntoBlenderStep, ChocolateChipIntoBlenderStep, CoffeeBaseStep, 
      AddIceBlenderStep, BlendOn1Step,
      PourOutOfBlender, WhippedCreamStep],
    price1: 0,
    price2: 0,
    price3: 0
  },
  {
    id: "StCF",
    name: "Strawberry Cream Frappuccino",
    code: "StCF",
    steps: [StrawberryPureeStep, AddWholeMilkBottomLineStep, PourIntoBlenderStep,
      ClassicSyrupIntoBlender, CreamBaseStep, 
      AddIceBlenderStep, BlendOn1Step, StrawberryPureeStep,
      PourOutOfBlender, WhippedCreamStep],
    price1: 0,
    price2: 0,
    price3: 0
  }
]