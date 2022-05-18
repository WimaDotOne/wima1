const bConfig = {
  bRoute1: "/b",
  googleClientId: "147358888044-77a0k6bjhe7b7jee9opjkeseaf9lqir0.apps.googleusercontent.com", //Wima One
  facebookAppId: "817314545562572", //Bok Choy Login QA
  facebookAppVersion: "v13.0",
  dailyPasscodeSendMax: 1000,
  sendGridSenderEmail: "fan@wima.one",
  sendGridSenderName: "Wima Auto",
  brand: "Wima",
  
}

export const ImageUploadConfig = {
  movic: {
    key: "movic", //must be the same as parent key "movic"
    temp1: "Movic",
    widthPx: 320,
    heightPx: 180,
    smallWidthPx: 80,
    smallHeightPx: 45
  }
}

const GENERAL_INPUT_MAX = 100
const FILE_BYTE_MAX = 10*1000*1000

const MovicConfig = {
  movicMaxPerAccount: 100,
  scritptFileMaxLength: 200000
}
export {
  bConfig,
  GENERAL_INPUT_MAX,
  FILE_BYTE_MAX,
  MovicConfig
}