import { IApp } from "../../Model/IApp"
import { AppIcon } from "./AppIcon/Applcon"
import cl from "./LaunchPad.module.scss"
import { useRouter } from "next/router"
import { Div } from "../../../../../libs/Core/Core2/fCore2"

interface ILaunchPadProp {
  promoApps: Array<IApp>
  otherApps: Array<IApp>
}
export function LaunchPad({
  promoApps,
  otherApps
}: ILaunchPadProp) {

  const router = useRouter()

  async function goToApp(route: string) {
    router.push(`/apps/${route}`)
  }

  return(<>
    <div className={cl.padWrap}>
      <div className={cl.pad}>
      {
        promoApps.map((app, i)=>
          <AppIcon app={app} key={i}
            big
            onClick={()=>{
              goToApp(app.route)
            }}
          />
        )
      }
      </div>
      <Div height={15} />
      <div className={cl.pad}>
      {
        otherApps.map((app, i)=>
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