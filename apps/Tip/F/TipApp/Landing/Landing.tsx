
import { Div, LimitWidth } from "../../../../../libs/Core/Core2/fCore2"
import { StripeHeader1, TipHeader } from "../../../../../libs/Pop/Pop2/fPop2"
import { TipWindow } from "../TipWindow/TipWindow"
import cl from "./Landing.module.scss"

export function Landing() {
  return(<>
  <TipWindow>
    <LimitWidth beige>
      <Div height={20} />
      <TipHeader text1="Tip or write a thank you note"
        text2="Practice being generous & kind. Giving can be more fun than receiving, sometimes."
        imageUrl="/apps/Tip/Illustration/tip.png" />
      <Div height={20} />
    </LimitWidth>
  </TipWindow>
  </>)
}