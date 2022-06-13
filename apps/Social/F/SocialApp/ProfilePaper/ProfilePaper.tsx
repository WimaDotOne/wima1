import { Div, LimitWidth } from "../../../../../libs/Core/Core2/fCore2"
import { QuickInfo } from "../H/Resume/QuickInfo/QuickInfo"
import { ResumeHeader } from "../H/Resume/ResumeHeader/ResumeHeader"
import { ResumeParagraph, ResumeSubParagraph } from "../H/Resume/ResumeParagraph/ResumeParagraph"
import { ResumeSectionTitle } from "../H/Resume/ResumeSectionTitle/ResumeSectionTitle"
import { ServiceCard } from "../H/ServiceCard/ServiceCard"
import cl from "./ProfilePaper.module.scss"

interface IProfilePaperProp {
  
}
export function ProfilePaper({

}: IProfilePaperProp) {

  const quickInfo = [
    { name: "Affiliation", value: "Alum"},
    { name: "Major", value: "Math"},
    { name: "Personality", value: "Introvert"},
    { name: "16 Personality", value: "INFP"},
    { name: "Sign", value: "Cancer" },
    { name: "", value: "Programmer" },
  ]

  const aboutMe = `I am a dreamer, an entrepreneur. I like eating cookie
         And I like tutoring students. I am good at math.`

  const experiences = [
    "I have math tutor math 222",
    "I have math tutor math 537 for a semester",
    "I volunteer at Madison Senior center and make websites for seniors in Dane county to find resources of for seniors in the area."
  ]

  let services = [
    { name: "Math Tutor", shortDescription: "Math 222, 221, 114, etc. Once a week on demand.", price: "$20 / hour"},
    { name: "Uber service", shortDescription: "Take to shopping or airport", price: "$8 per mile"},
    { name: "House renting", shortDescription: "Moving day find a place to stay", price: "Buy me a meal at Sichuan Flavor and a coffee at starbucks"},
    { name: "Chinese Tutor", shortDescription: "Conversational Chinese 1 hour a week", price: "Free"},
  ]

  let goods = [
    { name: "Keyboard piano", shortDescription: "It's oka", price: "$30"},
    { name: "Real Analysis", shortDescription: "By Alexander Christoffel", price: "Free"},
    { name: "Calculus II print book", shortDescription: "Paper print bind", price: "$1"},
    { name: "Chemistry 22", shortDescription: "Version 6", price: "Free"},
  ]

  return(<>
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
      <ResumeSectionTitle text="Skills or resources that might help others" />
      {
        experiences.map((exp, i)=>
        <ResumeSubParagraph text={exp} />
        )
      }
      <Div height={10} />
    </LimitWidth>
    <LimitWidth maxWidth={800} gray>
      <ResumeSectionTitle text="Services" />
      <div className={cl.services}>
      {
        services.map((service, i)=>
        <ServiceCard name={service.name}
            shortDescription={service.shortDescription}
            price={service.price}
            onClick={()=>{

            }}
        />
        )
      }
      </div>
      <Div height={40} />
    </LimitWidth>
    <LimitWidth maxWidth={800}>
      <ResumeSectionTitle text="Goods" marginTop={0}/>
      <div className={cl.services}>
      {
        goods.map((good, i)=>
        <ServiceCard name={good.name}
            shortDescription={good.shortDescription}
            price={good.price}
            onClick={()=>{}}
        />
        )
      }
      </div>
      <Div height={100} />
    </LimitWidth>
  </>)
}