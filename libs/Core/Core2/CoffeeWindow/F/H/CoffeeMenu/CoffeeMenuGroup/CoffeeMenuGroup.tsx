import { ICoffeeMenuGroup } from "../../../Model/ICoffeeMenuGroup"
import { CoffeeMenuItem } from "../CoffeeMenuItem/CoffeeMenuItem"
import cl from "./CoffeeMenuGroup.module.scss"

interface ICoffeeMenuGroupProp {
  group: ICoffeeMenuGroup
  selectedItemId: string
}

export function CoffeeMenuGroup({
  group,
  selectedItemId
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
      item={item}/>
    )
  }
  </>)
}