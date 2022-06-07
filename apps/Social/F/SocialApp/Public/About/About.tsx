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
        <StripeIntroText title="We're the world, we're the children." 
          text1="Let people in your university know what kind of help you need or others might need."
          text2="Let people in your university know what kind of help you can provide. Make friends or make money."
        />
        <Div height={50} />
      </LimitWidth>
    </SocialWindow>
  </>)
}