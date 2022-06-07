import { Div, LimitWidth } from "../../../../../../libs/Core/Core2/fCore2"
import { AppleNewsHeader1, StripeIntroText } from "../../../../../../libs/Pop/Pop2/fPop2"
import { SocialWindow } from "../../SocialWindow/SocialWindow"

export function About() {
  return(<>
    <SocialWindow>
      <LimitWidth maxWidth={800}>
        <AppleNewsHeader1 text1="Social" text2="" />
      </LimitWidth>

      <LimitWidth gray maxWidth={800}>
        <Div height={40} />
        <StripeIntroText title="Ask for help &amp; Help" 
          text1="Let people in your university know what kind of help you need."
          text2="Let people in your university know what kind of help you can provide. Help people while socializing or making money."
        />
        <Div height={50} />
      </LimitWidth>
    </SocialWindow>
  </>)
}