import { AppleIconButtons, AppleWindowBottomBarFill, AppleWindowPlainBottomBarDiv } from "../../../../../../../libs/Core/Core2/fCore2"
import { SocialColor } from "../../../../CSS/SocialColor"


interface IUseHelpModuleProp {
  goHome: ()=>void
}

export function UseHelpModule({
  goHome
}: IUseHelpModuleProp) {
  return(<>
  
  <AppleWindowBottomBarFill />
  <AppleWindowPlainBottomBarDiv>
    <AppleIconButtons color={SocialColor.themeBlue}
      icon1="chevron.left" onClick1={goHome}
    />
  </AppleWindowPlainBottomBarDiv>
  </>)
}