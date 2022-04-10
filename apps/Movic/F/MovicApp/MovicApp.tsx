import { useState } from "react"
import { AppleWindow, GroupModel, ItemModel, MenuModel 
} from "../../../../libs/Core/Core2/fCore2"
import { MovicColor } from "../CSS/MovicColor"
import "./MovicApp.module.scss"

export function MovicApp() {

  const [viewId, setViewId] = useState<string>(AppTurn.MyMovies)
  const [isLeftBarOpen, setIsLeftBarOpen] = useState<boolean>(false)

  const movicMenu = MovicMenu(viewId)
  return(<>
    <AppleWindow menu={movicMenu} brand="Movic"
      isLeftBarOpen={isLeftBarOpen} setIsLeftBarOpen={setIsLeftBarOpen}
      viewId={viewId} setViewId={setViewId}>

    </AppleWindow>
  </>)
}

export const AppTurn = {
  MyMovies: "MyMovies"
}


function MovicMenu(viewId: string): MenuModel {
  const group1 = new GroupModel("My Space", false)
  group1.AddItem(new ItemModel(AppTurn.MyMovies, "Movies"))

  const menu = new MenuModel(viewId, MovicColor.purple)
  menu.AddGroup(group1)
  return menu
}
