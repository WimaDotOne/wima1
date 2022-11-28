import { RecipeImage } from "../RecipeImage"


export function UseShakerStep() {
  return {
    image: RecipeImage.Shaker,
    words: "Use a shaker"
  }
}

export function BlackIcedTeaStep(size: string) {
  return {
    image: "",
    words: `Pour black iced tea to ${size} tea line`
  }
}

export function GreenIcedTeaStep(size: string) {
  return {
    image: "",
    words: `Pour green iced tea to ${size} tea line`
  }
}

export function PassionIcedTeaStep(size: string) {
  return {
    image: "",
    words: `Pour passion iced tea to ${size} tea line`
  }
}

export function AddWaterStep(size: string) {
  return {
    image: RecipeImage.ColdWater,
    words: `Add water to ${size} water line`
  }
}

export function AddLemonadeStep(size: string) {
  return {
    image: RecipeImage.Lemonade,
    words: `If "lemonade", add lemonade instead of water to ${size} water line`
  }
}

export function ShakePourStep() {
  return {
    image: "",
    words: "Shake it. Pour it into the cup"
  }
}