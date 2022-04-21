import { useState } from "react"
import { ProjectHome } from "./ProjectHome/ProjectHome"

interface IProjectProp {
  projectId: string
  onBack: ()=>void
}
export function Project({
  projectId,
  onBack
}: IProjectProp) {

  const [projectTurn, setProjectTurn] = useState<string>("")
  
  let project = null
  switch(projectTurn) {

    default: project = (<ProjectHome onBack={onBack}/>)
  }

  return(<>
  { project }
  </>)
  
}

export const ProjectTurn = {
  Home: "Home"
}