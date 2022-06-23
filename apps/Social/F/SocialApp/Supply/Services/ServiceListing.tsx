import { useState } from "react"
import { ISocialService } from "../../../Model/ISocialService"
import { ViewProfile2 } from "../ViewProfile2/ViewProfile2"
import { ServiceDetail } from "./ServiceDetail/ServiceDetail"
import { ServiceList } from "./ServiceList/ServiceList"

interface IServiceListingProp {
  isGoods?: boolean
}
export function ServiceListing({
  isGoods
}: IServiceListingProp) {

  const [turn, setTurn] = useState<string>(ServiceListingTurn.ServiceList)
  const [selectedService, setSelectedService] = useState<ISocialService>()

  function goDetail() {
    setTurn(ServiceListingTurn.ServiceDetail)
  }

  function goHome() {
    setTurn(ServiceListingTurn.ServiceList)
  }

  function goProfile() {
    setTurn(ServiceListingTurn.ServiceViewProfile)
  }
  
  switch (turn) {
    case ServiceListingTurn.ServiceViewProfile: return (
      <ViewProfile2 onLeave={goDetail} socialAccountId={(selectedService?.socialAccountId || "").toString()} />
    )
    case ServiceListingTurn.ServiceDetail: return(
      <ServiceDetail service={selectedService} 
        goHome={goHome} 
        goProfile={goProfile}
      />
    )
    default: return(
      <ServiceList 
        isGoods = {isGoods}
        goDetail={goDetail} 
        setSelectedService={setSelectedService}/>
    )
  }
}

const ServiceListingTurn = {
  ServiceList: "ServiceList",
  ServiceDetail: "ServiceDetail",
  ServiceViewProfile: "ServiceViewProfile"
}