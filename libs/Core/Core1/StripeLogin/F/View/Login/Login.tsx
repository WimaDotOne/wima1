import { CenterDiv } from "../../H/CenterCardDiv/CenterCardDiv"
import { LoginConfig } from "../../Model/LoginConfig"
import { Background } from "../Background/Background"
import { FacebookScript } from "./LoginCard/FacebookLogin/FacebookScript"
import { GoogleScript } from "./LoginCard/GoogleLogin/GoogleScript"
import { LoginCard } from "./LoginCard/LoginCard"

interface ILoginProp {
  config: LoginConfig
  onBrand?: ()=>void
  onContact?: ()=>void
  onPrivacy?: ()=>void
  onTerms?: ()=>void
}
export function Login({
  config,
  onBrand,
  onContact,
  onPrivacy,
  onTerms
}: ILoginProp) {
  
  return(<>
  { config.useGoogle ? <GoogleScript />:null }
  { config.useFacebook ? <FacebookScript/>:null }
    <Background />
    <CenterDiv brand="Wima"
      onBrand={onBrand}
      onContact={onContact}
      onPrivacy={onPrivacy}
      onTerms={onTerms}>
      <LoginCard config={config}/>
    </CenterDiv>
  </>)
}