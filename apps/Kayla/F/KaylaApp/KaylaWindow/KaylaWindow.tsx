import { useRouter } from "next/router"
import { ReactNode, useEffect, useState } from "react"
import { useAppleWindow } from "../../../../../libs/Core/Core2/AppleWindow/fAppleWindow"
import { AppleWindow, GroupModel, ItemModel, MenuModel 
} from "../../../../../libs/Core/Core2/fCore2"
import { PleaseLoginUniv } from "../../../../Wima/F/WimaLogin/PleaseLogin/PleaseLogin"
import { useWimaUser } from "../../../../Wima/fWima"
import { KaylaColor } from "../../CSS/KaylaColor"

interface IKaylaWindowProp {
  children: ReactNode
}
export function KaylaWindow({
  children
}: IKaylaWindowProp) {

  const win = useAppleWindow()
  const router = useRouter()
  const user = useWimaUser()

  function goToView(viewId: string) {
    router.push(`/apps/Kayla/AppTurn/${viewId}`)
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

  const socialMenu = KaylaMenu(win?.viewId)

  return(<>
    <AppleWindow menu={socialMenu} brand="Kayla"
      isLeftBarOpen={win?.isOpen}
      setIsLeftBarOpen={win?.setIsOpen}
      viewId={win?.viewId} goToView={goToView}
      isLoggedIn={user?.isLoggedInUniv}
    >
    {
      user && win && win.viewId ? //if variable not ready, don't load children
      <>
      {
        !user.isLoggedInUniv && IsViewRequreLogin(win.viewId) ?
        <PleaseLoginUniv loginUrl="/apps/Kayla/AppTurn/UniversityLogin"/>
        :children 
      }
      </>:null
    }
    </AppleWindow>
    
  </>)
}

export const AppTurn = {
  Learn: "Learn",
  Exit: "Exit"
}

function IsViewRequreLogin(viewId?: string) {
  switch (viewId) {
    default: return false
  }
}

function KaylaMenu(viewId?: string): MenuModel | undefined {
  if(!viewId) viewId = AppTurn.Learn

  const publicGroup = new GroupModel("Kayla", true)
  publicGroup.AddItem(new ItemModel(AppTurn.Learn, "Learn", "language"))
  publicGroup.AddItem(new ItemModel(AppTurn.Exit, "Exit", "wimacircle"))

  const menu = new MenuModel(viewId, KaylaColor.themeDarkBlue)
  menu.AddGroup(publicGroup)
  return menu
}
