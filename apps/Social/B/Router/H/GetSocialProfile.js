import { UniversityAccount } from "../../../../../libs/Core/Core1/bCore1.js"
import SocialProfile from "../../Model/SocialProfile.js"

export async function asyGetSocialProfile(univAccountId) {

  if(!univAccountId) {
    throw new Error("University account id is not provided")
  }
  const univAccount = await UniversityAccount.findById(univAccountId).populate("socialAccountId")

  if(!univAccount) {
    throw new Error("Cannot find University account")
  }

  const socialAccount = univAccount.socialAccountId

  if(!socialAccount || !socialAccount._id) {
    throw new Error("Cannot find Social account")
  }

  if(!socialAccount.socialProfileId) {
    throw new Error("Social account does not have a profile")
  }

  const profile = await SocialProfile.findById(socialAccount.socialProfileId)

  if(!profile) {
    throw new Error("Cannot find Social profile")
  }
  return profile
}