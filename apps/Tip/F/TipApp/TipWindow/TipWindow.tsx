import { useRouter } from "next/router"
import { ReactNode, useEffect, useState } from "react"
import { useAppleWindow } from "../../../../../libs/Core/Core2/AppleWindow/fAppleWindow"
import { AppleWindow, GroupModel, ItemModel, MenuModel 
} from "../../../../../libs/Core/Core2/fCore2"
import { PleaseLogin, PleaseLoginUniv } from "../../../../Wima/F/WimaLogin/PleaseLogin/PleaseLogin"
import { useWimaUser } from "../../../../Wima/fWima"
import { TipColor } from "../../CSS/TipColor"

interface ITipWindowProp {
  children: ReactNode
}
export function TipWindow({
  children
}: ITipWindowProp) {

  const win = useAppleWindow()
  const router = useRouter()
  const user = useWimaUser()

  function goToView(viewId: string) {
    router.push(`/apps/Tip/AppTurn/${viewId}`)
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

  const tipMenu = TipMenu(win?.viewId)

  return(<>
    <AppleWindow menu={tipMenu} brand="Tip"
      isLeftBarOpen={win?.isOpen}
      setIsLeftBarOpen={win?.setIsOpen}
      viewId={win?.viewId} goToView={goToView}
      isLoggedIn={user?.isLoggedIn}
    >
    {
      user && win && win.viewId ? //if variable not ready, don't load children
      <>
      {
        !user.isLoggedIn && IsViewRequreLogin(win.viewId) ?
        <PleaseLogin />
        :children 
      }
      </>:null
    }
    </AppleWindow> 
  </>)
}

export const AppTurn = {
  Jobs: "Jobs",
  GiveTips: "GiveTips",
  About: "About",
  Exit: "Exit"
}

function IsViewRequreLogin(viewId?: string) {
  switch (viewId) {
    case AppTurn.Jobs: return true
    default: return false
  }
}

function TipMenu(viewId?: string): MenuModel | undefined {
  if(!viewId) viewId = AppTurn.About

  const attendantGroup = new GroupModel("Attendant", false)
  attendantGroup.AddItem(new ItemModel(AppTurn.Jobs, "Jobs", "profile"))

  const publicGroup = new GroupModel("Tip", false)
  publicGroup.AddItem(new ItemModel(AppTurn.GiveTips, "Tip", "heart"))
  publicGroup.AddItem(new ItemModel(AppTurn.About, "About", "smile"))
  publicGroup.AddItem(new ItemModel(AppTurn.Exit, "Exit", "wimacircle"))

  const menu = new MenuModel(viewId, TipColor.themeDarkBlue)
  menu.AddGroup(attendantGroup)
  menu.AddGroup(publicGroup)
  return menu
}
