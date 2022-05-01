import { MenuModel } from "../../Model/Menu"
import { Group } from "./Group/Group"

interface IMenuProp {
  menu?: MenuModel
  selectedItemId?: string
  onSelectItem: (itemId: string) => void
  isLoggedIn?: boolean
}
export function Menu({
  menu,
  selectedItemId, onSelectItem,
  isLoggedIn
}: IMenuProp) {
  
  if(!menu || !menu.groups) return null

  return(<>
  {
    menu.groups.map((group, i)=>
      <Group isLoggedIn={isLoggedIn} key={i} group={group} themeColor={menu.themeColor} 
        selectedItemId={selectedItemId} onSelectItem={onSelectItem}
      />
    )
  }
  </>)
}