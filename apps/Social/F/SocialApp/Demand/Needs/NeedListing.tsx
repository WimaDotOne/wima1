import { useState } from "react"
import { ISocialNeed } from "../../../Model/ISocialNeed"
import { ViewProfile2 } from "../../Supply/ViewProfile2/ViewProfile2"
import { NeedDetail } from "./NeedDetail/NeedDetail"
import { NeedList } from "./NeedList/NeedList"

export function NeedListing() {

  const [turn, setTurn] = useState<string>(NeedsListingTurn.NeedsList)
  const [selectedNeed, setSelectedNeed] = useState<ISocialNeed>()

  function goDetail() {
    setTurn(NeedsListingTurn.NeedsDetail)
  }

  function goHome() {
    setTurn(NeedsListingTurn.NeedsList)
  }

  function goProfile() {
    setTurn(NeedsListingTurn.NeedsViewProfile)
  }
  
  switch (turn) {
    case NeedsListingTurn.NeedsViewProfile: return (
      <ViewProfile2 onLeave={goDetail} socialAccountId={(selectedNeed?.socialAccountId || "").toString()} />
    )
    case NeedsListingTurn.NeedsDetail: return(
      <NeedDetail need={selectedNeed} 
        goHome={goHome} 
        goProfile={goProfile}
      />
    )
    default: return(
      <NeedList goDetail={goDetail} setSelectedNeed={setSelectedNeed}/>
    )
  }
}

const NeedsListingTurn = {
  NeedsList: "NeedsList",
  NeedsDetail: "NeedsDetail",
  NeedsViewProfile: "NeedsViewProfile"
}