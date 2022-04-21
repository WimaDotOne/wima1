import { useEffect } from "react"
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

  useEffect(()=>{
    window.scrollTo(0,0)
  })

  return(<>
    <MovicWindowBottomBar>
      <IconButtons color={MovicColor.themeRed} strokeWidth={20}
        icon1="chevron.left" onClick1={onBack} text1=""
      /> 
    </MovicWindowBottomBar>
  </>)
}