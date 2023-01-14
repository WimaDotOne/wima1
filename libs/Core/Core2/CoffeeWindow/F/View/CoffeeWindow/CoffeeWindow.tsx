import { ReactNode, useState } from "react"
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
  function onClickHamburger() {

  }

  return(<>
  <div>
    <CoffeeTopBar homeIconUrl={homeIconUrl}
      photoUrl={photoUrl}
      onClickHamburger={onClickHamburger}
      onClickHomeIcon={onClickHomeIcon}
    />
    <div className={cl.leftBar}>
    <CoffeeMenu menu={menu}
      selectedItemId={selectedItemId}
      setSelectedItemId={setSelectedItemId}
    />
    </div>
    <div className={cl.windowViewSpace}>
      <div className={cl.windowView}>
      {
        children
      }
      </div>
    </div>
  </div>
  </>)
}