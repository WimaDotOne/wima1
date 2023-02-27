import { useEffect, useState } from "react"
import { Get2, useShield } from "../../../../../../../libs/Core/Core1/fCore1"
import { CoffeeWindowViewCard } from "../../../../../../../libs/Core/Core2/CoffeeWindow/fCoffeeWindow"
import { GoogleMapScript1 } from "../../../../../../../libs/Core/Core2/fCore2"
import { IThankyJob } from "../../../Model/IThankyJob"
import { ThankyMenuTurn, ThankyWindow } from "../../ThankyWindow/ThankyWindow"
import { EditJobPopUp } from "../EditJobPopUp/EditJobPopUp"
import cl from "./Home.module.scss"
import { JobCard } from "./JobCard/JobCard"

interface IHomeProp {

}

export function Home({

}: IHomeProp) {

  const [scriptLoaded, setScriptLoaded] = useState<boolean>(false)
  const [jobPop, setJobPop] = useState<boolean>(false)
  const [job1, setJob1] = useState<IThankyJob>()
  const [job2, setJob2] = useState<IThankyJob>()
  const [editedJob, setEditedJob] = useState<IThankyJob>()
  const [refreshCount, setRefreshCount] = useState<number>(0)
  const [num, setNum] = useState<number>(1)

  const shield = useShield()

  function editJob(num: number, job?: IThankyJob) {
    if(!job) return
    setNum(num)
    setEditedJob(job)
    setJobPop(true)
  }

  async function loadHome() {
    await Get2(shield, "/thanky/LoadHome", (res)=>{
      setJob1(res.job1)
      setJob2(res.job2)
    })
  }

  function reload() {
    setRefreshCount((refreshCount + 1) % 100)
  }

  useEffect(()=>{
    loadHome()
  }, [refreshCount])

  return(<>
  <GoogleMapScript1 scriptLoaded={scriptLoaded}
    setScriptLoaded={setScriptLoaded}/>
  <ThankyWindow selectItemId={ThankyMenuTurn.Home}>
    <CoffeeWindowViewCard shiftUp>
    <div className={cl.cardTitle}>Jobs</div>
    <div className={cl.jobCards}>
      <div className={cl.jobCardSpace}>
        <JobCard job={job1} num={1} onClick={()=>{
          editJob(1, job1)
        }}/>
      </div>
      <div className={cl.jobCardSpace}>
        <JobCard job={job2} num={2} onClick={()=>{
          editJob(2, job2)
        }}/>
      </div>
    </div>
    </CoffeeWindowViewCard>
  </ThankyWindow>

  <EditJobPopUp pop={jobPop} setPop={setJobPop}
    num = { num }
    reload={reload}
    job = {editedJob}
    setJob = {setEditedJob}
  />
  </>)
}