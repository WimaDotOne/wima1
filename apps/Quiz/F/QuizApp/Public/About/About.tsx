import { Div, LimitWidth } from "../../../../../../libs/Core/Core2/fCore2"
import { AppleNewsHeader1, StripeIntroText } from "../../../../../../libs/Pop/Pop2/fPop2"
import { QuizWindow } from "../../QuizWindow/QuizWindow"

export function About() {
  return(<>
    <QuizWindow>
      <LimitWidth maxWidth={800}>
        <AppleNewsHeader1 text1="Quiz" text2="" />
      </LimitWidth>

      <LimitWidth gray maxWidth={800}>
        <Div height={40} />
        <StripeIntroText title="Make a Quiz for your YouTube videos" 
          text1="Paste in a link of YouTube video. Add multiple choice questions and options."
          text2="Designed for Tutorial YouTube videos"
        />
        <Div height={50} />
      </LimitWidth>
    </QuizWindow>
  </>)
}