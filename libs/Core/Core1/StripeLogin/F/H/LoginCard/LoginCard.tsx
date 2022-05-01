import { useEffect, useState } from "react";
import { Get2, useShield } from "../../../../fCore1";
import { LoginConfig } from "../../Model/LoginConfig";
import { ChooseLoginMethod } from "./ChooseLoginMethod/ChooseLoginMethod";
import { EmailLogin } from "./EmailLogin/EmailLogin";
import { FacebookLogin } from "./FacebookLogin/FacebookLogin";
import { GoogleLogin } from "./GoogleLogin/GoogleLogin";
import { Logout } from "./Logout/Logout";

interface ILoginCardProp {
  config: LoginConfig
}
export function LoginCard({
  config
}: ILoginCardProp) {
  
  const [loginCardTurn, setLoginCardTurn] = useState<LoginCardTurn | null>(null)
  const shield = useShield()

  function goToChooseLoginMethod() {
    setLoginCardTurn(LoginCardTurn.ChooseLoginMethod)
  }

  function afterLogin() {
    setLoginCardTurn(LoginCardTurn.Logout)
  }

  function afterLogout() {
    setLoginCardTurn(LoginCardTurn.ChooseLoginMethod)
  }

  async function IsLoggedIn() {
    await Get2(shield, "/login/IsLoggedIn", {}, (res)=>{
      if(res.isLoggedIn) {
        setLoginCardTurn(LoginCardTurn.Logout)
      } else {
        setLoginCardTurn(LoginCardTurn.ChooseLoginMethod)
      }
    })
  }

  useEffect(()=>{
    IsLoggedIn()
  }, [])

  switch(loginCardTurn) {
    case LoginCardTurn.GoogleLogin: return(
      <GoogleLogin config={config}
        afterLogin={afterLogin}
        goToChooseLoginMethod={goToChooseLoginMethod}/>
    )
    case LoginCardTurn.FacebookLogin: return(
      <FacebookLogin config={config}
        afterLogin={afterLogin}
        goToChooseLoginMethod={goToChooseLoginMethod}/>
    )
    case LoginCardTurn.EmailLogin: return(
      <EmailLogin 
        afterLogin={afterLogin}
        goToChooseLoginMethod={goToChooseLoginMethod}/>
    )
    case LoginCardTurn.Logout: return(
      <Logout afterLogout={afterLogout}/>
    )
    case LoginCardTurn.ChooseLoginMethod: return(
      <ChooseLoginMethod config={config}
        setLoginCardTurn={setLoginCardTurn}/>
    )
    default: return null
  }
}

export enum LoginCardTurn {
  ChooseLoginMethod = 1,
  Logout,
  GoogleLogin,
  FacebookLogin,
  EmailLogin
}