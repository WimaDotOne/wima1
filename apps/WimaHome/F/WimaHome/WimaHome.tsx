import { useEffect, useState } from "react"
import { Get2, useShield } from "../../../../libs/Core/Core1/fCore1"
import { IApp } from "../Model/IApp"
import { LaunchPad } from "./LaunchPad/LaunchPad"
import { WallPaper } from "./WallPaper/WallPaper"

export function WimaHome() {

  const [apps, setApps] = useState<Array<IApp>>([])
  const shield = useShield()

  async function loadApps() {

    await Get2(shield, "/wimaHome/LoadApps",
      (res)=>{
        setApps(res.apps)
      }
    )
  }

  useEffect(()=>{
    loadApps()
  },[])

  return(<>
    <WallPaper />
    <LaunchPad apps={apps}/>
  </>)
}
