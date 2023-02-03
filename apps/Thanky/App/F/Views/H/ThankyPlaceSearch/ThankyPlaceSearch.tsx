import { useRouter } from "next/router"
import { PlaceAutoComplete1 } from "../../../../../../../libs/Core/Core2/fCore2"
import { IPlace } from "../../../../../../../libs/Core/Core2/GoogleMap/F/Model/IPlace"
import cl from "./ThankyPlaceSearch.module.scss"

interface IThankyPlaceSearchProp {
  cute?: boolean
  cuter?: boolean
  ghost?: string
  hasAutoComplete: boolean
  setHasAutoComplete: (has: boolean)=>void
}

export function ThankyPlaceSearch({
  cute,
  cuter,
  ghost,
  hasAutoComplete,
  setHasAutoComplete
} : IThankyPlaceSearchProp) {

  const router = useRouter()

  function onPlaceChanged(place: IPlace) {
    if(!place || !place.place_id) {
      return
    }
    router.push(`/apps/Thanky/Place?placeId=${place.place_id}&placeName=${encodeURIComponent(place.name)}`)
  }

  return(<>
  <PlaceAutoComplete1
    cute={cute}
    cuter={cuter}
    ghost = { ghost }
    onPlaceChanged={onPlaceChanged}
            hasAutoComplete={hasAutoComplete}
            setHasAutoComplete={setHasAutoComplete}
          />
  </>)
}