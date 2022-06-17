import { AppleIconButtons, AppleWindowBottomBarFill, AppleWindowPlainBottomBarDiv } from "../../../../../../../libs/Core/Core2/fCore2"
import { AppleNewsHeader1 } from "../../../../../../../libs/Pop/Pop2/fPop2"
import { SocialColor } from "../../../../CSS/SocialColor"
import cl from "./ServicesModule.module.scss"

interface IServicesModuleProp {
  goHome: ()=>void
}

export function ServicesModule({
  goHome
}: IServicesModuleProp) {
  return(<>
  <div className={cl.padding}>
    <AppleNewsHeader1 text1="Services" />
  </div>
  <AppleWindowBottomBarFill />
  <AppleWindowPlainBottomBarDiv>
    <AppleIconButtons color={SocialColor.themeBlue}
      icon1="chevron.left" onClick1={goHome}
    />
  </AppleWindowPlainBottomBarDiv>
  </>)
}