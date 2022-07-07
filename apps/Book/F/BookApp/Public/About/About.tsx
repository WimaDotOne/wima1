import { Div, LimitWidth } from "../../../../../../libs/Core/Core2/fCore2"
import { AppleNewsHeader1, StripeIntroText } from "../../../../../../libs/Pop/Pop2/fPop2"
import { BookWindow } from "../../BookWindow/BookWindow"

export function About() {
  return(<>
    <BookWindow>
      <LimitWidth maxWidth={800}>
        <AppleNewsHeader1 text1="Book" text2="publish short stories" />
      </LimitWidth>

      <LimitWidth gray maxWidth={800}>
        <Div height={40} />
        <StripeIntroText title="E-book" 
          text1="Write a short book for practice or for fun."
          text2="Share it with your friends and let people read your work in an e-book format."
        />
        <Div height={50} />
      </LimitWidth>
      <LimitWidth maxWidth={800}>
        <Div height={10} />
        <Div height={50} />
      </LimitWidth>
    </BookWindow>
  </>)
}