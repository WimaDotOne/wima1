import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Get2, useShield } from "../../../../../../../libs/Core/Core1/fCore1"
import { AppleWindowBottomBarFill, AutoRepeatGrid } from "../../../../../../../libs/Core/Core2/fCore2"
import { AppleFolder } from "../../../../../../../libs/Pop/Pop3/Folder/AppleFolder"
import { HeadLine } from "../../../../../../../libs/Pop/Pop3/fPop3"
import { AppleWindowBottomBar } from "../../../../../../H/AppleWindowBottomBar"
import { useWimaUser } from "../../../../../../Wima/fWima"
import { TipColor } from "../../../../CSS/TipColor"
import { TipWindow } from "../../../TipWindow/TipWindow"
import cl from "./JobsHome.module.scss"

interface IJob {
  id: string
  business: string
}

interface IJobsHomeProp {
  goToNewJob: ()=>void
}
export function JobsHome({
  goToNewJob
}: IJobsHomeProp) {

  const [loaded, setLoaded] = useState<boolean>(false)
  const [jobs, setJobs] = useState<Array<IJob>>([])
  const shield = useShield()
  const router = useRouter()
  const user = useWimaUser()

  async function LoadMyJobs() {
    if(loaded) return
    if(!user?.isLoggedIn) return
    await Get2(shield,"/tip/LoadMyJobs",(res)=>{
      setLoaded(true)
      setJobs(res.jobs || [])
    })
  }

  useEffect(()=>{
    LoadMyJobs()
  })

  function openJob(jobId: string, businessName: string) {
    router.push(`/apps/Tip/AppTurn/Job?jobId=${jobId}&businessName=${encodeURIComponent(businessName)}`)
  }
  return(<><TipWindow>

  <div className={cl.board}>
    <HeadLine text="Jobs" buttonText="New Job" 
      buttonOnClick={goToNewJob} 
      color={TipColor.themeDarkBlue}/>
    
    <AutoRepeatGrid autoFill cellMinWidth={100} columnGap={10} rowGap={10} paddingTop={25} paddingBottom={10}>
    {
      jobs.map((job, i)=>
      <AppleFolder key={job.id} text={job.business} onClick={
        ()=>{openJob(job.id, job.business)}
        
      }/>)
    }
    </AutoRepeatGrid>
  </div>
  <AppleWindowBottomBarFill />
  <AppleWindowBottomBar>
  {}
  </AppleWindowBottomBar>
  </TipWindow></>)
}