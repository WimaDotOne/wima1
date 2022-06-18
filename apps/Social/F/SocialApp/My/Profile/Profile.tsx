import { useState } from "react"
import { BasicInfoModule } from "./BasicInfoModule/BasicInfoModule"
import { ProfileMap } from "./ProfileMap/ProfileMap"
import { ServicesModule } from "./ServicesModule/ServicesModule"
import { NeedsModule } from "./NeedsModule/NeedsModule"
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
  function goNeeds() {
    setProfileTurn(ProfileTurn.NeedsModule)
  }

  function viewProfile() {
    setProfileTurn(ProfileTurn.ViewProfile)
  }

  switch(profileTurn) {
    case ProfileTurn.ProfileHome: return(
      <ProfileMap goBasicInfo={goBasicInfo}
        goServices={goServices}
        goNeeds={goNeeds}
        viewProfile={viewProfile}
      />
    )
    case ProfileTurn.BasicInfoModule: return(
      <BasicInfoModule goHome={goHome} />
    )
    case ProfileTurn.ServicesModule: return(
      <ServicesModule goHome={goHome} />
    )
    case ProfileTurn.NeedsModule: return(
      <NeedsModule goHome={goHome} />
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
  NeedsModule: "NeedsModule",
  ViewProfile: "ViewProfile"
}