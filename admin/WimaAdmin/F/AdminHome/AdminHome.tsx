import { useEffect, useState } from "react"
import { Get2, useShield } from "../../../../libs/Core/Core1/fCore1"
import { IAdminApp } from "../Model/IAdminApp"
import { LaunchPad } from "./LaunchPad/LaunchPad"
import { WallPaper } from "./WallPaper/WallPaper"

interface IAdminHomeProp {

}

export function AdminHome({

}: IAdminHomeProp) {

  const [adminApps, setAdminApps] = useState<Array<IAdminApp>>([])
  const shield = useShield()

  async function loadAdminApps() {

    await Get2(shield, "/admin/LoadAdminApps",
      (res)=>{
        setAdminApps(res.adminApps)
      }
    )
  }

  useEffect(()=>{
    loadAdminApps()
  },[])

  return(<>
  <WallPaper />
  <LaunchPad adminApps={adminApps}/>
  </>)
}