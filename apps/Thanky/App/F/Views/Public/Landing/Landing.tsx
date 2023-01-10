import { useRouter } from "next/router"
import { useState } from "react"
import { Get2, useShield } from "../../../../../../../libs/Core/Core1/fCore1"
import { BigButton, Div, LimitWidth, PlaceAutoComplete1 } from "../../../../../../../libs/Core/Core2/fCore2"
import { IPlace } from "../../../../../../../libs/Core/Core2/GoogleMap/F/Model/IPlace"
import { GoogleMapScript1 } from "../../../../../../../libs/Core/Core2/GoogleMap/fGoogleMap"
import { FourItemNavBar } from "../../../../../Lib/FourItemNavBar/FourItemNavBar"
import { HeroHeader } from "../../../../../Lib/HeroHeader/HeroHeader"
import { TwoStickyNotes } from "../../../../../Lib/TwoStickyNotes/TwoStickyNotes"
import cl from "./Landing.module.scss"

interface ILandingProp {

}

export function Landing({

}: ILandingProp) {


  const [scriptLoaded, setScriptLoaded] = useState<boolean>(false)
  const [hasAutoComplete, setHasAutoComplete] = useState<boolean>(false)

  const shield = useShield()
  const router = useRouter()

  function onPlaceChanged(place: IPlace) {
    if(!place || !place.place_id) {
      return
    }
    loadEstablishmentJobs(place.place_id)
  }

  async function loadEstablishmentJobs(placeId: string) {
    await Get2(shield, `/tip/LoadEstablishmentJobs?placeId=${placeId}`,
    (res)=>{
      console.log(res.jobs)
    })
  }

  function onClickAcceptTips() {
    router.push("/apps/Tip/AppTurn/Jobs")
  }

  function onClickGiveTips() {
    router.push("/apps/Tip/AppTurn/GiveTips")
  }

  return(<>
    <GoogleMapScript1 scriptLoaded={scriptLoaded}
    setScriptLoaded={setScriptLoaded}/>
    <div className={cl.landing}>
      <FourItemNavBar navModel={LandingNavModel} />
      <HeroHeader bigWords="A tip is worth a thousand thankies"
        smallWords="Tip online when there is no tip jar."
      />
      <div className={cl.placeSearchRow}>
        <div className={cl.placeSearch}>
          <PlaceAutoComplete1
            cuter
            ghost="Enter / select an establishment"
            onPlaceChanged={onPlaceChanged}
            hasAutoComplete={hasAutoComplete}
            setHasAutoComplete={setHasAutoComplete}
          />
        </div>
      </div>
      <Div height={50} />
    </div>

    <LimitWidth maxWidth={800}>
      <TwoStickyNotes title1="To employees:"
        text1="Find your establisment, add a photo, tell your customers."
        title2="To customers:"
        text2="Didn't see a tip jar? Ask your servers if they accept tips online @ Thanky."
      />
    </LimitWidth>
    <LimitWidth>
      <div className={cl.giveAcceptTips}>
        <BigButton bigger text="Give tips" onClick={onClickGiveTips} color=""/>
        <BigButton bigger text="Accept tips" onClick={onClickAcceptTips} color="salmon"/>
      </div>
    </LimitWidth>
    <Div height={100} />
    { 
      //below could add some example picture and text once dashboard is built,
      //again just like buy me a coffee landing
    }
  </>)
}

export const LandingNavModel = {
  homeIconUrl: '/apps/WimaHome/AppIcons/thanky.png',
  text1: "FAQ",
  text2: "Give tips",
  text4: "Login",
  homeRoute: "/apps/Thanky",
  route1: "/apps/Thanky/FAQ",
  route2: "/apps/Thanky/GiveTips",
  route4: "/apps/Thanky/Login"
}