import { MenuModel } from "../../Model/Menu"
import { Group } from "./Group/Group"

interface IMenuProp {
  menu?: MenuModel
  selectedItemId?: string
  onSelectItem: (itemId: string) => void
}
export function Menu({
  menu,
  selectedItemId, onSelectItem
}: IMenuProp) {
  
  if(!menu || !menu.groups) return null

  return(<>
  {
    menu.groups.map((group, i)=>
      <Group key={i} group={group} iconColor={menu.iconColor} 
        selectedItemId={selectedItemId} onSelectItem={onSelectItem}
      />
    )
  }
  </>)
}