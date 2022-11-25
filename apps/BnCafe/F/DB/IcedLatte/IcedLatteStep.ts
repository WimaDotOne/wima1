import { Size } from "../../Model/Size";
import { RecipeImage } from "../RecipeImage";

export function IcedSyrupCount(size: string) {
  switch(size) {
    case Size.Tall: return 3
    case Size.Grande: return 4
    case Size.Venti: return 6
  }
}

export function IcedEspressoInCupStep(size: string) {

  let shots = ""
  switch(size) {
    case Size.Tall: shots = "1 espresso shot"; break;
    case Size.Grande: shots = "2 espresso shots"; break;
    case Size.Venti: shots = "3 espresso shots"; break;
    default:
  }
  return {
    image: RecipeImage.EspressoShot,
    words: `Add ${shots} into cup`
  }
}

export function IcedMochaStep(size: string) {
  return {
    image: RecipeImage.MochaPump,
    words: `Add ${IcedSyrupCount(size)} pumps of mocha into cup`
  }
}

export function IcedWhiteChocolateMochaStep(size: string) {
  return {
    image: RecipeImage.WhiteChocolateMocha,
    words: `Add ${IcedSyrupCount(size)} pumps of white chocolatre mocha into cup`
  }
}


export function PourColdMilkMiddleLineStep() {
  return {
    image: RecipeImage.IcedCup,
    words: "Fill cold milk upto middle line of cup"
  }
}

export function PourColdMilkTopLineStep() {
  return {
    image: "",
    words: "Fill cold milk upto top line of cup"
  }
}


export function AddIceStep() {
  return {
    image: RecipeImage.Ice,
    words: "Fill cup with ice"
  }
}

export function AddIce2Step(size: string) {
  return {
    image: RecipeImage.Ice,
    words: `Add ice to ${size} ice line`
  }
}


