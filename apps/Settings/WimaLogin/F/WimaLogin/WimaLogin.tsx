import Head from "next/head"
import { useRouter } from "next/router"
import { bConfig } from "../../../../../bConfig"
import { Login, LoginConfig } from "../../../../../libs/Core/Core1/fCore1"

export function WimaLogin() {

  const config = GetLoginConfig()
  const router = useRouter()

  function goToContact() {
    router.push("/apps/Settings/Contact/WimaContact")
  }
  function goToPrivacy() {
    router.push("/apps/Settings/Terms/WimaPrivacy")
  }
  function goToTerms() {
    router.push("/apps/Settings/Terms/WimaTerms")
  }
  function goToWimaHome() {
    router.push("/")
  }
 
  return(<>

    <Login config={config}
      onBrand={goToWimaHome}
      onContact={goToContact}
      onTerms={goToTerms}
      onPrivacy={goToPrivacy}/>
  </>)
}

function GetLoginConfig() {
  const config = new LoginConfig()
  config.useFacebook = true
  config.facebookAppId = bConfig.facebookAppId
  config.facebookAppVersion = bConfig.facebookAppVersion
  config.useGoogle = true
  config.googleClientId = bConfig.googleClientId
  config.useEmail = true
  return config
}