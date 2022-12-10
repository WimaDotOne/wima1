import { useRouter } from "next/router"
import { ReactNode, useEffect } from "react"
import { useAppleWindow } from "../../../../../libs/Core/Core2/AppleWindow/fAppleWindow"
import { AppleWindow, GroupModel, ItemModel, MenuModel 
} from "../../../../../libs/Core/Core2/fCore2"
import { PleaseLogin } from "../../../../Wima/F/WimaLogin/PleaseLogin/PleaseLogin"
import { useWimaUser } from "../../../../Wima/fWima"
import { QuizColor } from "../../CSS/QuizColor"

interface IQuizWindowProp {
  children: ReactNode
}
export function QuizWindow({
  children
}: IQuizWindowProp) {

  const win = useAppleWindow()
  const router = useRouter()
  const user = useWimaUser()

  function goToView(viewId: string) {
    router.push(`/apps/Quiz/AppTurn/${viewId}`)
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

  const quizMenu = QuizMenu(win?.viewId)

  return(<>
    <AppleWindow menu={quizMenu} brand="Quiz"
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
  MyQuizzes: "MyQuizzes",
  About: "About",
  Tutorial: "Tutorial",
  WimaCircle: "WimaCircle"
}

function IsViewRequreLogin(viewId?: string) {
  switch (viewId) {
    case AppTurn.MyQuizzes: return true
    case AppTurn.Projects: return true
    default: return false
  }
}

function QuizMenu(viewId?: string): MenuModel | undefined {
  if(!viewId) viewId = AppTurn.MyQuizzes
  const myGroup = new GroupModel("My Quizzes", false)
  myGroup.AddItem(new ItemModel(AppTurn.MyQuizzes, "Quizzes", "film", true))
  myGroup.AddItem(new ItemModel(AppTurn.Projects, "Projects", "clapperboard", true))

  const publicGroup = new GroupModel("Quiz", true)
  publicGroup.AddItem(new ItemModel(AppTurn.About, "About", "smile"))
  publicGroup.AddItem(new ItemModel(AppTurn.Tutorial, "How to make a quiz ?", "graduationcap"))
  publicGroup.AddItem(new ItemModel(AppTurn.WimaCircle, "Exit", "wimacircle")) 

  const menu = new MenuModel(viewId, QuizColor.themeRed)
  menu.AddGroup(myGroup)
  menu.AddGroup(publicGroup)
  return menu
}
