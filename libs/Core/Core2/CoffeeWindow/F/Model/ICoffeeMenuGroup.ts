import { ICoffeeMenuItem } from "./ICoffeeMenuItem"

export interface ICoffeeMenuGroup {
  title: string
  items: Array<ICoffeeMenuItem>
}