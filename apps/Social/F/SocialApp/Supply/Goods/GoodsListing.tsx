import { useState } from "react";
import { GoodsDetail } from "./GoodsDetail/GoodsDetail";
import { GoodsList } from "./GoodsList/GoodsList";

export function GoodsListing() {

  const [turn, setTurn] = useState<string>(GoodsListingTurn.GoodsList)
  
  switch (turn) {
    case GoodsListingTurn.GoodsDetail: return(
      <GoodsDetail />
    )
    default: return(
      <GoodsList />
    )
  }
}

const GoodsListingTurn = {
  GoodsList: "GoodsList",
  GoodsDetail: "GoodsDetail"
}