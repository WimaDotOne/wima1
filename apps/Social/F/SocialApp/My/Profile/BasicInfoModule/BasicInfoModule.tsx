import { AppleIconButtons, 
  AppleWindowPlainBottomBarDiv,
  AppleWindowBottomBarFill,
  Div
} from "../../../../../../../libs/Core/Core2/fCore2";
import { AppleNewsHeader1 } from "../../../../../../../libs/Pop/Pop2/fPop2";
import { SocialColor } from "../../../../CSS/SocialColor";
import { BasicInfo1 } from "./BasicInfo1/BasicInfo1";
import { BasicInfo2 } from "./BasicInfo2/BasicInfo2";
import { BasicInfo3 } from "./BasicInfo3/BasicInfo3";
import cl from "./BasicInfoModule.module.scss"

interface IBasicInfoModuleProp {
  goHome: ()=>void
}

export function BasicInfoModule({
  goHome
}: IBasicInfoModuleProp) {
  return(<>
  <div className={cl.basicinfo}>
    <AppleNewsHeader1 text1="Basic Info" text2="" />
    <BasicInfo1 />
    <Div height={10} />
    <BasicInfo2 />
    <BasicInfo3 />
  </div>
  <AppleWindowBottomBarFill />
  <AppleWindowPlainBottomBarDiv>
    <AppleIconButtons color={SocialColor.themeBlue}
      icon1="chevron.left" onClick1={goHome}
    />
  </AppleWindowPlainBottomBarDiv>

  </>)
}