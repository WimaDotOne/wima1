import React, { MouseEventHandler, ReactNode } from "react"
import { ClassNames } from "../../../../libs/Core/Core1/fCore1"
import cl from "./PopUp.module.scss"

interface IPopUpProp {
  pop: boolean,
  setPop: (pop: boolean)=>void
  children: ReactNode
  title?: string
  cancelText?: string
  saveText?: string
  yellow?: boolean
}

export function PopUp({
  pop,
  setPop,
  children,
  title,
  cancelText,
  saveText,
  yellow
}: IPopUpProp) {

  cancelText = cancelText || "Cancel"
  saveText = saveText || "Save"

  function cancelPop() {
    setPop(false)
  }

  function doNothing(e: React.MouseEvent) {
    e.stopPropagation()
  }

  const clYellow = yellow ? cl.yellow : ""
  
  return(<>
  <div className={cl.shieldFilm} onClick={cancelPop}>
    <div className={cl.popUp} onClick={doNothing}>
      <div className={cl.banner}>
        <div className={cl.title}>{title}</div>
        <div className={cl.cancelBtn} 
          onClick={()=>{setPop(false)}}>
            {cancelText}
        </div>
        <div className={ClassNames([cl.saveBtn, clYellow])}>
          {saveText}
        </div>
      </div>
      <div className={cl.content}>
      { children }
      </div>
    </div>
  </div>
  </>)
}