import { Div, LimitWidth } from "../../../../../../../libs/Core/Core2/fCore2"
import { AppleNewsHeader1 } from "../../../../../../../libs/Pop/Pop2/fPop2"
import cl from "./ProfileMap.module.scss"
import { NeonPlate } from "./NeonPlate/NeonPlate"
import { SocialWindow } from "../../../SocialWindow/SocialWindow"

interface IProfileMapProp {
  goBasicInfo: ()=>void
  goGoods: ()=>void
  goServices: ()=>void
  goUseHelp: ()=>void
  viewProfile: ()=>void
}

export function ProfileMap({
  goBasicInfo,
  goGoods,
  goServices,
  goUseHelp,
  viewProfile
}: IProfileMapProp) {
  return(<>
  <SocialWindow>
    <LimitWidth maxWidth={800}>
      <AppleNewsHeader1 text1="Profile" text2=""/>
      <Div height={20} />
      <div className={cl.instruction}>
        Fill the following 4 part of your profile.
      </div>
      <Div height={10} />
      <div className={cl.plates}>
        <NeonPlate pink title="1. Basic Info" 
          description="Tell others about yourself" 
          onClick={goBasicInfo}/>
        <NeonPlate green title="2. Services" 
          description="List things you could do for others on campus." 
          onClick={goServices}/>
        <NeonPlate blue title="2. Goods" 
          description="List things you want to sell or give away." 
          onClick={goGoods}/>
        <NeonPlate brown title="3. Use Help" 
          description="List things you need or need help with" 
          onClick={goUseHelp}/>
      </div>
      <Div height={30} />
      <div className={cl.instruction}>
        Check your result here.
      </div>
      <Div height={10} />
      <NeonPlate yellow title="Profile" 
        description="This is what others see" 
        onClick={viewProfile}/>
    </LimitWidth>
  </SocialWindow>
  </>)
}