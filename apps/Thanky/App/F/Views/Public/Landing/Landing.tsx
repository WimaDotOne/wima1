import { FourItemNavBar } from "../../../../../Lib/FourItemNavBar/FourItemNavBar"
import { HeroHeader } from "../../../../../Lib/HeroHeader/HeroHeader"
import { TwoStickyNotes } from "../../../../../Lib/TwoStickyNotes/TwoStickyNotes"
import cl from "./Landing.module.scss"

interface ILandingProp {

}

export function Landing({

}: ILandingProp) {
  return(<>
    <div className={cl.landing}>
      <FourItemNavBar navModel={LandingNavModel} />
      <HeroHeader bigWords="A tip is worth a thousand thankies"
        smallWords="Tip online when there is no tip jar."
      />
      <TwoStickyNotes title1="To employees:"
        text1="Find your establisment, add a photo, tell your customers."
        title2="To customers:"
        text2="Didn't see a tip jar? Ask your servers if they accept tips online @ Thanky."
      />
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