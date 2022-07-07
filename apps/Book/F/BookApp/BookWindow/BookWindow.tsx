import { useRouter } from "next/router"
import { ReactNode, useEffect } from "react"
import { useAppleWindow } from "../../../../../libs/Core/Core2/AppleWindow/fAppleWindow"
import { AppleWindow, GroupModel, ItemModel, MenuModel 
} from "../../../../../libs/Core/Core2/fCore2"
import { PleaseLogin } from "../../../../Wima/F/WimaLogin/PleaseLogin/PleaseLogin"
import { useWimaUser } from "../../../../Wima/fWima"
import { BookColor } from "../../CSS/BookColor"

interface IBookWindowProp {
  children: ReactNode
}
export function BookWindow({
  children
}: IBookWindowProp) {

  const win = useAppleWindow()
  const router = useRouter()
  const user = useWimaUser()

  function goToView(viewId: string) {
    router.push(`/apps/Book/AppTurn/${viewId}`)
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

  const bookMenu = BookMenu(win?.viewId)

  return(<>
    <AppleWindow menu={bookMenu} brand="Book"
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
  Projects: "Projects",
  MyBook: "MyBook",
  About: "About",
  Tutorial: "Tutorial",
  WimaCircle: "WimaCircle"
}

function IsViewRequreLogin(viewId?: string) {
  switch (viewId) {
    case AppTurn.MyBook: return true
    case AppTurn.Projects: return true
    default: return false
  }
}

function BookMenu(viewId?: string): MenuModel | undefined {
  if(!viewId) viewId = AppTurn.MyBook
  const myGroup = new GroupModel("My Books", false)
  myGroup.AddItem(new ItemModel(AppTurn.MyBook, "Books", "book", true))
  myGroup.AddItem(new ItemModel(AppTurn.Projects, "Projects", "typewriter", true))

  const publicGroup = new GroupModel("Book", true)
  publicGroup.AddItem(new ItemModel(AppTurn.About, "About", "smile"))
  publicGroup.AddItem(new ItemModel(AppTurn.Tutorial, "How to publish a book?", "graduationcap"))
  publicGroup.AddItem(new ItemModel(AppTurn.WimaCircle, "Exit", "wimacircle")) 

  const menu = new MenuModel(viewId, BookColor.themeGreen)
  menu.AddGroup(myGroup)
  menu.AddGroup(publicGroup)
  return menu
}
