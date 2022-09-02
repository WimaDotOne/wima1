import { AppleWindowBottomBarFill, Div, LimitWidth } from "../../../../../../libs/Core/Core2/fCore2"
import { AppleNewsHeader1, DemoImage, StripeParagraph, StripeSectionHeader, StripeSubParagraph, StripeSubSectionHeader } from "../../../../../../libs/Pop/Pop2/fPop2"
import { SocialWindow } from "../../SocialWindow/SocialWindow"

export function Tutorial() {
  return(<>
    <SocialWindow>
      <LimitWidth maxWidth={1000}>
        <AppleNewsHeader1 text1="Tutorial" text2="How does Sociable work?" />
        <TutorialCore />
        <Div height={150} />
        <AppleWindowBottomBarFill />
      </LimitWidth>
    </SocialWindow>
  </>)
}

function TutorialCore() {
  return(<>
  <StripeSectionHeader text="Getting Started"/>
  <StripeParagraph>
    Step 1. Login in with your university email.
  </StripeParagraph>
  <StripeSubParagraph>
    All people you interact with in Sociable should have an email account of your university.
  </StripeSubParagraph>
  <StripeParagraph>
    Step 2. Create a profile.
  </StripeParagraph>
  <StripeSubParagraph>
    People in your university can see your profile when you post a need or service.
  </StripeSubParagraph>
  <StripeSubParagraph>
    One does not need a profile to view services, but a profile is required for posting or replying.
  </StripeSubParagraph>
  <StripeParagraph>
    Step 3. Post services that you want to provide.
  </StripeParagraph>
  <StripeSubParagraph>
    Posted "needs" can only be viewed, but cannot be replied. Only posted "services" and "goods" can be replied.
  </StripeSubParagraph>
  <StripeSubParagraph>
    If you want to charge for your service, simply type the information in the "Price" field. Payment is done in person. Sociable does not handle payment.
  </StripeSubParagraph>
  <StripeSubParagraph>
    If you see blank page of services or needs, that's because no one has posted anything yet.
  </StripeSubParagraph>
  <StripeParagraph>
    Step 4. Reply a service.
  </StripeParagraph>
  <StripeSubParagraph>
    When someone replies a service, both parties will receive emails including the information of the other's email address. The following communications to figure out details (e.g. how to meet up) should be done through emails outside Sociable.
  </StripeSubParagraph>
  <StripeSectionHeader text="Sociable use cases by Examples"/>
  <StripeSubSectionHeader text="Example 1. Conversational English" />
  <StripeParagraph>
  Fan is an international graduate student at University of Wisconsin at Madison. Kate, a native English speaker, is an undergraduate student at UW.
  </StripeParagraph>
  <StripeSubParagraph>
    Fan creates a profile, adds a need of a Conversational English tutor. He describes that he would like to chat with an English native speaker for 2 hours a week. In return he offers to buy a coffee or meal for each meeting.
  </StripeSubParagraph>
  <StripeSubParagraph>
    Kate sees Fan's post and creates a profile, adding a service of Conversational English Tutoring. She describes that she could meet and chat with a non-native speaker for 2 hours a week for 10 weeks during a semester. She would charge $7.5/hour.
  </StripeSubParagraph>
  <StripeSubParagraph>
    Fan replies to Kate' post, hence they get each other's wisc mail for future communications. They meet for 30 minutes to interview each other before agreeing on the tutoring. Kate occasionally corrects Fan's grammar and pronunciation, but mostly, they are just hanging out and chatting.
  </StripeSubParagraph>
  <DemoImage url="/apps/Social/TutorialImage/Meet.png" 
    height={350} vPadding={10} noShadow/>
  <StripeSubParagraph>
    Kate already spends 4 hours a week tutoring 2 people in Conversational English in a one-to-one format, and still receives replies to her post. So she goes back to her profile and removes her Conversational English service post.
  </StripeSubParagraph>
  <StripeSubParagraph>
    Next semester, Kate agrees to continue to tutor Fan for FREE. In return Fan helps Kate with a Calculus class.
  </StripeSubParagraph>
  <StripeSubSectionHeader text="Example 2. Trainer" />
  <StripeParagraph>
    Hermione majors in Physical Education. Margaret, a Biochemical Engineering major, jogs regularly. James, a Music major, wants to jog at least once a week but lacks motivation. Pomona is a botany professor who wants to exercise more as well.
  </StripeParagraph>
  <StripeSubParagraph>
    Hermione posts a service of Personal Running Coaching. She describes her training plan of five 1-hour sessions and lists a price of $10 a session.
  </StripeSubParagraph>
  <StripeSubParagraph>
    Margaret posts a service of Running Buddy. She lists her Wednesday jogging schedule and route in March, and welcomes everyone to join her for FREE during March.
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