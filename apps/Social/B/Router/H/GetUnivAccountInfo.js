import { UniversityAccount } from "../../../../../libs/Core/Core1/bCore1.js"

export async function asyGetUnivAccountInfo(req) {

  const univAccountId = req.univAccount?._id
  if(!univAccountId) {
    throw new Error("University account id is not found")
  }
  const univAccount = await UniversityAccount.findById(univAccountId).populate("socialAccountId")

  if(!univAccount) {
    throw new Error("Cannot find University account")
  }

  const socialAccount = univAccount.socialAccountId

  if(!socialAccount || !socialAccount._id) {
    throw new Error("Cannot find Social account")
  }

  const domain = univAccount.domain
  if(!domain) {
    throw new Error("Domain is missing")
  }

  return {
    domain,
    socialAccountId: socialAccount._id
  }
}