import { AddIce2Step, AddIceStep } from "../IcedLatte/IcedLatteStep";
import { AddLemonadeStep, AddWaterStep, BlackIcedTeaStep, GreenIcedTeaStep, PassionIcedTeaStep, ShakePourStep, UseShakerStep } from "./IcedTeaSteps";

export const BN_IcedTeas = [
  {
    id: "BIT",
    name: "Black Iced Tea",
    code: "BIT",
    steps: [ UseShakerStep, BlackIcedTeaStep, 
            AddWaterStep, AddIce2Step, ShakePourStep],
    price1: 0,
    price2: 0,
    price3: 0,
    price4: 0
  },
  {
    id: "GIT",
    name: "Green Iced Tea",
    code: "GIT",
    steps: [ UseShakerStep, GreenIcedTeaStep,
            AddWaterStep, AddIce2Step, ShakePourStep],
    price1: 0,
    price2: 0,
    price3: 0,
    price4: 0
  },
  {
    id: "PIT",
    name: "Passion Iced Tea",
    code: "PIT",
    steps: [ UseShakerStep, PassionIcedTeaStep, 
            AddWaterStep, AddIce2Step, ShakePourStep],
    price1: 0,
    price2: 0,
    price3: 0,
    price4: 0
  },
  {
    id: "BITL",
    name: "Black Iced Tea Lemonade",
    code: "BITL",
    steps: [ UseShakerStep, BlackIcedTeaStep,
            AddLemonadeStep, AddIce2Step, ShakePourStep],
    price1: 0,
    price2: 0,
    price3: 0,
    price4: 0
  },
  {
    id: "GITL",
    name: "Green Iced Tea Lemonade",
    code: "GITL",
    steps: [ UseShakerStep, GreenIcedTeaStep,
            AddLemonadeStep, AddIce2Step, ShakePourStep],
    price1: 0,
    price2: 0,
    price3: 0,
    price4: 0
  },
  {
    id: "PITL",
    name: "Passion Iced Tea Lemonade",
    code: "PITL",
    steps: [ UseShakerStep, PassionIcedTeaStep,
            AddLemonadeStep, AddIce2Step, ShakePourStep],
    price1: 0,
    price2: 0,
    price3: 0,
    price4: 0
  },
]