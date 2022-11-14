import { AppleIconButtons, AppleWindowBottomBarFill } from "../../../../../../../libs/Core/Core2/fCore2"
import { AppleWindowBottomBar } from "../../../../../../H/AppleWindowBottomBar"
import { TipColor } from "../../../../CSS/TipColor"
import { IJob } from "../../../../Model/IJob"
import cl from "./TipAttendant.module.scss"

interface ITipAttendantProp {
  job?: IJob
  goEstablishment: ()=>void
}

export function TipAttendant({
  job,
  goEstablishment
}: ITipAttendantProp) {
  
  return(<>
  <div className={cl.paint}>
  </div>
  <div className={cl.banner}>
    <div className={cl.photo}
      style={{backgroundImage: `url(${job?.selfPhoto?.url})`}}/>
    <div className={cl.firstName}>{job?.firstName}</div>
    <div className={cl.selfDescriptionWrap}>
    {
      (job?.selfDescription || "").trim() ?
      <div className={cl.selfDescription}>
      {job?.selfDescription}
      </div>:null
    }
    </div>
  </div>


  <AppleWindowBottomBarFill />
  <AppleWindowBottomBar>
    <AppleIconButtons color={TipColor.themeDarkBlue} strokeWidth={20}
      icon1="chevron.left" onClick1={goEstablishment} text1=""
    /> 
  </AppleWindowBottomBar>

  </>)
}