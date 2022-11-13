import { useState } from "react";
import { GoogleMapScript1 } from "../../../../../../libs/Core/Core2/GoogleMap/fGoogleMap";
import { IJob } from "../../../Model/IJob";
import { TipWindow } from "../../TipWindow/TipWindow";
import { Establishment } from "./Establishment/Establishment";
import { TipAttendant } from "./TipAttendant/TipAttendant";

interface IGiveTipsProp {

}
export function GiveTips({

}: IGiveTipsProp) {

  const [scriptLoaded, setScriptLoaded] = useState<boolean>(false)
  
  return(<>
  <TipWindow>
    <GiveTipsCore />
  </TipWindow>
  <GoogleMapScript1 scriptLoaded={scriptLoaded}
    setScriptLoaded={setScriptLoaded}
  />
  </>)
}

interface IGiveTipsCoreProp {

}
function GiveTipsCore({

}: IGiveTipsCoreProp) {
  
  const [turn, setTurn] = useState<string>("")
  const [jobs, setJobs] = useState<Array<IJob>>([])
  const [job, setJob] = useState<IJob>()
  const [placeId, setPlaceId] = useState<string>("")
  const [placeName, setPlaceName] = useState<string>("")

  function goTipAttendant(job: IJob) {
    setJob(job)
    setTurn(GiveTipsTurn.TipAttendant)
  }

  function goEstablishment() {
    setTurn(GiveTipsTurn.Establishment)
  }

  function updatePlace(placeId: string, placeName: string) {
    setPlaceId(placeId)
    setPlaceName(placeName)
  }

  switch(turn) {
    case GiveTipsTurn.TipAttendant: return(
      <TipAttendant job={job} goEstablishment={goEstablishment}/>
    )
    default: return(
      <Establishment 
        jobs={jobs}
        setJobs={setJobs}
        goTipAttendant={goTipAttendant}
        updatePlace={updatePlace}
        placeId={placeId}
        placeName={placeName}
      />
    )
  }
}

const GiveTipsTurn = {
  Establishment: "Establishment",
  TipAttendant: "TipAttendant"
}