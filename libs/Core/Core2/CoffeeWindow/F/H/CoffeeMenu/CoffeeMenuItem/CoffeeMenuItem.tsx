import { useRouter } from "next/router"
import { ClassNames } from "../../../../../../Core1/fCore1"
import { SvgIcon } from "../../../../../Svg/SvgIcon"
import { ICoffeeMenuItem } from "../../../Model/ICoffeeMenuItem"
import cl from "./CoffeeMenuItem.module.scss"

interface ICoffeeMenuItemProp {
  item: ICoffeeMenuItem
  selectedItemId?: string
  color?: string
}

export function CoffeeMenuItem({
  item,
  selectedItemId,
  color
} :ICoffeeMenuItemProp) {

  const router = useRouter()
  const textColor = color || "#222"

  function onClick() {
    if(item.onClick) {
      item.onClick()
      return
    }
    if(item.route) {
      router.push(item.route)
      return
    }
  }

  const clSelected = selectedItemId && selectedItemId === item.selectionId 
    ? cl.selected : ""

  return(<>
  <div className={ClassNames([cl.menuItem, clSelected])}>
    <div className={cl.iconSpace}>
    {
      item.iconName ? 
      <SvgIcon name={item.iconName} 
        width={20} 
        color={textColor}
      />:null
    }
    </div>
    <div className={cl.text}
      style={{color: textColor}}>
      {item.text}
    </div>
  </div>
  </>)
}