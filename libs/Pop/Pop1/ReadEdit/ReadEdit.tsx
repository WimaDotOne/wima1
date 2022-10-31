import { ReactNode } from "react"
import { AppleIconButton, Button1 } from "../../../Core/Core2/fCore2"
import { SvgIcon } from "../../../Core/Core2/Svg/SvgIcon"
import cl from "./ReadEdit.module.scss"

interface IReadEditProp {
  title: string
  description?: string
  isEdit: boolean
  setIsEdit: (isEdit: boolean)=>void
  onCancel: ()=>void
  onSave?: ()=>void
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
    <div className={cl.header}>
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
            {
              onSave ?
              <AppleIconButton svgName="floppydisk" 
                color={color} 
                backgroundColor={lightGray}
                onClick={onSave}
              />:null
            }

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
    </div>
    {
      children
    }
    {
      isEdit ?
      <div className={cl.saveBtns}>
        <div>
          <Button1 text="Cancel" onClick={onCancel} color={color}/>
        </div>
        {
          onSave ?
          <div className={cl.saveBtnDiv}>
            <Button1 text="Save" onClick={onSave} color={color}/>
          </div>:null
        }

      </div>: null
    }
    </div>
  </>)
}