import { RecipeImage } from "../RecipeImage"


export function StrawberryAcaiStep(size: string) {
  return {
    image: RecipeImage.StrawberryAcai,
    words: `Pour strawberry acai to ${size} tea line`
  }
}

export function MangoDragfruitStep(size: string) {
  return {
    image: RecipeImage.MangoDragonfruit,
    words: `Pour mango to ${size} tea line`
  }
}

export function PineapplePassionfruitStep(size: string) {
  return {
    image: RecipeImage.PineapplePassionfruit,
    words: `Pour pineapple passionfruit to ${size} tea line`
  }
}

export function DriedStrawberryStep() {
  return {
    image: RecipeImage.DriedStrawberry,
    words: "Add 4 or 5 pieces of dried strawberry"
  }
}

export function DriedDragonfruitStep() {
  return {
    image: RecipeImage.DriedDragonfruit,
    words: "Add 4 or 5 pieces of dried dragonfruit"
  }
}

export function DriedPineappleStep() {
  return {
    image: RecipeImage.DriedPineapple,
    words: "Add 4 or 5 pieces of dried pineapple"
  }
}

export function AddCoconutMilkStep(size: string) {
  return {
    image: RecipeImage.CoconutMilk,
    words: `Add coconut milk to ${size} water line`
  }
}