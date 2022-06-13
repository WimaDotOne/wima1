import { useEffect, useRef } from "react"
import { ClassNames } from "../../../../Core/Core1/fCore1"
import cl from "./Button.module.scss"

interface IButtonProp {
  text: string
  onClick: ()=>void
  color?: string
}
export function Button({
  text,
  onClick,
  color
}: IButtonProp) {

  const btnRef = useRef<HTMLButtonElement>(null)
  const lightGray = "#efefef"
  const btnStyle = {
    color: "",
    backgroundColor: lightGray
  }
  if(color) btnStyle.color = color

  useEffect(()=>{
    if(!color) return
    const btn = btnRef.current
    if(btn) {
      btn.onmouseover = ()=>{
        btn.style.color = "white"
        btn.style.backgroundColor = color
      }
      btn.onmouseleave = ()=>{
        btn.style.color = color
        btn.style.backgroundColor = lightGray
      }
    }
  })


  return(<>
    <button ref={btnRef} className={ClassNames([cl.button])} 
      style={btnStyle}
      onClick={onClick}>
      {text}
    </button>
  </>)
}