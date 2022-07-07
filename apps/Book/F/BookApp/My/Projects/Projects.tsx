import { useState } from "react"
import { NewProject } from "./NewProject/NewProject"
import { ProjectsHome } from "./ProjectsHome/ProjectsHome"

interface IProjectsProp {

}
export function Projects({

}: IProjectsProp) {

  const [projectsTurn, setProjectsTurn] = useState<string>("")

  function backToProjectsHome() {
    setProjectsTurn(ProjectsTurn.Home)
  }

  function goToNewProject() {
    setProjectsTurn(ProjectsTurn.NewProject)
  }

  switch(projectsTurn) {
    case ProjectsTurn.NewProject:
      return (<NewProject backToProjectsHome={backToProjectsHome}/>)
    default: return (<ProjectsHome goToNewProject={goToNewProject}/>)
  }
}

export const ProjectsTurn = {
  Home: "Home",
  NewProject: "NewProject"
}