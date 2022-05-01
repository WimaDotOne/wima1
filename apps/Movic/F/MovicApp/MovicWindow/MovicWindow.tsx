import { useRouter } from "next/router"
import { ReactNode, useEffect, useState } from "react"
import { useAppleWindow } from "../../../../../libs/Core/Core2/AppleWindow/fAppleWindow"
import { AppleWindow, GroupModel, ItemModel, MenuModel 
} from "../../../../../libs/Core/Core2/fCore2"
import { PleaseLogin } from "../../../../Settings/WimaLogin/F/PleaseLogin/PleaseLogin"
import { useWimaUser } from "../../../../WimaHome/fWimaHome"
import { MovicColor } from "../../CSS/MovicColor"

interface IMovicWindowProp {
  children: ReactNode
}
export function MovicWindow({
  children
}: IMovicWindowProp) {

  const win = useAppleWindow()
  const router = useRouter()
  const user = useWimaUser()

  function goToView(viewId: string) {
    router.push(`/apps/Movic/AppTurn/${viewId}`)
  }

  function updateViewId() {
    //Update viewId based on path rather than calling setViewId during goToView because this also works when browser back arrow is clicked.
    const route = router.asPath
    let viewIdPiece = route.split("AppTurn/")[1]
    if(viewIdPiece) {
      viewIdPiece = viewIdPiece.split("/")[0]
      win?.setViewId(viewIdPiece)
    }
  }

  useEffect(()=>{
    win?.smartOpen()
    updateViewId()
  }, [])

  const movicMenu = MovicMenu(win?.viewId)
  return(<>
    <AppleWindow menu={movicMenu} brand="Movic"
      isLeftBarOpen={win?.isOpen}
      setIsLeftBarOpen={win?.setIsOpen}
      viewId={win?.viewId} goToView={goToView}
      isLoggedIn={user?.isLoggedIn}
    >
    { 
      user && !user.isLoggedIn && IsViewRequreLogin(win?.viewId) ?
        <PleaseLogin />
        :children 
    }
    </AppleWindow>
    
  </>)
}

export const AppTurn = {
  Projects: "Projects",
  MyMovies: "MyMovies",
  About: "About",
  WimaCircle: "WimaCircle"
}

function IsViewRequreLogin(viewId?: string) {
  if(!viewId) return false
  switch (viewId) {
    case AppTurn.MyMovies: return true
    case AppTurn.Projects: return true
    default: return false
  }
}

function MovicMenu(viewId?: string): MenuModel | undefined {
  if(!viewId) viewId = AppTurn.MyMovies
  const myGroup = new GroupModel("My Space", false)
  myGroup.AddItem(new ItemModel(AppTurn.MyMovies, "Movies", "film", true))
  myGroup.AddItem(new ItemModel(AppTurn.Projects, "Projects", "clapperboard", true))

  const publicGroup = new GroupModel("Movic", true)
  publicGroup.AddItem(new ItemModel(AppTurn.About, "About", "smile")) 
  publicGroup.AddItem(new ItemModel(AppTurn.WimaCircle, "Exit", "wimacircle")) 

  const menu = new MenuModel(viewId, MovicColor.themeRed)
  menu.AddGroup(myGroup)
  menu.AddGroup(publicGroup)
  return menu
}
