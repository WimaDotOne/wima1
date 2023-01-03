import { AppleWindowBottomBarFill, 
  Div, LimitWidth } from "../../../../../../libs/Core/Core2/fCore2"
import { AppleNewsHeader1, DemoImage, 
  StripeParagraph, StripeSectionHeader, 
  StripeSubParagraph, 
  StripeSubSectionHeader } from "../../../../../../libs/Pop/Pop2/fPop2"
import { QuizWindow } from "../../QuizWindow/QuizWindow"

export function Tutorial() {
  return(<>
    <QuizWindow>
      <LimitWidth maxWidth={1000}>
        <AppleNewsHeader1 text1="Tutorial" text2="How to make a quiz?" />
        <TutorialCore />
        <Div height={150} />
        <AppleWindowBottomBarFill />
      </LimitWidth>
    </QuizWindow>
  </>)
}

function TutorialCore() {
  return(<>
  <StripeSectionHeader text="Terminology"/>
  <StripeSubSectionHeader text="Quiz" />
  <StripeParagraph>
  A quiz is a YouTube video followed by a few multiple choice questions. A quiz taker watches the video and answers the questions. The website can grade the quiz, but no score is saved.
  </StripeParagraph>
  <StripeSubSectionHeader text="Quiz Book & Quiz Chapter" />
  <StripeParagraph>
  Quiz books and quiz chapters are how we group quizzes. A quiz book can have many quiz chapters. A quiz chapter can have many quizzes. A quiz must be created under a chapter. A chapter must be created under a book.
  </StripeParagraph>

  <StripeSectionHeader text="Make a quiz"/>
  <StripeSubSectionHeader text="1. Create a project" />
  <StripeParagraph>Once logged in, select menu option named "Projects" and click on "New Project" button to create a new project. A project, once created, is represented as a folder.</StripeParagraph>
  <StripeSubSectionHeader text="2. Create a chapter" />
  <StripeParagraph>
    Open a Project folder. Then click on the folder named "Chapters". Inside the "Chapters" folder click on "New Chapter" button. A chapter, once created, is represented by a folder.
  </StripeParagraph>
  <StripeSubSectionHeader text="3. Create a quiz" />
  <StripeParagraph>
    Open a Chapter folder. Then click on the folder named "Quizzes". Inside the "Quizzes" folder click on "New Quiz" button. A quiz, once created, is represented by a folder.
  </StripeParagraph>
  <StripeParagraph>
  Open a Quiz folder. Click on YouTube video icon if you want to update the YouTube link for your Quiz.
  </StripeParagraph>
  <StripeParagraph>
  Click on "Questions" file icon to write the multiple choice questions for your quiz. The questions are written in plain text format. The following are some rules to follow to format your questions.
  </StripeParagraph>
  <StripeSubParagraph>A question can only be multiple choice with only one correct answer</StripeSubParagraph>
  <StripeSubParagraph>Questions must be separated by three or more equal signs === in its own line</StripeSubParagraph>
  <StripeSubParagraph>If a line starts with a dash - it is read as an option</StripeSubParagraph>
  <StripeSubParagraph>If a line starts with a dash - followed by a greater than sign &gt; then the option is the correct answer</StripeSubParagraph>

  <DemoImage url="/apps/Quiz/DemoImage/QuizQuestionsDemo.png" height={300} />
  <StripeSubSectionHeader text="4. Share quizzes" />
  <StripeParagraph>
    In Chapter folder, click on "Chapter Settings", change the chapter status to be "Published", then you will see a link to your chapter of quizzes.
  </StripeParagraph>
  <StripeParagraph>
    In Project folder, click on "Book Settings", change the book status to be "Published", then you will see a link to your book of quizzes. Only published chapters within a book can be seen by others.
  </StripeParagraph>
  
  <StripeSectionHeader text="Questions Format Cheatsheet" />
  <StripeSectionHeader text="===" />
  <StripeParagraph>
  Three equal signs in its own line means starting a new question
  </StripeParagraph>
  <StripeSectionHeader text="-" />
  <StripeParagraph>
  A minus signs at the beginning of a line means starting a new option
  </StripeParagraph>
  <StripeSectionHeader text="->" />
  <StripeParagraph>
  A minus sign followed by a greater than sign at the beginning of a line means starting a new option which is also the correct answer.
  </StripeParagraph>
  <StripeSubSectionHeader text="Tips" />
  <StripeSubParagraph>
    Write your script first in a text editor of your choosing, and copy and paste it into our website when finished. Writing script directly in our website might not be very convenient since our editor is not really a text editor.
  </StripeSubParagraph>
  </>)

  
}