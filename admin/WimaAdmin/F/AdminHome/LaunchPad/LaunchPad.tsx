import { IAdminApp } from "../../Model/IAdminApp"
import { AdminAppIcon } from "./AdminAppIcon/AdminApplcon"
import cl from "./LaunchPad.module.scss"
import { useRouter } from "next/router"

interface ILaunchPadProp {
  adminApps: Array<IAdminApp>
}
export function LaunchPad({
  adminApps
}: ILaunchPadProp) {

  const router = useRouter()

  async function goToAdminApp(route: string) {
    router.push(`/admin/${route}`)
  }

  return(<>
    <div className={cl.padWrap}>
      <div className={cl.pad}>
      {
        adminApps.map((app, i)=>
          <AdminAppIcon app={app} key={i}
            onClick={()=>{
              goToAdminApp(app.route)
            }}
          />
        )
      }
      </div>
    </div>
  </>)
}