import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { IProject } from "../../../Model/IProject"
import { ProjectHome } from "./ProjectHome/ProjectHome"
import { QuizBookSettings } from "./QuizBookSettings/QuizBookSettings"

interface IProjectProp {

}
export function Project({

}: IProjectProp) {

  const router = useRouter()

  const [project, setProject] = useState<IProject>()
  const [projectTurn, setProjectTurn] = useState<string>("")


  function backToProjectsHome() {
    router.push("/apps/Quiz/AppTurn/Projects")
  }

  function backToProjectHome() {
    setProjectTurn(ProjectTurn.Home)
  }

  useEffect(()=>{
    const query = router.query
    const id = query.projectId as string
    const quizBookTitle = query.quizBookTitle as string

    if(!project || !project.id) {
      //check project to avoid infinitely setting
      //check project.id to avoid setting a project with undefined id.
      setProject({id, quizBookTitle})
    }
  })

  function setProjectQuizTitle(quizBookTitle: string) {
    if(!project) return
    setProject({...project, quizBookTitle})
  }

  if(!project) {
    return null
  }
  
  switch(projectTurn) {
    case ProjectTurn.QuizBookSettings: return(
      <QuizBookSettings 
        project={project}
        setProjectQuizBookTitle={setProjectQuizTitle}
        backToProjectHome={backToProjectHome}
      />
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
  QuizBookSettings: "QuizBookSettings"
}