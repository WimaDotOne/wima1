import { useState } from "react"
import { MovicWindow } from "../../MovicWindow/MovicWindow"
import cl from "./Projects.module.scss"
import { ProjectsHome } from "./ProjectsHome/ProjectsHome"

interface IProjectsProp {

}
export function Projects({

}: IProjectsProp) {

  const [projectsTurn, setProjectsTurn] = useState<string>("")
  
  let projects = null
  switch(projectsTurn) {

    default: projects = <ProjectsHome />
  }

  return (<>
    <MovicWindow>
      {projects}
    </MovicWindow>
  </>)
}

export const ProjectsTurn = {
  Home: "Home"
}