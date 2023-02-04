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
 
  async function loadJob(jobId?: string) {
    if(!jobId) return
    await Get2(shield, `/thanky/LoadJob?jobId=${jobId}`, (res)=>{
      setJob(res.job)
    })
  }

  useEffect(()=>{
    if(!router.isReady) return

    const jobId = (router.query.jobId || "") as string

    loadJob(jobId)

  }, [router.isReady])

  return(<>
  <div>
  {job?.placeName}
  </div>
  </>)
}