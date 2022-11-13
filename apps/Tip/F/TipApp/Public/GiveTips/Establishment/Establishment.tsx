import { useEffect, useState } from "react"
import { Get2, useShield } from "../../../../../../../libs/Core/Core1/fCore1"
import { PlaceAutoComplete1 } from "../../../../../../../libs/Core/Core2/fCore2"
import { Div, LimitWidth } from "../../../../../../../libs/Core/Core2/fCore2"
import { IPlace } from "../../../../../../../libs/Core/Core2/GoogleMap/F/Model/IPlace"
import { IJob } from "../../../../Model/IJob"
import { AttendantPhoto } from "./AttendantPhoto/AttendantPhoto"
import cl from "./Establishment.module.scss"

interface IEstablishmentProp {
  goTipAttendant: (job: IJob)=>void
  updatePlace: (placeId:string, placeName:string)=>void
  placeId: string
  placeName: string
  jobs: Array<IJob>
  setJobs: (jobs: Array<IJob>)=>void
}

export function Establishment({
  goTipAttendant,
  updatePlace,
  placeId,
  placeName,
  jobs,
  setJobs
}: IEstablishmentProp) {
  
  const [hasAutoComplete, setHasAutoComplete] = useState<boolean>(false)

  const shield = useShield()

  function onPlaceChanged(place: IPlace) {
    if(!place || !place.place_id) {
      setJobs([])
      updatePlace("","")
      return
    }
    loadEstablishmentJobs(place.place_id)
    updatePlace(place.place_id, place.name)
  }

  async function loadEstablishmentJobs(placeId: string) {
    await Get2(shield, `/tip/LoadEstablishmentJobs?placeId=${placeId}`,
    (res)=>{
      setJobs(res.jobs)
    })
  }

  function onClickPhoto(job: IJob) {
    goTipAttendant(job)
  }

  if(!placeId) {
    placeName = ""
  }
  
  return(<>
  <LimitWidth beige>
    <Div height={20}/>
    <div className={cl.search}>Search for an Establishment</div>
    <PlaceAutoComplete1 
      cute
      onPlaceChanged={onPlaceChanged}
      hasAutoComplete={hasAutoComplete}
      setHasAutoComplete={setHasAutoComplete}
    />
    <Div height={30}/>
  </LimitWidth>
  <div className={cl.placeName}>{placeName}</div>
  <div className={cl.attendants}>
  {
    jobs.map((job, i)=>
    <AttendantPhoto key={i} imageUrl={job.selfPhoto?.urlSmall}
      firstName={job.firstName}
      onClick={()=> {onClickPhoto(job)}}
    />
    )
  }
  </div>
  {
    placeId && jobs.length < 1 ?
    <div className={cl.noEmployee}>
      No employees at this place have been using Tip yet
    </div>:null
  }
  </>)
}