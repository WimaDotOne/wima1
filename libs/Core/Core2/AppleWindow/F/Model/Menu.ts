import { GroupModel } from "./Group"

export class MenuModel {
  selectedItemId: string
  themeColor: string
  groups: GroupModel[] = []

  constructor(selectedItemId: string, themeColor: string) {
    this.selectedItemId = selectedItemId
    this.themeColor = themeColor
  }

  AddGroup(group: GroupModel) {
    this.groups.push(group)
  }
}