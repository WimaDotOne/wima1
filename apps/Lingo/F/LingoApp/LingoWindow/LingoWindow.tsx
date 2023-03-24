import { useRouter } from "next/router"
import { ReactNode, useEffect, useState } from "react"
import { useAppleWindow } from "../../../../../libs/Core/Core2/AppleWindow/fAppleWindow"
import { AppleWindow, GroupModel, ItemModel, MenuModel 
} from "../../../../../libs/Core/Core2/fCore2"
import { PleaseLoginUniv } from "../../../../Wima/F/WimaLogin/PleaseLogin/PleaseLogin"
import { useWimaUser } from "../../../../Wima/fWima"
import { LingoColor } from "../../CSS/LingoColor"

interface ILingoWindowProp {
  children: ReactNode
}
export function LingoWindow({
  children
}: ILingoWindowProp) {

  const win = useAppleWindow()
  const router = useRouter()
  const user = useWimaUser()

  function goToView(viewId: string) {
    router.push(`/apps/Lingo/AppTurn/${viewId}`)
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
    updateViewId()
  }, [])

  const socialMenu = LingoMenu(win?.viewId)

  return(<>
    <AppleWindow menu={socialMenu} brand="Lingo"
      isLeftBarOpen={win?.isOpen}
      setIsLeftBarOpen={win?.setIsOpen}
      viewId={win?.viewId} goToView={goToView}
      isLoggedIn={user?.isLoggedInUniv}
    >
    { children }
    </AppleWindow>
  </>)
}

export const AppTurn = {
  Home: "Home",
  Exit: "Exit"
}

function LingoMenu(viewId?: string): MenuModel | undefined {
  if(!viewId) viewId = AppTurn.Home

  const publicGroup = new GroupModel("Lingo", true)
  publicGroup.AddItem(new ItemModel(AppTurn.Home, "Home", "language"))
  publicGroup.AddItem(new ItemModel(AppTurn.Exit, "Exit", "wimacircle"))

  const menu = new MenuModel(viewId, LingoColor.themeBlue)
  menu.AddGroup(publicGroup)
  return menu
}
