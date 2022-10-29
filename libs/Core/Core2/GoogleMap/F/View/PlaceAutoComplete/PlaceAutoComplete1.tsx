import { useEffect, useRef } from "react"
import cl from "./PlaceAutoComplete1.module.scss"
import { IPlace } from "../../Model/IPlace"

interface IPlaceAutoComplete1 {
  ghost?: string
  onPlaceChanged: (place: IPlace) => void
  hasAutoComplete: boolean
  setHasAutoComplete: (hasAutoComplete: boolean) => void
}
export function PlaceAutoComplete1({
  ghost,
  onPlaceChanged,
  hasAutoComplete,
  setHasAutoComplete
}: IPlaceAutoComplete1) {

  const inputRef = useRef<HTMLInputElement>(null)
  const placeholder = ghost || "Enter a place"

  function onPlaceChanged2(autocomplete: any) {
    console.log("haha place changed")
    const place = autocomplete.getPlace()
    onPlaceChanged(place)
  }

  useEffect(()=>{

    if(!window) return
    if(!window.googlePlace) return
    if(!inputRef.current) return
    if(hasAutoComplete) return
    
    const google = window.googlePlace

    const autocomplete = new google.maps.places.Autocomplete(
      inputRef.current,
      {
        types: ["establishment"],
        componentRestrictions: { "country": ["US"] },
        fields: ["place_id", "name"]
      }
    )

    autocomplete.addListener("place_changed", ()=>{
      onPlaceChanged2(autocomplete)
    })

    setHasAutoComplete(true)
  })
 
  return(<>
    <div className={cl.inputWrap}>
      <input className={cl.input} ref={inputRef} placeholder={placeholder} />
    </div>
  </>)
}