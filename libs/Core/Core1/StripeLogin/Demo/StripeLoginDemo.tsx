import Head from "next/head"
import { useRouter } from "next/router"
import { bConfig } from "../../../../../bConfig"
import { Login, LoginConfig } from "../fLogin"

export function StripeLoginDemo() {

  const config = GetLoginConfig()
  const router = useRouter()

  function goToContact() {
    router.push("/z/libs/Core/StripeLogin/Contact")
  }
  function goToPrivacy() {
    router.push("/z/libs/Core/StripeLogin/Privacy")
  }
  function goToTerms() {
    router.push("/z/libs/Core/StripeLogin/Terms")
  }
 
  return(<>
    <Head>
      <title>Stripe Login</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
    </Head>

    <Login config={config}
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