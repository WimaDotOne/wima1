import { useEffect, useState } from "react"
import { Get2, useShield } from "../../../../../../../libs/Core/Core1/fCore1"
import { AppleIconButtons, AppleWindowBottomBarFill, AppleWindowPlainBottomBarDiv } from "../../../../../../../libs/Core/Core2/fCore2"
import { HeadLine } from "../../../../../../../libs/Pop/Pop3/fPop3"
import { SocialColor } from "../../../../CSS/SocialColor"
import { ISocialNeed } from "../../../../Model/ISocialNeed"
import { NeedCard } from "../../../H/NeedCard/NeedCard"
import { EditNeedPopUp } from "./EditNeedPopUp/EditNeedPopUp"
import { NewNeedPopUp } from "./NewNeedPopUp/NewNeedPopUp"
import cl from "./NeedsModule.module.scss"

interface INeedsModuleProp {
  goHome: ()=>void
}

export function NeedsModule({
  goHome
}: INeedsModuleProp) {

  const [showNewNeedPopUp, setShowNewNeedPopUp] = useState<boolean>(false)
  const [showEditNeedPopUp, setShowEditNeedPopUp] = useState<boolean>(false)
  const [needs, setNeeds] = useState<Array<ISocialNeed>>([])
  const [selectedNeed, setSelectedNeed] = useState<ISocialNeed>()
  const [loaded, setLoaded] = useState(false)
  const shield = useShield()

  function openNewNeed() {
    setShowNewNeedPopUp(true)
    setShowEditNeedPopUp(false)
  }

  function openEditNeed(need: ISocialNeed) {
    setSelectedNeed(need)
    setShowEditNeedPopUp(true)
    setShowNewNeedPopUp(false)
  }

  function reload() {
    setLoaded(false)
  }

  async function loadNeeds() {
    if(loaded) return
    await Get2(shield, "/social/LoadNeeds", 
      (res)=>{
        setLoaded(true)
        setNeeds(res.needs)
        console.log(res.needs)
      }
    )
  }

  useEffect(()=>{
    loadNeeds()
  })

  return(<>
  <div className={cl.padding}>
    <HeadLine text="Needs"
      buttonText="New Need"
      buttonOnClick={openNewNeed}
      color={SocialColor.themeBlue}
    />
    <div className={cl.needs}>
    {
      needs.map((need, i)=>
        <NeedCard name={need.name}
          shortDescription={need.shortDescription}
          willPay={need.willPay}
          onClick={()=>{openEditNeed(need)}}
        />
      )
    }
    </div>
  </div>
  <AppleWindowBottomBarFill />
  <AppleWindowPlainBottomBarDiv>
    <AppleIconButtons color={SocialColor.themeBlue}
      icon1="chevron.left" onClick1={goHome}
    />
  </AppleWindowPlainBottomBarDiv>

  <NewNeedPopUp show={showNewNeedPopUp} 
    setShow={setShowNewNeedPopUp}
    refresh={reload}
  />
  {
    selectedNeed ?
    <EditNeedPopUp show={showEditNeedPopUp}
      setShow={setShowEditNeedPopUp}
      need0={selectedNeed}
      refresh={reload}
    />: null
  }

  </>)
}