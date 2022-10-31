import { useState } from "react"
import { Post2, useShield } from "../../../../../../../libs/Core/Core1/fCore1"
import { IPlace } from "../../../../../../../libs/Core/Core2/GoogleMap/F/Model/IPlace"
import { ReadEdit } from "../../../../../../../libs/Pop/Pop1/fPop1"
import { TipColor } from "../../../../CSS/TipColor"
import { IJob } from "../../../../Model/IJob"
import { EditJobPlace } from "./EditJobPlace/EditJobPlace"
import { ViewJobPlace } from "./ViewJobPlace/ViewJobPlace"

interface IJobPlaceProp {
  job: IJob
  reloadJob: ()=>void
}
export function JobPlace({
  job,
  reloadJob
}: IJobPlaceProp) {

  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [place, setPlace] = useState<IPlace>({
    place_id: job.placeId || "",
    name: job.placeName || ""
  })



  function onCancel() {
    reloadJob()
    setIsEdit(false)
  }

  return(<>
    <ReadEdit title="Establishment name + Street" isEdit={isEdit}
      description="Customers find you by searching the place you work at."
      setIsEdit={setIsEdit}
      onCancel={onCancel}
      color={TipColor.themeDarkBlue}
    >
    {
      isEdit ? 
      <EditJobPlace job={job} reloadJob={reloadJob} setIsEdit={setIsEdit} />:
      <ViewJobPlace placeName={job.placeName || ""}/>
    }
    </ReadEdit>
  </>)
}