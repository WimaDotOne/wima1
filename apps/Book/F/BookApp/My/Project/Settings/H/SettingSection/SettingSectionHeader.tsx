import { SvgIcon } from "../../../../../../../../../libs/Core/Core2/Svg/SvgIcon"
import { BookColor } from "../../../../../../CSS/BookColor"
import cl from "./SettingSectionHeader.module.scss"

interface ISettingSectionHeaderProp {
  title: string
  description?: string
  onClickPencil: ()=>void
  isEdit?: boolean
}
export function SettingSectionHeader({
  title,
  description,
  onClickPencil,
  isEdit
}: ISettingSectionHeaderProp) {

  return(<>
  <div className={cl.titleRow}>
    <div className={cl.title}>{title}</div>
    <div className={cl.pencilDiv} onClick={onClickPencil}>
    {
      isEdit ? null:
      <div>
        <SvgIcon name="pencil" width={17} color={BookColor.themeGreen}/>
      </div>
    }
    </div>
  </div>
  {
    description ? <div className={cl.description}>{description}</div>:null
  }
  </>)
}