import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import cl from "./Employee.module.scss"
import { IThankyJob } from "../../../Model/IThankyJob"
import { Get2, useShield } from "../../../../../../../libs/Core/Core1/fCore1"
import { FourItemNavBar } from "../../../../../Lib/FourItemNavBar/FourItemNavBar"
import { PlaceNavModel } from "../Place/Place"
import { TipBoard } from "../../H/TipBoard/TipBoard"
import { Div } from "../../../../../../../libs/Core/Core2/fCore2"

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
  <div className={cl.grayBack}>
    <FourItemNavBar navModel={PlaceNavModel} />
    <div className={cl.info}>
      <div className={cl.photoSpace}>
        <div className={cl.photo}
            style={{backgroundImage: `url(${job?.photo?.url})`}}/>
      </div>
      <div className={cl.firstName}>
        {job?.firstName}
      </div>
      <div className={cl.jobName}>
        {job?.jobName}
      </div>
      <div className={cl.placeName}>
        {job?.placeName}
      </div>
    </div>
    <div className={cl.aboutMeSpace}>
      <div className={cl.aboutMe}>
      {job?.aboutMe}
      </div>
    </div>
    <Div height={30} />
  </div>
  
  <Div height={20} />
  <div className={cl.tipBoardSpace}>
    <TipBoard job={job}/>
  </div>
  </>)
}