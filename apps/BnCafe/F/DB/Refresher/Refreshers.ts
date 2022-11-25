import { AddIce2Step } from "../IcedLatte/IcedLatteStep";
import { AddLemonadeStep, AddWaterStep, ShakePourStep, UseShakerStep } from "../IcedTea/IcedTeaSteps";
import { AddCoconutMilkStep, DriedDragonfruitStep, DriedPineappleStep, DriedStrawberryStep, MangoDragfruitStep, PineapplePassionfruitStep, StrawberryAcaiStep } from "./RefresherStep";

export const BN_Refreshers = [
  {
    id: "SAR",
    name: "Strawberry Acai Refresher",
    code: "SAR",
    steps: [ UseShakerStep, StrawberryAcaiStep, AddWaterStep, 
            DriedStrawberryStep, AddIce2Step, ShakePourStep],
    price1: 0,
    price2: 0,
    price3: 0,
    price4: 0
  },
  {
    id: "MDR",
    name: "Mango Dragonfruit Refresher",
    code: "MDR",
    steps: [ UseShakerStep, MangoDragfruitStep, AddWaterStep,
            DriedDragonfruitStep, AddIce2Step, ShakePourStep],
    price1: 0,
    price2: 0,
    price3: 0,
    price4: 0
  },
  {
    id: "PPR",
    name: "Pineapple Passionfruit Refresher",
    code: "PPR",
    steps: [ UseShakerStep, PineapplePassionfruitStep, AddWaterStep,
            DriedPineappleStep, AddIce2Step, ShakePourStep],
    price1: 0,
    price2: 0,
    price3: 0,
    price4: 0
  },
  {
    id: "SARL",
    name: "Strawberry Acai Lemonade",
    code: "SARL",
    steps: [ UseShakerStep, StrawberryAcaiStep, AddLemonadeStep, 
            DriedStrawberryStep, AddIce2Step, ShakePourStep],
    price1: 0,
    price2: 0,
    price3: 0,
    price4: 0
  },
  {
    id: "MDRL",
    name: "Mango Dragonfruit Lemonade",
    code: "MDRL",
    steps: [ UseShakerStep, MangoDragfruitStep, AddLemonadeStep,
            DriedDragonfruitStep, AddIce2Step, ShakePourStep],
    price1: 0,
    price2: 0,
    price3: 0,
    price4: 0
  },
  {
    id: "PPRL",
    name: "Pineapple Passionfruit Lemonade",
    code: "PPRL",
    steps: [ UseShakerStep, PineapplePassionfruitStep, AddLemonadeStep,
            DriedPineappleStep, AddIce2Step, ShakePourStep],
    price1: 0,
    price2: 0,
    price3: 0,
    price4: 0
  },
  {
    id: "PNK",
    name: "Pink Drink",
    code: "PNK",
    steps: [ UseShakerStep, StrawberryAcaiStep, AddCoconutMilkStep, 
            DriedStrawberryStep, AddIce2Step, ShakePourStep],
    price1: 0,
    price2: 0,
    price3: 0,
    price4: 0
  },
  {
    id: "DD",
    name: "Dragon Drink",
    code: "DD",
    steps: [ UseShakerStep, MangoDragfruitStep, AddCoconutMilkStep,
            DriedDragonfruitStep, AddIce2Step, ShakePourStep],
    price1: 0,
    price2: 0,
    price3: 0,
    price4: 0
  },
  {
    id: "PD",
    name: "Paradise Drink",
    code: "PD",
    steps: [ UseShakerStep, PineapplePassionfruitStep, AddCoconutMilkStep,
            DriedPineappleStep, AddIce2Step, ShakePourStep],
    price1: 0,
    price2: 0,
    price3: 0,
    price4: 0
  }
]