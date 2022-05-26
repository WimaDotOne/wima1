import { ReactNode, useState } from "react"
import { SvgIcon } from "../../../../../../../../../libs/Core/Core2/Svg/SvgIcon"
import { MovicColor } from "../../../../../../CSS/MovicColor"
import { Button } from "../../../../../H/Controls/Button/Button"
import cl from "./SettingSection.module.scss"

interface ISettingSectionProp {
  title: string
  description?: string
  isEdit: boolean
  setIsEdit: (isEdit: boolean)=>void
  onCancel: ()=>void
  onSave: ()=>void
  children: ReactNode
}
export function SettingSection({
  isEdit, setIsEdit,
  title,
  description,
  onCancel,
  onSave,
  children
}: ISettingSectionProp) {

  return(<>
  <div>
    <div className={cl.titleRow}>
      <div className={cl.title}>{title}</div>
      <div className={cl.pencilDiv} onClick={()=>{
        setIsEdit(!isEdit)
      }}>
      {
        isEdit ? null:
        <div>
          <SvgIcon name="pencil" width={17} color={MovicColor.themeRed}/>
        </div>
      }
      </div>
    </div>
    {
      description ? <div className={cl.description}>{description}</div>:null
    }
    {
      children
    }
    {
      isEdit ?
      <div className={cl.saveBtns}>
        <div>
          <Button text="Cancel" onClick={onCancel}/>
        </div>
        <div className={cl.saveBtnDiv}>
          <Button text="Save" onClick={onSave} />
        </div>
      </div>: null
    }
    </div>
  </>)
}