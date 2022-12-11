import { useEffect } from "react"
import { AppleIconButtons, AppleWindowPlainBottomBarDiv, AutoRepeatGrid } from "../../../../../../../libs/Core/Core2/fCore2"
import { AppleFolder, HeadLine } from "../../../../../../../libs/Pop/Pop3/fPop3"
import { QuizColor } from "../../../../CSS/QuizColor"
import { IProject } from "../../../../Model/IProject"
import cl from "./ProjectHome.module.scss"

interface IProjectHomeProp {
  project: IProject
  backToProjectsHome: ()=>void
  setProjectTurn: (projectTurn: string)=>void
}
export function ProjectHome({
  project,
  backToProjectsHome,
  setProjectTurn
}: IProjectHomeProp) {

  useEffect(()=>{
    window.scrollTo(0,0)
  })

  return(<>
    <div className={cl.home}>
      <HeadLine text={project.quizBookTitle} h={3}/>
      <AutoRepeatGrid autoFill cellMinWidth={100} columnGap={10} rowGap={10} paddingTop={25} paddingBottom={10}>
      
      </AutoRepeatGrid>
    </div>
    <AppleWindowPlainBottomBarDiv>
      <AppleIconButtons color={QuizColor.themeRed} strokeWidth={20}
        icon1="chevron.left" onClick1={backToProjectsHome} text1=""
      /> 
    </AppleWindowPlainBottomBarDiv>
  </>)
}