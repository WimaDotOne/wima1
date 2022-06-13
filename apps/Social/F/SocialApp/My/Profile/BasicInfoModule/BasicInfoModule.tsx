import { AppleIconButtons, 
  AppleWindowPlainBottomBarDiv,
  AppleWindowBottomBarFill
} from "../../../../../../../libs/Core/Core2/fCore2";
import { SocialColor } from "../../../../CSS/SocialColor";


interface IBasicInfoModuleProp {
  goHome: ()=>void
}

export function BasicInfoModule({
  goHome
}: IBasicInfoModuleProp) {
  return(<>
  
  <AppleWindowBottomBarFill />
  <AppleWindowPlainBottomBarDiv>
    <AppleIconButtons color={SocialColor.themeBlue}
      icon1="chevron.left" onClick1={goHome}
    />
  </AppleWindowPlainBottomBarDiv>

  </>)
}