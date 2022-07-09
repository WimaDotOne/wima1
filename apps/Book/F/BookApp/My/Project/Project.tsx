import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { IProject } from "../../../Model/IProject"
import { Chapters } from "./Chapters/Chapters"
import { Preview } from "./Preview/Preview"
import { ProjectHome } from "./ProjectHome/ProjectHome"
import { Settings } from "./Settings/Settings"

interface IProjectProp {

}
export function Project({

}: IProjectProp) {

  const router = useRouter()

  const [project, setProject] = useState<IProject>()
  const [projectTurn, setProjectTurn] = useState<string>("")


  function backToProjectsHome() {
    router.push("/apps/Book/AppTurn/Projects")
  }

  function backToProjectHome() {
    setProjectTurn(ProjectTurn.Home)
  }

  useEffect(()=>{
    const query = router.query
    const id = query.projectId as string
    const bookTitle = query.bookTitle as string

    if(!project || !project.id) {
      //check project to avoid infinitely setting
      //check project.id to avoid setting a project with undefined id.
      setProject({id, bookTitle})
    }
  })

  function setProjectBookTitle(bookTitle: string) {
    if(!project) return
    setProject({...project, bookTitle})
  }

  if(!project) {
    return null
  }
  
  switch(projectTurn) {
    case ProjectTurn.Chapters: return(
      <Chapters project={project} backToProjectHome={backToProjectHome}/>
    )
    case ProjectTurn.Preview: return(
      <Preview project={project} backToProjectHome={backToProjectHome}/>
    )
    case ProjectTurn.Settings: return(
      <Settings project={project}  
        setProjectBookTitle={setProjectBookTitle}
        backToProjectHome={backToProjectHome}/>
    )
    default: return (
      <ProjectHome 
        project={project}
        backToProjectsHome={backToProjectsHome}
        setProjectTurn = {setProjectTurn} />
    )
  }
  
}

export const ProjectTurn = {
  Home: "Home",
  Chapters: "Chapters",
  Preview: "Preview",
  Settings: "Settings"
}