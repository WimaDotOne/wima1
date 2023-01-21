import { useState } from "react"
import { CoffeeWindowViewCard } from "../../../../../../../libs/Core/Core2/CoffeeWindow/fCoffeeWindow"
import { ThankyMenuTurn, ThankyWindow } from "../../ThankyWindow/ThankyWindow"
import { EditJobPopUp } from "../EditJobPopUp/EditJobPopUp"
import cl from "./Home.module.scss"
import { JobCard } from "./JobCard/JobCard"

interface IHomeProp {

}

export function Home({

}: IHomeProp) {

  const [jobPop, setJobPop] = useState<boolean>(false)

  function editJob() {
    setJobPop(true)
  }

  return(<>
  <ThankyWindow selectItemId={ThankyMenuTurn.Home}>
    <CoffeeWindowViewCard shiftUp>
    <div className={cl.cardTitle}>Jobs</div>
    <div className={cl.jobCards}>
      <div className={cl.jobCardSpace}>
        <JobCard num={1} onClick={editJob}/>
      </div>
      <div className={cl.jobCardSpace}>
        <JobCard num={2} onClick={editJob}/>
      </div>
    </div>
    </CoffeeWindowViewCard>

  </ThankyWindow>

  <EditJobPopUp pop={jobPop} setPop={setJobPop} />
  </>)
}