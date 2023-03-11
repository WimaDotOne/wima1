import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { GENERAL_INPUT_MAX } from "../../../../bConfig"
import { Get2, Post2, TextField1, useShield } from "../../../../libs/Core/Core1/fCore1"
import { Button1, Div } from "../../../../libs/Core/Core2/fCore2"
import cl from "./AdminLogin.module.scss"

interface IAdminLoginProp {

}

export function AdminLogin({

}: IAdminLoginProp) {

  const [passcode, setPasscode] = useState("")
  const shield = useShield()
  const router = useRouter()

  async function checkLogin() {
    await Get2(shield, "/admin/IsAdminLoggedIn",(res)=>{
      if(res.isAdminLoggedIn) {
        router.replace("/admin/Home")
      }
    })
  }

  async function adminLogin() {
    await Post2(shield, "/admin/AdminLogin", {
      passcode
    }, (res)=>{
      router.replace("/admin/Home")
    })
  }

  useEffect(()=>{
    checkLogin()
  }, [])

  return(<>
  <div className={cl.adminLogin}>
    <div className={cl.row}>
      <TextField1 prompt="Password"
        value={passcode} 
        maxLength={GENERAL_INPUT_MAX}
        onChange={(value)=>{setPasscode(value)}}
      />
      <Div width={10} />
      <div className={cl.buttonSpace}>
        <Button1 text="Go" onClick={adminLogin} color="#0d6efd"/>
      </div>
    </div>
  </div>
  </>)
}