import { useState } from "react";
import { ServiceDetail } from "./ServiceDetail/ServiceDetail";
import { ServiceList } from "./ServiceList/ServiceList";

export function ServiceListing() {

  const [turn, setTurn] = useState<string>(ServiceListingTurn.ServiceList)
  
  switch (turn) {
    case ServiceListingTurn.ServiceDetail: return(
      <ServiceDetail />
    )
    default: return(
      <ServiceList />
    )
  }
}

const ServiceListingTurn = {
  ServiceList: "ServiceList",
  ServiceDetail: "ServiceDetail"
}