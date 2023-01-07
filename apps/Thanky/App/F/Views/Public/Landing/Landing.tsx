import { FourItemNavBar } from "../../../../../Lib/FourItemNavBar/FourItemNavBar"
import cl from "./Landing.module.scss"

interface ILandingProp {

}

export function Landing({

}: ILandingProp) {
  return(<>
    <div className={cl.background}>
      <FourItemNavBar 
          homeIconUrl='/apps/WimaHome/AppIcons/thanky.png'
          text1="FAQ"
          text2="Give tips"
          text3="Login"
          text4="Sign up"
          homeRoute="/apps/Thanky"
          route1="/apps/Thanky/FAQ"
          route2="/apps/Thanky/GiveTips"
          route3="/apps/Thanky/Login"
          route4="/apps/Thanky/Signup"
        />
    </div>
  </>)
}