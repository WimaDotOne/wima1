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
        <StripeIntroText title="Help & Socialize" 
          text1="Socialize by offering help. Let people in the university know your superpower that might help others. Feel free to volunteer, barter, or charge your fellow students a friendly fee."
          text2="Making friends by asking for help. Write down and post the help you need or understand so that your fellow students know what helping-people business they can start."
        />
        <Div height={50} />
      </LimitWidth>
      <DemoImage url="/apps/Social/TutorialImage/College.png" 
        height={400} noShadow/>

      <LimitWidth gray maxWidth={800}>
        <Div height={40} />
        <StripeIntroText title="Idea behind Sociable" 
          text1="UW-Madison has a great student organization called GUTS (we're not associated with GUTS), which matches students with volunteering tutors. My favorite program is Conversational English. An international student is matched a with a native speaker to meet 2 hours a week to just hang out. It's a great way to build friendships from different cultures."
          text2="There are plenty of international students who could use a Conversational English partner, but there is a shortage of volunteering tutors. Sociable puts this online and allow tutors to charge a fee to encourage participation. At last, why stops at tutoring? Any type of face-to-face communication where one helps another has the potential to start a friendship."
        />
        <Div height={50} />
      </LimitWidth>

      <LimitWidth maxWidth={800}>
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
      <LimitWidth maxWidth={800} gray>
        <Div height={40} />
        <div className={cl.title}>Ideas or examples of help people might be able to provide</div>
        <div className={cl.examples}>
          <ServiceCard2 name="Piano Lessons" 
            shortDescription="I am a Music major. Can provide beginner piano lessons for $10/hour." />
          <ServiceCard2 name="Book Club" 
            shortDescription="I am available for reading a book together and meet for an afternoon discussion."/>
          <ServiceCard2 name="Math Tutoring"
            shortDescription="I am a math graduate student. Can help with Math 114 to Math 234 for $10/hour. Math 521, 522, 541 for free." />
          <ServiceCard2 name="Senior Advice"
            shortDescription="I am a senior, Psychology major. Can hang out an hour answering any questions about college life." />
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