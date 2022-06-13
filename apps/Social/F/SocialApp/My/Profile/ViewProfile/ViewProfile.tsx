import { AppleIconButtons, AppleWindowPlainBottomBarDiv } from "../../../../../../../libs/Core/Core2/fCore2";
import { SocialColor } from "../../../../CSS/SocialColor";
import { ProfilePaper } from "../../../ProfilePaper/ProfilePaper";

interface IViewProfileProp {
  onLeave: ()=>void
}
export function ViewProfile({
  onLeave
}: IViewProfileProp) {
  return(<>
  <ProfilePaper />

  <AppleWindowPlainBottomBarDiv>
    <AppleIconButtons color={SocialColor.themeBlue}
      icon1="x" onClick1={onLeave}
    />
  </AppleWindowPlainBottomBarDiv>
  </>)
}