import { IApp } from "../../Model/IApp"
import { AppIcon } from "./AppIcon/Applcon"
import cl from "./LaunchPad.module.scss"
import { useRouter } from "next/router"

interface ILaunchPadProp {
  apps: Array<IApp>
}
export function LaunchPad({
  apps
}: ILaunchPadProp) {

  const router = useRouter()

  function goToApp(route: string) {
    router.push(`/apps/${route}`)
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