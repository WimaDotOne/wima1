import { useState } from "react"
import { ErrorLine, Post2, useShield } from "../../../../../../../../libs/Core/Core1/fCore1"
import { PlaceAutoComplete1 } from "../../../../../../../../libs/Core/Core2/fCore2"
import { IPlace } from "../../../../../../../../libs/Core/Core2/GoogleMap/F/Model/IPlace"
import { IJob } from "../../../../../Model/IJob"

interface IEditJobPlaceProp {
  job: IJob
  reloadJob: ()=>void
  setIsEdit: (isEdit: boolean)=>void
}

export function EditJobPlace({
  job,
  reloadJob,
  setIsEdit
}: IEditJobPlaceProp) {

  const [hasAutoComplete, setHasAutoComplete] = useState<boolean>(false)
  const [error, setError] = useState<string>("")

  const shield = useShield()

  async function savePlace(place: IPlace) {

    if(!place || !place.place_id) {
      setError("Please only select a place from Google recommendations.")
      return
    } else {
      setError("")
    }

    await Post2(shield, "/tip/SavePlace",
      {
        jobId: job.id,
        placeName: place?.name || "",
        placeId: place?.place_id || ""
      }, () => {
        reloadJob()
        setIsEdit(false)
      }
    )
  }

  function onPlaceChanged(place: IPlace) {
    savePlace(place)
  }

  return(<>
  <div>
    <PlaceAutoComplete1 onPlaceChanged={onPlaceChanged}
      ghost="Enter a new place"
      hasAutoComplete={hasAutoComplete} setHasAutoComplete={setHasAutoComplete}/>
    <ErrorLine text={error}/>
  </div>
  </>)
}