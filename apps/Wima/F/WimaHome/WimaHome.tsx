import { useEffect, useState } from "react"
import { Get2, useShield } from "../../../../libs/Core/Core1/fCore1"
import { IApp } from "../Model/IApp"
import { LaunchPad } from "./LaunchPad/LaunchPad"
import { WallPaper } from "./WallPaper/WallPaper"

export function WimaHome() {

  const [promoApps, setPromoApps] = useState<Array<IApp>>([])
  const [otherApps, setOtherApps] = useState<Array<IApp>>([])
  const shield = useShield()

  async function loadApps() {

    await Get2(shield, "/wima/LoadApps",
      (res)=>{
        setPromoApps(res.promoApps)
        setOtherApps(res.otherApps)
      }
    )
  }

  useEffect(()=>{
    loadApps()
  },[])

  return(<>
    <WallPaper />
    <LaunchPad promoApps={promoApps} otherApps={otherApps}/>
  </>)
}
