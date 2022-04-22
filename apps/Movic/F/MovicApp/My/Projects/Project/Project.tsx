import { useState } from "react"
import { ImagesFolder } from "./ImagesFolder/ImagesFolder"
import { ProjectHome } from "./ProjectHome/ProjectHome"

interface IProjectProp {
  projectId: string
  backToProjectsHome: ()=>void
}
export function Project({
  projectId,
  backToProjectsHome
}: IProjectProp) {

  const [projectTurn, setProjectTurn] = useState<string>("")

  function backToProjectHome() {
    setProjectTurn(ProjectTurn.Home)
  }
  
  let project = null
  switch(projectTurn) {
    case ProjectTurn.ImagesFolder: return(
      <ImagesFolder backToProjectHome={backToProjectHome}/>
    )
    default: project = (
      <ProjectHome backToProjectsHome={backToProjectsHome}
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