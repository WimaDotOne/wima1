import { useEffect, useRef } from "react"
import { ClassNames } from "../../../Core1/fCore1"
import cl from "./BigButton.module.scss"

interface IBigButtonProp {
  text: string
  onClick: ()=>void
  color?: string
  bigger?: boolean
}
export function BigButton({
  text,
  onClick,
  color,
  bigger
}: IBigButtonProp) {

  const btnRef = useRef<HTMLButtonElement>(null)

  const backgroundColor = color || "#007bff"
  const clBigger = bigger ? cl.bigger : ""

  const btnStyle = {
    color: "white",
    backgroundColor: backgroundColor
  }

  useEffect(()=>{
    const btn = btnRef.current
    if(btn) {
      btn.onmouseover = ()=>{
        btn.style.opacity = "0.9"
        btn.style.boxShadow = "0 1px 4px #0003"
      }
      btn.onmouseleave = ()=>{
        btn.style.opacity = "1"
        btn.style.boxShadow = ""
      }
    }
  })


  return(<>
    <button ref={btnRef} className={ClassNames([cl.button, clBigger])} 
      style={btnStyle}
      onClick={onClick}>
      {text}
    </button>
  </>)
}