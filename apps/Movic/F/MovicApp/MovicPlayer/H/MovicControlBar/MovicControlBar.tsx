import { useState } from "react"
import { ClassNames } from "../../../../../../../libs/Core/Core1/fCore1"
import { SvgIcon } from "../../../../../../../libs/Core/Core2/Svg/SvgIcon"
import { Pagination, PaginationType } from "../../../../../../../libs/Pop/Pop1/fPop1"
import cl from "./MovicControlBar.module.scss"

interface IMovicControlBar {
  page: number | string
  setPage: (page: number | string) => void
  totalPage: number | string
  onStop: ()=>void
}
export function MovicControlBar({
  page, setPage,
  totalPage,
  onStop
}: IMovicControlBar) {

  const [pin, setPin] = useState<boolean>(true)

  totalPage = totalPage || 1
  const percent = Math.floor(+(page || 0) / (+totalPage) * 100)
  const progressStyle = { width: `${percent}%`}
  const clPin = pin ? cl.pin : ""

  function togglePin() {
    setPin(!pin)
  }
  return(<>
    <div className={ClassNames([cl.bar, clPin])}>
      <div className={cl.progressDiv}>
        <div className={cl.progress} style={progressStyle}></div>
      </div>
      <div className={cl.barPannel}>
        <div className={cl.barLeft}>
          <div className={cl.stopBtnDiv} onClick={onStop}>
            <SvgIcon name="stopbutton" width={17} color="white"/>
          </div>
        </div>
        <div className={cl.barRight}>
          <div className={cl.pinDiv} onClick={togglePin}>
          {
            pin ? 
            <SvgIcon name="pin" width={24} color="white"/>:
            <SvgIcon name="unpin" width={24} color="white"/>
          }
          </div>
          <div className={cl.paginationDiv}>
            <Pagination page={page} setPage={setPage} totalPage={totalPage} 
              type={PaginationType.Movic}
            />
          </div>
        </div>
        
      </div>
    </div>
  </>)
}