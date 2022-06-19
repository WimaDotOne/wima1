import { useEffect, useState } from "react"
import { UniversityDataConfig } from "../../../../../../../../../bConfig"
import { Div, HLine } from "../../../../../../../Core2/fCore2"
import { Get2, Post2, useShield } from "../../../../../../fCore1"
import { BigIconButton } from "../../../Login/LoginCard/ChooseLoginMethod/BigIconButton/BigIconButton"
import cl from "./UnivLogout.module.scss"

interface IInfo {
  name?: string
  email?: string
  domain?: string
}
interface IUnivLogoutProp {
  afterLogout: ()=>void
}
export function UnivLogout({
  afterLogout
}:IUnivLogoutProp) {

  const [info, setInfo] = useState<IInfo>({})

  const shield = useShield()

  async function loadUnivLogin() {

    await Get2(shield, "/login/LoadUnivLogin", 
      (res)=>{
        setInfo(res.info)
      }
    )
  }

  useEffect(()=>{
    loadUnivLogin()
  }, [])

  async function logout() {
    if(!window.confirm("Log out university account?")) {
      return
    }
    await Post2(shield, "/login/UnivLogOut", {}, afterLogout)
  }
  
  let univ: {logoUrl?: string, name?: string} = {}
  if(info && info.domain) {
    const universities: any = UniversityDataConfig
    univ = universities[info.domain]
  }
  const logoUrl = univ?.logoUrl

  return(<>
    <div className={cl.logoutDiv}>
      <div className={cl.univLogoDiv}>
      {
        logoUrl ?
        <div className={cl.univLogo} style={{backgroundImage: `url(${logoUrl})`}} />
        :null
      }
      </div>
      <div className={cl.info}>{info.name}</div>
      <div className={cl.info}>{info.email}</div>
      <Div height={30} />
      <HLine />
      <Div height={300} />
      <BigIconButton name="door.batwing" 
        text="Log out" iconWidth={75} onClick={logout}
      />
    </div>
  </>)
}