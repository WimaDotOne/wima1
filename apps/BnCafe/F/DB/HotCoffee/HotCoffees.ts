import { AmericanoShotsInCupStep, HotWaterStep } from "./HotCoffeeStep";

export const BN_HotCoffees = [
  {
    id: "A",
    name: "Americano",
    code: "A",
    canDecaf: true,
    steps: [AmericanoShotsInCupStep, HotWaterStep],
    price1: 0,
    price2: 0,
    price3: 0
  }
]