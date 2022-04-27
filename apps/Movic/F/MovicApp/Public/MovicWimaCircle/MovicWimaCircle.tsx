import { Div, LimitWidth } from "../../../../../../libs/Core/Core2/fCore2"
import { AppleNewsHeader1, StripeIntroText } from "../../../../../../libs/Pop/Pop2/fPop2"
import { WimaCircle } from "../../../../../WimaHome/F/WimaCircle/WimaCircle"
import { MovicWindow } from "../../MovicWindow/MovicWindow"
import cl from "./MovicWimaCircle.module.scss"

export function MovicWimaCircle() {
  return(<>
    <MovicWindow>
      <div className={cl.wimaCirlceWrap}>
        <WimaCircle />
      </div>
    </MovicWindow>
  </>)
}