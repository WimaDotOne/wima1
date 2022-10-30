import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Post2, useShield } from "../../../../../../libs/Core/Core1/fCore1"
import { AppleIconButtons, AppleWindowBottomBarFill, AppleWindowPlainBottomBarDiv, Button1, Div } from "../../../../../../libs/Core/Core2/fCore2"
import { HeadLine } from "../../../../../../libs/Pop/Pop3/fPop3"
import { TipColor } from "../../../CSS/TipColor"
import { IJob } from "../../../Model/IJob"
import cl from "./Job.module.scss"
import { JobName } from "./JobName/JobName"

interface IJobProp {

}
export function Job({

}: IJobProp) {

  const router = useRouter()

  const [job, setJob] = useState<IJob>()
  const [jobTurn, setJobTurn] = useState<string>("")
  const [jobLoaded, setJobLoaded] = useState<boolean>(false)

  const shield = useShield()

  function backToJobsHome() {
    router.push("/apps/Tip/AppTurn/Jobs")
  }

  useEffect(()=>{

    const query = router.query
    const id = query.jobId as string
    const jobName = query.jobName as string

    if(!job || !job.id) {
      //check job to avoid infinitely setting
      //check job.id to avoid setting a job with undefined id.
      setJob({
        id, 
        jobName
      })
    }
  })

  function reloadJob() {
    setJobLoaded(false)
  }

  async function deleteJob() {
    if(!job) return
    if(!window.confirm(`Are you sure to delete job ${job.jobName}?`)) return
    await Post2(shield, "/tip/DeleteMyJob", {
      jobId: job.id
    }, backToJobsHome)
  }

  if(!job) {
    return null
  }
  
  return(<>
    <div className={cl.settings}>
      <HeadLine text={job.jobName} h={3} />
      <Div height={10} />
      <JobName job={job} reloadJob={reloadJob}/>

      <Div height={50} />
      <Button1 text="Detete Job" color={TipColor.$errorRed}
        onClick={deleteJob} />
    </div>
  <AppleWindowBottomBarFill />
    <AppleWindowPlainBottomBarDiv>
      <AppleIconButtons color={TipColor.themeDarkBlue}
        icon1="chevron.left" onClick1={backToJobsHome}
      />
    </AppleWindowPlainBottomBarDiv>
  </>)
  
}