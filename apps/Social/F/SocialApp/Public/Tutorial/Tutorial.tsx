import { AppleWindowBottomBarFill, Div, LimitWidth } from "../../../../../../libs/Core/Core2/fCore2"
import { AppleNewsHeader1, DemoImage, StripeParagraph, StripeSectionHeader, StripeSubParagraph, StripeSubSectionHeader } from "../../../../../../libs/Pop/Pop2/fPop2"
import { SocialWindow } from "../../SocialWindow/SocialWindow"

export function Tutorial() {
  return(<>
    <SocialWindow>
      <LimitWidth maxWidth={1000}>
        <AppleNewsHeader1 text1="Tutorial" text2="How to be Sociable?" />
        <TutorialCore />
        <Div height={150} />
        <AppleWindowBottomBarFill />
      </LimitWidth>
    </SocialWindow>
  </>)
}

function TutorialCore() {
  return(<>
  <StripeSectionHeader text="Sociable use cases by Examples"/>
  <StripeSubSectionHeader text="Ex 1. Conversational English" />
  <StripeParagraph>
  Fan is an international graduate student at University of Wisconsin at Madison. Rivers, a native English speaker, is a undergraduate student at UW.
  </StripeParagraph>
  <StripeSubParagraph>
    Fan creates a profile, adds a need of a Conversational English tutor. He describes that he would like to chat with a English native speaker for 2 hours a week. In return he offers to buy a Starbucks drink or a meal like Chipotle for each meeting.  (Fan's post can only be viewed but not replied)
  </StripeSubParagraph>
  <StripeSubParagraph>
    Rivers sees Fan's post and creats a profile, adds a service of Conversational English Tutoring. She describes that she could meet and chat with a non-native speaker for 2 hours a week for 10 weeks during a semester. She would charge $7.5/hour.
  </StripeSubParagraph>
  <StripeSubParagraph>
    Fan replies to Rivers' post, hence they get each other's wisc mail for future communications. They meet for 30 minutes to interview each other before agreeing on the tutoring. Rivers occasionally corrects Fan's grammar or pronucications, but mostly, they are just hanging out and chat.
  </StripeSubParagraph>
  <DemoImage url="/apps/Social/TutorialImage/Meet.png" 
    height={350} vPadding={10} noShadow/>
  <StripeSubParagraph>
    Rivers already spends 4 hours a week tutoring 2 people Conversational English in a one-to-one format, and still receives replies to her post. So she goes back to her profile and removes her Conversational English service post.
  </StripeSubParagraph>
  <StripeSubParagraph>
    Next semester, Rivers agrees to continue to tutor Fan for free. In return Fan spends half the meeting time helping Rivers with Calculus.
  </StripeSubParagraph>
  <StripeSubSectionHeader text="Ex 2. Trainer" />
  <StripeParagraph>
    Hermione majors in Physical Education. Margaret, an Biochemical Engineering major, jogs regularly. James, a Music major, wants to jog at least once a week but lacks motivation. Pomona is a botany professor who wants to exercise more.
  </StripeParagraph>
  <StripeSubParagraph>
    Hermione posts a service of Personal Running Coaching. She describes her training plan of five 1-hour sessions and lists a price of $10 a session.
  </StripeSubParagraph>
  <StripeSubParagraph>
    Margaret posts a service of Running Buddy. She lists her Wednsday joggying schedule and route in March, and says anyone is welcome to join her for free during March.
  </StripeSubParagraph>
  <DemoImage url="/apps/Social/TutorialImage/Run.jpg" 
          height={400} noShadow/>
  <StripeSubParagraph>
    Pomona replies to Herminone's post. They arrange time through emails and start the training session two weeks later.
  </StripeSubParagraph>
  <StripeSubParagraph>
    James replies to Margaret's post. They arrange time through emails and start jogging together the next Wednesday.
  </StripeSubParagraph>
  </>)

    
  
}