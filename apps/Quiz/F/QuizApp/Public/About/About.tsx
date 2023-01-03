import { Div, LimitWidth } from "../../../../../../libs/Core/Core2/fCore2"
import { AppleNewsHeader1, StripeIntroText } from "../../../../../../libs/Pop/Pop2/fPop2"
import { IQuizQuiz } from "../../../Model/IQuizQuiz"
import { QuizSheet } from "../../QuizPlayer/QuizSheet/QuizSheet"
import { QuizWindow } from "../../QuizWindow/QuizWindow"

export function About() {

  const exhibitQuiz: IQuizQuiz = {
    _id: "",
    title: "Don't speak perfect English",
    youTubeId: "owcuBux0pLE",
    questionsText: `
    "Can I do the stake?" means
    - Can I cook the stake?
    - Can I make the stake?
    - Can I offer the stake?
    -> Can I order the stake?
    ===
    "What does that come to?" means
    - What does it mean?
    - Where are you from?
    -> What is the total cost?
    - What is the result?
    ===
    Which sentence has a different meaning from the others?
    - Do you have anything going on tomorrow?
    -> Is something going to happen to you tomorrow?
    - Are you available tomorrow?
    - Do you want to hang out tomorrow?
    ===
    "It's on!" is short for
    - It's on my mind
    - It's on my plan
    -> It's on my schedule
    - It's turned on
    ===
    In in video, "That's so funny." means
    - It's comical
    - It's hilarious
    - It's fun
    -> It's a coincidence
    ===
    Which one has a different meaning from the others?
    -> I see that
    - I hear that
    - I agree with it
    - I feel the same
    ===
    Which one follows "Are you kidding me?" to be more dramatic
    - really
    - truly
    -> right now
    - before
    ===
    In the video, "I got you" means
    - I caught you
    -> I can pay for you
    - I played a joke on you
    - I saw you
    ===
    In the video, Kayla says, "I'm just going to hop on the freeway." To go home, she is going to
    -> drive
    - walk
    - jump
    - fly
    ===
    "I live around the corner from the grocery store." means
    - I live far away from the grocery store
    -> I live nearby the grocery store
    `
  }
  
  return(<>
    <QuizWindow>
      <LimitWidth maxWidth={800}>
        <AppleNewsHeader1 text1="Quiz" text2="For YouTube" />
      </LimitWidth>

      <LimitWidth gray maxWidth={800}>
        <Div height={40} />
        <StripeIntroText title="Designed for YouTube tutorial videos" 
          text1="Paste in a link of YouTube video. Add multiple choice questions and options. Share the link with your students."
          text2=""
        />
        <Div height={50} />
      </LimitWidth>
      <Div height={30} />
      <LimitWidth maxWidth={800}>
        <AppleNewsHeader1 text1="For example:" h={2} />
      </LimitWidth>
      <Div height={20} />
      <QuizSheet quiz={exhibitQuiz} />
    </QuizWindow>
  </>)
}