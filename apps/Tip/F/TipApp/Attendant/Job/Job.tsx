import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Get2, Post2, useShield } from "../../../../../../libs/Core/Core1/fCore1"
import { AppleIconButtons, AppleWindowBottomBarFill, AppleWindowPlainBottomBarDiv, Button1, Div } from "../../../../../../libs/Core/Core2/fCore2"
import { HeadLine } from "../../../../../../libs/Pop/Pop3/fPop3"
import { TipColor } from "../../../CSS/TipColor"
import { IJob } from "../../../Model/IJob"
import { AboutMe } from "./AboutMe/AboutMe"
import cl from "./Job.module.scss"
import { JobName } from "./JobName/JobName"
import { Publish } from "./Publish/Publish"

interface IJobProp {

}
export function Job({

}: IJobProp) {

  const router = useRouter()

  const [job, setJob] = useState<IJob>()
  const [jobLoaded, setJobLoaded] = useState<boolean>(false)
  const [refresh, setRefresh] = useState<number>(0)

  const shield = useShield()

  function backToJobsHome() {
    router.push("/apps/Tip/AppTurn/Jobs")
  }

  function reloadJob() {
    setJobLoaded(false)
    setRefresh((refresh+1)%100)
  }

  async function loadJob() {
    const query = router.query
    const jobId = query.jobId as string
    if(jobLoaded) return
    if(!jobId) return
    
    await Get2(shield, `/tip/LoadMyJob?jobId=${jobId}`, (res)=>{
      setJobLoaded(true)
      setJob(res.job)
    })
  }

  useEffect(()=>{
    loadJob()
  })

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
      <Div height={20} />
      <AboutMe job={job} reloadJob={reloadJob}/>
      <Div height={20} />
      <Publish job={job} reloadJob={reloadJob}/>
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