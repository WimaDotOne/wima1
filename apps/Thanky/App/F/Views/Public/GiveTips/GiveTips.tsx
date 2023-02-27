import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useReducer, useState } from "react"
import { Get2, useShield } from "../../../../../../../libs/Core/Core1/fCore1"
import { Div } from "../../../../../../../libs/Core/Core2/fCore2"
import { IPlace } from "../../../../../../../libs/Core/Core2/GoogleMap/F/Model/IPlace"
import { FourItemNavBar } from "../../../../../Lib/FourItemNavBar/FourItemNavBar"
import { ThankyPlaceSearch } from "../../H/ThankyPlaceSearch/ThankyPlaceSearch"
import { LandingNavModel } from "../Landing/Landing"
import cl from "./GiveTips.module.scss"

interface IGiveTipsProp {

}

export function GiveTips({

}: IGiveTipsProp) {

  const [places, setPlaces] = useState<Array<IPlace>>([])
  const [hasAutoComplete, setHasAutoComplete] = useState<boolean>(false)
  const shield = useShield()
  const router = useRouter()

  async function loadRecentPlaces() {
    Get2(shield, "/thanky/LoadRecentPlaces", (res)=>{

        setPlaces(res.places)
    })
  }

  function goPlace(place: IPlace) {
    if(!place || !place.place_id) return
    router.push(`/apps/Thanky/Place?placeId=${place.place_id}&placeName=${encodeURIComponent(place.name)}`)
  }

  useEffect(()=>{
    loadRecentPlaces()
  }, [])

  let placeListWords = "Current there is no business with active attendants yet."

  if(places && places.length > 0) {
    placeListWords = "List of newly joined places"
  }

  return(<>
  <link href="https://fonts.googleapis.com/css2?family=Reenie+Beanie&display=swap" 
      rel="stylesheet" />
  <div className={cl.giveTips} >
    <FourItemNavBar navModel={LandingNavModel} selected2 />
    <div className={cl.searchPlaceTitle}>
      Search for business locations
    </div>
    <div className={cl.placeSearchRow}>
      <div className={cl.placeSearch}>
        <ThankyPlaceSearch cute
          ghost="Type then select a place"
          hasAutoComplete={hasAutoComplete}
          setHasAutoComplete={setHasAutoComplete}
        />
      </div>
    </div>
    <Div height={30} />
    <div className={cl.placeListWords}>{placeListWords}</div>
    <div className={cl.placeListSpace}>
      <div className={cl.placeList}
        style={{backgroundImage: "url(/apps/Thanky/Background/yellowPage.jpg)"}}>
        <div className={cl.placeListInner}>
        {
          places.map((place, i)=>
          <span key={i} className={cl.placeLink}
            onClick={()=>{goPlace(place)}}>
            {place.name}
          </span>
          )
        }
        </div>
      </div>
    </div>
    <Div height={100} />
  </div>
  </>)
}