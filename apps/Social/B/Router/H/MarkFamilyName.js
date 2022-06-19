export function MarkFamilyName(profile) {
  if(!profile) return profile
  
  return {
    givenName: profile.givenName,
    familyInitial: (profile.familyName || "").substring(0, 1),
    universityAffiliation: profile.universityAffiliation,
    major: profile.major,
    personality2: profile.personality2,
    personality16: profile.personality16,
    zodiacSign: profile.zodiacSign,
    aboutMe: profile.aboutMe,
    experiences: profile.experiences,
    skills: profile.skills
  }
}