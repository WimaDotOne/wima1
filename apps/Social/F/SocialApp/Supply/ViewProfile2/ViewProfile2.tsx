import { AppleIconButtons, AppleWindowBottomBarFill, AppleWindowPlainBottomBarDiv } from "../../../../../../libs/Core/Core2/fCore2"
import { SocialColor } from "../../../CSS/SocialColor"
import { ProfilePaper } from "../../ProfilePaper/ProfilePaper"
import cl from "./ViewProfile2.module.scss"

interface IViewProfile2Prop {
  onLeave: ()=>void,
  socialAccountId?: string
}
export function ViewProfile2({
  onLeave,
  socialAccountId
}: IViewProfile2Prop) {
  
  return(<>
  {
    socialAccountId ?
    <ProfilePaper socialAccountId={socialAccountId}/>:
    <div className={cl.error} >
      No profile is found
    </div>
  }
  <AppleWindowBottomBarFill />
  <AppleWindowPlainBottomBarDiv>
    <AppleIconButtons color={SocialColor.themeBlue}
      icon1="x" onClick1={onLeave}
    />
  </AppleWindowPlainBottomBarDiv>
  </>)
}