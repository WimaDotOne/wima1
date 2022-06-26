import { Div, LimitWidth } from "../../../../../../libs/Core/Core2/fCore2"
import { AppleNewsHeader1, DemoImage, StripeIntroText } from "../../../../../../libs/Pop/Pop2/fPop2"
import { SocialWindow } from "../../SocialWindow/SocialWindow"

export function About() {
  return(<>
    <SocialWindow>
      <LimitWidth maxWidth={800}>
        <AppleNewsHeader1 text1="Sociable" text2="" />
      </LimitWidth>

      <LimitWidth gray maxWidth={800}>
        <Div height={40} />
        <StripeIntroText title="Help &amp; Make Friends" 
          text1="What do you need? Let people in your university know what you need so they can figure out what services might be useful to provide."
          text2="What is your superpower? Let people in your university know what kind of help you can provide to your fellow students. Feel free to volunteer, barter, or charge people a friendly price."
        />
        <Div height={50} />
      </LimitWidth>
        <DemoImage url="/apps/Social/TutorialImage/College.png" 
          height={400} noShadow/>
    </SocialWindow>
  </>)
}