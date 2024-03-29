
// Libs
export const bConfig = {
  bRoute1: "/b",
  facebookAppVersion: "v13.0",
  dailyPasscodeSendMax: 1000,
  sendGridSenderEmail: "fan@wima.one",
  sendGridSenderName: "Wima Auto",
  brand: "Wima",
  awsRegion: "us-east-1",
  s3Domain: "s3.amazonaws.com"
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

// Admin Apps
export const LingoAdminConfig = {
  scritptFileMaxLength: 200000
}

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

export const TipConfig = {
  jobMaxPerAccount: 10
}

export const SocialConfig = {
  needMaxPerAccount: 10,
  needLoadMax: 10000,
  needPageSize: 300
}

export const QuizConfig = {
  quizBookMaxPerAccount: 100,
  quizChapterMaxPerQuizBook: 20,
  quizMaxPerQuizChapter: 100,
  quizQuestionsMaxLength: 100000
}

export const ThankyConfig = {
  connectedAccountStatus: {
    setupNotStarted: 1,
    setupStarted: 2,
    setupFinished: 3
  },
  tip1: {
    index: 1,
    price: 200, // when change must also change priceId in Stripe
    priceText: "$2",
    priceId: "price_1MaQNdLL7rsy5kikBT5jilGE",
    appFee: 50,
    appFeeText: "50¢"
  },
  tip2: {
    index: 2,
    price: 500,
    priceText: "$5",
    priceId: "price_1MaQPVLL7rsy5kikHPQ5a2C2",
    appFee: 100,
    appFeeText: "$1"
  },
  tip3: {
    index: 3,
    price: 1000,
    priceText: "$10",
    priceId: "price_1MaQPyLL7rsy5kikFtJfgMNg",
    appFee: 100,
    appFeeText: "$1"
  },
  tip4: {
    index: 4,
    price: 1500,
    priceText: "$15",
    priceId: "price_1MaQQYLL7rsy5kikD9qR8uzu",
    appFee: 100,
    appFeeText: "$1"
  }
}