import { useEffect } from "react";
import { Div } from "../../../../../../../Core2/fCore2";
import { Post2, useShield } from "../../../../../../fCore1";
import { Link } from "../../../../H/Link/Link";
import { Title } from "../../../../H/Title/Title";
import { LoginConfig } from "../../../../Model/LoginConfig";
import cl from "./FacebookLogin.module.scss"
import { LoginButton } from "./LoginButton/LoginButton";

declare global {
  interface Window {
      FB:any;
  }
}

interface IFacebookLoginProp {
  config: LoginConfig
  goToChooseLoginMethod: ()=>void
  afterLogin: ()=>void
}

export function FacebookLogin({
  config,
  goToChooseLoginMethod,
  afterLogin
}: IFacebookLoginProp) {

  const shield = useShield()
  
  useEffect(()=>{
    if(!window.FB) { return }
    if(!config || !config.facebookAppId || !config.facebookAppVersion) { return }
    window.FB.init({
      appId: config.facebookAppId,
      autoLogAppEvents: true,
      xfbml: true,
      version: config.facebookAppVersion
    })
  })

  async function facebookLogIn(authResponse: any) {
    if(!authResponse) { // user cancel login
      return
    }
    await Post2(shield, "/login/FacebookLogIn", {
      authResponse
    }, afterLogin)
  }

  function onClickLoginButton() {
    if(window.FB) {
      window.FB.getLoginStatus((data: any) => {
      
        if(data.status === "connected") { 
          facebookLogIn(data.authResponse)
          return 
        }
    
        window.FB.login((data: any) => {
          facebookLogIn(data.authResponse)
        },{scope: 'public_profile,email'})
      })
    }
  }

  return (<>
    <Title>Facebook</Title>
    <Div height={20} />
    <div className={cl.button}>
      <LoginButton onClick={onClickLoginButton} />
    </div>
    <Div height={40} />
    <div className={cl.back}><Link text="Back" onClick={goToChooseLoginMethod}/></div>
  </>)
}