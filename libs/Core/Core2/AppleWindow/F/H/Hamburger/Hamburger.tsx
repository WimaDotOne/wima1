import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { AppleColor } from "../../CSS/AppleColor"
import { IconButton } from "../../View/IconButton/IconButton"
import cl from "./Hamburger.module.scss"

interface IHamburgerProp {
  setOpen?: Dispatch<SetStateAction<boolean>>
  isOpen?: boolean
  nonMovableViewDiv?: boolean
}
export function Hamburger({
  setOpen,
  isOpen,
  nonMovableViewDiv
}: IHamburgerProp) {

  const [isWideScreen, setIsWideScreen] = useState<boolean>(true)

  function toggle() {
    if(setOpen) {
      setOpen((open: any)=>!open)
    }
  }

  useEffect(()=>{
    if(!window) return
    
    const mediaQuery = window.matchMedia(`(min-width: 800px)`)
    if(mediaQuery.matches) {
      setIsWideScreen(true)
    } else {
      setIsWideScreen(false)
    }
  }, [])
   
  const svgName = (!isWideScreen || nonMovableViewDiv) && isOpen ? "collapse.left" : "hamburger"
  return(<>
    <div className={cl.toggleBtn}>
      <IconButton svgName={svgName} onClick={toggle} 
        backgroundColor={AppleColor.leftBarGray}/>
    </div>
  </>)
}