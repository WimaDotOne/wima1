import { HotSyrupCount } from "../HotLatte/HotLatteStep"

export function SteamAlmondMilkStep(size: string) {
  return {
    image: "pitcher.png",
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
    image: "pumpkin.jpg",
    words: `Add ${HotSyrupCount(size)} pumps of pumpkin syrup into cup`
  }
}

export function PeppermintStep(size: string) {
  return {
    image: "peppermint.jpg",
    words: `Add ${HotSyrupCount(size)} pumps of peppermint syrup into cup`
  }
}

export function ToastedWhiteChocolateMochaStep(size: string) {
  return {
    image: "toastedWhiteChocolateMocha.jpg",
    words: `Add ${HotSyrupCount(size)} pumps of toasted white chocolate mocha into cup`
  }
}

export function CaramelBruleeStep(size: string) {
  return {
    image: "caramelBrulee.jpg",
    words: `Add ${HotSyrupCount(size)} pumps of caramel brulee syrup into cup`
  }
}

export function SugarCookieStep(size: string) {
  return {
    image: "sugarCookie.jpg",
    words: `Add ${HotSyrupCount(size)} pumps of sugar cookie syrup into cup`
  }
}

export function PumpkinSpicePowderStep() {
  return {
    image: "pumpkinSpicePowder.jpg",
    words: "Add pumpkin spice powder"
  }
}

export function TwcmToppingStep() {
  return {
    image: "twcmTopping.jpg",
    words: "Add toasted white chocolate mocha topping"
  }
}

export function ChocolateCurlToppingStep() {
  return {
    image: "chocolateCurlTopping.jpg",
    words: "Add chocolate curl topping"
  }
}

export function CaramelBruleeToppingStep() {
  return {
    image: "caramelBruleeTopping.jpg",
    words: "Add caramel brulee topping"
  }
}

export function RedGreenToppingStep() {
  return {
    image: "redGreenTopping.jpg",
    words: "Add red green topping"
  }
}



