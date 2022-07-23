import { AppleWindowBottomBarFill, Div, LimitWidth } from "../../../../../../libs/Core/Core2/fCore2"
import { AppleNewsHeader1, DemoImage, StripeParagraph, StripeSectionHeader, StripeSubParagraph, StripeSubSectionHeader } from "../../../../../../libs/Pop/Pop2/fPop2"
import { BookWindow } from "../../BookWindow/BookWindow"

export function Tutorial() {
  return(<>
    <BookWindow>
      <LimitWidth maxWidth={1000}>
        <AppleNewsHeader1 text1="Tutorial" text2="" />
        <TutorialCore />
        <Div height={150} />
        <AppleWindowBottomBarFill />
      </LimitWidth>
    </BookWindow>
  
  </>)
}

function TutorialCore() {
  return(<>
  <StripeSectionHeader text="How to make a book?"/>
  <StripeSubSectionHeader text="1. Create a project" />
  <StripeParagraph>Select menu option named "Projects" and click on "New Project". A project is represented as a folder.</StripeParagraph>
  <StripeSubSectionHeader text="2. Create a chapter" />
  <StripeParagraph>
    After going into a project folder. Open the folder named "Chapters". Click "New Chapter" to create a new chapter which consists of a text file and a settings file.
  </StripeParagraph>
  <StripeSubParagraph>
    Copy and past in the text of a chapter of your book in the text file.
  </StripeSubParagraph>
  <StripeSubParagraph>
    You can change chapter name in the settings file.
  </StripeSubParagraph>

  <StripeSectionHeader text="Tips to write a chapter"/>
  <StripeSubParagraph>
    A chapter can only have at most around 5000 characters.
  </StripeSubParagraph>
  <StripeSubParagraph>
    Our chapter text file is not really best for editing texts. It's better you write your book in a text file or first put into a text file and then copy and past it into our chapter text file.
  </StripeSubParagraph>

  <StripeSectionHeader text="How to share your book"/>
  <StripeParagraph>
    To get a website link for your book, check the "Public" option in the project settings. Then send the link to your friends.
  </StripeParagraph>
  </>)

  
}