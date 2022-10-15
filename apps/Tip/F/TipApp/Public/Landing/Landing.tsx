
import { BigIconButton } from "../../../../../../libs/Core/Core1/StripeLogin/F/View/Login/LoginCard/ChooseLoginMethod/BigIconButton/BigIconButton"
import { BigButton, Button1, Div, LimitWidth } from "../../../../../../libs/Core/Core2/fCore2"
import { TipHeader } from "../../../../../../libs/Pop/Pop2/fPop2"
import { TipWindow } from "../../TipWindow/TipWindow"
import cl from "./Landing.module.scss"

export function Landing() {

  function onClickIAcceptTip() {

  }
  return(<>
  <TipWindow>
    <LimitWidth beige>
      <Div height={20} />
      <TipHeader text1="Tip or write a thank you note"
        text2="Practice being generous & kind. Giving can be more fun than receiving, sometimes."
        imageUrl="/apps/Tip/Illustration/tip.png" />
      <Div height={20} />
    </LimitWidth>

    <LimitWidth>
      <div className={cl.giveAcceptTips}>
        <BigButton text="Give tips" onClick={onClickIAcceptTip} color=""/>
        <BigButton text="Accept tips" onClick={onClickIAcceptTip} color="salmon"/>
      </div>
    </LimitWidth>
  </TipWindow>
  </>)
}