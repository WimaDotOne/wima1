import { Div, LimitWidth } from "../../../../../../libs/Core/Core2/fCore2";
import { QuickInfo } from "../../H/Controls/Resume/QuickInfo/QuickInfo";
import { ResumeHeader } from "../../H/Controls/Resume/ResumeHeader/ResumeHeader";
import { ResumeParagraph, ResumeSubParagraph } from "../../H/Controls/Resume/ResumeParagraph/ResumeParagraph";
import { ResumeSectionTitle } from "../../H/Controls/Resume/ResumeSectionTitle/ResumeSectionTitle";
import { SocialWindow } from "../../SocialWindow/SocialWindow";

export function MyProfile() {

  const quickInfo = [
    { name: "Affiliation", value: "Alum"},
    { name: "Major", value: "Math"},
    { name: "Personality", value: "Introvert"},
    { name: "16 Personality", value: "INFP"},
    { name: "Sign", value: "Cancer" },
    { name: "", value: "Programmer" },
  ]

  const aboutMe = `I am a dreamer, an entrepreneur. I like eating cookie
         And I like tutoring students. I am good at math.
  `

  const experiences = [
    "I have math tutor math 222",
    "I have math tutor math 537 for a semester",
    "I volunteer at Madison Senior center and make websites for seniors in Dane county to find resources of for seniors in the area."
  ]
  return(<>
    <SocialWindow>
      <LimitWidth maxWidth={800}>
        <ResumeHeader text="Fan Zheng" />
        <QuickInfo quickInfo={quickInfo}/>
        <ResumeSectionTitle text="About me" />
        <ResumeParagraph text={aboutMe} />
        <ResumeSectionTitle text="Experience of helping others" />
        {
          experiences.map((exp, i)=>
          <ResumeSubParagraph text={exp} />
          )
        }
        <Div height={20} />
        <ResumeSectionTitle text="Skills or resources that might help others" />
        {
          experiences.map((exp, i)=>
          <ResumeSubParagraph text={exp} />
          )
        }
      </LimitWidth>
    </SocialWindow>
  </>)
}