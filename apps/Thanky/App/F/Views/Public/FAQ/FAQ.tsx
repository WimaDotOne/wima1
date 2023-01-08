import { Div } from "../../../../../../../libs/Core/Core2/fCore2"
import { FourItemNavBar } from "../../../../../Lib/FourItemNavBar/FourItemNavBar"
import { HeroHeader } from "../../../../../Lib/HeroHeader/HeroHeader"
import { IceCreamWoodButton } from "../../../../../Lib/IceCreamWoodButton/IceCreamWoodButton"
import { LandingNavModel } from "../Landing/Landing"
import cl from "./FAQ.module.scss"

interface IFAQProp {

}

export function FAQ({

}: IFAQProp) {

  function openContactUs() {
    if(!window) return
    window.open("/apps/Login/Contact/WimaContact/", "_blank")
  }
  return(<>
  <div className={cl.faq}>
    <FourItemNavBar navModel={LandingNavModel} selected1/>
    <HeroHeader h2
      bigWords="Frequently Asked Questions."
      smallWords="If you can't find an answer that you're looking for, feel free to email us."
    />
    <div className={cl.buttonsSpace}>
      <IceCreamWoodButton text="Contact us" 
        onClick={openContactUs}/>
    </div>
    <Div height={20} />
  </div>
  </>)
} 