// Libs
export const bConfig = {
  bRoute1: "/b",
  googleClientId: "147358888044-77a0k6bjhe7b7jee9opjkeseaf9lqir0.apps.googleusercontent.com", //Wima One
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