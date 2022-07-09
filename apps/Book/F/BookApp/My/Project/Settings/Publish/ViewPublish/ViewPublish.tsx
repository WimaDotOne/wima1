import { useEffect, useState } from "react"
import { Get2, useShield } from "../../../../../../../../../libs/Core/Core1/fCore1"
import { useWimaEnv } from "../../../../../../../../Wima/fWima"
import { IProject } from "../../../../../../Model/IProject"
import cl from "./ViewPublish.module.scss"

interface IViewPublishProp {
  project: IProject
  isBookPublic: boolean
}
export function ViewPublish({
  project,
  isBookPublic
}: IViewPublishProp) {
  
  const [bookId, setBookId] = useState<string>("")
  const [loaded, setLoaded] = useState<boolean>(false)
  const shield = useShield()

  const wimaEnv = useWimaEnv()

  async function loadBookId() {
    if(loaded) return
    if(!project) return
    await Get2(shield, `/book/LoadSettingsBookId?projectId=${project.id}`,
      (res)=>{
        setLoaded(true)
        setBookId(res.bookId)
      }
    )
  }

  useEffect(()=>{
    loadBookId()
  })

  let text = "The book is not published. Only you can view it."
  let href = ""
  if(isBookPublic) {
    text = "The book is public to people who have the following link. Share by sending the link to your friends."
    href = `${wimaEnv?.domain}/apps/Book/Play/?bookId=${bookId}`
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