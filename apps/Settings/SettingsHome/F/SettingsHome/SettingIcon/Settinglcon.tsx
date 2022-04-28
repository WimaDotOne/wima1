import { ISetting } from "../../Model/ISetting"
import cl from "./SettingIcon.module.scss"

interface ISettingIconProp {
  setting: ISetting,
  onClick: ()=>void
}
export function SettingIcon({
  setting,
  onClick
}: ISettingIconProp) {

  const url = `/apps/Settings/SettingIcons/${setting.icon}`

  return(<>
  <div className={cl.iconSpace}>
    <div className={cl.iconWrap} onClick={onClick}>
      <div className={cl.icon} style={{backgroundImage: `url(${url})`}}></div>
      <div className={cl.name}>{setting.name}</div>
    </div>
  </div>
  </>)
}