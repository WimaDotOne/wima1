import { IsEmail } from "../B/IsEmail"

export function IsEduEmail(value: string) {
  if(!IsEmail(value)) return false
  const emailDomain = value.split("@")[1]
  const dotParts = emailDomain.split(".")
  const len = dotParts.length
  const edu = dotParts[len-1]
  return edu === "edu"
}