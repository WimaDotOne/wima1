import { useEffect, useRef } from "react"
import { Div } from "../../../../../../../Core2/fCore2";
import { Post2, useShield } from "../../../../../../fCore1";
import { Link } from "../../../../H/Link/Link";
import { Title } from "../../../../H/Title/Title";
import { LoginConfig } from "../../../../Model/LoginConfig";
import cl from "./GoogleLogin.module.scss"

declare global {
  interface Window {
    google: any
    googlePlace: any
  }
}

interface IGoogleLoginProp {
  config: LoginConfig
  afterLogin: ()=>void
  goToChooseLoginMethod: ()=>void
}

export function GoogleLogin({
  config,
  afterLogin,
  goToChooseLoginMethod
}: IGoogleLoginProp) {

  const shield = useShield()
  const buttonRef = useRef<HTMLDivElement>(null)


  useEffect(()=>{
    const id = window.google?.accounts?.id
    if (!id || !config.googleClientId) { return }

    id.initialize({
      client_id: config.googleClientId,
      callback: googleLogIn
    })
    if(buttonRef.current) {
      id.renderButton(buttonRef.current,{})
      //prompt won't show on any browser on iphone or safari browser on mac
      id.prompt()
    }
  })

  async function googleLogIn(data: any) {
    await Post2(shield, "/login/GoogleLogIn", {
      data
    }, afterLogin)
  }

  return (<>
    <Title>Google</Title>
    <Div height={20} />
    <div className={cl.buttonDiv}>
      <div ref={buttonRef}></div>
    </div>
    <Div height={40} />
    <div className={cl.back}><Link text="Back" onClick={goToChooseLoginMethod}/></div>
  </>)
}