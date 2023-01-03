import { useState } from "react"
import { useShield } from "../../../../../../../../../../libs/Core/Core1/fCore1"
import { useWimaEnv } from "../../../../../../../../../Wima/fWima"
import { IQuizChapter } from "../../../../../../../Model/IQuizChapter"
import cl from "./ViewPublish.module.scss"

interface IViewPublishProp {
  chapter: IQuizChapter
  isQuizChapterPublic: boolean
}
export function ViewPublish({
  chapter,
  isQuizChapterPublic
}: IViewPublishProp) {
  
  const [quizChapterId, setQuizChapterId] = useState<string>("")
  const [loaded, setLoaded] = useState<boolean>(false)
  const shield = useShield()

  const wimaEnv = useWimaEnv()

  let text = "The quiz chapter is not published. Only you can view it."
  let href = ""
  if(isQuizChapterPublic) {
    text = "The quiz chapter is public to people who have the following link. Share by sending the link to your friends."
    href = `${wimaEnv?.domain}/apps/Quiz/ChapterPlay/?chapterId=${chapter._id}`
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