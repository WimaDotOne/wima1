import { AppleIconButtons, AppleWindowBottomBarFill, AppleWindowPlainBottomBarDiv } from "../../../../../../../libs/Core/Core2/fCore2";
import { SocialColor } from "../../../../CSS/SocialColor";


interface IGoodsModuleProp {
  goHome: ()=>void
}

export function GoodsModule({
  goHome
}: IGoodsModuleProp) {
  return(<>
  
  <AppleWindowBottomBarFill />
  <AppleWindowPlainBottomBarDiv>
    <AppleIconButtons color={SocialColor.themeBlue}
      icon1="chevron.left" onClick1={goHome}
    />
  </AppleWindowPlainBottomBarDiv>
  </>)
}