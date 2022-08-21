import { useEffect, useState } from "react"
import { useShield } from "../../../../fCore1"
import cl from "./Contact.module.scss"
import { Get2 } from "../../../../fCore1"

interface IContactProp {

}
export function Contact({

}:IContactProp) {

  const [email, setEmail] = useState("")
  const [loaded, setLoaded] = useState(false)

  const shield = useShield()

  

  async function loadContactMeEmail() {
    if(loaded) return
    await Get2(shield, "/wima/LoadWimaEnv", (res)=>{
      setLoaded(true)
      setEmail(res.contactMe)
    })
  }

  useEffect(()=>{
    loadContactMeEmail()
  })

  return(<>
    <div className={cl.contactWrap}>
      <div className={cl.layer1}>
        <div className={cl.floor}></div>
      </div>
      <div className={cl.layer2}>
        <div className={cl.email}>{email}</div>
      </div>
    </div>
  </>)
}