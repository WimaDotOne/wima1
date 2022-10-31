import { useState } from "react";
import { GoogleMapScript1 } from "../../../../../../libs/Core/Core2/GoogleMap/fGoogleMap";
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
  switch(turn) {
    case GiveTipsTurn.TipAttendant: return(
      <TipAttendant />
    )
    default: return(
      <Establishment />
    )
  }
}

const GiveTipsTurn = {
  Establishment: "Establishment",
  TipAttendant: "TipAttendant"
}