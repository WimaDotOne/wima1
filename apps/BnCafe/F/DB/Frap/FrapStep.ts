import { Size } from "../../Model/Size"
import { RecipeImage } from "../RecipeImage"

function Two34(size: string) {
  switch(size) {
    case Size.Tall: return 2
    case Size.Grande: return 3
    case Size.Venti: return 4
    default: return 0
  }
}

function One22(size: string) {
  switch(size) {
    case Size.Tall: return 1
    case Size.Grande: return 2
    case Size.Venti: return 2
    default: return 0
  }
}

export function FrapRoastStep(size: string) {
  return {
    image: RecipeImage.FrapRoast,
    words: `Add ${Two34(size)} pumps of frap roast into the cup`
  }
}

export function AddWholeMilkBottomLineStep() {
  return {
    image: RecipeImage.WholeMilk,
    words: "Add whole milk into cup fill up to bottom line"
  }
}

export function PourIntoBlenderStep() {
  return {
    image: RecipeImage.Blender,
    words: "Pour the cup content into blender"
  }
}

export function VanillaBeanStep(size: string) {
  return {
    image: RecipeImage.VanillaBeanPowder,
    words: `Add ${Two34(size)} scoops of vanilla bean powder into blender`
  }
}

export function CreamBaseStep(size: string) {
  return {
    image: RecipeImage.CreamBase,
    words: `Add ${Two34(size)} pumps of cream base into blender`
  }
}

export function CoffeeBaseStep(size: string) {
  return {
    image: RecipeImage.CoffeeBase,
    words: `Add ${Two34(size)} pumps of coffee base into blender`
  }
}

export function BlendOn1Step() {
  return {
    image: RecipeImage.BlendOn1,
    words: "Put on lid and press button 1 to blend"
  }
}

export function PourOutOfBlender() {
  return {
    image: RecipeImage.Frap,
    words: "Pour blender content into the cup"
  }
}

export function CaramelDrizzleStep() {
  return {
    image: RecipeImage.CaramelDrizzle,
    words: "Add caramel drizzle"
  }
}

export function CaramelSyrupIntoBlender(size: string) {
  return {
    image: RecipeImage.CaramelSyrup,
    words: `Add ${One22(size)} caramel syrup into blender`
  }
}

export function ClassicSyrupIntoBlender(size: string) {
  return {
    image: RecipeImage.ClassicSyrup,
    words: `Add ${One22(size)} classic syrup into blender`
  }
}

export function MochaIntoBlenderStep(size: string) {
  return {
    image: RecipeImage.MochaPump,
    words: `Add ${One22(size)} mocha into blender`
  }
}

export function ChocolateChipIntoBlenderStep(size: string) {
  return {
    image: RecipeImage.ChocolateChips,
    words: `Add ${Two34(size)} scoops of chocolate chips into blender`
  }
}

export function StrawberryPureeStep(size: string) {
  return {
    image: RecipeImage.StrawberryPuree,
    words: `Add a thin layer of strawberry puree at the bottom of the cup.`
  }
}

