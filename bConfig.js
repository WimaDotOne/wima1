// Libs
export const bConfig = {
  bRoute1: "/b",
  googleClientId: "877773601178-1ec5r64b6p46s6cqg52kpbc8snool9la.apps.googleusercontent.com", //Wima Live Google Login
  facebookAppId: "3384783141810440", //Wima Login
  facebookAppVersion: "v13.0",
  dailyPasscodeSendMax: 1000,
  sendGridSenderEmail: "fan@wima.one",
  sendGridSenderName: "Wima Auto",
  brand: "Wima",
}
 
export const ImageUploadConfig = {
  maxFileSize : 10*1000*1000,
  maxTotalFileSize : 50*1000*1000
}

export const UniversityDomainConfig = [
  "wisc.edu"
]

const UnivLogo = "/libs/University/Logo"
export const UniversityDataConfig = {
  "wisc.edu" : {
    name: "University of Wisconsin-Madison", 
    logoUrl: `${UnivLogo}/uw-madison.png`
  },
  "gmail.com" : {
    name: "Google",
    logoUrl: `${UnivLogo}/google.png`
  }
}

export const GENERAL_INPUT_MAX = 100
export const GENERAL_TEXTAREA_MAX = 2000

// Apps
export const MovicConfig = {
  movicMaxPerAccount: 100,
  scritptFileMaxLength: 200000
}

export const BookConfig = {
  bookMaxPerAccount: 100,
  chapterMaxPerBook: 30,
  textMaxPerChapter: 50000
}

export const SocialConfig = {
  needMaxPerAccount: 10,
  serviceMaxPerAccount: 10,
  needLoadMax: 10000,
  needPageSize: 300
}