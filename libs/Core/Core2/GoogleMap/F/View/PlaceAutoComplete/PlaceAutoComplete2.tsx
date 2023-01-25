import { useEffect, useRef, useState } from "react"
import cl from "./PlaceAutoComplete2.module.scss"
import { IPlace } from "../../Model/IPlace"

interface IPlaceAutoComplete2 {
  prompt?: string
  onLeaveBlank?: ()=>void
  placeName?: string
  ghost?: string
  onPlaceChanged: (place: IPlace) => void
}

export function PlaceAutoComplete2({
  prompt,
  onLeaveBlank,
  placeName,
  ghost,
  onPlaceChanged,
}: IPlaceAutoComplete2) {

  const [hasAutoComplete, setHasAutoComplete] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const placeholder = ghost || "Enter a place"

  function onPlaceChanged2(autocomplete: any) {
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
  <div>
    <div className={cl.promptRow}>
      <div className={cl.prompt}>{prompt}</div>
      {
        onLeaveBlank ?
        <div className={cl.blankBtn} onClick={onLeaveBlank}>
          leave blank
        </div>:null
      }
    </div>
    <div className={cl.placeName}>@ {placeName}</div>
    <input className={cl.input} 
      ref={inputRef} 
      placeholder={placeholder} 
    />
  </div>
  </>)
}