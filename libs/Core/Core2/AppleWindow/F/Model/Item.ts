
export class ItemModel {
  id: string
  text: string
  iconName: string = ""
  requireLogin: boolean = false

  constructor(id:string, text:string, iconName?:string, requireLogin?: boolean) {

    this.id = id
    this.text = text
    if(iconName !== undefined) { this.iconName = iconName }
    if(requireLogin) { this.requireLogin = true }
  }
}