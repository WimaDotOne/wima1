import { ICoffeeMenuGroup } from "../../../Model/ICoffeeMenuGroup"
import { CoffeeMenuItem } from "../CoffeeMenuItem/CoffeeMenuItem"
import cl from "./CoffeeMenuGroup.module.scss"

interface ICoffeeMenuGroupProp {
  group: ICoffeeMenuGroup
  selectedItemId: string
  setSelectedItemId: (id: string)=>void
}

export function CoffeeMenuGroup({
  group,
  selectedItemId,
  setSelectedItemId
}: ICoffeeMenuGroupProp) {

  const items = group.items || []
  return(<>
  {
    group.title ?
    <div className={cl.groupTitle}>
      {group.title}
    </div> : null
  }
  {
    items.map((item, i)=>
    <CoffeeMenuItem key={i+item.selectionId} 
      selectedItemId={selectedItemId}
      setSelectedItemId={setSelectedItemId}
      item={item}/>
    )
  }
  </>)
}