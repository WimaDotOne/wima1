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
        text1="Help Thanky help you. Let your customers know you accept tips @ Thanky"
        title2="To customers:"
        text2="Cannot find your favorite baristas here? Well, keep tipping them in person."
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
      <div className={cl.bigTitle}>space-filler life tips</div>
      <Div height={50} />
      <div className={cl.smallTitle}>Steve Jobs commencement speech</div>
      <Div height={40} />
      <div className={cl.words}>
        Stay hungry. Stay foolish.
      </div>
      <Div height={50} />
      <div className={cl.imageSpace}>
        <div className={cl.image} style={{backgroundImage: 'url(/apps/Thanky/Background/hopefulEarth.jpg)'}} />
      </div>

      <Div height={100} />
      <div className={cl.smallTitle}>Identify your fear</div>
      <Div height={20} />
      <div className={cl.words}>
        I would be truly terrified if I have to ask people for recommendation letters.
      </div>
      <Div height={50} />
      <div className={cl.imageSpace}>
        <div className={cl.image} style={{backgroundImage: 'url(/apps/Thanky/Background/helpEachOther.jpg)'}} />
      </div>

      <Div height={100} />
      <div className={cl.smallTitle}>Forgive</div>
      <Div height={20} />
      <div className={cl.words}>
        If you loved someone, you always have a net gain. If you resented someone, you always carry the burden.
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