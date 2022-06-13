import { ReactNode } from "react"
import { AppleIconButton } from "../../../Core/Core2/fCore2"
import { SvgIcon } from "../../../Core/Core2/Svg/SvgIcon"
import { Button } from "./Button/Button"
import cl from "./ReadEdit.module.scss"

interface IReadEditProp {
  title: string
  description?: string
  isEdit: boolean
  setIsEdit: (isEdit: boolean)=>void
  onCancel: ()=>void
  onSave: ()=>void
  children: ReactNode
  color?: string
}
export function ReadEdit({
  isEdit, setIsEdit,
  title,
  description,
  onCancel,
  onSave,
  children,
  color
}: IReadEditProp) {

  const lightGray = "#efefef"
  return(<>
  <div>
    <div className={cl.titleRow}>
      <div className={cl.title}>{title}</div>
      {
        isEdit ? 
        <div>
          <AppleIconButton svgName="x" 
            color={color} 
            backgroundColor={lightGray}
            onClick={onCancel}
          /> &nbsp;&nbsp;
          <AppleIconButton svgName="floppydisk" 
            color={color} 
            backgroundColor={lightGray}
            onClick={onSave}
          />
        </div>
        :
        <div className={cl.pencilDiv} onClick={()=>{setIsEdit(true)}}>
          <SvgIcon name="pencil" width={17} color={color}/>
        </div>
      }
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
          <Button text="Cancel" onClick={onCancel} color={color}/>
        </div>
        <div className={cl.saveBtnDiv}>
          <Button text="Save" onClick={onSave} color={color}/>
        </div>
      </div>: null
    }
    </div>
  </>)
}