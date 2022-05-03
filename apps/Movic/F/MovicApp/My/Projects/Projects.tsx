import { useState } from "react"
import { NewProject } from "./NewProject/NewProject"
import { Project } from "./Project/Project"
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

  function goToNewProject() {
    setProjectsTurn(ProjectsTurn.NewProject)
  }

  switch(projectsTurn) {
    case ProjectsTurn.NewProject:
      return (<NewProject backToProjectsHome={backToProjectsHome}/>)
    case ProjectsTurn.Project:
      return (<Project projectId={projectId} 
        backToProjectsHome={backToProjectsHome}/>)
    default: return (<ProjectsHome openProject={openProject}
      goToNewProject={goToNewProject}
    />)
  }
}

export const ProjectsTurn = {
  Home: "Home",
  Project: "Project",
  NewProject: "NewProject"
}