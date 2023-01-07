import { FourItemNavBar } from "../../../../../Lib/FourItemNavBar/FourItemNavBar"
import { LandingNavModel } from "../Landing/Landing"
import cl from "./GiveTips.module.scss"

interface IGiveTipsProp {

}

export function GiveTips({

}: IGiveTipsProp) {
  return(<>
  <FourItemNavBar navModel={LandingNavModel} selected2 />
  Give tips
  </>)
}