import { IAdminApp } from "../../../Model/IAdminApp"
import cl from "./AdminAppIcon.module.scss"

interface IAdminAppIconProp {
  app: IAdminApp,
  onClick: ()=>void
}
export function AdminAppIcon({
  app,
  onClick
}: IAdminAppIconProp) {

  const url = `/apps/WimaHome/AppIcons/${app.icon}`
  
  return(<>
    <div className={cl.iconWrap} onClick={onClick}>
      <div className={cl.icon} style={{backgroundImage: `url(${url})`}}></div>
      <div className={cl.name}>{app.name}</div>
    </div>
  </>)
}