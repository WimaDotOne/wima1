import { CenterDiv } from "../../H/CenterCardDiv/CenterCardDiv"
import { FacebookScript } from "../../H/LoginCard/FacebookLogin/FacebookScript"
import { GoogleScript } from "../../H/LoginCard/GoogleLogin/GoogleScript"
import { LoginCard, LoginCardTurn } from "../../H/LoginCard/LoginCard"
import { LoginConfig } from "../../Model/LoginConfig"
import { Background } from "../Background/Background"

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