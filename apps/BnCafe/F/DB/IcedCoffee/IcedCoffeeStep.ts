import { Size } from "../../Model/Size";
import { RecipeImage } from "../RecipeImage";

function One234Pumps(size: string) {
  switch(size) {
    case Size.Tall: return "1 pump"
    case Size.Grande: return "2 pumps"
    case Size.Venti: return "3 pumps"
    case Size.Trenta: return "4 pumps"
  }
}

export function IcedCoffeeToTopLineStep() {
  return {
    image: RecipeImage.IcedCoffee,
    words: "Pour iced coffee into the cup upto top line"
  }
}

export function ColdBrewToBottomLineStep() {
  return {
    image: RecipeImage.ColdBrew,
    words: "Pour cold brew into the cup upto bottom line"
  }
}

export function AddWaterToTopLineStep() {
  return {
    image: RecipeImage.ColdWater,
    words: "Fill cup with water to top line"
  }
}

export function UseFoamBlender() {
  return {
    image: RecipeImage.FoamBlender,
    words: "Use a foam blender"
  }
}

export function VanillaSweetCreamIntoBlender() {
  return {
    image: RecipeImage.VanillaSweetCream,
    words: "Pour at least 100ml vanilla sweet cream into blender to submerge the blade"
  }
}

export function IrishCreamSyrupIntoBlender() {
  return {
    image: RecipeImage.IrishCreamSyrup,
    words: "Add 2 pumps of Irish cream syrup into blender"
  }
}

export function VanillaSyrupStep(size: string) {
  return {
    image: RecipeImage.VanillaSyrup,
    words: `Add ${One234Pumps(size)} of vanilla syrup into cup`
  }
}

export function IrishCreamSyrupStep(size: string) {
  return {
    image: RecipeImage.IrishCreamSyrup,
    words: `Add ${One234Pumps(size)} of Irish cream syrup into cup`
  }
}

export function BlendOn4Step() {
  return {
    image: RecipeImage.BlendOn1,
    words: `Blend the cream using button 4`
  }
}

export function FinishICCBStep() {
  return {
    image: RecipeImage.ICCB,
    words: `Pour the cold foam into cup and add ICCB topping`
  }
}

export function FinishVSCCBStep() {
  return {
    image: RecipeImage.VSCCB,
    words: `Pour vanilla sweet cream into cup`
  }
}