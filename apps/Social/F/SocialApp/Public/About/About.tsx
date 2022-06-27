import { Div, LimitWidth } from "../../../../../../libs/Core/Core2/fCore2"
import { AppleNewsHeader1, DemoImage, StripeIntroText } from "../../../../../../libs/Pop/Pop2/fPop2"
import { NeedCard2 } from "../../H/NeedCard/NeedCard2"
import { ServiceCard2 } from "../../H/ServiceCard/ServiceCard2"
import { SocialWindow } from "../../SocialWindow/SocialWindow"
import cl from "./About.module.scss"

export function About() {
  return(<>
    <SocialWindow>
      <LimitWidth maxWidth={800}>
        <AppleNewsHeader1 text1="Sociable" text2="" />
      </LimitWidth>

      <LimitWidth gray maxWidth={800}>
        <Div height={40} />
        <StripeIntroText title="Help &amp; Make Friends" 
          text1="What do you need? Let people in your university know what you need so they can figure out what services might be useful to provide. Think things one person can help you with."
          text2="What is your superpower? Let people in your university know what kind of help you can provide to your fellow students. Feel free to volunteer, barter, or charge people a friendly price."
        />
        <Div height={50} />
      </LimitWidth>
      <DemoImage url="/apps/Social/TutorialImage/College.png" 
        height={400} noShadow/>
      <Div height={20} />
      <LimitWidth maxWidth={800} gray>
        <Div height={40} />
        <div className={cl.title}>Ideas or examples of help people might need</div>
        <div className={cl.examples}>
          <NeedCard2 name="Book Club" 
            shortDescription="I'm reading A Tree Grows in Brooklyn. Does someone who read the book want to meet up for an evening to discuss it?" />
          <NeedCard2 name="Conversational English Tutoring" 
            shortDescription="Meet & chat for 2 hours a week with a native English speaker."/>
          <NeedCard2 name="Chinese Tutoring"
            shortDescription="I'm taking Chinese 101. Can I borrow a study buddy for 1 hour a week during March?" />
          <NeedCard2 name="Moving Day Rental"
            shortDescription="Need a place to stay on the night of August 14." />
          <NeedCard2 name="Moving"
            shortDescription="Need help to move out of university dorm into a house" />
          <NeedCard2 name="Grocery Shopping" 
            shortDescription="I need a car ride to Woodman and back"/>
        </div>
        <Div height={40} />
      </LimitWidth>
      <LimitWidth maxWidth={800}>
        <Div height={40} />
        <div className={cl.title}>Ideas or examples of help people might be able to provide</div>
        <div className={cl.examples}>
          <ServiceCard2 name="Piano Lessons" 
            shortDescription="I am a Music major. Can provide beginner lessons for $10/hour." />
          <ServiceCard2 name="Book Club" 
            shortDescription="I am available for reading a book together and meet for an afternoon discussion."/>
          <ServiceCard2 name="Math Tutoring"
            shortDescription="I am a math graduate student. Can help with Math 114 to Math 234 for $10/hour. Math 521,522,531 for free." />
          <ServiceCard2 name="Senior Advice"
            shortDescription="I am a senior, Psychology major. Can hang out an hour answering random questions about college life." />
          <ServiceCard2 name="Moving"
            shortDescription="Can help moving for $10/hour." />
          <ServiceCard2 name="Rocket Science" 
            shortDescription="I kind of know how to build a rocket. Anything I can help you with?"/>
        </div>
        <Div height={100} />
      </LimitWidth>
    </SocialWindow>
  </>)
}