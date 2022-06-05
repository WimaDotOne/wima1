import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Div, HLine } from "../../../../../../Core2/fCore2"
import { Post2, useShield } from "../../../../../fCore1"
import { BigIconButton } from "../ChooseLoginMethod/BigIconButton/BigIconButton"
import cl from "./Logout.module.scss"

interface ILoginInfo {
  title?: string
  name?: string
  email?: string
}
interface ILogoutProp {
  afterLogout: ()=>void
}
export function Logout({
  afterLogout
}:ILogoutProp) {

  const [loginInfo, setLoginInfo] = useState<ILoginInfo>({})

  const shield = useShield()
  const router = useRouter()

  async function loadLogin() {

    await Post2(shield, "/login/LoadLogin", {}, 
      (res)=>{
        setLoginInfo(res.loginInfo)
      }
    )
  }

  useEffect(()=>{
    loadLogin()
  }, [])

  async function logout() {
    if(!window.confirm("Log out?")) {
      return
    }
    await Post2(shield, "/login/LogOut", {}, afterLogout)
  }
  function goToWimaHome() {
    router.push("/")
  }
  return(<>
    <div className={cl.logoutDiv}>
      <div className={cl.title}>{loginInfo.title}</div>
      <div className={cl.info}>{loginInfo.name}</div>
      <div className={cl.info}>{loginInfo.email}</div>
      <Div height={30} />
      <HLine />
      <Div height={100} />
      <BigIconButton name="wimacircle1" text="Wima Home" 
        iconWidth={75} onClick={goToWimaHome} />
      <Div height={300} />
      <BigIconButton name="door.batwing" 
        text="Log out" iconWidth={75} onClick={logout}
      />
    </div>
  </>)
}