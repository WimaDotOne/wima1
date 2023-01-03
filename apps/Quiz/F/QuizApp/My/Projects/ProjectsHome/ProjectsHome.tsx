import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Get2, useShield } from "../../../../../../../libs/Core/Core1/fCore1"
import { AppleWindowBottomBarFill, AutoRepeatGrid } from "../../../../../../../libs/Core/Core2/fCore2"
import { AppleFolder } from "../../../../../../../libs/Pop/Pop3/Folder/AppleFolder"
import { HeadLine } from "../../../../../../../libs/Pop/Pop3/fPop3"
import { AppleWindowBottomBar } from "../../../../../../H/AppleWindowBottomBar"
import { useWimaUser } from "../../../../../../Wima/fWima"
import { QuizColor } from "../../../../CSS/QuizColor"
import { QuizWindow } from "../../../QuizWindow/QuizWindow"
import cl from "./ProjectsHome.module.scss"

interface IProject {
  id: string
  quizBookTitle: string
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
    await Get2(shield,"/quiz/LoadMyProjects",(res)=>{
      setLoaded(true)
      setProjects(res.projects || [])
    })
  }

  useEffect(()=>{
    LoadMyProjects()
  })

  function openProject(projectId: string, quizBookTitle: string) {
    router.push(`/apps/Quiz/AppTurn/Project?projectId=${projectId}&quizBookTitle=${quizBookTitle}`)
  }
  return(<><QuizWindow>

  <div className={cl.board}>
    <HeadLine text="Projects" buttonText="New Project" 
      buttonOnClick={goToNewProject} 
      color={QuizColor.themeRed}/>
    
    <AutoRepeatGrid autoFill cellMinWidth={100} columnGap={10} rowGap={10} paddingTop={25} paddingBottom={10}>
    {
      projects.map((project, i)=>
      <AppleFolder key={project.id} text={project.quizBookTitle} onClick={
        ()=>{openProject(project.id, project.quizBookTitle)}
        
      }/>)
    }
    </AutoRepeatGrid>
  </div>
  <AppleWindowBottomBarFill />
  <AppleWindowBottomBar>
  {}
  </AppleWindowBottomBar>
  </QuizWindow></>)
}