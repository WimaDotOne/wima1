import { useEffect, useState } from "react"
import { Get2, useShield } from "../../../../libs/Core/Core1/fCore1"
import { useWimaEnv } from "./WimaEnvContext"

export function GatherMovicEnv() {

  const wimaEnv = useWimaEnv()
  const shield = useShield()
  const [loaded, setLoaded] = useState<boolean>(false)

  async function LoadMovicEnv() {
    if(loaded) return
    if(wimaEnv?.movicEnv) return
    await Get2(shield,"/wima/LoadMovicEnv", (res)=>{
      wimaEnv?.setMovicEnv(res.movicEnv)
      setLoaded(true)
    })
  }
  
  useEffect(()=>{
    LoadMovicEnv()
  })
  return(<>
    <div></div>
  </>)
}