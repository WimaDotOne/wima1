import { useEffect } from "react"
import { IconButtons } from "../../../../../../../../libs/Core/Core2/AppleWindow/F/View/IconButtons/IconButtons"
import { AutoRepeatGrid } from "../../../../../../../../libs/Core/Core2/fCore2"
import { AppleFolder, File, FileType } from "../../../../../../../../libs/Pop/Pop3/fPop3"
import { MovicColor } from "../../../../../CSS/MovicColor"
import { HeadLine } from "../../../../H/Controls/HeadLine/HeadLine"
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
    <div className={cl.home}>
      <HeadLine text="Scott Pilgrim vs the World" h={3}/>
      <AutoRepeatGrid autoFill cellMinWidth={100} columnGap={10} rowGap={10} paddingTop={25} paddingBottom={10}>
        <AppleFolder text="Images" onClick={()=>{}}/>
        <File text="Movie Script" iconName="textfile" type={FileType.text} 
          onClick={()=>{}} />
        <File text="Preview" iconName="film" iconColor={MovicColor.themeRed}
          onClick={()=>{}} />
        <File text="Settings" iconName="gear" type={FileType.settings}
          onClick={()=>{}} />
      </AutoRepeatGrid>
    </div>
    <MovicWindowBottomBar>
      <IconButtons color={MovicColor.themeRed} strokeWidth={20}
        icon1="chevron.left" onClick1={onBack} text1=""
      /> 
    </MovicWindowBottomBar>
  </>)
}