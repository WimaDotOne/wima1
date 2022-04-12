import { ReactNode, useEffect, useRef, useState } from "react"
import cl from "./Collapsible.module.scss"

interface ICollapsibleProp {
  children: ReactNode
  collapsed: boolean
}
export function Collapsible({
  children, 
  collapsed
}: ICollapsibleProp) {

  const divRef = useRef<HTMLDivElement>(null)
  const firstRender = useRef<boolean>(true)

  useEffect(()=>{
    const div = divRef.current

    if(div) {
      if(collapsed) {
        div.style.maxHeight = "0"
        div.style.opacity = "0"
      } else {
        
        div.style.maxHeight = (div.scrollHeight+5) + "px" //plus 5 to avoid weird scrollHeight increase caused shake
        div.style.opacity = "1"
      }
    }
    if(firstRender.current) {
      firstRender.current = false
    }
  })

  const clCollapseDiv = firstRender.current ? "" : cl.collapseDiv
  
  return(<>
    <div ref={divRef} className={clCollapseDiv}>
      {children}
    </div>
  </>)
}