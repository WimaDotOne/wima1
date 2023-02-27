import { useRouter } from "next/router"
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

  const router = useRouter()
  const menu = GetMenu()

  function goLanding() {
    router.push("/apps/Thanky")
  }

  return(<>
  <CoffeeWindow homeIconUrl="/apps/WimaHome/AppIcons/thanky.png"
    photoUrl="/favicon.ico"
    onClickHomeIcon={goLanding}
    menu={menu}
    selectItemId={selectItemId}
  >
    { children }
  </CoffeeWindow>
  </>)
}

export const ThankyMenuTurn = {
  Home: "Home",
  Customers: "Customers",
  Payouts: "Payouts"
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
          },
          {
            selectionId: ThankyMenuTurn.Customers,
            route: "/apps/Thanky/Customers",
            text: "Customers",
            iconName: "heart"
          },
        ]
      },
      {
        title: "SETTINGS",
        items: [
          {
            selectionId: ThankyMenuTurn.Payouts,
            route: "/apps/Thanky/Payouts",
            text: "Payouts",
            iconName: "dollar.square"
          }
        ]
      }
    ]
  }
}

