import { useEffect, useState } from "react"
import { Get2, useShield } from "../../../../../../../libs/Core/Core1/fCore1"
import { AppleWindowBottomBarFill, Div, LimitWidth } from "../../../../../../../libs/Core/Core2/fCore2"
import { Pagination, PaginationType } from "../../../../../../../libs/Pop/Pop1/fPop1"
import { AppleNewsHeader1 } from "../../../../../../../libs/Pop/Pop2/fPop2"
import { AppleWindowBottomBar } from "../../../../../../H/AppleWindowBottomBar"
import { useWimaUser } from "../../../../../../Wima/fWima"
import { SocialColor } from "../../../../CSS/SocialColor"
import { ISocialNeed } from "../../../../Model/ISocialNeed"
import { NeedCard2 } from "../../../H/NeedCard/NeedCard2"
import { SocialWindow } from "../../../SocialWindow/SocialWindow"
import cl from "./NeedList.module.scss"

interface INeedListProp {
  goDetail: ()=>void
  setSelectedNeed: (need: ISocialNeed)=>void
}

export function NeedList({
  goDetail,
  setSelectedNeed
}: INeedListProp) {

  const [pages, setPages] = useState<Array<Array<ISocialNeed>>>([])
  const [page, setPage] = useState<number | string>(1)
  const [loaded, setLoaded] = useState<boolean>(false)
  const shield = useShield()
  const user = useWimaUser()

  const needsPage = pages[+page-1] || []
  const totalPage = pages.length || 1

  async function loadUnivNeed() {
    if(loaded) return
    if(!user?.isLoggedInUniv) return
    await Get2(shield, "/social/LoadUnivNeeds", (res)=>{
      setLoaded(true)
      setPages(res.pages || [])
    })
  }

  useEffect(()=>{
    loadUnivNeed()
  })

  return(<>
  <SocialWindow>
    <LimitWidth maxWidth={1200}>
    {
      page === 1 ? 
      <AppleNewsHeader1 text1="Needs or Ideas" />:
      <AppleNewsHeader1 text1="Needs or Ideas" h={3} />
    }
    </LimitWidth>

    <LimitWidth maxWidth={1200}>
      <Div height={10} />
      {
        !pages || !needsPage || pages.length < 1 || needsPage.length < 1?
        <div className={cl.noNeed}>
          No needs posted at the moment.
        </div>:
        <div className={cl.list}>
        {
          needsPage.map((need, i)=>
          <NeedCard2 name={need.name} key={i}
            shortDescription={need.shortDescription}
            onClick={()=>{
              setSelectedNeed(need)
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