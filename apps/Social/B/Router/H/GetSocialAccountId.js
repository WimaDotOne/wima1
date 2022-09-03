import { UniversityAccount } from "../../../../../libs/Core/Core1/bCore1.js"

export async function asyGetSocialAccountId(univAccountId) {

  if(!univAccountId) {
    throw new Error("University account id is not provided")
  }
  const univAccount = await UniversityAccount.findById(univAccountId).populate("socialAccountId")

  if(!univAccount) {
    throw new Error("Cannot find University account")
  }

  const socialAccount = univAccount.socialAccountId

  if(!socialAccount || !socialAccount._id) {
    throw new Error("Cannot find Sociable account")
  }

  return socialAccount._id
}