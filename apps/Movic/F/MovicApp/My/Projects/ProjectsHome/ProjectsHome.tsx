import { useEffect, useState } from "react"
import { Get2, useShield } from "../../../../../../../libs/Core/Core1/fCore1"
import { AppleWindowBottomBarFill, AutoRepeatGrid } from "../../../../../../../libs/Core/Core2/fCore2"
import { AppleFolder } from "../../../../../../../libs/Pop/Pop3/Folder/AppleFolder"
import { HeadLine } from "../../../H/Controls/HeadLine/HeadLine"
import { MovicWindow } from "../../../MovicWindow/MovicWindow"
import { MovicWindowBottomBar } from "../../../MovicWindow/MovicWindowBottomBar"
import cl from "./ProjectsHome.module.scss"

interface IProject {
  id: string
  movicTitle: string
}

interface IProjectsHomeProp {
  openProject: (projectId: string)=>void
  goToNewProject: ()=>void
}
export function ProjectsHome({
  openProject,
  goToNewProject
}: IProjectsHomeProp) {

  const [loaded, setLoaded] = useState<boolean>(false)
  const [projects, setProjects] = useState<Array<IProject>>([])
  const shield = useShield()

  async function LoadMyProjects() {
    if(loaded) return

    await Get2(shield,"/movic/LoadMyProjects",(res)=>{
      setLoaded(true)
      setProjects(res.projects || [])
    })
  }

  useEffect(()=>{
    LoadMyProjects()
  })
  return(<><MovicWindow>

   <div className={cl.board}>
     <HeadLine text="Projects" buttonText="New Project" 
      buttonOnClick={goToNewProject}/>
     <AutoRepeatGrid autoFill cellMinWidth={100} columnGap={10} rowGap={10} paddingTop={25} paddingBottom={10}>
      {
        projects.map((project, i)=>
        <AppleFolder key={project.id} text={project.movicTitle} onClick={
          ()=>{openProject(project.id)}
          
        }/>)
      }
     </AutoRepeatGrid>
   </div>
   <AppleWindowBottomBarFill />
   <MovicWindowBottomBar>
   {}
   </MovicWindowBottomBar>
   </MovicWindow></>)
}