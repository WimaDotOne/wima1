import { ClassNames } from "../../../../../../../../libs/Core/Core1/fCore1"
import { Div } from "../../../../../../../../libs/Core/Core2/fCore2"
import cl from "./JobCard.module.scss"

interface IJobCardProp {
  photoUrl?: string
  firstName?: string
  jobTitle?: string
  location?: string
  num?: number
  onClick: ()=>void
}

export function JobCard({
  photoUrl,
  firstName,
  jobTitle,
  location,
  num,
  onClick
}: IJobCardProp) {

  photoUrl = photoUrl || "/apps/Thanky/Icons/profile.svg"
  firstName = firstName || "First Name"
  jobTitle = jobTitle || `Job ${num || ""}`
  location = location || "Location"

  const clJobTitleGray = jobTitle ? cl.gray : ""
  const clLocationGray = location ? cl.gray : ""

  return(<>
  <div className={cl.jobCard} onClick={onClick}>
    <div className={cl.topHalf}>
      <Div height={15} />
      <div className={cl.hole} />
      <Div height={10} />
      <div className={cl.profile} 
        style={{backgroundImage: `url(${photoUrl})`}}
      />
      <Div height={5} />
      <div className={cl.firstName}>
        {firstName}
      </div>
      <Div height={15} />
    </div>
    <Div height={20} />
    <div className={ClassNames([cl.jobTitle, clJobTitleGray])}>
      {jobTitle}
    </div>
    <Div height={30} />
    <div className={ClassNames([cl.location, clLocationGray])}>
      {location}
    </div>
  </div>
  </>)
}