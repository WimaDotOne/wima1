import { UniversityDomainConfig } from "../../../../../bConfig.js"
import { IsEmail } from "./IsEmail.js"

export function IsUniversityEmail(value) {

  if(!IsEmail(value)) return false
  
  const domain = GetUniversityDomain(value)

  if(!domain) return false

  if(process.env.DEV_UNIVERSITY_DOMAIN) {
    // For dev convenience
    const devDomains = process.env.DEV_UNIVERSITY_DOMAIN.split(",")
    if(devDomains.includes(domain)) {
      return true
    }
  }

  if(!UniversityDomainConfig) return false

  return UniversityDomainConfig.includes(domain)

}

export function GetUniversityDomain(value) {
  const domain = value.split("@")[1]
  const dotParts = domain.split(".")
  const len = dotParts.length
  return dotParts[len-2]+"."+dotParts[len-1]
}