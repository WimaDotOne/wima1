import { useRouter } from "next/router"
import { useState } from "react"
import { Get2, useShield } from "../../../../../../../libs/Core/Core1/fCore1"
import { BigButton, BigRoundButton, Div, LimitWidth, PlaceAutoComplete1 } from "../../../../../../../libs/Core/Core2/fCore2"
import { GoogleMapScript1 } from "../../../../../../../libs/Core/Core2/GoogleMap/fGoogleMap"
import { FourItemNavBar } from "../../../../../Lib/FourItemNavBar/FourItemNavBar"
import { HeroHeader } from "../../../../../Lib/HeroHeader/HeroHeader"
import { TwoStickyNotes } from "../../../../../Lib/TwoStickyNotes/TwoStickyNotes"
import { ThankyPlaceSearch } from "../../H/ThankyPlaceSearch/ThankyPlaceSearch"
import cl from "./Landing.module.scss"

interface ILandingProp {

}

export function Landing({

}: ILandingProp) {


  const [scriptLoaded, setScriptLoaded] = useState<boolean>(false)
  const [hasAutoComplete, setHasAutoComplete] = useState<boolean>(false)

  const shield = useShield()
  const router = useRouter()

  function onClickAcceptTips() {
    router.push("/apps/Thanky/Login")
  }

  function onClickGiveTips() {
    router.push("/apps/Thanky/GiveTips")
  }

  return(<>
    <GoogleMapScript1 scriptLoaded={scriptLoaded}
      setScriptLoaded={setScriptLoaded}/>
    <div className={cl.landing}>
      <FourItemNavBar navModel={LandingNavModel} />
      <HeroHeader bigWords="Thanky for your tips $"
        smallWords="Accepting and giving tips online"
      />
      <div className={cl.placeSearchRow}>
        <div className={cl.placeSearch}>
          <ThankyPlaceSearch cuter 
            ghost="Type then select a place"
            hasAutoComplete={hasAutoComplete}
            setHasAutoComplete={setHasAutoComplete}
          />
        </div>
      </div>
      <Div height={50} />
    </div>

    <LimitWidth maxWidth={800}>
      <TwoStickyNotes title1="To employees:"
        text1="Your customers most likely don't know you accept tips @ Thanky unless you tell them."
        title2="To customers:"
        text2="If you cannot find your favorite barista @ Thanky tip them in person."
      />
    </LimitWidth>
    <LimitWidth>
      <div className={cl.giveAcceptTips}>
        <BigButton bigger text="Give tips" onClick={onClickGiveTips} color=""/>
        <BigButton bigger text="Accept tips" onClick={onClickAcceptTips} color="salmon"/>
      </div>
    </LimitWidth>
    <Div height={50} />
    <LimitWidth beige>
      <Div height={50} />
      <div className={cl.bigTitle}>space-filler tips</div>
      <Div height={50} />
      <div className={cl.smallTitle}>Steve Commencement Speech</div>
      <Div height={40} />
      <div className={cl.words}>
        Stay hungry. Stay foolish.
      </div>
      <Div height={50} />
      <div className={cl.imageSpace}>
        <div className={cl.image} style={{backgroundImage: 'url(/apps/Thanky/Background/hopefulEarth.jpg)'}} />
      </div>

      <Div height={100} />
      <div className={cl.smallTitle}>Apple Commercial</div>
      <Div height={20} />
      <div className={cl.words}>
      Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo... While some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.
      </div>
      <Div height={50} />
      <div className={cl.imageSpace}>
        <div className={cl.image} style={{backgroundImage: 'url(/apps/Thanky/Background/helpEachOther.jpg)'}} />
      </div>

      <Div height={100} />
      <div className={cl.smallTitle}>Steve 1995 Interview</div>
      <Div height={20} />
      <div className={cl.words}>
        I'm convinced that about half of what separates the successful entrepreneurs from the nonsuccessful ones is pure perseverance.
      </div>
      <Div height={50} />
      <div className={cl.imageSpace}>
        <div className={cl.image} style={{backgroundImage: 'url(/apps/Thanky/Background/gratitudeForTrees.jpg)'}} />
      </div>
      <Div height={100} />
    </LimitWidth>
    <LimitWidth>
      <Div height={50} />
      <div className={cl.iamWaitor}>
        I am a waitress barista cashier sales clerk bar tender receptionist hotel housekeeper …
      </div>
      <Div height={50} />
      <div className={cl.lastButtonSpace}>
        <BigRoundButton text="Start a Thanky account"
          textColor="#333"
          buttonColor="#ffdd04"
          onClick={onClickAcceptTips}/>
      </div>
      <Div height={200} />
    </LimitWidth>
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