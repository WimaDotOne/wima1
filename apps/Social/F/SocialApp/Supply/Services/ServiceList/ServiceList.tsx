import { useEffect, useState } from "react"
import { Get2, useShield } from "../../../../../../../libs/Core/Core1/fCore1"
import { AppleWindowBottomBarFill, Div, LimitWidth } from "../../../../../../../libs/Core/Core2/fCore2"
import { Pagination, PaginationType } from "../../../../../../../libs/Pop/Pop1/fPop1"
import { AppleNewsHeader1 } from "../../../../../../../libs/Pop/Pop2/fPop2"
import { AppleWindowBottomBar } from "../../../../../../H/AppleWindowBottomBar"
import { useWimaUser } from "../../../../../../Wima/fWima"
import { SocialColor } from "../../../../CSS/SocialColor"
import { ISocialService } from "../../../../Model/ISocialService"
import { ServiceCard2 } from "../../../H/ServiceCard/ServiceCard2"
import { SocialWindow } from "../../../SocialWindow/SocialWindow"
import cl from "./ServiceList.module.scss"

interface IServiceListProp {
  isGoods?: boolean
  goDetail: ()=>void
  setSelectedService: (service: ISocialService)=>void
}

export function ServiceList({
  isGoods,
  goDetail,
  setSelectedService
}: IServiceListProp) {

  const [pages, setPages] = useState<Array<Array<ISocialService>>>([])
  const [page, setPage] = useState<number | string>(1)
  const [loaded, setLoaded] = useState<boolean>(false)
  const shield = useShield()
  const user = useWimaUser()

  const servicePage = pages[+page-1] || []
  const totalPage = pages.length || 1

  async function loadUnivService() {
    if(loaded) return
    if(!user?.isLoggedInUniv) return

    const url = isGoods ? "/social/LoadUnivGoods" : "/social/LoadUnivServices"
    await Get2(shield, url, (res)=>{
      setLoaded(true)
      setPages(res.pages || [])
    })
  }

  useEffect(()=>{
    loadUnivService()
  })

  const title = isGoods ? "Goods" : "Services"
  const noServiceMessage = isGoods ? "No goods at the moment" : "No services at the moment"
  return(<>
  <SocialWindow>
    <LimitWidth maxWidth={1200}>
    {
      page === 1 ? 
      <AppleNewsHeader1 text1={title} />:
      <AppleNewsHeader1 text1={title} h={3} />
    }
    </LimitWidth>

    <LimitWidth maxWidth={1200}>
      <Div height={10} />
      {
        !pages || !servicePage || pages.length < 1 || servicePage.length < 1 ?
        <div className={cl.noService}>
          {noServiceMessage}
        </div>:
        <div className={cl.list}>
        {
          servicePage.map((service, i)=>
          <ServiceCard2 name={service.name} key={i}
            shortDescription={service.shortDescription}
            price={service.price}
            onClick={()=>{
              setSelectedService(service)
              goDetail()
            }}
          />
          )
        }
        </div>
      }
      <Div height={10} />
    </LimitWidth>
  </SocialWindow>

  <AppleWindowBottomBarFill />
  <AppleWindowBottomBar>
    <div className={cl.bottomBar}>
      <div></div>
      <Pagination page={page} setPage={setPage} 
        type={PaginationType.Movic} 
        totalPage={totalPage}
        textColor="#333"
        arrowColor={SocialColor.themeBlue}
      />
    </div>
  </AppleWindowBottomBar>
  </>)
}