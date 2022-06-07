import { UniversityDomains } from "../../../../../bConfig.js"

export function IsUniversityEmail(value) {

  if(!IsEmail(value)) return false
  const emailDomain = value.split("@")[1]
 
  if(emailDomain && emailDomain === process.env.DEV_UNIVERSITY_DOMAIN) {
    return true
  }
  if(!UniversityDomains) return false

  return UniversityDomains.includes(emailDomain)
}