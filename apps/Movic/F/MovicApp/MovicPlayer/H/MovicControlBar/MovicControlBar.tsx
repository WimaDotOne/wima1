import { SvgIcon } from "../../../../../../../libs/Core/Core2/Svg/SvgIcon"
import { Pagination, PaginationType } from "../../../../../../../libs/Pop/Pop1/fPop1"
import cl from "./MovicControlBar.module.scss"

interface IMovicControlBar {
  page: number | string
  setPage: (page: number | string) => void
  totalPage: number | string
}
export function MovicControlBar({
  page, setPage,
  totalPage
}: IMovicControlBar) {

  const percent = Math.floor(+(page || 0) / +(totalPage || 1) * 100)
  const progressStyle = { width: `${percent}%`}
  
  return(<>
    <div className={cl.bar}>
      <div className={cl.progressDiv}>
        <div className={cl.progress} style={progressStyle}></div>
      </div>
      <div className={cl.barPannel}>
        <div className={cl.stopBtnDiv}>
          <SvgIcon name="stopbutton" width={17} color="white"/>
        </div>
        <div className={cl.paginationDiv}>
          <Pagination page={page} setPage={setPage} totalPage={totalPage} 
            type={PaginationType.Movic}
          />
        </div>
      </div>
    </div>
  </>)
}