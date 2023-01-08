import { useEffect, useState } from "react";
import { Get2, useShield } from "../../../../../fCore1";
import { LoginConfig } from "../../../Model/LoginConfig";
import { ChooseLoginMethod } from "./ChooseLoginMethod/ChooseLoginMethod";
import { EmailLogin } from "./EmailLogin/EmailLogin";
import { FacebookLogin } from "./FacebookLogin/FacebookLogin";
import { GoogleLogin } from "./GoogleLogin/GoogleLogin";
import { Logout } from "./Logout/Logout";

interface ILoginCardProp {
  config: LoginConfig
  afterLogin?: ()=>void
}
export function LoginCard({
  config,
  afterLogin
}: ILoginCardProp) {
  
  const [loginCardTurn, setLoginCardTurn] = useState<LoginCardTurn | null>(null)
  const shield = useShield()

  function goToChooseLoginMethod() {
    setLoginCardTurn(LoginCardTurn.ChooseLoginMethod)
  }

  function afterLogin2() {
    if(afterLogin) {
      afterLogin()
    } else {
      setLoginCardTurn(LoginCardTurn.Logout)
    }
  }

  function afterLogout() {
    setLoginCardTurn(LoginCardTurn.ChooseLoginMethod)
  }

  async function IsLoggedIn() {
    await Get2(shield, "/login/IsLoggedIn", (res)=>{
      if(res.isLoggedIn) {
        afterLogin2()
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
        afterLogin={afterLogin2}
        goToChooseLoginMethod={goToChooseLoginMethod}/>
    )
    case LoginCardTurn.FacebookLogin: return(
      <FacebookLogin config={config}
        afterLogin={afterLogin2}
        goToChooseLoginMethod={goToChooseLoginMethod}/>
    )
    case LoginCardTurn.EmailLogin: return(
      <EmailLogin
        afterLogin={afterLogin2}
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