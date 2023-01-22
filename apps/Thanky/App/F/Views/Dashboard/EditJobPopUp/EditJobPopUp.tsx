import { useState } from "react"
import { GENERAL_INPUT_MAX } from "../../../../../../../bConfig"
import { Post2, useShield } from "../../../../../../../libs/Core/Core1/fCore1"
import { TextField2 } from "../../../../../../../libs/Core/Core1/Fields/TextField/TextField2"
import { Div } from "../../../../../../../libs/Core/Core2/fCore2"
import { PopUp } from "../../../../../Lib/PopUp/PopUp"
import { IThankyJob } from "../../../Model/IThankyJob"
import cl from "./EditJobPopUp.module.scss"

interface IEditJobPopUpProp {
  job?: IThankyJob
  setJob: (job: IThankyJob)=>void
  num? : number
  reload: ()=>void
  pop: boolean
  setPop: (pop: boolean)=>void
}

export function EditJobPopUp({
  job,
  setJob,
  num,
  reload,
  pop,
  setPop
}: IEditJobPopUpProp) {

  const shield = useShield()

  function setFirstName(firstName: string) {
    setJob({...job, firstName})
  }

  function setJobName(jobName: string) {
    setJob({...job, jobName})
  }

  async function saveJob() {
    await Post2(shield, "/thanky/SaveJob", {
      num,
      firstName: job?.firstName || "",
      jobName: job?.jobName || ""
    }, (res)=>{
      reload()
      setPop(false)
    })
  }

  return(<>
  <PopUp pop={pop} setPop={setPop}
    onSave={saveJob}
    title="Edit job"
    saveTextColor="#222"
    saveButtonColor="#FD0"
  >
    <TextField2 
      prompt="First name"
      value={job?.firstName} 
      onChange={(value)=>{setFirstName(value)}} 
      maxLength={GENERAL_INPUT_MAX}
    />
    <Div height={30} />
    <TextField2
      prompt="Job name"
      value={job?.jobName}
      onChange={(value)=>{setJobName(value)}} 
      maxLength={GENERAL_INPUT_MAX}
    />
  </PopUp>
  </>)
}