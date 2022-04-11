import { useRouter } from "next/router"
import { ReactNode, useState } from "react"
import { useAppleWindow } from "../../../../../libs/Core/Core2/AppleWindow/fAppleWindow"
import { AppleWindow, GroupModel, ItemModel, MenuModel 
} from "../../../../../libs/Core/Core2/fCore2"
import { MovicColor } from "../../CSS/MovicColor"

interface IMovicWindowProp {
  children: ReactNode
}
export function MovicWindow({
  children
}: IMovicWindowProp) {

  const win = useAppleWindow()
  const router = useRouter()

  function goToView(viewId: string) {
    if(win) {
      win.setViewId(viewId)
    }
    router.push(`/apps/Movic/AppTurn/${viewId}`)
  }

  const movicMenu = MovicMenu(win?.viewId)
  return(<>
    <AppleWindow menu={movicMenu} brand="Movic"
      isLeftBarOpen={win?.isOpen}
      setIsLeftBarOpen={win?.setIsOpen}
      viewId={win?.viewId} goToView={goToView}>
    { 
      children 
    }
    </AppleWindow>
    
  </>)
}

export const AppTurn = {
  MyMovies: "MyMovies",
  Landing: "Landing"
}

function MovicMenu(viewId?: string): MenuModel | undefined {
  if(!viewId) viewId = AppTurn.MyMovies
  const myGroup = new GroupModel("My Space", false)
  myGroup.AddItem(new ItemModel(AppTurn.MyMovies, "Movies"))

  const publicGroup = new GroupModel("Public", true)
  publicGroup.AddItem(new ItemModel(AppTurn.Landing, "About")) 

  const menu = new MenuModel(viewId, MovicColor.purple)
  menu.AddGroup(myGroup)
  menu.AddGroup(publicGroup)
  return menu
}
