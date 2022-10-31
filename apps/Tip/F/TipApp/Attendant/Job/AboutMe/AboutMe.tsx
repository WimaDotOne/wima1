import { useState } from "react"
import { Post2, useShield } from "../../../../../../../libs/Core/Core1/fCore1"
import { ReadEdit } from "../../../../../../../libs/Pop/Pop1/fPop1"
import { TipColor } from "../../../../CSS/TipColor"
import { IJob } from "../../../../Model/IJob"
import { EditAboutMe } from "./EditAboutMe/EditAboutMe"
import { ViewAboutMe } from "./ViewAboutMe/ViewAboutMe"

interface IAboutMeProp {
  job: IJob
  reloadJob: ()=>void
}
export function AboutMe({
  job,
  reloadJob
}: IAboutMeProp) {

  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [firstName, setFirstName] = useState<string>(job.firstName || "")
  const [selfDescription, setSelfDescription] = useState<string>(job.selfDescription || "")
  const shield = useShield()

  async function saveAboutMe(onOk?:(res:any)=>void) {
    await Post2(shield, "/tip/SaveAboutMe",
      {
        jobId: job.id,
        firstName: firstName,
        selfDescription: selfDescription
      }, onOk
    )
  }

  function onCancel() {
    reloadJob()
    setFirstName(job.firstName || "")
    setSelfDescription(job.selfDescription || "")
    setIsEdit(false)
  }

  async function onSave() {
    saveAboutMe((res)=>{
      setIsEdit(false)
      reloadJob()
    })
  }

  return(<>
    <ReadEdit title="Employee info" isEdit={isEdit}
      setIsEdit={setIsEdit}
      onCancel={onCancel}
      onSave={onSave}
      color={TipColor.themeDarkBlue}
    >
    {
      isEdit ? 
      <EditAboutMe firstName={firstName} setFirstName={setFirstName}
        selfDescription={selfDescription} setSelfDescription={setSelfDescription}
      />:
      <ViewAboutMe firstName={job.firstName} selfDescription={job.selfDescription}/>
    }
    </ReadEdit>
  </>)
}