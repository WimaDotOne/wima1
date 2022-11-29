import { AddIceShakerStep } from "../IcedLatte/IcedLatteStep";
import { AddLemonadeStep, AddWaterStep, ShakePourStep, UseShakerStep } from "../IcedTea/IcedTeaSteps";
import { AddCoconutMilkStep, DriedDragonfruitStep, DriedPineappleStep, DriedStrawberryStep, MangoDragfruitStep, PineapplePassionfruitStep, StrawberryAcaiStep } from "./RefresherStep";

export const BN_Refreshers = [
  {
    id: "SAR",
    name: "Strawberry Acai [Lemonade]",
    code: " SAR [L] ",
    canLightIce: true,
    steps: [ UseShakerStep, StrawberryAcaiStep, AddWaterStep, AddLemonadeStep,
            DriedStrawberryStep, AddIceShakerStep, ShakePourStep],
    price1: 0,
    price2: 0,
    price3: 0,
    price4: 0
  },
  {
    id: "MDR",
    name: "Mango Dragonfruit [Lemonade]",
    code: " MDR [L] ",
    canLightIce: true,
    steps: [ UseShakerStep, MangoDragfruitStep, AddWaterStep, AddLemonadeStep,
            DriedDragonfruitStep, AddIceShakerStep, ShakePourStep],
    price1: 0,
    price2: 0,
    price3: 0,
    price4: 0
  },
  {
    id: "PPR",
    name: "Pineapple Passionfruit [Lemonade]",
    code: " PPR [L] ",
    canLightIce: true,
    steps: [ UseShakerStep, PineapplePassionfruitStep, AddWaterStep, AddLemonadeStep,
            DriedPineappleStep, AddIceShakerStep, ShakePourStep],
    price1: 0,
    price2: 0,
    price3: 0,
    price4: 0
  },
  {
    id: "PNK",
    name: "Pink Drink",
    code: "PNK",
    canLightIce: true,
    steps: [ UseShakerStep, StrawberryAcaiStep, AddCoconutMilkStep, 
            DriedStrawberryStep, AddIceShakerStep, ShakePourStep],
    price1: 0,
    price2: 0,
    price3: 0,
    price4: 0
  },
  {
    id: "DD",
    name: "Dragon Drink",
    code: "DD",
    canLightIce: true,
    steps: [ UseShakerStep, MangoDragfruitStep, AddCoconutMilkStep,
            DriedDragonfruitStep, AddIceShakerStep, ShakePourStep],
    price1: 0,
    price2: 0,
    price3: 0,
    price4: 0
  },
  {
    id: "PD",
    name: "Paradise Drink",
    code: "PD",
    canLightIce: true,
    steps: [ UseShakerStep, PineapplePassionfruitStep, AddCoconutMilkStep,
            DriedPineappleStep, AddIceShakerStep, ShakePourStep],
    price1: 0,
    price2: 0,
    price3: 0,
    price4: 0
  }
]