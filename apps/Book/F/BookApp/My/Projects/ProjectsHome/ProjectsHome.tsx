import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Get2, useShield } from "../../../../../../../libs/Core/Core1/fCore1"
import { AppleWindowBottomBarFill, AutoRepeatGrid } from "../../../../../../../libs/Core/Core2/fCore2"
import { AppleFolder } from "../../../../../../../libs/Pop/Pop3/Folder/AppleFolder"
import { HeadLine } from "../../../../../../../libs/Pop/Pop3/fPop3"
import { AppleWindowBottomBar } from "../../../../../../H/AppleWindowBottomBar"
import { useWimaUser } from "../../../../../../Wima/fWima"
import { BookColor } from "../../../../CSS/BookColor"
import { BookWindow } from "../../../BookWindow/BookWindow"
import cl from "./ProjectsHome.module.scss"

interface IProject {
  id: string
  bookTitle: string
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
    await Get2(shield,"/book/LoadMyProjects",(res)=>{
      setLoaded(true)
      setProjects(res.projects || [])
    })
  }

  useEffect(()=>{
    LoadMyProjects()
  })

  function openProject(projectId: string, bookTitle: string) {
    router.push(`/apps/Book/AppTurn/Project?projectId=${projectId}&bookTitle=${bookTitle}`)
  }
  return(<><BookWindow>

  <div className={cl.board}>
    <HeadLine text="Projects" buttonText="New Project" 
      buttonOnClick={goToNewProject} 
      color={BookColor.themeGreen}/>
    
    <AutoRepeatGrid autoFill cellMinWidth={100} columnGap={10} rowGap={10} paddingTop={25} paddingBottom={10}>
    {
      projects.map((project, i)=>
      <AppleFolder key={project.id} text={project.bookTitle} onClick={
        ()=>{openProject(project.id, project.bookTitle)}
        
      }/>)
    }
    </AutoRepeatGrid>
  </div>
  <AppleWindowBottomBarFill />
  <AppleWindowBottomBar>
  {}
  </AppleWindowBottomBar>
  </BookWindow></>)
}