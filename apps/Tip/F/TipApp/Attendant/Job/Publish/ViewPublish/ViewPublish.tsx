import { useEffect, useState } from "react"
import { useShield } from "../../../../../../../../libs/Core/Core1/fCore1"
import { IJob } from "../../../../../Model/IJob"
import cl from "./ViewPublish.module.scss"

interface IViewPublishProp {
  isJobPublic: boolean
}
export function ViewPublish({
  isJobPublic
}: IViewPublishProp) {
  
  const shield = useShield()


  let text = "Above job info is not public. Only you can view it. People cannot find you and give tips yet."
  if(isJobPublic) {
    text = "The job info is public. People can find you now."
  }
  


  return(<>
    <div className={cl.viewPublish}>
      {text}
    </div>
  </>)
}