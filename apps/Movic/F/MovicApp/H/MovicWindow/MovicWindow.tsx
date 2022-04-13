import { useRouter } from "next/router"
import { ReactNode, useEffect, useState } from "react"
import { useAppleWindow } from "../../../../../../libs/Core/Core2/AppleWindow/fAppleWindow"
import { AppleWindow, GroupModel, ItemModel, MenuModel 
} from "../../../../../../libs/Core/Core2/fCore2"
import { MovicColor } from "../../../CSS/MovicColor"

interface IMovicWindowProp {
  children: ReactNode
}
export function MovicWindow({
  children
}: IMovicWindowProp) {

  const win = useAppleWindow()
  const router = useRouter()

  function goToView(viewId: string) {
    router.push(`/apps/Movic/AppTurn/${viewId}`)
  }

  function updateViewId() {
    //Update viewId based on path rather than setViewId during goToView because this also works when browser back arrow is clicked.
    const route = router.asPath
    let viewIdPiece = route.split("AppTurn/")[1]
    if(viewIdPiece) {
      viewIdPiece = viewIdPiece.split("/")[0]
      win?.setViewId(viewIdPiece)
    }
  }

  useEffect(()=>{
    updateViewId()
  }, [])

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
  About: "About"
}

function MovicMenu(viewId?: string): MenuModel | undefined {
  if(!viewId) viewId = AppTurn.MyMovies
  const myGroup = new GroupModel("My Space", false)
  myGroup.AddItem(new ItemModel(AppTurn.MyMovies, "Movies", "film"))

  const publicGroup = new GroupModel("Public", true)
  publicGroup.AddItem(new ItemModel(AppTurn.About, "About", "smile")) 

  const menu = new MenuModel(viewId, MovicColor.red)
  menu.AddGroup(myGroup)
  menu.AddGroup(publicGroup)
  return menu
}
