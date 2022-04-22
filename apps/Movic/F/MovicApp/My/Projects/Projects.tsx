import { useState } from "react"
import { MovicWindow } from "../../MovicWindow/MovicWindow"
import { Project } from "./Project/Project"
import cl from "./Projects.module.scss"
import { ProjectsHome } from "./ProjectsHome/ProjectsHome"

interface IProjectsProp {

}
export function Projects({

}: IProjectsProp) {

  const [projectsTurn, setProjectsTurn] = useState<string>("")
  const [projectId, setProjectId] = useState<string>("")

  function openProject(projectId: string) {
    setProjectsTurn(ProjectsTurn.Project)
    setProjectId(projectId)
  }

  function backToProjectsHome() {
    setProjectsTurn(ProjectsTurn.Home)
  }

  let projects = null
  switch(projectsTurn) {
    case ProjectsTurn.Project:
      projects = <Project projectId={projectId} 
        backToProjectsHome={backToProjectsHome}/>
      break
    default: projects = <ProjectsHome openProject={openProject}/>
  }

  return (<>
    <MovicWindow>
      {projects}
    </MovicWindow>
  </>)
}

export const ProjectsTurn = {
  Home: "Home",
  Project: "Project"
}