import { useState } from "react"
import { GENERAL_INPUT_MAX } from "../../../../../../../bConfig"
import { Post2, PhotoInput, useShield } from "../../../../../../../libs/Core/Core1/fCore1"
import { TextField2 } from "../../../../../../../libs/Core/Core1/Fields/TextField/TextField2"
import { Div, PlaceAutoComplete2 } from "../../../../../../../libs/Core/Core2/fCore2"
import { IPlace } from "../../../../../../../libs/Core/Core2/GoogleMap/F/Model/IPlace"
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

  function onPlaceChanged(place: IPlace) {
    if(!place || !place.place_id) {
      return
    }
    setPlaceId(place.place_id)
    setPlaceName(place.name)
  }

  function setFirstName(firstName: string) {
    setJob({...job, firstName})
  }

  function setJobName(jobName: string) {
    setJob({...job, jobName})
  }

  function setJobPhoto(urlSmall: string) {
    setJob({...job, photo: {urlSmall}})
  }

  function setPlaceId(placeId: string) {
    setJob({...job, placeId})
  }

  function setPlaceName(placeName: string) {
    setJob({...job, placeName})
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

  function onPhotoSuccess(res: any) {
    setJobPhoto(res.photoUrl)
    reload()
  }

  function leaveLocationBlank() {
    setPlaceId("")
    setPlaceName("")
  }

  return(<>
  <PopUp pop={pop} setPop={setPop}
    onSave={saveJob}
    title="Edit job"
    saveTextColor="#222"
    saveButtonColor="#FD0"
  >
    <div className={cl.profilePhotoSpace}>
      <PhotoInput 
        photoUrl={job?.photo?.urlSmall}
        route="/thanky/UploadAttendantPhoto"
        formTextFields={[{key: "jobNum", value: num+""}]}
        onSuccess={onPhotoSuccess}
      />
    </div>
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
    <Div height={30} />
    <PlaceAutoComplete2
      prompt="Job location"
      onLeaveBlank={leaveLocationBlank}
      placeName={job?.placeName}
      ghost="Enter location & select an establishment"
      onPlaceChanged={onPlaceChanged}
    />
  </PopUp>
  </>)
}