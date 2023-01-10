import { Div, LimitWidth } from "../../../../../../../libs/Core/Core2/fCore2"
import { Afaq } from "../../../../../Lib/Afaq/Afaq"
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
      <IceCreamWoodButton text="Contact" 
        onClick={openContactUs}/>
    </div>
    <Div height={20} />
  </div>
  <Div height={20} />
  <LimitWidth maxWidth={800}>
    <Afaq question="Who can use Thanky to accept tips?" 
      answerParagrahs={[
        "The only requirement is that your service is associated with an establishemnt with a physical location and you serve people face to face.",
        "You can be a waitress at a restaurant. You can be a cashier at a grocery store. You can be a voluteering tutor at a university."
      ]} />
    <Afaq question="How employees get tips?" 
      answerParagrahs={[
        "Your tips will go to your local bank account. There’s a one-time process of connecting your Stripe account. Creating a Stripe account is free."
      ]}
    />
    <Afaq question="How can customers tip?"
      answerParagrahs={[
        "We support all major credit and debit cards"
      ]}
    />
    <Afaq question="Is there a fee to use Thanky?"
      answerParagrahs={[
        "We do not charge a monthly fee. All features are free for everyone.",
        "When a customer tips a server using credit card, a transaction fee of 2.9% and 50 cents will be taken away from the tip."
      ]}
    />
  </LimitWidth>
  <Div height={100} />
  </>)
} 