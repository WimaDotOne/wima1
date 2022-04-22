import { useState } from "react"
import { ImagesFolder } from "./ImagesFolder/ImagesFolder"
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
    case ProjectTurn.ImagesFolder: return(
      <ImagesFolder />
    )
    default: project = (
      <ProjectHome onBack={onBack}
        setProjectTurn = {setProjectTurn}
      />
    )
  }

  return(<>
  { project }
  </>)
  
}

export const ProjectTurn = {
  Home: "Home",
  ImagesFolder: "ImagesFolder"
}