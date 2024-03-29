import { UniversityAccount } from "../../../../../libs/Core/Core1/bCore1.js"

export async function asyGetUnivAccountInfo(req, skipSocialAccountId) {

  const univAccountId = req.univAccount?._id
  if(!univAccountId) {
    throw new Error("University account id is not found")
  }
  const univAccount = await UniversityAccount.findById(univAccountId).populate("socialAccountId")

  if(!univAccount) {
    throw new Error("Cannot find University account")
  }

  const socialAccount = univAccount.socialAccountId

  if(!skipSocialAccountId) {
    if(!socialAccount || !socialAccount._id) {
      throw new Error("Cannot find your Sociable account. Have you created a Profile in the My Business section?")
    }
  }

  const domain = univAccount.domain
  if(!domain) {
    throw new Error("Domain is missing")
  }

  const email = univAccount.email
  if(!email || !univAccount.emailVerified) {
    throw new Error("Email is missing")
  }

  const givenName = univAccount.givenName

  return {
    univAccountId: univAccount._id,
    domain,
    email,
    givenName,
    socialAccountId: !skipSocialAccountId ? socialAccount._id : undefined
  }
}