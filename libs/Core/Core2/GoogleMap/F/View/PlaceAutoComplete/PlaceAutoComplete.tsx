import { useEffect, useRef, useState } from "react"
import { useWimaEnv } from "../../../../../../../apps/Wima/fWima"
import { Loader } from "@googlemaps/js-api-loader"
import cl from "./PlaceAutoComplete.module.scss"
import { IPlace } from "../../Model/IPlace"

interface IPlaceAutoComplete {
  ghost?: string,
  setPlace: (place: IPlace) => void
}
export function PlaceAutoComplete({
  ghost,
  setPlace
}: IPlaceAutoComplete) {

  const inputRef = useRef<HTMLInputElement>(null)
  const wimaEnv = useWimaEnv()

  const googlePlacesApiId = wimaEnv?.googlePlacesApiId

  const placeholder = ghost || "Enter a place"

  function onPlaceChanged(autocomplete: any) {
    console.log("haha place changed")
    const place = autocomplete.getPlace()
    console.log(place)
    setPlace({
      name: place.name,
      place_id: place.place_id
    })
  }

  useEffect(()=>{
    console.log("use Effect")
    if(!googlePlacesApiId) return
    if(!window) return
    if(!inputRef.current) return
    
    const loader = new Loader({
      apiKey: googlePlacesApiId,
      libraries: ["places"]
    })

    loader.load().then((google) => {
      const autocomplete = new google.maps.places.Autocomplete(
        inputRef.current,
        {
          types: ["establishment"],
          componentRestrictions: { "country": ["US"] },
          fields: ["place_id", "name"]
        }
      )

      autocomplete.addListener("place_changed", ()=>{
        onPlaceChanged(autocomplete)
      })
    }).catch(e =>{
      window.alert(e.message)
    })
  })
 
  if(!googlePlacesApiId) return null

  return(<>
    <div className={cl.inputWrap}>
      <input className={cl.input} ref={inputRef} placeholder={placeholder} />
    </div>
  </>)
}