import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { bConfig } from "../../../../bConfig"
import { Get2, Login2, LoginConfig, useShield } from "../../../../libs/Core/Core1/fCore1"

interface IWimaLogin2Prop {
  brandIconUrl: string
  brand?: string
  afterLogin: ()=>void
  onBrand: ()=>void
}

export function WimaLogin2({
  brandIconUrl,
  brand,
  afterLogin,
  onBrand
}: IWimaLogin2Prop) {

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
    config.useFacebook = true
  } else {
    config.useFacebook = false
  }
  if(googleClientId) {
    config.googleClientId = googleClientId
    config.useGoogle = true
  } else {
    config.useGoogle = false
  }

  return(<>
    <Login2 config={config}
      afterLogin={afterLogin}
      brand={brand}
      brandIconUrl={brandIconUrl}
      onBrand={onBrand}
      onContact={goToContact}
      onTerms={goToTerms}
      onPrivacy={goToPrivacy}/>
  </>)
}

function GetLoginConfig() {
  const config = new LoginConfig()
  config.facebookAppVersion = bConfig.facebookAppVersion
  config.useEmail = true
  return config
}