import { useState } from "react"
import { GENERAL_INPUT_MAX } from "../../../../bConfig"
import { TextField1 } from "../../../../libs/Core/Core1/fCore1"
import { Button1, Div } from "../../../../libs/Core/Core2/fCore2"
import cl from "./AdminLogin.module.scss"

interface IAdminLoginProp {

}

export function AdminLogin({

}: IAdminLoginProp) {

  const [passcode, setPasscode] = useState("")

  async function checkLogin() {
    
  }

  async function adminLogin() {
    
  }

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