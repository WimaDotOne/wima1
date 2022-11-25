import { useRouter } from "next/router"
import { IconButtons } from "../../../../../../libs/Core/Core2/AppleWindow/F/View/IconButtons/IconButtons"
import { AppleWindowBottomBarFill, AppleWindowPlainBottomBarDiv } from "../../../../../../libs/Core/Core2/fCore2"
import { AppleWindowBottomBar } from "../../../../../H/AppleWindowBottomBar"
import { IDrink } from "../../../Model/Drink"
import cl from "./Recipe.module.scss"

interface IRecipeProp {
  drink?: IDrink,
  size: string,
  goMenu: ()=>void
}

export function Recipe({
  drink,
  size,
  goMenu
}: IRecipeProp) {

  if(!drink) {
    return(<></>)
  }

  return(<>
  {"Drink "+drink.name+" "+size}

  <AppleWindowBottomBarFill />
  <AppleWindowPlainBottomBarDiv>
    <IconButtons icon1="chevron.left" 
      onClick1={goMenu}
    />
  </AppleWindowPlainBottomBarDiv>
  </>)
}