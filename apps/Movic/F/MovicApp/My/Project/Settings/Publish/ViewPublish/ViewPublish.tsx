import { useEffect, useState } from "react"
import { Get2, useShield } from "../../../../../../../../../libs/Core/Core1/fCore1"
import { useWimaEnv } from "../../../../../../../../Wima/fWima"
import { IProject } from "../../../../../../Model/IProject"
import cl from "./ViewPublish.module.scss"

interface IViewPublishProp {
  project: IProject
  isMovicPublic: boolean
}
export function ViewPublish({
  project,
  isMovicPublic
}: IViewPublishProp) {
  
  const [movicId, setMovicId] = useState<string>("")
  const [loaded, setLoaded] = useState<boolean>(false)
  const shield = useShield()

  const wimaEnv = useWimaEnv()

  async function loadMovicId() {
    if(loaded) return
    if(!project) return
    await Get2(shield, `/movic/LoadSettingsMovicId?projectId=${project.id}`,
      (res)=>{
        setLoaded(true)
        setMovicId(res.movicId)
      }
    )
  }

  useEffect(()=>{
    loadMovicId()
  })

  let text = "The movic is not published. Only you can view it."
  let href = ""
  if(isMovicPublic) {
    text = "The movic is public to people with the following link. Share by sending the link to your friends."
    href = `${wimaEnv?.movicEnv?.domain}/apps/Movic/Play/?movicId=${movicId}`
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