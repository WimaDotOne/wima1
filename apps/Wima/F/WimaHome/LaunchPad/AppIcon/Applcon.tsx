import { ClassNames } from "../../../../../../libs/Core/Core1/fCore1"
import { IApp } from "../../../Model/IApp"
import cl from "./AppIcon.module.scss"

interface IAppIconProp {
  app: IApp,
  onClick: ()=>void
  big?: boolean
}
export function AppIcon({
  app,
  onClick,
  big
}: IAppIconProp) {

  const clBig = big ? cl.big : ""
  const url = `/apps/WimaHome/AppIcons/${app.icon}`
  return(<>
    <div className={ClassNames([cl.iconWrap, clBig])} onClick={onClick}>
      <div className={ClassNames([cl.icon, clBig])} style={{backgroundImage: `url(${url})`}}></div>
      <div className={ClassNames([cl.name, clBig])}>{app.name}</div>
    </div>
  </>)
}