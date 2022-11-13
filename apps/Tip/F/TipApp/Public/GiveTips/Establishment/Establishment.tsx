import { useState } from "react"
import { Get2, useShield } from "../../../../../../../libs/Core/Core1/fCore1"
import { PlaceAutoComplete1 } from "../../../../../../../libs/Core/Core2/fCore2"
import { Div, LimitWidth } from "../../../../../../../libs/Core/Core2/fCore2"
import { IPlace } from "../../../../../../../libs/Core/Core2/GoogleMap/F/Model/IPlace"
import { IJob } from "../../../../Model/IJob"
import { AttendantPhoto } from "./AttendantPhoto/AttendantPhoto"
import cl from "./Establishment.module.scss"

interface IEstablishmentProp {

}

export function Establishment({

}: IEstablishmentProp) {
  
  const [hasAutoComplete, setHasAutoComplete] = useState<boolean>(false)
  const [jobs, setJobs] = useState<Array<IJob>>([])
  const shield = useShield()

  function onPlaceChanged(place: IPlace) {
    loadEstablishmentJobs(place.place_id)
  }

  async function loadEstablishmentJobs(placeId: string) {
    console.log(placeId)
    if(!placeId) return
    await Get2(shield, `/tip/LoadEstablishmentJobs?placeId=${placeId}`,
    (res)=>{
      setJobs(res.jobs)
      console.log(res.jobs)
    })
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
  <div className={cl.attendants}>
  {
    jobs.map((job, i)=>
    <AttendantPhoto key={i} imageUrl={job.selfPhoto?.urlSmall}
      firstName={job.firstName}
    />
    )
  }
  </div>
  </>)
}