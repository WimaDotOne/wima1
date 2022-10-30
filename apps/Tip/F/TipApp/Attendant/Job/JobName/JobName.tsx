import { useState } from "react"
import { Post2, useShield } from "../../../../../../../libs/Core/Core1/fCore1"
import { ReadEdit } from "../../../../../../../libs/Pop/Pop1/fPop1"
import { TipColor } from "../../../../CSS/TipColor"
import { IJob } from "../../../../Model/IJob"
import { EditJobName } from "./EditJobName/EditJobName"
import { ViewJobName } from "./ViewJobName/ViewJobName"

interface IJobNameProp {
  job: IJob
  reloadJob: ()=>void
}
export function JobName({
  job,
  reloadJob
}: IJobNameProp) {

  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [name, setName] = useState<string>(job.jobName)
  const shield = useShield()

  async function saveJobName(onOk?:(res:any)=>void) {
    await Post2(shield, "/tip/SaveSettingsJobName",
      {
        jobId: job.id,
        jobName: name
      }, onOk
    )
  }

  function onCancel() {
    reloadJob()
  }

  async function onSave() {
    saveJobName((res)=>{
      setIsEdit(false)
      reloadJob()
    })
  }

  return(<>
    <ReadEdit title="Job name" isEdit={isEdit}
      setIsEdit={setIsEdit}
      onCancel={onCancel}
      onSave={onSave}
      color={TipColor.themeDarkBlue}
    >
    {
      isEdit ? 
      <EditJobName />:
      <ViewJobName />
    }
    </ReadEdit>
  </>)
}