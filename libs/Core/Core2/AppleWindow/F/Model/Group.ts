import { ItemModel } from "./Item"

export class GroupModel {
  title: string
  collapsible: boolean
  defaultCollapsed: boolean = false
  items: ItemModel[] = []

  constructor(title: string, collapsible: boolean, defaultCollapsed?: boolean) {
    this.title = title
    this.collapsible = collapsible
    if(defaultCollapsed !== undefined) { this.defaultCollapsed = defaultCollapsed }
  }

  AddItem(item: ItemModel) {
    this.items.push(item)
  }
}