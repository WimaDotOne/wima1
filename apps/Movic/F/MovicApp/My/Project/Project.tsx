import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { IProject } from "../../../Model/IProject"
import { ImagesFolder } from "./ImagesFolder/ImagesFolder"
import { MovicScript } from "./MovicScript/MovicScript"
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
    router.push("/apps/Movic/AppTurn/Projects")
  }

  function backToProjectHome() {
    setProjectTurn(ProjectTurn.Home)
  }

  useEffect(()=>{
    const query = router.query
    const id = query.projectId as string
    const movicTitle = query.movicTitle as string

    if(!project || !project.id) {
      //check project to avoid infinitely setting
      //check project.id to avoid setting a project with undefined id.
      setProject({id, movicTitle})
    }
  })

  function setProjectMovicTitle(movicTitle: string) {
    if(!project) return
    setProject({...project, movicTitle})
  }

  if(!project) {
    return null
  }
  
  switch(projectTurn) {
    case ProjectTurn.MovicScript: return(
      <MovicScript project={project} backToProjectHome={backToProjectHome}/>
    )
    case ProjectTurn.ImagesFolder: return(
      <ImagesFolder project={project} backToProjectHome={backToProjectHome}/>
    )
    case ProjectTurn.Preview: return(
      <Preview project={project} backToProjectHome={backToProjectHome}/>
    )
    case ProjectTurn.Settings: return(
      <Settings project={project}  
        setProjectMovicTitle={setProjectMovicTitle}
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
  ImagesFolder: "ImagesFolder",
  MovicScript: "MovicScript",
  Preview: "Preview",
  Settings: "Settings"
}