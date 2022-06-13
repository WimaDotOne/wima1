import { useState } from "react"
import { BasicInfoModule } from "./BasicInfoModule/BasicInfoModule"
import { ProfileMap } from "./ProfileMap/ProfileMap"
import { ServicesModule } from "./ServicesModule/ServicesModule"
import { UseHelpModule } from "./UseHelpModule/UseHelpModule"
import { ViewProfile } from "./ViewProfile/ViewProfile"

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
  function goServices() {
    setProfileTurn(ProfileTurn.ServicesModule)
  }
  function goUseHelp() {
    setProfileTurn(ProfileTurn.UseHelpModule)
  }

  function viewProfile() {
    setProfileTurn(ProfileTurn.ViewProfile)
  }

  switch(profileTurn) {
    case ProfileTurn.ProfileHome: return(
      <ProfileMap goBasicInfo={goBasicInfo}
        goServices={goServices}
        goUseHelp={goUseHelp}
        viewProfile={viewProfile}
      />
    )
    case ProfileTurn.BasicInfoModule: return(
      <BasicInfoModule goHome={goHome} />
    )
    case ProfileTurn.ServicesModule: return(
      <ServicesModule goHome={goHome} />
    )
    case ProfileTurn.UseHelpModule: return(
      <UseHelpModule goHome={goHome} />
    )
    case ProfileTurn.ViewProfile: return(
      <ViewProfile onLeave={goHome} />
    )
  }

  return null
}

const ProfileTurn = {
  ProfileHome: "ProfileHome",
  BasicInfoModule: "BasicInfoModule",
  ServicesModule: "ServicesModule",
  UseHelpModule: "UseHelpModule",
  ViewProfile: "ViewProfile"
}