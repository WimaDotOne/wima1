import { useEffect, useState } from "react"
import { Get2, useShield } from "../../../../libs/Core/Core1/fCore1"
import { useWimaUser } from "./WimaUserContext"

export function IsWimaUserLogin() {

  const [loaded, setLoaded] = useState<boolean>(false)
  const user = useWimaUser()
  const shield = useShield()

  async function UpdateUserLogin() {
    await Get2(shield, "/login/IsLoggedIn", (res)=>{
      user?.setIsLoggedIn(!!res.isLoggedIn)
    })
  }
  useEffect(()=>{
    if(!loaded) {
      UpdateUserLogin()
      setLoaded(true)
    }
  })
  return(<>
    <div></div>
  </>)
}