
export class ItemModel {
  id: string
  text: string
  iconName: string = ""

  constructor(id:string, text:string, iconName?:string) {

    this.id = id
    this.text = text
    if(iconName !== undefined) { this.iconName = iconName }
  }
}