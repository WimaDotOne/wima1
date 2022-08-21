import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { bConfig } from "../../../../bConfig"
import { Get2, Login, LoginConfig, useShield } from "../../../../libs/Core/Core1/fCore1"

export function WimaLogin() {

  const [facebookAppId, setFacebookAppId] = useState("")
  const [googleClientId, setGoogleClientId] = useState("")
  const [loaded, setLoaded] = useState(false)

  const config = GetLoginConfig()
  const router = useRouter()
  const shield = useShield()

  function goToContact() {
    router.push("/apps/Login/Contact/WimaContact")
  }
  function goToPrivacy() {
    router.push("/apps/Login/Terms/WimaPrivacy")
  }
  function goToTerms() {
    router.push("/apps/Login/Terms/WimaTerms")
  }
  function goToWimaHome() {
    router.push("/")
  }

  async function loadFacebookGoogle() {
    if(loaded) return
    await Get2(shield, "/wima/LoadWimaEnv", (res)=>{
      setLoaded(true)
      setFacebookAppId(res.facebookAppId)
      setGoogleClientId(res.googleClientId)
    })
  }

  useEffect(()=>{
    loadFacebookGoogle()
  })

  if(facebookAppId) {
    config.facebookAppId = facebookAppId
  } else {
    config.useFacebook = false
  }
  if(googleClientId) {
    config.googleClientId = googleClientId
  } else {
    config.useGoogle = false
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