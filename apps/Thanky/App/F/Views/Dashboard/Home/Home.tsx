import { useEffect, useState } from "react"
import { Get2, useShield } from "../../../../../../../libs/Core/Core1/fCore1"
import { CoffeeWindowViewCard } from "../../../../../../../libs/Core/Core2/CoffeeWindow/fCoffeeWindow"
import { IThankyJob } from "../../../Model/IThankyJob"
import { ThankyMenuTurn, ThankyWindow } from "../../ThankyWindow/ThankyWindow"
import { EditJobPopUp } from "../EditJobPopUp/EditJobPopUp"
import cl from "./Home.module.scss"
import { JobCard } from "./JobCard/JobCard"

interface IHomeProp {

}

export function Home({

}: IHomeProp) {

  const [jobPop, setJobPop] = useState<boolean>(false)
  const [job1, setJob1] = useState<IThankyJob>()
  const [job2, setJob2] = useState<IThankyJob>()
  const shield = useShield()

  function editJob() {
    setJobPop(true)
  }

  async function loadHome() {
    await Get2(shield, "/thanky/LoadHome", (res)=>{
      setJob1(res.job1)
      setJob2(res.job2)
    })
  }

  useEffect(()=>{
    loadHome()
  }, [])

  return(<>
  <ThankyWindow selectItemId={ThankyMenuTurn.Home}>
    <CoffeeWindowViewCard shiftUp>
    <div className={cl.cardTitle}>Jobs</div>
    <div className={cl.jobCards}>
      <div className={cl.jobCardSpace}>
        <JobCard job={job1} num={1} onClick={editJob}/>
      </div>
      <div className={cl.jobCardSpace}>
        <JobCard job={job2} num={2} onClick={editJob}/>
      </div>
    </div>
    </CoffeeWindowViewCard>

  </ThankyWindow>

  <EditJobPopUp pop={jobPop} setPop={setJobPop} />
  </>)
}