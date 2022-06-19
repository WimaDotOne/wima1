import { useEffect, useState } from "react"
import { EnumText, Get2, useShield } from "../../../../../libs/Core/Core1/fCore1"
import { Div, LimitWidth } from "../../../../../libs/Core/Core2/fCore2"
import { Personality16SelectOptions } from "../../../Enum/Personality16Enum"
import { Personality2SelectOptions } from "../../../Enum/Personality2Enum"
import { UniversityAffiliationSelectOptions } from "../../../Enum/UniversityAffiliationEnum"
import { ZodiacSignSelectOptions } from "../../../Enum/ZodiacSignEnum"
import { ISocialNeed } from "../../Model/ISocialNeed"
import { ISocialProfile } from "../../Model/ISocialProfile"
import { ISocialService } from "../../Model/ISocialService"
import { NeedCard } from "../H/NeedCard/NeedCard"
import { QuickInfo } from "../H/Resume/QuickInfo/QuickInfo"
import { ResumeHeader } from "../H/Resume/ResumeHeader/ResumeHeader"
import { ResumeParagraph, ResumeSubParagraph } from "../H/Resume/ResumeParagraph/ResumeParagraph"
import { ResumeSectionTitle } from "../H/Resume/ResumeSectionTitle/ResumeSectionTitle"
import { ServiceCard } from "../H/ServiceCard/ServiceCard"
import { DetailPopUp } from "./DetailPopUp/DetailPopUp"
import cl from "./ProfilePaper.module.scss"

interface IProfilePaperProp {
  socialAccountId?: string
}
export function   ProfilePaper({
  socialAccountId
}: IProfilePaperProp) {

  const [profile, setProfile] = useState<ISocialProfile>()
  const [services, setServices] = useState<Array<ISocialService>>([])
  const [needs, setNeeds] = useState<Array<ISocialNeed>>([])
  const [loaded, setLoaded] = useState<boolean>(false)
  const [showDetail, setShowDetail] = useState<boolean>(false)
  const [detailTitle, setDetailTitle] = useState<string>("")
  const [detailDescription, setDetailDescription] = useState<string>("")

  const shield = useShield()

  async function loadProfilePaper() {
    if(loaded) return
    let url = "/social/LoadMyProfilePaper"
    if(socialAccountId) {
      url = `/social/LoadProfilePaper?socialAccountId=${socialAccountId}`
    }
    if(!url) return
  
    await Get2(shield, url,
      (res)=>{
        setLoaded(true)
        setProfile(res.profile)
        setServices(res.services)
        setNeeds(res.needs)
      })
  }

  useEffect(()=>{
    loadProfilePaper()
  })

  const quickInfo = [
    { name: "Affiliation", value: EnumText(profile?.universityAffiliation, UniversityAffiliationSelectOptions)},
    { name: "Major", value: profile?.major},
    { name: "Personality", value: EnumText(profile?.personality2, Personality2SelectOptions)},
    { name: "16 Personality", value: EnumText(profile?.personality16, Personality16SelectOptions)},
    { name: "Sign", value: EnumText(profile?.zodiacSign, ZodiacSignSelectOptions) },
  ]

  const experiences = (profile?.experiences || "").split("\n")
    .filter((exp)=> exp.trim())
  const skills = (profile?.skills || "").split("\n")
    .filter((skill)=> skill.trim())

  const nonGoodsServices = services.filter((service)=> !service.isGoods)
  const goods = services.filter((service)=> service.isGoods)

  function openDetail(title?: string, description?: string) {
    title = title || ""
    description = description || ""
    setDetailTitle(title)
    setDetailDescription(description)
    setShowDetail(true)
  }

  function GetOpenFun(service: ISocialService | ISocialNeed) {
    let open = undefined
    if((service.description || "").trim()) {
      open = () => {
        openDetail(service.name, service.description)
      }
    }
    return open
  }

  if(!profile) return null

  return(<>
    <LimitWidth maxWidth={800}>
      <ResumeHeader text={`${profile.givenName} ${profile.familyInitial}`} />
      <QuickInfo quickInfo={quickInfo}/>
      <ResumeSectionTitle text="About me" />
      <ResumeParagraph text={profile.aboutMe} />
      <ResumeSectionTitle text="Experience of helping others" />
      {
        experiences.map((exp, i)=>
        <ResumeSubParagraph key={"exp"+i} text={exp} />
        )
      }
      <ResumeSectionTitle text="Skills or resources that might help others" />
      {
        skills.map((skill, i)=>
        <ResumeSubParagraph key={"skill"+i} text={skill} />
        )
      }
      <Div height={10} />
    </LimitWidth>
    <LimitWidth maxWidth={800} gray>
      <ResumeSectionTitle text="Services" />
      <div className={cl.services}>
      {
        nonGoodsServices.map((service, i)=> 
          <ServiceCard name={service.name}
            key={"service"+i}
            shortDescription={service.shortDescription}
            description={service.description}
            price={service.price}
            onClick={GetOpenFun(service)}/>
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
          key={"good"+i}
          shortDescription={good.shortDescription}
          description={good.description}
          price={good.price}
          onClick={GetOpenFun(good)}
        />
        )
      }
      </div>
      <Div height={40} />
    </LimitWidth>
    <LimitWidth maxWidth={800} gray>
      <ResumeSectionTitle text="Help I could use" />
      <div className={cl.services}>
      {
        needs.map((need, i)=>
        <NeedCard name={need.name}
          key={"need"+i}
          shortDescription={need.shortDescription}
          description={need.description}
          willPay={need.willPay}
          onClick={GetOpenFun(need)}
        />)
      }
      </div>
      <Div height={40} />
    </LimitWidth>

    <DetailPopUp show={showDetail} setShow={setShowDetail} 
      title={detailTitle} description={detailDescription}
    />
  </>)
}