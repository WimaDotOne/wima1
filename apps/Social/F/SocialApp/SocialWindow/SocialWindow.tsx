import { useRouter } from "next/router"
import { ReactNode, useEffect, useState } from "react"
import { useAppleWindow } from "../../../../../libs/Core/Core2/AppleWindow/fAppleWindow"
import { AppleWindow, GroupModel, ItemModel, MenuModel 
} from "../../../../../libs/Core/Core2/fCore2"
import { PleaseLoginUniv } from "../../../../Settings/WimaLogin/F/PleaseLogin/PleaseLogin"
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
      isLoggedIn={user?.isLoggedInUniv}
    >
    {
      user && win && win.viewId ? //if variable not ready, don't load children
      <>
      {
        !user.isLoggedInUniv && IsViewRequreLogin(win.viewId) ?
        <PleaseLoginUniv loginUrl="/apps/Social/AppTurn/UniversityLogin"/>
        :children 
      }
      </>:null
    }
    </AppleWindow>
    
  </>)
}

export const AppTurn = {

  Services: "Services",
  Goods: "Goods",
  Needs: "Needs",

  Profile: "Profile",
  Receipt: "Receipt",

  About: "About",
  Tutorial: "Tutorial",
  UniversityLogin: "UniversityLogin",
  Exit: "Exit"
}

function IsViewRequreLogin(viewId?: string) {
  switch (viewId) {
    case AppTurn.Services: return true
    case AppTurn.Goods: return true
    case AppTurn.Needs: return true
    case AppTurn.Profile: return true
    default: return false
  }
}

function SocialMenu(viewId?: string): MenuModel | undefined {
  if(!viewId) viewId = AppTurn.About
  const supplyGroup = new GroupModel("Supply", false)
  supplyGroup.AddItem(new ItemModel(AppTurn.Services, "Services", "service", true))
  supplyGroup.AddItem(new ItemModel(AppTurn.Goods, "Goods", "goods", true))
  const demandGroup = new GroupModel("Demand", false)
  demandGroup.AddItem(new ItemModel(AppTurn.Needs, "Needs or Ideas", "help", true))

  const myGroup = new GroupModel("My Business", false)
  myGroup.AddItem(new ItemModel(AppTurn.Profile, "Profile", "dashboard", true))
  myGroup.AddItem(new ItemModel(AppTurn.Receipt, "Reply Receipts", "clock", true))

  const publicGroup = new GroupModel("Social", true)
  publicGroup.AddItem(new ItemModel(AppTurn.About, "About", "smile"))
  publicGroup.AddItem(new ItemModel(AppTurn.Tutorial, "How it works?", "graduationcap"))
  publicGroup.AddItem(new ItemModel(AppTurn.UniversityLogin, "University Login", "university"))
  publicGroup.AddItem(new ItemModel(AppTurn.Exit, "Exit", "wimacircle"))

  const menu = new MenuModel(viewId, SocialColor.themeBlue)
  menu.AddGroup(supplyGroup)
  menu.AddGroup(demandGroup)
  menu.AddGroup(myGroup)
  menu.AddGroup(publicGroup)
  return menu
}
