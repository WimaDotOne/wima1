import { AppleIconButtons, AppleWindowBottomBarFill } from "../../../../../../../libs/Core/Core2/fCore2"
import { AppleWindowBottomBar } from "../../../../../../H/AppleWindowBottomBar"
import { TipColor } from "../../../../CSS/TipColor"
import { IJob } from "../../../../Model/IJob"

interface ITipAttendantProp {
  job?: IJob
  goEstablishment: ()=>void
}

export function TipAttendant({
  job,
  goEstablishment
}: ITipAttendantProp) {
  
  return(<>
  <div>
    Tip Attendant
    {job?.firstName}
    <br />
    {job?.jobName}
  </div>
  <AppleWindowBottomBarFill />
  <AppleWindowBottomBar>
    <AppleIconButtons color={TipColor.themeDarkBlue} strokeWidth={20}
      icon1="chevron.left" onClick1={goEstablishment} text1=""
    /> 
  </AppleWindowBottomBar>

  </>)
}