import { GroupModel } from "./Group"

export class MenuModel {
  selectedItemId: string
  iconColor: string
  groups: GroupModel[] = []

  constructor(selectedItemId: string, iconColor: string) {
    this.selectedItemId = selectedItemId
    this.iconColor = iconColor
  }

  AddGroup(group: GroupModel) {
    this.groups.push(group)
  }
}