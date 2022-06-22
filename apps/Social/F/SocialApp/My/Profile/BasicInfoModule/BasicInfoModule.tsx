import { useEffect, useState } from "react";
import { Get2, useShield } from "../../../../../../../libs/Core/Core1/fCore1";
import { AppleIconButtons, 
  AppleWindowPlainBottomBarDiv,
  AppleWindowBottomBarFill,
  Div
} from "../../../../../../../libs/Core/Core2/fCore2";
import { SectionLine } from "../../../../../../../libs/Pop/Pop1/ReadEdit/SectionLine";
import { AppleNewsHeader1 } from "../../../../../../../libs/Pop/Pop2/fPop2";
import { SocialColor } from "../../../../CSS/SocialColor";
import { ISocialProfile } from "../../../../Model/ISocialProfile";
import { BasicInfo1 } from "./BasicInfo1/BasicInfo1";
import { BasicInfo2 } from "./BasicInfo2/BasicInfo2";
import { BasicInfo3 } from "./BasicInfo3/BasicInfo3";
import { BasicInfo4 } from "./BasicInfo4/BasicInfo4";
import { BasicInfo5 } from "./BasicInfo5/BasicInfo5";
import { BasicInfo6 } from "./BasicInfo6/BasicInfo6";
import cl from "./BasicInfoModule.module.scss"

interface IBasicInfoModuleProp {
  goHome: ()=>void
}

export function BasicInfoModule({
  goHome
}: IBasicInfoModuleProp) {

  const [profile, setProfile] = useState<ISocialProfile>({
    givenName: "",
    familyName: "",
    universityAffiliation: "",
    major: "",
    personality2: "",
    personality16: "",
    zodiacSign: "",
    aboutMe: "",
    experiences: "",
    skills: ""
  })
  const [isProfileLoaded, setIsProfileLoaded] = useState<boolean>(false)
  const shield = useShield()

  async function loadProfile() {
    if(isProfileLoaded) return
    await Get2(shield, `/social/LoadProfile`, 
      (res)=>{
        setIsProfileLoaded(true)
        setProfile(res.profile)
      }
    )
  }

  function reloadProfile() {
    setIsProfileLoaded(false)
  }

  useEffect(()=>{
    loadProfile()
  })

  return(<>
  <div className={cl.basicinfo}>
    <AppleNewsHeader1 text1="Basic Info" text2="" />
    <BasicInfo1 profile={profile} refresh={reloadProfile} />
    <Div height={10} />
    <SectionLine />
    <BasicInfo2 profile={profile} refresh={reloadProfile}/>
    <Div height={10} />
    <SectionLine />
    <BasicInfo3 profile={profile} refresh={reloadProfile}/>
    <Div height={10} />
    <SectionLine />
    <BasicInfo6 profile={profile} refresh={reloadProfile}/>
    <Div height={10} />
    <SectionLine />
    <BasicInfo4 profile={profile} refresh={reloadProfile}/>
    <Div height={10} />
    <SectionLine />
    <BasicInfo5 profile={profile} refresh={reloadProfile}/>
    <Div height={10} />
  </div>
  <AppleWindowBottomBarFill />
  <AppleWindowPlainBottomBarDiv>
    <AppleIconButtons color={SocialColor.themeBlue}
      icon1="chevron.left" onClick1={goHome}
    />
  </AppleWindowPlainBottomBarDiv>

  </>)
}