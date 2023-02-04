import { IThankyJob } from "../../../../Model/IThankyJob"
import cl from "./EmployeeCard.module.scss"

interface IEmployeeCardProp {
  job: IThankyJob
  onClick:()=>void
}

export function EmployeeCard({
  job,
  onClick
}: IEmployeeCardProp) {
  return(<>
  <div className={cl.employeeCard} onClick={onClick}>
    <div className={cl.employeePhoto} 
      style={{backgroundImage: `url(${job.photo?.urlSmall})`}}
    />
    <div className={cl.firstName}>{job.firstName}</div>
  </div>
  </>)
}