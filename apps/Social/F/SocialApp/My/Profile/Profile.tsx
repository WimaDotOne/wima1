import { useState } from "react"
import { BasicInfoModule } from "./BasicInfoModule/BasicInfoModule"
import { GoodsModule } from "./GoodsModule/GoodsModule"
import { ProfileMap } from "./ProfileMap/ProfileMap"
import { ServicesModule } from "./ServicesModule/ServicesModule"
import { UseHelpModule } from "./UseHelpModule/UseHelpModule"

interface IProfileProp {

}

export function Profile({

}: IProfileProp) {
  const [profileTurn, setProfileTurn] = useState<string>(ProfileTurn.ProfileHome)

  function goHome() {
    setProfileTurn(ProfileTurn.ProfileHome)
  }

  function goBasicInfo() {
    setProfileTurn(ProfileTurn.BasicInfoModule)
  }
  function goGoods() {
    setProfileTurn(ProfileTurn.GoodsModule)
  }
  function goServices() {
    setProfileTurn(ProfileTurn.ServicesModule)
  }
  function goUseHelp() {
    setProfileTurn(ProfileTurn.UseHelpModule)
  }

  switch(profileTurn) {
    case ProfileTurn.ProfileHome: return(
      <ProfileMap goBasicInfo={goBasicInfo}
        goGoods={goGoods}
        goServices={goServices}
        goUseHelp={goUseHelp}
      />
    )
    case ProfileTurn.BasicInfoModule: return(
      <BasicInfoModule goHome={goHome} />
    )
    case ProfileTurn.ServicesModule: return(
      <ServicesModule goHome={goHome} />
    )
    case ProfileTurn.GoodsModule: return(
      <GoodsModule goHome={goHome} />
    )
    case ProfileTurn.UseHelpModule: return(
      <UseHelpModule goHome={goHome} />
    )
  }

  return null
}

const ProfileTurn = {
  ProfileHome: "ProfileHome",
  BasicInfoModule: "BasicInfoModule",
  ServicesModule: "ServicesModule",
  GoodsModule: "GoodsModule",
  UseHelpModule: "UseHelpModule"
}