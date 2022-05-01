import { IApp } from "../../Model/IApp"
import { AppIcon } from "./AppIcon/Applcon"
import cl from "./LaunchPad.module.scss"
import { useRouter } from "next/router"
import { useWimaUser } from "../WimaUserContext/WimaUserContext"
import { Get2, useShield } from "../../../../../libs/Core/Core1/fCore1"

interface ILaunchPadProp {
  apps: Array<IApp>
}
export function LaunchPad({
  apps
}: ILaunchPadProp) {

  const router = useRouter()
  const user = useWimaUser()
  const shield = useShield()
  async function goToApp(route: string) {
    await Get2(shield, "/login/IsLoggedIn", (res)=>{
      user?.setIsLoggedIn(!!res.isLoggedIn)
      router.push(`/apps/${route}`)
    })
  }

  return(<>
    <div className={cl.padWrap}>
      <div className={cl.pad}>
      {
        apps.map((app, i)=>
          <AppIcon app={app} key={i}
            onClick={()=>{
              goToApp(app.route)
            }}
          />
        )
      }
      </div>
    </div>
  </>)
}