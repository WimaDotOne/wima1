import { AppleIconButtons, AppleWindowBottomBarFill, AppleWindowPlainBottomBarDiv } from "../../../../../../../libs/Core/Core2/fCore2";
import { SocialColor } from "../../../../CSS/SocialColor";
import { ProfilePaper } from "../../../ProfilePaper/ProfilePaper";
import { Div } from "../../../../../../../libs/Core/Core2/fCore2"
interface IViewProfileProp {
  onLeave: ()=>void
}
export function ViewProfile({
  onLeave
}: IViewProfileProp) {
  return(<>
  <ProfilePaper />
  <AppleWindowBottomBarFill />
  <AppleWindowPlainBottomBarDiv>
    <AppleIconButtons color={SocialColor.themeBlue}
      icon1="x" onClick1={onLeave}
    />
  </AppleWindowPlainBottomBarDiv>
  </>)
}