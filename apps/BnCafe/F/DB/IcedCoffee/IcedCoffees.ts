import { StirStep } from "../HotLatte/HotLatteStep";
import { AddIceLeaveRoomStep, AddIceStep } from "../IcedLatte/IcedLatteStep";
import { AddWaterToTopLineStep, BlendOn4Step, ColdBrewToBottomLineStep, FinishICCBStep, FinishVSCCBStep, IcedCoffeeToTopLineStep, IrishCreamSyrupIntoBlender, IrishCreamSyrupStep, UseFoamBlender, VanillaSweetCreamIntoBlender, VanillaSyrupStep } from "./IcedCoffeeStep";

export const BN_IcedCoffees = [
  {
    id: "IC",
    name: "Iced Coffee",
    code: "IC",
    canLightIce: true,
    steps: [IcedCoffeeToTopLineStep, AddIceStep],
    price1: 0,
    price2: 0,
    price3: 0
  },
  {
    id: "CB",
    name: "Cold Brew",
    code: "CB",
    canLightIce: true,
    steps: [ColdBrewToBottomLineStep, AddWaterToTopLineStep, AddIceStep],
    price1: 0,
    price2: 0,
    price3: 0
  },
  {
    id: "VSCCB",
    name: "Vanilla Sweet Cream Cold Brew",
    code: "VSCCB",
    canLightIce: true,
    steps: [VanillaSyrupStep, ColdBrewToBottomLineStep, StirStep,
      AddWaterToTopLineStep, AddIceLeaveRoomStep, FinishVSCCBStep],
    price1: 0,
    price2: 0,
    price3: 0
  },
  {
    id: "ICCB",
    name: "Irish Cream Cold Brew",
    code: "ICCB",
    canLightIce: true,
    steps: [IrishCreamSyrupStep, ColdBrewToBottomLineStep, StirStep, 
      AddWaterToTopLineStep, AddIceLeaveRoomStep, UseFoamBlender, 
      VanillaSweetCreamIntoBlender,
      IrishCreamSyrupIntoBlender, BlendOn4Step, FinishICCBStep],
    price1: 0,
    price2: 0,
    price3: 0
  },
]