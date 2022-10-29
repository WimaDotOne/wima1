import { Loader } from "@googlemaps/js-api-loader"
import { useEffect } from "react"
import { useWimaEnv } from "../../../../../../../apps/Wima/fWima"

interface IGoogleMapScript1 {
  scriptLoaded: boolean,
  setScriptLoaded: (scriptLoaded: boolean) => void
}

export function GoogleMapScript1({
  scriptLoaded,
  setScriptLoaded
}: IGoogleMapScript1) {

  const wimaEnv = useWimaEnv()

  const googlePlacesApiId = wimaEnv?.googlePlacesApiId

  useEffect(()=>{
    
    if(scriptLoaded) return
    if(!googlePlacesApiId) return
    if(!window) return
  
    const loader = new Loader({
      apiKey: googlePlacesApiId,
      libraries: ["places"]
    })

    loader.load().then((google) => {
      window.googlePlace = google
      setScriptLoaded(true)
    }).catch(e =>{
      window.alert(e.message)
    })
  })

  return(<>
  <div id="loadgoogleplacescript"></div>
  </>)
}