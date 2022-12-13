import { useEffect, useState } from "react"
import { Get2, useShield } from "../../../../../../../../../libs/Core/Core1/fCore1"
import { useWimaEnv } from "../../../../../../../../Wima/fWima"
import { IProject } from "../../../../../../Model/IProject"
import cl from "./ViewPublish.module.scss"

interface IViewPublishProp {
  project: IProject
  isQuizBookPublic: boolean
}
export function ViewPublish({
  project,
  isQuizBookPublic
}: IViewPublishProp) {
  
  const [quizBookId, setQuizBookId] = useState<string>("")
  const [loaded, setLoaded] = useState<boolean>(false)
  const shield = useShield()

  const wimaEnv = useWimaEnv()

  async function loadQuizBookId() {
    if(loaded) return
    if(!project) return
    await Get2(shield, `/quiz/LoadSettingsMyQuizBookId?projectId=${project.id}`,
      (res)=>{
        setLoaded(true)
        setQuizBookId(res.quizBookId)
      }
    )
  }

  useEffect(()=>{
    loadQuizBookId()
  })

  let text = "The quiz book is not published. Only you can view it."
  let href = ""
  if(isQuizBookPublic) {
    text = "The quiz book is public to people who have the following link. Share by sending the link to your friends."
    href = `${wimaEnv?.domain}/apps/Quiz/Play/?quizBookId=${quizBookId}`
  }
  


  return(<>
    <div className={cl.viewPublish}>
      {text}
      {
        href ?
        <div className={cl.aDiv}>
        <a target="_blank" href={href}>
        {href}
        </a>
        </div>: null
      }


    </div>
  </>)
}