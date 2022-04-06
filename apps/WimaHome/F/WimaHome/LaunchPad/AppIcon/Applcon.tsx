import { IApp } from "../../../Model/IApp"
import cl from "./AppIcon.module.scss"

interface IAppIconProp {
  app: IApp,
  onClick: ()=>void
}
export function AppIcon({
  app,
  onClick
}: IAppIconProp) {
  const url = `/apps/WimaHome/AppIcons/${app.icon}`
  return(<>
    <div className={cl.iconWrap} onClick={onClick}>
      <div className={cl.icon} style={{backgroundImage: `url(${url})`}}></div>
      <div className={cl.name}>{app.name}</div>
    </div>
  </>)
}