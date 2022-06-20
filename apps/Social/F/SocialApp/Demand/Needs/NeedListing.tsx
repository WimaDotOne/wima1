import { useState } from "react";
import { NeedDetail } from "./NeedDetail/NeedDetail";
import { NeedList } from "./NeedList/NeedList";

export function NeedListing() {

  const [turn, setTurn] = useState<string>(NeedListingTurn.NeedList)
  
  switch (turn) {
    case NeedListingTurn.NeedDetail: return(
      <NeedDetail />
    )
    default: return(
      <NeedList />
    )
  }
}

const NeedListingTurn = {
  NeedList: "NeedList",
  NeedDetail: "NeedDetail"
}