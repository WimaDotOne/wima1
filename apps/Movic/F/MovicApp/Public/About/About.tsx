import { Div, LimitWidth } from "../../../../../../libs/Core/Core2/fCore2"
import { AppleNewsHeader1, StripeIntroText } from "../../../../../../libs/Pop/Pop2/fPop2"
import { MovicWindow } from "../../H/MovicWindow/MovicWindow"
import cl from "./About.module.scss"

export function About() {
  return(<>
    <MovicWindow>
      <LimitWidth maxWidth={800}>
        <AppleNewsHeader1 text1="Movic" text2="If we were a movie" />
      </LimitWidth>
      <LimitWidth gray maxWidth={800}>
        <Div height={40} />
        <StripeIntroText title="What is Movic?" 
          text1="Do you have a funny story or an interesting plot to tell? Do you think some moments of your life is just like a movie? Do you have an idea of a movie plot? Be a director of your life."
          text2="Think 'movic' as a movie in the form of a comic strip. You and your friends make your own short movic by taking pictures and add lines of conversations. It's that simple!"
        />
        <Div height={50} />
      </LimitWidth>
    </MovicWindow>
  </>)
}