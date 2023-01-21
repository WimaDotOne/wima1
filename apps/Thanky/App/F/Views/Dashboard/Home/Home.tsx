import { useState } from "react"
import { TextField2 } from "../../../../../../../libs/Core/Core1/Fields/TextField/TextField2"
import { CoffeeWindowViewCard } from "../../../../../../../libs/Core/Core2/CoffeeWindow/fCoffeeWindow"
import { PopUp } from "../../../../../Lib/PopUp/PopUp"
import { ThankyMenuTurn, ThankyWindow } from "../../ThankyWindow/ThankyWindow"
import cl from "./Home.module.scss"
import { JobCard } from "./JobCard/JobCard"

interface IHomeProp {

}

export function Home({

}: IHomeProp) {

  const [jobPop, setJobPop] = useState<boolean>(false)

  function onClickJobCard() {

  }

  return(<>
  <ThankyWindow selectItemId={ThankyMenuTurn.Home}>
    <CoffeeWindowViewCard shiftUp>
    <div className={cl.cardTitle}>Jobs</div>
    <div className={cl.jobCards}>
      <div className={cl.jobCardSpace}>
        <JobCard num={1} onClick={onClickJobCard}/>
      </div>
      <div className={cl.jobCardSpace}>
        <JobCard num={2} onClick={onClickJobCard}/>
      </div>
    </div>
    </CoffeeWindowViewCard>

  </ThankyWindow>
  <PopUp pop={jobPop} setPop={setJobPop}
    title="Job"
  >
    
  </PopUp>
  </>)
}