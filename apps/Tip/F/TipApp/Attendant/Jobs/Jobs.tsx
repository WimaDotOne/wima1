import { useState } from "react"
import { NewJob } from "./NewJob/NewJob"
import { JobsHome } from "./JobsHome/JobsHome"

interface IJobsProp {

}
export function Jobs({

}: IJobsProp) {

  const [jobsTurn, setJobsTurn] = useState<string>("")

  function backToJobsHome() {
    setJobsTurn(JobsTurn.Home)
  }

  function goToNewJob() {
    setJobsTurn(JobsTurn.NewJob)
  }

  switch(jobsTurn) {
    case JobsTurn.NewJob:
      return (<NewJob backToJobsHome={backToJobsHome}/>)
    default: return (<JobsHome goToNewJob={goToNewJob}/>)
  }
}

export const JobsTurn = {
  Home: "Home",
  NewJob: "NewJob"
}