import { FourItemNavBar } from "../../../../../Lib/FourItemNavBar/FourItemNavBar"
import { LandingNavModel } from "../Landing/Landing"
import cl from "./FAQ.module.scss"

interface IFAQProp {

}

export function FAQ({

}: IFAQProp) {
  return(<>
  <div className={cl.faq}>
    <FourItemNavBar navModel={LandingNavModel} selected1/>
  </div>
  FAQ
  </>)
} 