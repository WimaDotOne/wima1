import { CenterDiv } from "../../H/CenterCardDiv/CenterCardDiv"
import { LoginConfig } from "../../Model/LoginConfig"
import { Background } from "../Background/Background"
import { FacebookScript } from "./LoginCard/FacebookLogin/FacebookScript"
import { GoogleScript } from "./LoginCard/GoogleLogin/GoogleScript"
import { LoginCard } from "./LoginCard/LoginCard"

interface ILogin2Prop {
  config: LoginConfig
  brand?: string
  brandIconUrl?: string
  afterLogin: ()=>void

  onBrand?: ()=>void
  onContact?: ()=>void
  onPrivacy?: ()=>void
  onTerms?: ()=>void
}
export function Login2({
  config,
  brand,
  brandIconUrl,
  afterLogin,
  onBrand,
  onContact,
  onPrivacy,
  onTerms
}: ILogin2Prop) {
  
  return(<>
  { config.useGoogle ? <GoogleScript />:null }
  { config.useFacebook ? <FacebookScript/>:null }
    <Background />
    <CenterDiv 
      brand={brand}
      brandIconUrl={brandIconUrl}
      onBrand={onBrand}
      onContact={onContact}
      onPrivacy={onPrivacy}
      onTerms={onTerms}>
      <LoginCard config={config} afterLogin={afterLogin}/>
    </CenterDiv>
  </>)
}