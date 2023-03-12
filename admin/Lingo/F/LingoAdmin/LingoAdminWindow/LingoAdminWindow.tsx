import { useRouter } from "next/router"
import { ReactNode, useEffect } from "react"
import { useAppleWindow } from "../../../../../libs/Core/Core2/AppleWindow/fAppleWindow"
import { AppleWindow, GroupModel, ItemModel, MenuModel 
} from "../../../../../libs/Core/Core2/fCore2"
import { LingoAdminColor } from "../../CSS/LingoAdminColor"

interface ILingoAdminWindowProp {
  children: ReactNode
}
export function LingoAdminWindow({
  children
}: ILingoAdminWindowProp) {

  const win = useAppleWindow()
  const router = useRouter()

  function goToView(viewId: string) {
    router.push(`/admin/Lingo/${viewId}`)
  }

  function updateViewId() {
    //Update viewId based on path rather than calling setViewId during goToView because this also works when browser back arrow is clicked.
    const route = router.asPath
    let viewIdPiece = route.split("Lingo/")[1]
    if(viewIdPiece) {
      viewIdPiece = viewIdPiece.split("/")[0]
      win?.setViewId(viewIdPiece)
    }
  }

  useEffect(()=>{
    win?.smartOpen()
    updateViewId()
  }, [])

  const menu = LingoAdminMenu(win?.viewId)

  return(<>
    <AppleWindow menu={menu} brand="Lingo Admin"
      isLeftBarOpen={win?.isOpen}
      setIsLeftBarOpen={win?.setIsOpen}
      viewId={win?.viewId} goToView={goToView}
    >
    { children }
    </AppleWindow>
  </>)
}

export const AdminTurn = {
  Languages: "Languages",
  AdminCircle: "AdminCircle"
}

function LingoAdminMenu(viewId?: string): MenuModel | undefined {
  if(!viewId) viewId = AdminTurn.Languages
  const group1 = new GroupModel("Languages", false)
  group1.AddItem(new ItemModel(AdminTurn.Languages, "Languages", "book"))
  group1.AddItem(new ItemModel(AdminTurn.AdminCircle, "Exit", "wimacircle")) 

  const menu = new MenuModel(viewId, LingoAdminColor.themeBlue)
  menu.AddGroup(group1)
  return menu
}
