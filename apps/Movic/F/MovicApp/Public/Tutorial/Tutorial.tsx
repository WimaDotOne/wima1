import { AppleWindowBottomBarFill, Div, LimitWidth } from "../../../../../../libs/Core/Core2/fCore2"
import { AppleNewsHeader1, DemoImage, StripeParagraph, StripeSectionHeader, StripeSubParagraph, StripeSubSectionHeader } from "../../../../../../libs/Pop/Pop2/fPop2"
import { MovicWindow } from "../../MovicWindow/MovicWindow"
import cl from "./Tutorial.module.scss"

export function Tutorial() {
  return(<>
    <MovicWindow>
      <LimitWidth maxWidth={1000}>
        <AppleNewsHeader1 text1="Tutorial" text2="How to make a movic?" />
        <TutorialCore />
        <Div height={150} />
        <AppleWindowBottomBarFill />
      </LimitWidth>
    </MovicWindow>
  
  </>)
}

function TutorialCore() {
  return(<>
  <StripeSectionHeader text="Terminology"/>
  <StripeSubSectionHeader text="Moment" />
  <StripeParagraph>
  A moment consists of an image and texts above or below it.
  </StripeParagraph>
  <StripeSubParagraph>
    Texts above the image are supposed to be words from the movie narrator. We call them narratives.
  </StripeSubParagraph>
  <StripeSubParagraph>
    Texts below the image are supposed to be words from the movie characters. We call them lines of dialogs.
  </StripeSubParagraph>
  <StripeSubParagraph>
    A moment can have two or more images.
  </StripeSubParagraph>
  <DemoImage url="/apps/Movic/DemoImage/demo1.png" />
  <StripeSubSectionHeader text="Scene" />
  <StripeParagraph>
    A scene consists of a few moments putting together on one page. To view the next scene, a viewer goes to to the next page.
  </StripeParagraph>

  <StripeSectionHeader text="Make a movic"/>
  <StripeSubSectionHeader text="1. Create a project" />
  <StripeParagraph>Select menu option named "Projects" and click on "New Project". A project is represented as a folder.</StripeParagraph>
  <StripeSubSectionHeader text="2. Upload images" />
  <StripeParagraph>After going into a project folder. Open the folder named "Images". This is where you manage all the images for one movic.</StripeParagraph>

  <StripeSubSectionHeader text="3. Write a movic script" />
  <StripeParagraph>
  After going into a project folder. Open the file named "Movic Script". All the script of a movic is written here.
  </StripeParagraph>
  
  <StripeSectionHeader text="Movic Script Cheatsheet" />
  <StripeParagraph>
  A script is simply a plain text document. A line in this text document can be
  </StripeParagraph>
  <StripeSubParagraph>a narrative</StripeSubParagraph>
  <StripeSubParagraph>a line of a dialog</StripeSubParagraph>
  <StripeSubParagraph>a scene divider</StripeSubParagraph>
  <StripeSubParagraph>a moment divider</StripeSubParagraph>
  <StripeSubParagraph>an image name</StripeSubParagraph>
  <StripeSectionHeader text="===" />
  <StripeParagraph>
  Three equal signs at the beginning of a line means starting a new scene
  </StripeParagraph>
  <StripeSectionHeader text="---" />
  <StripeParagraph>
  Three minus signs at the beginning of a line means starting a new moment
  </StripeParagraph>
  <StripeSectionHeader text="#" />
  <StripeParagraph>
  A hashtag at the beginning of line means means this line is a narrative instead of a line of dialog.
  </StripeParagraph>
  <StripeSectionHeader text="[ ]" />
  <StripeParagraph>
  A left braket at the beginning of line means this line is for images. For example a line of text that reads [m001.jpg], means an image named m001.jpg from Images folder will be shown for the corresponding moment.
  </StripeParagraph>
  <StripeSubSectionHeader text="Tips" />
  <StripeSubParagraph>
    Write your script first in a text editor of your choosing, and copy and past it into our website when finished.
  </StripeSubParagraph>
  <StripeSubParagraph>
    A line not beginning with above mentioned special characters corresponds to a line of movie dialog. Type in the name of character in uppercase followed by a colon to indicate who's talking.
  </StripeSubParagraph>

  <StripeSectionHeader text="Upload Images Tips"/>
  <StripeSubParagraph>
    One can only upload limited number of images at a time depending on the image size.
  </StripeSubParagraph>
  <StripeSubParagraph>
    Name your images m001.jpg, m002.jpg, m003.jpg, etc.
  </StripeSubParagraph>
  <StripeSubParagraph>
    Images are ordered based on their names.
  </StripeSubParagraph>
  <StripeSubParagraph>
    You can rename your images. The new image name does not have to have the file extension
  </StripeSubParagraph>
  <StripeSubParagraph>
    Adding or deleting images might take a few seconds to complete. Be patient and let the program run to finish before leaving the page.
  </StripeSubParagraph>
  </>)

  
}