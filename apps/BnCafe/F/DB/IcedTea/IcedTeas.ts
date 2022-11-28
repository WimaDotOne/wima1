import { AddIceShakerStep, AddIceStep } from "../IcedLatte/IcedLatteStep";
import { AddLemonadeStep, AddWaterStep, BlackIcedTeaStep, GreenIcedTeaStep, PassionIcedTeaStep, ShakePourStep, UseShakerStep } from "./IcedTeaSteps";

export const BN_IcedTeas = [
  {
    id: "BIT",
    name: "Black Iced Tea [Lemonade]",
    code: " BIT [L] ",
    steps: [ UseShakerStep, BlackIcedTeaStep, 
            AddWaterStep, AddLemonadeStep, AddIceShakerStep, ShakePourStep],
    price1: 0,
    price2: 0,
    price3: 0,
    price4: 0
  },
  {
    id: "GIT",
    name: "Green Iced Tea [Lemonade]",
    code: " GIT [L] ",
    steps: [ UseShakerStep, GreenIcedTeaStep,
            AddWaterStep, AddLemonadeStep, AddIceShakerStep, ShakePourStep],
    price1: 0,
    price2: 0,
    price3: 0,
    price4: 0
  },
  {
    id: "PIT",
    name: "Passion Iced Tea [Lemonade]",
    code: " PIT [L] ",
    steps: [ UseShakerStep, PassionIcedTeaStep, 
            AddWaterStep, AddLemonadeStep, AddIceShakerStep, ShakePourStep],
    price1: 0,
    price2: 0,
    price3: 0,
    price4: 0
  }
]