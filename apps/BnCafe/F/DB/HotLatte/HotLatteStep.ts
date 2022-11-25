import { Size } from "../../Model/Size";

export function HotSyrupCount(size: string) {
  switch(size) {
    case Size.Tall: return 3
    case Size.Grande: return 4
    case Size.Venti: return 5
  }
}

export function StirStep() {
  return {
    image: "stirSpoon.jpg",
    words: "Stir to dissolve the syrup"
  }
}

export function WhippedCreamStep() {
  return {
    image: "whippedCreamDispenser.jpg",
    words: "Add whipped cream."
  }
}

export function MochaStep(size: string) {
  return {
    image: "mochaPump.jpg",
    words: `Add ${HotSyrupCount(size)} pumps of mocha into cup`
  }
}

export function WhiteChocolateMochaStep(size: string) {
  return {
    image: "whiteChocolateMocha.jpg",
    words: `Add ${HotSyrupCount(size)} pumps of white chocolatre mocha into cup`
  }
}

export function SteamLatteStep(size: string) {
  return {
    image: "milkPitcher.jpg",
    words: `Pour 2% milk in pitcher to ${size} line. Steam it on Latte.`
  }
}

export function SteamWholeMilkStep(size: string) {
  return {
    image: "milkPitcher.jpg",
    words: `Pour whole milk in pitcher to ${size} line. Steam it on Latte.`
  }
}

export function SteamCappuccinoStep(size: string) {
  return {
    image: "milkPitcher.jpg",
    words: `Pour 2% milk in pitcher to ${size} line. Steam it on Cappuccino.`
  }
}

export function ExpressoInCupStep(size: string) {

  const shots = size === Size.Tall ? "1 espresso shot" : "2 espresso shots"
  return {
    image: "espressoShot.jpg",
    words: `Add ${shots} into cup`
  }
}

export function ExpressoInPitcherStep(size: string) {

  const shots = size === Size.Tall ? "1 espresso shot" : "2 espresso shots"
  return {
    image: "espressoShot.jpg",
    words: `Add ${shots} into shot pitcher`
  }
}

export function RistrettoInCupStep(size: string) {

  let shots = ""
  switch (size) {
    case Size.Tall: shots = "2 ristretto shots"; break;
    case Size.Grande: shots = "3 ristretto shots"; break;
    case Size.Venti: shots = "4 ristretto shots"; break;
  }
  return {
    image: "espressoShot.jpg",
    words: `Add ${shots} into cup`
  }
}

export function PourLatteStep() {
  return {
    image: "",
    words: "Free pour steamed milk into cup"
  }
}

export function PourCappuccinoStep() {
  return {
    image: "",
    words: "Free pour some steamed milk into the cup and then use a spoon to scoop foam to fill the cup"
  }
}
