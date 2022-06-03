import { Div, LimitWidth } from "../../../../../../libs/Core/Core2/fCore2"
import { AppleNewsHeader1, StripeIntroText } from "../../../../../../libs/Pop/Pop2/fPop2"
import { MovicWindow } from "../../MovicWindow/MovicWindow"
import cl from "./About.module.scss"
import { Exhibit } from "./Exhibit/Exhibit"

export function About() {
  return(<>
    <MovicWindow>
      <LimitWidth maxWidth={800}>
        <AppleNewsHeader1 text1="Movic" text2="= movie + comic" />
        <Div height={10} />
        <Exhibit />
        <Div height={10} />
      </LimitWidth>

      <LimitWidth gray maxWidth={800}>
        <Div height={40} />
        <StripeIntroText title="If we were a movie" 
          text1="Add photos with dialogs, turn your life into a movic."
          text2="Do I have ideas or scripts of a movie? Should I draft it into a movic?"
        />
        <Div height={50} />
      </LimitWidth>
    </MovicWindow>
  </>)
}