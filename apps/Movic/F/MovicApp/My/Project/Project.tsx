import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { ImagesFolder } from "./ImagesFolder/ImagesFolder"
import { MovieScript } from "./MovieScript/MovieScript"
import { ProjectHome } from "./ProjectHome/ProjectHome"

interface IProjectProp {
}
export function Project({
}: IProjectProp) {

  const router = useRouter()

  const [projectId, setProjectId] = useState<string>("")
  const [movicTitle, setMovicTitle] = useState<string>("")
  const [projectTurn, setProjectTurn] = useState<string>("")


  function backToProjectsHome() {
    router.push("/apps/Movic/AppTurn/Projects")
  }

  function backToProjectHome() {
    setProjectTurn(ProjectTurn.Home)
  }

  useEffect(()=>{
    const query = router.query
    const projectId0 = query.projectId as string
    const movicTitle0 = query.movicTitle as string
    setProjectId(projectId0)
    setMovicTitle(movicTitle0)
  })
  
  switch(projectTurn) {
    case ProjectTurn.MovieScript: return(
      <MovieScript backToProjectHome={backToProjectHome}/>
    )
    case ProjectTurn.ImagesFolder: return(
      <ImagesFolder backToProjectHome={backToProjectHome}/>
    )
    default: return (
      <ProjectHome backToProjectsHome={backToProjectsHome}
        setProjectTurn = {setProjectTurn} />
    )
  }
  
}

export const ProjectTurn = {
  Home: "Home",
  ImagesFolder: "ImagesFolder",
  MovieScript: "MovieScript"
}