import { ReactNode } from "react"
import { ICoffeeMenu } from "../../../../../../libs/Core/Core2/CoffeeWindow/F/Model/ICoffeeMenu"
import { CoffeeWindow } from "../../../../../../libs/Core/Core2/CoffeeWindow/F/View/CoffeeWindow/CoffeeWindow"

interface IThankyWindowProp {
  children: ReactNode
}

export function ThankyWindow({
  children
}: IThankyWindowProp) {

  const menu = GetMenu()

  return(<>
  <CoffeeWindow homeIconUrl="/apps/WimaHome/AppIcons/thanky.png"
    photoUrl="/favicon.ico"
    menu={menu}
  >
  { children}
  </CoffeeWindow>
  </>)
}

const CoffeeMenuTurn = {
  Home: "Home",
  MyProfile: "MyProfile"
}

function GetMenu(): ICoffeeMenu {
  return {
    themeColor: "#222",
    groups: [
      {
        title: "",
        items: [
          {
            selectionId: CoffeeMenuTurn.Home,
            route: "/apps/Thanky/ThankyWindow",
            text: "Home",
            iconName: "home2"
          },
          {
            selectionId: "2",
            route: "/apps/Thanky/ThankyWindow",
            text: "Home",
            iconName: "home2"
          },
          {
            selectionId: "3",
            route: "/apps/Thanky/ThankyWindow",
            text: "Home",
            iconName: "home2"
          },
          {
            selectionId: "4",
            route: "/apps/Thanky/ThankyWindow",
            text: "Home",
            iconName: "home2"
          }
        ]
      },
      {
        title: "Settings",
        items: [
          {
            selectionId: CoffeeMenuTurn.MyProfile,
            route: "/apps/Thanky/MyProfile",
            text: "My Profile",
            iconName: "profile2"
          },
          {
            selectionId: "a",
            route: "/apps/Thanky/MyProfile",
            text: "My Profile",
            iconName: "profile2"
          },
          {
            selectionId: "b",
            route: "/apps/Thanky/MyProfile",
            text: "My Profile",
            iconName: "profile2"
          },
          {
            selectionId: "c",
            route: "/apps/Thanky/MyProfile",
            text: "My Profile",
            iconName: "profile2"
          },
          {
            selectionId: "d",
            route: "/apps/Thanky/MyProfile",
            text: "My Profile",
            iconName: "profile2"
          },
          {
            selectionId: "e",
            route: "/apps/Thanky/MyProfile",
            text: "My Profile",
            iconName: "profile2"
          }

        ]
      }
    ]
  }
}

