import { FourItemNavBar } from "../../../../../Lib/FourItemNavBar/FourItemNavBar"
import { LandingNavModel } from "../Landing/Landing"
import cl from "./GiveTips.module.scss"

interface IGiveTipsProp {

}

export function GiveTips({

}: IGiveTipsProp) {
  return(<>
  <div className={cl.giveTips}>
    <FourItemNavBar navModel={LandingNavModel} selected2 />
  </div>
  Give tips
  </>)
}