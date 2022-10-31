import cl from "./ViewJobName.module.scss"

interface IViewJobNameProp {
  jobName: string
}

export function ViewJobName({
  jobName
}: IViewJobNameProp) {
  return(<>
  <div className={cl.name}>
  {jobName}
  </div>
  </>)
}