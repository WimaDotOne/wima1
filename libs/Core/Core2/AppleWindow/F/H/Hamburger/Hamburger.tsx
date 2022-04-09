import { Dispatch, SetStateAction } from "react"
import { IconButton } from "../../View/IconButton/IconButton"
import cl from "./Hamburger.module.scss"

interface IHamburgerProp {
  setOpen: Dispatch<SetStateAction<boolean>>
}
export function Hamburger({
  setOpen
}: IHamburgerProp) {

  function toggle() {
   setOpen((open: any)=>!open)
  }

  return(<>
    <div className={cl.toggleBtn}>
      <IconButton svgName="hamburger" onClick={toggle} />
    </div>
  </>)
}