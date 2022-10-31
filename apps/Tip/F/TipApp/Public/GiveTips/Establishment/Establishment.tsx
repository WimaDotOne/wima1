import { useState } from "react"
import { PlaceAutoComplete1 } from "../../../../../../../libs/Core/Core2/fCore2"

interface IEstablishmentProp {

}
export function Establishment({

}: IEstablishmentProp) {
  
  const [hasAutoComplete, setHasAutoComplete] = useState<boolean>(false)

  function onPlaceChanged() {

  }
  
  return(<>
  <div>
    <PlaceAutoComplete1 
      onPlaceChanged={onPlaceChanged}
      hasAutoComplete={hasAutoComplete}
      setHasAutoComplete={setHasAutoComplete}
    />
  </div>
  
  </>)
}