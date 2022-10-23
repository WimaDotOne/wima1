import { AppleIconButtons, AppleWindowPlainBottomBarDiv } from "../../../../../../../libs/Core/Core2/fCore2"
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
  return(<>
    <div className={cl.home}>
      <HeadLine text={job.businessName} h={3}/>
    </div>
    <AppleWindowPlainBottomBarDiv>
      <AppleIconButtons color={TipColor.themeDarkBlue} strokeWidth={20}
        icon1="chevron.left" onClick1={backToJobsHome} text1=""
      /> 
    </AppleWindowPlainBottomBarDiv>
  </>)
}