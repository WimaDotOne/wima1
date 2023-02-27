import { ICoffeeMenuGroup } from "./ICoffeeMenuGroup"

export interface ICoffeeMenu {
  themeColor: string
  groups: Array<ICoffeeMenuGroup>
}