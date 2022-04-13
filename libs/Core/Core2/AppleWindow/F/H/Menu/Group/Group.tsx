import { useState } from "react"
import { Collapsible } from "../../../../../fCore2"
import { GroupModel } from "../../../Model/Group"
import { Button } from "../Button/Button"
import { Title } from "../Title/Title"

interface IGroupProp {
  group: GroupModel
  themeColor?: string
  selectedItemId?: string
  onSelectItem: (itemId: string)=>void
}
export function Group({
  group,
  themeColor,
  selectedItemId, onSelectItem
}: IGroupProp) {

  const [collasped, setCollapsed] = useState<boolean>(group.defaultCollapsed)

  return(<>
    <Title text={group.title} collapsible={group.collapsible}
      collapsed={collasped} setCollapsed={setCollapsed}/>
    <Collapsible collapsed={collasped}>
    {
      group.items.map((item, i)=>
        <Button key={item.id} text={item.text} iconName={item.iconName} themeColor={themeColor}
          onClick={()=>{onSelectItem(item.id)}}
          selected={item.id === selectedItemId}
        />
      )
    }
    </Collapsible>
  </>)
}