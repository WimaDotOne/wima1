import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { IProject } from "../../../Model/IProject"
import { ImagesFolder } from "./ImagesFolder/ImagesFolder"
import { MovieScript } from "./MovieScript/MovieScript"
import { ProjectHome } from "./ProjectHome/ProjectHome"

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

    if(!project) { //check project to avoid infinitely set
      setProject({id, movicTitle})
    }
  })
  
  if(!project) {
    return null
  }
  
  switch(projectTurn) {
    case ProjectTurn.MovieScript: return(
      <MovieScript backToProjectHome={backToProjectHome}/>
    )
    case ProjectTurn.ImagesFolder: return(
      <ImagesFolder backToProjectHome={backToProjectHome}/>
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
  MovieScript: "MovieScript"
}