import { SvgIcon } from "../../../Core/Core2/Svg/SvgIcon"
import cl from "./File.module.scss"

interface IFileProp {
  iconName: string
  text: string
  onClick: ()=>void
  iconWidth?: number
  iconColor?: string
  iconColor2?: string
  type?: string
}
export function File({
  iconName,
  text,
  onClick,
  iconWidth,
  iconColor,
  iconColor2,
  type
}: IFileProp) {

  switch(type) {
    case FileType.settings:
      iconColor = iconColor || "#E7ECED"
      iconColor2 = iconColor2 || "#C7CAC7"
    case FileType.youtube:
      break
    default:
      iconColor = iconColor || "#6b9bd2"
  }
  iconColor2 = iconColor2 || iconColor
  iconWidth = iconWidth || 50

  return(<>
  <div className={cl.file} onClick={onClick}>
    <div className={cl.iconDiv}>
      <div className={cl.iconDivInner}>
        <SvgIcon name={iconName} width={iconWidth} color={iconColor} color2={iconColor2}/>
      </div>
    </div>
    <div className={cl.fileName}>
      {text}
    </div>
  </div>
  </>)
}

export const FileType = {
  text: "text",
  settings: "settings",
  preview: "preview",
  youtube: "youtube"
}