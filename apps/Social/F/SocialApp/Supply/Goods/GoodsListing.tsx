import { useState } from "react"
import { ISocialService } from "../../../Model/ISocialService"
import { ViewProfile2 } from "../ViewProfile2/ViewProfile2"
import { GoodsDetail } from "./GoodsDetail/GoodsDetail"
import { GoodsList } from "./GoodsList/GoodsList"

export function GoodsListing() {

  const [turn, setTurn] = useState<string>(GoodsListingTurn.GoodsList)
  const [selectedGood, setSelectedGood] = useState<ISocialService>()

  function goDetail() {
    setTurn(GoodsListingTurn.GoodsDetail)
  }

  function goHome() {
    setTurn(GoodsListingTurn.GoodsList)
  }

  function goProfile() {
    setTurn(GoodsListingTurn.GoodsViewProfile)
  }
  
  switch (turn) {
    case GoodsListingTurn.GoodsViewProfile: return (
      <ViewProfile2 onLeave={goDetail} socialAccountId={(selectedGood?.socialAccountId || "").toString()} />
    )
    case GoodsListingTurn.GoodsDetail: return(
      <GoodsDetail good={selectedGood} 
        goHome={goHome} 
        goProfile={goProfile}
      />
    )
    default: return(
      <GoodsList goDetail={goDetail} setSelectedGood={setSelectedGood}/>
    )
  }
}

const GoodsListingTurn = {
  GoodsList: "GoodsList",
  GoodsDetail: "GoodsDetail",
  GoodsViewProfile: "GoodsViewProfile"
}