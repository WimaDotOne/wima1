import { ReactNode } from "react"
import { IconButtons } from "../../../Core/Core2/AppleWindow/F/View/IconButtons/IconButtons"
import cl from "./PopUp.module.scss"

interface IPopUpProp {
  show: boolean,
  setShow: (show: boolean)=>void
  children: ReactNode
  onSave?: ()=>void
  onClose?: ()=>void
  color?: string
  maxWidth?: number
}

export function PopUp({
  children,
  show,
  setShow,
  onSave,
  onClose,
  color,
  maxWidth
}: IPopUpProp) {

  if(!show) return null

  const boardStyle = { maxWidth: "" }
  if(maxWidth) {
    boardStyle.maxWidth = maxWidth+"px"
  }
  return(<>
  <div className={cl.screen}>
    <div className={cl.board} style={boardStyle}>
      <div className={cl.window}>
      {children}
      </div>
      <div className={cl.bottomBar}>
      <IconButtons color={color}
        icon1="x"
        onClick1={()=>{
          setShow(false)
          if(onClose) { onClose() }
        }}
        icon5="floppydisk"
        onClick5={onSave}
      />
      </div>
    </div>
  </div>
  </>)
}