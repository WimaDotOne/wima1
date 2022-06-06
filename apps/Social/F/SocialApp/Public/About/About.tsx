import { Div, LimitWidth } from "../../../../../../libs/Core/Core2/fCore2"
import { AppleNewsHeader1, StripeIntroText } from "../../../../../../libs/Pop/Pop2/fPop2"
import { SocialWindow } from "../../SocialWindow/SocialWindow"

export function About() {
  return(<>
    <SocialWindow>
      <LimitWidth maxWidth={800}>
        <AppleNewsHeader1 text1="Social" text2="in college" />
      </LimitWidth>

      <LimitWidth gray maxWidth={800}>
        <Div height={40} />
        <StripeIntroText title="Make friends &amp; money" 
          text1="Add photos with dialogs, turn your life into a movic."
          text2="Do I have ideas or scripts of a movie? Should I draft it into a movic?"
        />
        <Div height={50} />
      </LimitWidth>
    </SocialWindow>
  </>)
}