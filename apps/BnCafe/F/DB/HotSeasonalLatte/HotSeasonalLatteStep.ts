import { HotSyrupCount } from "../HotLatte/HotLatteStep"
import { RecipeImage } from "../RecipeImage"

export function SteamAlmondMilkStep(size: string) {
  return {
    image: RecipeImage.MilkPitcher,
    words: `Pour almond milk in pitcher to ${size} line. Steam it on Latte.`
  }
}

export function PourAlmondMilkStep() {
  return {
    image: "",
    words: "Free pour steamed almond milk into cup"
  }
}

export function PumpkinStep(size: string) {
  return {
    image: RecipeImage.Pumpkin,
    words: `Add ${HotSyrupCount(size)} pumps of pumpkin syrup into cup`
  }
}

export function PeppermintStep(size: string) {
  return {
    image: RecipeImage.Peppermint,
    words: `Add ${HotSyrupCount(size)} pumps of peppermint syrup into cup`
  }
}

export function ToastedWhiteChocolateMochaStep(size: string) {
  return {
    image: RecipeImage.ToastedWhiteChocolateMocha,
    words: `Add ${HotSyrupCount(size)} pumps of toasted white chocolate mocha into cup`
  }
}

export function CaramelBruleeStep(size: string) {
  return {
    image: RecipeImage.CaramelBrulee,
    words: `Add ${HotSyrupCount(size)} pumps of caramel brulee syrup into cup`
  }
}

export function SugarCookieStep(size: string) {
  return {
    image: RecipeImage.SugarCookie,
    words: `Add ${HotSyrupCount(size)} pumps of sugar cookie syrup into cup`
  }
}

export function PumpkinSpicePowderStep() {
  return {
    image: RecipeImage.PumpkinSpicePowder,
    words: "Add pumpkin spice powder"
  }
}

export function TwcmToppingStep() {
  return {
    image: RecipeImage.TwcmTopping,
    words: "Add toasted white chocolate mocha topping"
  }
}

export function ChocolateCurlToppingStep() {
  return {
    image: RecipeImage.ChocolateCurlTopping,
    words: "Add chocolate curl topping"
  }
}

export function CaramelBruleeToppingStep() {
  return {
    image: RecipeImage.CaramelBruleeTopping,
    words: "Add caramel brulee topping"
  }
}

export function RedGreenToppingStep() {
  return {
    image: RecipeImage.RedGreenTopping,
    words: "Add red green topping"
  }
}



