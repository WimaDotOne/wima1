import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import cl from "./Employee.module.scss"
import { IThankyJob } from "../../../Model/IThankyJob"
import { Get2, useShield } from "../../../../../../../libs/Core/Core1/fCore1"

interface IEmployeeProp {

}

export function Employee({

} : IEmployeeProp) {

  const [job, setJob] = useState<IThankyJob>()
  const router = useRouter()
  const shield = useShield()

  const jobId = (router.query.jobId || "") as string

  async function loadJob() {
    if(!jobId) return
    
  }

  useEffect(()=>{
    loadJob()
  })

  return(<>
  <div>
  {jobId}
  </div>
  </>)
}