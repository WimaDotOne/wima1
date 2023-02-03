import { useEffect, useState } from "react"
import { Get2, useShield } from "../../../../../../../libs/Core/Core1/fCore1"
import { Div } from "../../../../../../../libs/Core/Core2/fCore2"
import { IPlace } from "../../../../../../../libs/Core/Core2/GoogleMap/F/Model/IPlace"
import { FourItemNavBar } from "../../../../../Lib/FourItemNavBar/FourItemNavBar"
import { HeroHeader } from "../../../../../Lib/HeroHeader/HeroHeader"
import { ThankyColor } from "../../../CSS/ThankyColor"
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

  async function loadRecentPlaces() {
    Get2(shield, "/thanky/LoadRecentPlaces", (res)=>{
        setPlaces(res.places)
    })
  }

  useEffect(()=>{
    
  }, [])

  return(<>
  <link href="https://fonts.googleapis.com/css2?family=Reenie+Beanie&display=swap" 
      rel="stylesheet" />
  <div className={cl.giveTips} 
    style={{backgroundImage: "url(/apps/Thanky/Background/yellowPage.jpg)"}}>
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
  </div>
  </>)
}