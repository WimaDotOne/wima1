import { useState } from "react"
import { ProjectHome } from "./ProjectHome/ProjectHome"

interface IProjectProp {
  projectId: string
}
export function Project({
  projectId
}: IProjectProp) {

  const [projectTurn, setProjectTurn] = useState<string>("")
  
  let project = null
  switch(projectTurn) {

    default: project = (<ProjectHome />)
  }

  return(<>
  <div>Back</div>
  { project } {projectId}
  </>)
  
}

export const ProjectTurn = {
  Home: "Home"
}