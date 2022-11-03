import { useState } from "react"
import { PlaceAutoComplete1 } from "../../../../../../../libs/Core/Core2/fCore2"
import { Div, LimitWidth } from "../../../../../../../libs/Core/Core2/fCore2"
import cl from "./Establishment.module.scss"

interface IEstablishmentProp {

}
export function Establishment({

}: IEstablishmentProp) {
  
  const [hasAutoComplete, setHasAutoComplete] = useState<boolean>(false)

  function onPlaceChanged() {

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
  List of employees below
  </>)
}