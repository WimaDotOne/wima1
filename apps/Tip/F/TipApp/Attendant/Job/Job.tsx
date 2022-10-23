import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { IJob } from "../../../Model/IJob"
import { JobHome } from "./JobHome/JobHome"

interface IJobProp {

}
export function Job({

}: IJobProp) {

  const router = useRouter()

  const [job, setJob] = useState<IJob>()
  const [jobTurn, setJobTurn] = useState<string>("")

  function backToJobsHome() {
    router.push("/apps/Tip/AppTurn/Jobs")
  }

  function backToJobHome() {
    setJobTurn(JobTurn.Home)
  }

  useEffect(()=>{

    const query = router.query
    const id = query.jobId as string
    const businessName = query.businessName as string

    if(!job || !job.id) {
      //check job to avoid infinitely setting
      //check job.id to avoid setting a job with undefined id.
      setJob({id, businessName})
    }
  })

  function setJobBookTitle(businessName: string) {
    if(!job) return
    setJob({...job, businessName})
  }

  if(!job) {
    return null
  }
  
  switch(jobTurn) {
    default: return (
      <JobHome 
        job={job}
        backToJobsHome={backToJobsHome}
        setJobTurn = {setJobTurn} />
    )
  }
  
}

export const JobTurn = {
  Home: "Home"
}