import { useEffect } from "react"
import { IconButtons } from "../../../../../../../libs/Core/Core2/AppleWindow/F/View/IconButtons/IconButtons"
import { AppleWindowPlainBottomBarDiv, AutoRepeatGrid } from "../../../../../../../libs/Core/Core2/fCore2"
import { AppleFolder, File, FileType } from "../../../../../../../libs/Pop/Pop3/fPop3"
import { MovicColor } from "../../../../CSS/MovicColor"
import { HeadLine } from "../../../H/Controls/HeadLine/HeadLine"
import { ProjectTurn } from "../Project"
import cl from "./ProjectHome.module.scss"

interface IProjectHomeProp {
  backToProjectsHome: ()=>void
  setProjectTurn: (projectTurn: string)=>void
}
export function ProjectHome({
  backToProjectsHome,
  setProjectTurn
}: IProjectHomeProp) {

  useEffect(()=>{
    window.scrollTo(0,0)
  })

  function openImagesFolder() {
    setProjectTurn(ProjectTurn.ImagesFolder)
  }

  function openMovieScript() {
    setProjectTurn(ProjectTurn.MovieScript)
  }

  return(<>
    <div className={cl.home}>
      <HeadLine text="Scott Pilgrim vs the World" h={3}/>
      <AutoRepeatGrid autoFill cellMinWidth={100} columnGap={10} rowGap={10} paddingTop={25} paddingBottom={10}>
        <AppleFolder text="Images" onClick={openImagesFolder}/>
        <File text="Movie Script" iconName="textfile" type={FileType.text} 
          onClick={openMovieScript} />
        <File text="Preview" iconName="film" iconColor={MovicColor.themeRed}
          onClick={()=>{}} />
        <File text="Settings" iconName="gear" type={FileType.settings}
          onClick={()=>{}} />
      </AutoRepeatGrid>
    </div>
    <AppleWindowPlainBottomBarDiv>
      <IconButtons color={MovicColor.themeRed} strokeWidth={20}
        icon1="chevron.left" onClick1={backToProjectsHome} text1=""
      /> 
    </AppleWindowPlainBottomBarDiv>
  </>)
}