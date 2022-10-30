import { SvgIcon } from "../../../Core/Core2/Svg/SvgIcon"
import cl from "./ReadEditHeader.module.scss"

interface IReadEditHeaderProp {
  title: string
  description?: string
  onClickPencil: ()=>void
  isEdit?: boolean
  color?: string
}

//Used when a head is needed that looks the one in <ReadEdit /> but it is not really read/edit situation e.g. uploading an image.
export function ReadEditHeader({
  title,
  description,
  onClickPencil,
  isEdit,
  color
}: IReadEditHeaderProp) {

  color = color || "#1973e7"
  return(<>
  <div className={cl.titleRow}>
    <div className={cl.title}>{title}</div>
    <div className={cl.pencilDiv} onClick={onClickPencil}>
    {
      isEdit ? null:
      <div>
        <SvgIcon name="pencil" width={17} color={color}/>
      </div>
    }
    </div>
  </div>
  {
    description ? <div className={cl.description}>{description}</div>:null
  }
  </>)
}