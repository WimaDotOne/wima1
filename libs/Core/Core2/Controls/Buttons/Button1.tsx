import { useEffect, useRef } from "react"
import { ClassNames } from "../../../Core1/fCore1"
import cl from "./Button1.module.scss"

interface IButton1Prop {
  text: string
  onClick: ()=>void
  color?: string
}
export function Button1({
  text,
  onClick,
  color
}: IButton1Prop) {

  const btnRef = useRef<HTMLButtonElement>(null)


  useEffect(()=>{

    const lightGray = "#efefef"
    const btn = btnRef.current
    
    if(btn) {
      btn.style.color = color || ""
      btn.style.backgroundColor = lightGray

      if(color) {
        btn.onmouseover = ()=>{
          btn.style.color = "white"
          btn.style.backgroundColor = color
        }
        btn.onmouseleave = ()=>{
          btn.style.color = color
          btn.style.backgroundColor = lightGray
        }
      }
    }
  })


  return(<>
    <button ref={btnRef} className={ClassNames([cl.button])} 
      onClick={onClick}>
      {text}
    </button>
  </>)
}