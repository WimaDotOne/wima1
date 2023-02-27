import React, { MouseEventHandler, ReactNode } from "react"
import { ClassNames } from "../../../../libs/Core/Core1/fCore1"
import { BigRoundButton } from "../../../../libs/Core/Core2/fCore2"
import cl from "./PopUp.module.scss"

interface IPopUpProp {
  pop: boolean,
  setPop: (pop: boolean)=>void
  onSave: ()=>void
  children: ReactNode
  title?: string
  cancelText?: string
  saveText?: string
  saveTextColor?: string
  saveButtonColor?: string
}

export function PopUp({
  pop,
  setPop,
  onSave,
  children,
  title,
  cancelText,
  saveText,
  saveTextColor,
  saveButtonColor
}: IPopUpProp) {

  cancelText = cancelText || "Cancel"
  saveText = saveText || "Save"

  function cancelPop() {
    setPop(false)
  }

  function doNothing(e: React.MouseEvent) {
    e.stopPropagation()
  }

  if(!pop) {
    return null
  }
  
  return(<>
  <div className={cl.shieldFilm} onClick={cancelPop}>
    <div className={cl.popUp} onClick={doNothing}>
      <div className={cl.banner}>
        <div className={cl.title}>{title}</div>
        <BigRoundButton text={cancelText} light
          onClick={()=>{setPop(false)}}
        />
        <BigRoundButton text={saveText} 
          onClick={onSave}
          textColor={saveTextColor}
          buttonColor={saveButtonColor}
        />
      </div>
      <div className={cl.content}>
      { children }
      </div>
    </div>
  </div>
  </>)
}