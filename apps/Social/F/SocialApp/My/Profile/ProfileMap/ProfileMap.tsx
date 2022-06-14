import { Div, LimitWidth } from "../../../../../../../libs/Core/Core2/fCore2"
import { AppleNewsHeader1 } from "../../../../../../../libs/Pop/Pop2/fPop2"
import cl from "./ProfileMap.module.scss"
import { NeonPlate } from "./NeonPlate/NeonPlate"
import { SocialWindow } from "../../../SocialWindow/SocialWindow"
import { useState } from "react"
import { CreateProfile } from "./CreateProfile/CreateProfile"

interface IProfileMapProp {
  goBasicInfo: ()=>void
  goServices: ()=>void
  goUseHelp: ()=>void
  viewProfile: ()=>void
}

export function ProfileMap({
  goBasicInfo,
  goServices,
  goUseHelp,
  viewProfile
}: IProfileMapProp) {

  const [showPopUp, setShowShowPopUp] = useState<boolean>(true)

  function openPopUP() {
    setShowShowPopUp(true)
  }

  return(<>
  <SocialWindow>
    <LimitWidth maxWidth={800}>
      <AppleNewsHeader1 text1="Profile" text2=""/>
      <Div height={20} />

      <div className={cl.instruction}>
        First thing first
      </div>
      <NeonPlate yellow title="Create a Profile" 
          description="Create a profile to post services you want to provide and helps you could use." 
          onClick={openPopUP}/>
      <Div height={10} />
    </LimitWidth>
    <div className={cl.map}>
      <div className={cl.cover}></div>
      <LimitWidth maxWidth={800}>
        <div className={cl.instruction}>
          Fill the following parts of your profile.
        </div>
        <Div height={10} />
        <div className={cl.plates}>
          <NeonPlate green title="1. Basic Info" 
            description="Tell others about yourself" 
            onClick={goBasicInfo}/>
          <NeonPlate brown title="2. Services" 
            description="List things you could do for others on campus. You can also list things you want to sell or give away." 
            onClick={goServices}/>
          <NeonPlate pink title="3. Use Help" 
            description="List things you need or need help with. This provides others with ideas of what services they could create." 
            onClick={goUseHelp}/>
        </div>
        <Div height={30} />
        <div className={cl.instruction}>
          Check your result here.
        </div>
        <Div height={10} />
        <NeonPlate blue title="Profile" 
          description="This is what others see" 
          onClick={viewProfile}/>
      </LimitWidth>
    </div>
  </SocialWindow>

  <CreateProfile show={showPopUp} setShow={setShowShowPopUp} />
  </>)
}