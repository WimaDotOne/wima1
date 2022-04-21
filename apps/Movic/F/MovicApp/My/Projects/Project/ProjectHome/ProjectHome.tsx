import { IconButtons } from "../../../../../../../../libs/Core/Core2/AppleWindow/F/View/IconButtons/IconButtons"
import { MovicColor } from "../../../../../CSS/MovicColor"
import { MovicWindowBottomBar } from "../../../../MovicWindow/MovicWindowBottomBar"
import cl from "./ProjectHome.module.scss"

interface IProjectHomeProp {
  onBack: ()=>void
}
export function ProjectHome({
  onBack
}: IProjectHomeProp) {

  return(<>
    <MovicWindowBottomBar>
      <IconButtons color={MovicColor.themeRed} strokeWidth={20}
        icon1="chevron.left" onClick1={onBack} text1="Back"
      /> 
    </MovicWindowBottomBar>
  </>)
}