import { MenuModel } from "../../Model/Menu"
import { Group } from "./Group/Group"

interface IMenuProp {
  menu: MenuModel
  selectedItemId: string
  setSelectedItemId: (selectedItemId: string) => void
}
export function Menu({
  menu,
  selectedItemId, setSelectedItemId
}: IMenuProp) {
  
  if(!menu || !menu.groups) return null

  return(<>
  {
    menu.groups.map((group, i)=>
      <Group key={i} group={group} iconColor={menu.iconColor} 
        selectedItemId={selectedItemId} setSelectedItemId={setSelectedItemId}
      />
    )
  }
  </>)
}