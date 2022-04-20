import { Div, LimitWidth } from "../../../../../../libs/Core/Core2/fCore2"
import { AppleNewsHeader1, StripeIntroText } from "../../../../../../libs/Pop/Pop2/fPop2"
import { MovicWindow } from "../../MovicWindow/MovicWindow"
import cl from "./About.module.scss"

export function About() {
  return(<>
    <MovicWindow>
      <LimitWidth maxWidth={800}>
        <AppleNewsHeader1 text1="Movic" text2="movie + comic" />
      </LimitWidth>
      <LimitWidth gray maxWidth={800}>
        <Div height={40} />
        <StripeIntroText title="If we were a movie" 
          text1="Take a few dozens of film stills, and add back the lines from the movie, one turns a movie into a movic."
          text2="Take a few dozens of photos with friends in it, and add what you would say, you turn your life into a movic."
        />
        <Div height={50} />
      </LimitWidth>
    </MovicWindow>
  </>)
}