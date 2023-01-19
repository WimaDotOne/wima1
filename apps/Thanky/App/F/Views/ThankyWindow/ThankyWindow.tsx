import { ReactNode } from "react"
import { ICoffeeMenu } from "../../../../../../libs/Core/Core2/CoffeeWindow/F/Model/ICoffeeMenu"
import { CoffeeWindow } from "../../../../../../libs/Core/Core2/CoffeeWindow/F/View/CoffeeWindow/CoffeeWindow"
import cl from "./ThankyWindow.module.scss"

interface IThankyWindowProp {
  children: ReactNode
  selectItemId: string
}

export function ThankyWindow({
  children,
  selectItemId
}: IThankyWindowProp) {

  const menu = GetMenu()

  return(<>
  <CoffeeWindow homeIconUrl="/apps/WimaHome/AppIcons/thanky.png"
    photoUrl="/favicon.ico"
    menu={menu}
    selectItemId={selectItemId}
  >
    <div className={cl.padding}>
    { children }
    </div>
  </CoffeeWindow>
  </>)
}

export const ThankyMenuTurn = {
  Home: "Home"
}

function GetMenu(): ICoffeeMenu {
  return {
    themeColor: "#222",
    groups: [
      {
        title: "",
        items: [
          {
            selectionId: ThankyMenuTurn.Home,
            route: "/apps/Thanky/Dashboard",
            text: "Home",
            iconName: "home2"
          }
        ]
      }
    ]
  }
}

