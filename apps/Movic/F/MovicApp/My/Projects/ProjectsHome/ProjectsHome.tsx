import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Get2, useShield } from "../../../../../../../libs/Core/Core1/fCore1"
import { AppleWindowBottomBarFill, AutoRepeatGrid } from "../../../../../../../libs/Core/Core2/fCore2"
import { AppleFolder } from "../../../../../../../libs/Pop/Pop3/Folder/AppleFolder"
import { useWimaUser } from "../../../../../../Wima/fWima"
import { HeadLine } from "../../../H/Controls/HeadLine/HeadLine"
import { MovicWindow } from "../../../MovicWindow/MovicWindow"
import { MovicWindowBottomBar } from "../../../MovicWindow/MovicWindowBottomBar"
import cl from "./ProjectsHome.module.scss"

interface IProject {
  id: string
  movicTitle: string
}

interface IProjectsHomeProp {
  goToNewProject: ()=>void
}
export function ProjectsHome({
  goToNewProject
}: IProjectsHomeProp) {

  const [loaded, setLoaded] = useState<boolean>(false)
  const [projects, setProjects] = useState<Array<IProject>>([])
  const shield = useShield()
  const router = useRouter()
  const user = useWimaUser()

  async function LoadMyProjects() {
    if(loaded) return
    if(!user?.isLoggedIn) return
    await Get2(shield,"/movic/LoadMyProjects",(res)=>{
      setLoaded(true)
      setProjects(res.projects || [])
    })
  }

  useEffect(()=>{
    LoadMyProjects()
  })

  function openProject(projectId: string, movicTitle: string) {
    router.push(`/apps/Movic/AppTurn/Project?projectId=${projectId}&movicTitle=${movicTitle}`)
  }
  return(<><MovicWindow>

   <div className={cl.board}>
     <HeadLine text="Projects" buttonText="New Project" 
      buttonOnClick={goToNewProject}/>
     <AutoRepeatGrid autoFill cellMinWidth={100} columnGap={10} rowGap={10} paddingTop={25} paddingBottom={10}>
      {
        projects.map((project, i)=>
        <AppleFolder key={project.id} text={project.movicTitle} onClick={
          ()=>{openProject(project.id, project.movicTitle)}
          
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