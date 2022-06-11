import { LimitWidth } from "../../../../../../libs/Core/Core2/fCore2";
import { QuickInfo } from "../../H/Controls/Resume/QuickInfo/QuickInfo";
import { ResumeHeader } from "../../H/Controls/Resume/ResumeHeader/ResumeHeader";
import { ResumeParagraph } from "../../H/Controls/Resume/ResumeParagraph/ResumeParagraph";
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

  return(<>
    <SocialWindow>
      <LimitWidth maxWidth={800}>
        <ResumeHeader text="Fan Zheng" />
        <QuickInfo quickInfo={quickInfo}/>
        <ResumeSectionTitle text="About me" />
        <ResumeParagraph text={aboutMe} />
      </LimitWidth>
    </SocialWindow>
  </>)
}