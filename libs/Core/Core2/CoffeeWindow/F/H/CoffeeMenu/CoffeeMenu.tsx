import { ICoffeeMenu } from "../../Model/ICoffeeMenu"
import cl from "./CoffeeMenu.module.scss"
import { CoffeeMenuGroup } from "./CoffeeMenuGroup/CoffeeMenuGroup"

interface ICoffeeMenuProp {
  menu: ICoffeeMenu
  selectedItemId: string
}

export function CoffeeMenu({
  menu,
  selectedItemId
}: ICoffeeMenuProp) {

  const groups = menu.groups || []
  return(<>
  <div className={cl.coffeeMemu}>
  {
    groups.map((group, i) =>
    <CoffeeMenuGroup key={i} group={group} 
      selectedItemId={selectedItemId}/>
    )
  }
  </div>
  </>)
}