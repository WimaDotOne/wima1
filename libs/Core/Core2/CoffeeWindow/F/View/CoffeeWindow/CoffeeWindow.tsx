import { ReactNode, useState } from "react"
import { ClassNames } from "../../../../../Core1/fCore1"
import { SvgIcon } from "../../../../Svg/SvgIcon"
import { CoffeeMenu } from "../../H/CoffeeMenu/CoffeeMenu"
import { CoffeeTopBar } from "../../H/CoffeeTopBar/CoffeeTopBar"
import { ICoffeeMenu } from "../../Model/ICoffeeMenu"
import cl from "./CoffeeWindow.module.scss"

interface ICoffeeWindowProp {
  homeIconUrl: string
  photoUrl?: string
  onClickHomeIcon?: ()=>void
  children: ReactNode
  menu: ICoffeeMenu
}

export function CoffeeWindow({
  homeIconUrl,
  photoUrl, 
  onClickHomeIcon,
  children,
  menu
}: ICoffeeWindowProp) {

  const [selectedItemId, setSelectedItemId] = useState<string>("")
  const [phoneModeShowLeftBar, setPhoneModeShowLeftBar] = useState<boolean>(false)
  
  function openPhoneModeLeftBar() {
    setPhoneModeShowLeftBar(true)
  }

  function closePhoneModeLeftBar() {
    setPhoneModeShowLeftBar(false)
  }

  const clPhoneModeShowLeftBar = phoneModeShowLeftBar ? cl.phoneModeShowLeftBar : ""

  return(<>
  <div>
    <CoffeeTopBar homeIconUrl={homeIconUrl}
      photoUrl={photoUrl}
      onClickHamburger={openPhoneModeLeftBar}
      onClickHomeIcon={onClickHomeIcon}
    />
    
    <div className={ClassNames([cl.leftBar, clPhoneModeShowLeftBar])}>
      <div className={cl.xRow}>
        <div className={cl.xSpace} onClick={closePhoneModeLeftBar}>
          <SvgIcon name="x" width={12} color="#333"/>
        </div>
      </div>
      <CoffeeMenu menu={menu}
        selectedItemId={selectedItemId}
        setSelectedItemId={setSelectedItemId}
      />
    </div>
    <div onClick={closePhoneModeLeftBar}
      className={ClassNames([cl.film, clPhoneModeShowLeftBar])}>
    </div>
    <div className={cl.windowViewSpace}>
      <div className={cl.windowView}>
        <div className={cl.windowViewInner}>
        {
          children
        }
        </div>
      </div>
    </div>
  </div>
  </>)
}