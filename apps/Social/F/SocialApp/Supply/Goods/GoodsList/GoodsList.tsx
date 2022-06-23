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
import cl from "./GoodsList.module.scss"

interface IGoodsListProp {
  goDetail: ()=>void
  setSelectedGood: (good: ISocialService)=>void
}

export function GoodsList({
  goDetail,
  setSelectedGood
}: IGoodsListProp) {

  const [pages, setPages] = useState<Array<Array<ISocialService>>>([])
  const [page, setPage] = useState<number | string>(1)
  const [loaded, setLoaded] = useState<boolean>(false)
  const shield = useShield()
  const user = useWimaUser()

  const goodsPage = pages[+page-1] || []
  const totalPage = pages.length || 1

  async function loadUnivGoods() {
    if(loaded) return
    if(!user?.isLoggedInUniv) return
    await Get2(shield, "/social/LoadUnivGoods", (res)=>{
      setLoaded(true)
      setPages(res.pages || [])
    })
  }

  useEffect(()=>{
    loadUnivGoods()
  })

  return(<>
  <SocialWindow>
    <LimitWidth maxWidth={1200}>
    {
      page === 1 ? 
      <AppleNewsHeader1 text1="Goods" />:
      <AppleNewsHeader1 text1="Goods" h={3} />
    }
    </LimitWidth>

    <LimitWidth maxWidth={1200}>
      <Div height={10} />
      <div className={cl.list}>
      {
        goodsPage.map((good, i)=>
        <ServiceCard2 name={good.name} key={i}
          shortDescription={good.shortDescription}
          price={good.price}
          onClick={()=>{
            setSelectedGood(good)
            goDetail()
          }}
        />
        )
      }
      </div>
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