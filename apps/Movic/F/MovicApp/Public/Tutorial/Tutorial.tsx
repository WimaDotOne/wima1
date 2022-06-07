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
  <DemoImage url="/apps/Movic/DemoImage/MomentDemo.png" height={300}/>
  <StripeSubSectionHeader text="Scene" />
  <StripeParagraph>
    A scene consists of a few moments putting together on one page. To view the next scene, a viewer goes to to the next page.
  </StripeParagraph>

  <StripeSectionHeader text="Make a movic"/>
  <StripeSubSectionHeader text="1. Create a project" />
  <StripeParagraph>Select menu option named "Projects" and click on "New Project". A project is represented as a folder.</StripeParagraph>
  <StripeSubSectionHeader text="2. Upload images" />
  <StripeParagraph>
    After going into a project folder. Open the folder named "Images". This is where you add the images for one movic. The images will be referred by their names in the movic script.
  </StripeParagraph>

  <StripeSubSectionHeader text="3. Write a movic script" />
  <StripeParagraph>
  After going into a project folder. Open the file named "Movic Script". All the script of a movic is written here.  A script is simply a plain text document. A line in this text document can be
  </StripeParagraph>
  <StripeSubParagraph>a narrative</StripeSubParagraph>
  <StripeSubParagraph>a line of a dialog</StripeSubParagraph>
  <StripeSubParagraph>a scene divider</StripeSubParagraph>
  <StripeSubParagraph>a moment divider</StripeSubParagraph>
  <StripeSubParagraph>an image name</StripeSubParagraph>

  <DemoImage url="/apps/Movic/DemoImage/ScriptDemo.jpg" height={300} />
  
  <StripeSectionHeader text="Movic Script Cheatsheet" />
  <StripeSectionHeader text="===" />
  <StripeParagraph>
  Three equal signs in its own line means starting a new scene
  </StripeParagraph>
  <StripeSectionHeader text="---" />
  <StripeParagraph>
  Three minus signs in its own line means starting a new moment
  </StripeParagraph>
  <StripeSectionHeader text="#" />
  <StripeParagraph>
  A hashtag at the beginning of line means means this line is a narrative instead of a line of dialog.
  </StripeParagraph>
  <StripeSectionHeader text="[" />
  <StripeParagraph>
  A left braket at the beginning of line means this line is for images. You can optionally add a right braket at the end. For example a line of text that reads [m001.jpg or [m001.jpg], means an image named m001.jpg from Images folder will be shown for the corresponding moment.
  </StripeParagraph>
  <StripeSubSectionHeader text="Tips" />
  <StripeSubParagraph>
    Write your script first in a text editor of your choosing, and copy and past it into our website when finished. Writing script directly in our website might not be very convenient since our editor is not really a text editor.
  </StripeSubParagraph>
  <StripeSubParagraph>
    A line not beginning with above mentioned special characters corresponds to a line of movie dialog. At the beginning of such a line, type in the name of character in uppercase followed by a colon to indicate who's talking.
  </StripeSubParagraph>

  <StripeSectionHeader text="Upload Images Tips"/>
  <StripeSubParagraph>
    Name your images m001.jpg, m002.jpg, m003.jpg, etc. This is because images are ordered alphabetically. Naming images with numbers is the best way to keep the image order the same as the order they appear in a movie.
  </StripeSubParagraph>
  <StripeSubParagraph>
    You can rename your images. The new image name does not have to have the file extension
  </StripeSubParagraph>
  <StripeSubParagraph>
    One can only upload limited number of images at a time depending on the image size. Upload 50 images at a time would be way too many.
  </StripeSubParagraph>
  <StripeSubParagraph>
    Adding or deleting images might take a few seconds to complete. Be patient and let the program run to finish before leaving the page.
  </StripeSubParagraph>
  </>)

  
}