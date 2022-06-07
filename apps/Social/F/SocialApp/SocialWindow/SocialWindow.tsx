import { useRouter } from "next/router"
import { ReactNode, useEffect, useState } from "react"
import { useAppleWindow } from "../../../../../libs/Core/Core2/AppleWindow/fAppleWindow"
import { AppleWindow, GroupModel, ItemModel, MenuModel 
} from "../../../../../libs/Core/Core2/fCore2"
import { PleaseLogin } from "../../../../Settings/WimaLogin/F/PleaseLogin/PleaseLogin"
import { useWimaUser } from "../../../../Wima/fWima"
import { SocialColor } from "../../CSS/SocialColor"

interface ISocialWindowProp {
  children: ReactNode
}
export function SocialWindow({
  children
}: ISocialWindowProp) {

  const win = useAppleWindow()
  const router = useRouter()
  const user = useWimaUser()

  function goToView(viewId: string) {
    router.push(`/apps/Social/AppTurn/${viewId}`)
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

  const socialMenu = SocialMenu(win?.viewId)

  return(<>
    <AppleWindow menu={socialMenu} brand="Social"
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
  About: "About",
  Tutorial: "Tutorial",
  Exit: "Exit"
}

function IsViewRequreLogin(viewId?: string) {
  switch (viewId) {
    default: return false
  }
}

function SocialMenu(viewId?: string): MenuModel | undefined {
  if(!viewId) viewId = AppTurn.About
  const demandGroup = new GroupModel("Demand", false)
  const supplyGroup = new GroupModel("Supply", false)

  const publicGroup = new GroupModel("Social", true)
  publicGroup.AddItem(new ItemModel(AppTurn.About, "About", "smile"))
  publicGroup.AddItem(new ItemModel(AppTurn.Tutorial, "How to help?", "graduationcap"))
  publicGroup.AddItem(new ItemModel(AppTurn.Exit, "Exit", "wimacircle")) 

  const menu = new MenuModel(viewId, SocialColor.themeBlue)
  menu.AddGroup(demandGroup)
  menu.AddGroup(supplyGroup)
  menu.AddGroup(publicGroup)
  return menu
}
