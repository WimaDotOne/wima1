import { useRef, useState } from "react"
import { AppleIconButtons, AppleWindowPlainBottomBarDiv, Div, PlaceAutoComplete } from "../../../../../../../libs/Core/Core2/fCore2"
import { IPlace } from "../../../../../../../libs/Core/Core2/GoogleMap/F/Model/IPlace"
import { HeadLine } from "../../../../../../../libs/Pop/Pop3/fPop3"
import { TipColor } from "../../../../CSS/TipColor"
import { IJob } from "../../../../Model/IJob"
import cl from "./JobHome.module.scss"

interface IJobHomeProp {
  job: IJob
  backToJobsHome: ()=>void
  setJobTurn: (jobTurn: string)=>void
}

export function JobHome({
  job,
  backToJobsHome,
  setJobTurn
}: IJobHomeProp) {

  const [place, setPlace] = useState<IPlace>()

  return(<>
    <div className={cl.home}>
      <HeadLine text={job.businessName} h={3}/>
    </div>
    <Div height={10} />
    <PlaceAutoComplete setPlace={setPlace}/>
    {place?.name}
    <Div height={10} />
    <AppleWindowPlainBottomBarDiv>
      <AppleIconButtons color={TipColor.themeDarkBlue} strokeWidth={20}
        icon1="chevron.left" onClick1={backToJobsHome} text1=""
      /> 
    </AppleWindowPlainBottomBarDiv>

  </>)
}