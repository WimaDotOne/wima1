import { Div, LimitWidth } from "../../../../../../libs/Core/Core2/fCore2"
import { AppleNewsHeader1, StripeIntroText } from "../../../../../../libs/Pop/Pop2/fPop2"
import { StoryWindow } from "../../StoryWindow/StoryWindow"

export function About() {
  return(<>
    <StoryWindow>
      <LimitWidth maxWidth={800}>
        <AppleNewsHeader1 text1="Story" text2="publish short stories" />
      </LimitWidth>

      <LimitWidth gray maxWidth={800}>
        <Div height={40} />
        <StripeIntroText title="E-story" 
          text1="Write a short story for practice or for fun."
          text2="Share it with your friends and let people read your work in an e-book format."
        />
        <Div height={50} />
      </LimitWidth>
      <LimitWidth maxWidth={800}>
        <Div height={10} />
        <Div height={50} />
      </LimitWidth>
    </StoryWindow>
  </>)
}