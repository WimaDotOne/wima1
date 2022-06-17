import { useEffect, useState } from "react"
import { Get2, useShield } from "../../../../../../../libs/Core/Core1/fCore1"
import { AppleIconButtons, AppleWindowBottomBarFill, AppleWindowPlainBottomBarDiv } from "../../../../../../../libs/Core/Core2/fCore2"
import { AppleNewsHeader1 } from "../../../../../../../libs/Pop/Pop2/fPop2"
import { HeadLine } from "../../../../../../../libs/Pop/Pop3/fPop3"
import { SocialColor } from "../../../../CSS/SocialColor"
import { ISocialService } from "../../../../Model/ISocialService"
import { ServiceCard } from "../../../H/ServiceCard/ServiceCard"
import { EditServicePopUp } from "./EditServicePopUp/EditServicePopUp"
import { NewServicePopUp } from "./NewServicePopUp/NewServicePopUp"
import cl from "./ServicesModule.module.scss"

interface IServicesModuleProp {
  goHome: ()=>void
}

export function ServicesModule({
  goHome
}: IServicesModuleProp) {

  const [showNewServicePopUp, setShowNewServicePopUp] = useState<boolean>(false)
  const [showEditServicePopUp, setShowEditServicePopUp] = useState<boolean>(false)
  const [services, setServices] = useState<Array<ISocialService>>([])
  const [selectedService, setSelectedService] = useState<ISocialService>()
  const [isGoods, setIsGoods] = useState<boolean>(false)
  const [loaded, setLoaded] = useState(false)
  const shield = useShield()

  const nonGoodsServices = services.filter((service: ISocialService)=> !service.isGoods)
  const goods = services.filter((service: ISocialService)=> service.isGoods)

  function openNewService() {
    setShowNewServicePopUp(true)
    setIsGoods(false)
  }

  function openNewItem() {
    setShowNewServicePopUp(true)
    setIsGoods(true)
  }




  function reload() {
    setLoaded(false)
  }

  async function loadServices() {
    if(loaded) return
    await Get2(shield, "/social/LoadServices", 
      (res)=>{
        setLoaded(true)
        setServices(res.services)
      }
    )
  }

  useEffect(()=>{
    loadServices()
  })

  return(<>
  <div className={cl.padding}>
    <HeadLine text="Services"
      buttonText="New Service"
      buttonOnClick={openNewService}
      color={SocialColor.themeBlue}
    />
    <div className={cl.services}>
    {
      nonGoodsServices.map((service, i)=>
        <ServiceCard name={service.name}
          shortDescription={service.shortDescription}
          price={service.price}
          onClick={()=>{
            setSelectedService(service)
            setShowEditServicePopUp(true)
          }}
        />
      )
    }
    </div>
    <HeadLine text="Goods"  
      buttonText="New Item"
      buttonOnClick={openNewItem}
      h={3}
      color={SocialColor.themeBlue}
    />
    <div className={cl.services}>
    {
      goods.map((service, i)=>
        <ServiceCard key={service._id.toString()} name={service.name}
          shortDescription={service.shortDescription}
          price={service.price}
          onClick={()=>{
            setSelectedService(service)
            setShowEditServicePopUp(true)
          }}
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

  <NewServicePopUp show={showNewServicePopUp} 
    setShow={setShowNewServicePopUp}
    isGoods={isGoods}
    refresh={reload}
  />
  {
    selectedService ?
    <EditServicePopUp show={showEditServicePopUp}
      setShow={setShowEditServicePopUp}
      service0={selectedService}
      refresh={reload}
    />: null
  }

  </>)
}