import { Two34 } from "../HotLatte/HotLatteStep"
import { RecipeImage } from "../RecipeImage"

export function AmericanoShotsInCupStep(size: string) {
  return {
    image: RecipeImage.EspressoShot,
    words: `Add ${Two34(size)} espresso shots into cup`
  }
}

export function HotWaterStep(size: string) {
  return {
    image: RecipeImage.HotWater,
    words: `Fill cup with hot water`
  }
}