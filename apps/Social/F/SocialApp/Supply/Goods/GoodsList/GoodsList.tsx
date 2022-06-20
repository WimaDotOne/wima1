import { useState } from "react"
import { AppleWindowBottomBarFill, LimitWidth } from "../../../../../../../libs/Core/Core2/fCore2"
import { Pagination, PaginationType } from "../../../../../../../libs/Pop/Pop1/fPop1"
import { AppleNewsHeader1 } from "../../../../../../../libs/Pop/Pop2/fPop2"
import { AppleWindowBottomBar } from "../../../../../../H/AppleWindowBottomBar"
import { SocialColor } from "../../../../CSS/SocialColor"
import { SocialWindow } from "../../../SocialWindow/SocialWindow"
import cl from "./GoodsList.module.scss"

interface IGoodsListProp {

}

export function GoodsList({

}: IGoodsListProp) {

  const [page, setPage] = useState<number | string>(1)
  const [totalPage, setTotalPage] = useState<number | string>(2)
  return(<>
  <SocialWindow>
    <LimitWidth maxWidth={1200}>
      {
        page === 1 ? <AppleNewsHeader1 text1="Goods" />:null
      }
      
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