import { ClassNames } from "../../../../../../../../libs/Core/Core1/fCore1"
import { Div } from "../../../../../../../../libs/Core/Core2/fCore2"
import { SvgIcon } from "../../../../../../../../libs/Core/Core2/Svg/SvgIcon"
import { IThankyJob } from "../../../../Model/IThankyJob"
import cl from "./JobCard.module.scss"

interface IJobCardProp {
  job?: IThankyJob
  num?: number
  onClick: ()=>void
}

export function JobCard({
  job,
  num,
  onClick
}: IJobCardProp) {

  const photoUrl = job?.photo?.urlSmall || "/apps/Thanky/Icons/profile.svg"
  const firstName = job?.firstName || "First Name"
  const jobName = job?.jobName || `Job ${num || ""}`
  const placeName = job?.placeName || "Location"

  const clJobNameGray = job?.jobName ? "" : cl.gray
  const clPlaceNameGray = job?.placeName ? "" : cl.gray

  return(<>
  <div className={cl.jobCard}>
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
    <div className={ClassNames([cl.jobName, clJobNameGray])}>
      {jobName}
    </div>
    <Div height={30} />
    <div className={ClassNames([cl.placeName, clPlaceNameGray])}>
      {placeName}
    </div>
    <div className={cl.pencilBtn} onClick={onClick}
      title="Edit job">
      <SvgIcon name="pencil" width={30} color="#0275d8"/>
    </div>
  </div>
  </>)
}