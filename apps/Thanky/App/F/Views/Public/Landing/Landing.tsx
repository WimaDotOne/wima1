import { FourItemNavBar } from "../../../../../Lib/FourItemNavBar/FourItemNavBar"
import cl from "./Landing.module.scss"

interface ILandingProp {

}

export function Landing({

}: ILandingProp) {
  return(<>
    <div className={cl.landing}>
      <FourItemNavBar navModel={LandingNavModel} />
    </div>
  </>)
}

export const LandingNavModel = {
  homeIconUrl: '/apps/WimaHome/AppIcons/thanky.png',
  text1: "FAQ",
  text2: "Give tips",
  text4: "Login",
  homeRoute: "/apps/Thanky",
  route1: "/apps/Thanky/FAQ",
  route2: "/apps/Thanky/GiveTips",
  route4: "/apps/Thanky/Login"
}