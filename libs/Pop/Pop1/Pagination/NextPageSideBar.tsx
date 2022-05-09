import { ClassNames } from "../../../Core/Core1/fCore1"
import { SvgIcon } from "../../../Core/Core2/Svg/SvgIcon"
import cl from "./NextPageSideBar.module.scss"

interface INextPageSideBarProp {
  page: number | string
  setPage: (page: number|string)=>void
  totalPage?: number | string
  pedalColor?: string
  arrowColor?: string
  prev?: boolean
}
export function NextPageSideBar({
  page, setPage,
  totalPage,
  pedalColor,
  arrowColor,
  prev
}: INextPageSideBarProp) {

  arrowColor = arrowColor || "#ccc"
  pedalColor = pedalColor || "#dfdfdf"

  const clDirection = prev ? cl.prev : cl.next

  page = page || ""
  totalPage = totalPage || 1

  function prevPage() {
    if(!setPage) { return }
    page = +page - 1
    if(isNaN(page)) { page = 1 }
    if(page < 1) { return }
    setPage(page)
  }

  function nextPage() {
    if(!setPage) { return }
    page = +page + 1
    if(isNaN(page)) { page = 1 }
    if(page > totalPage!) { return }
    setPage(page)
  }
  
  function onClick() {
    if(prev) {
      prevPage()
    } else {
      nextPage()
    }
  }

  return(<>
    <div className={ClassNames([cl.pagePedal, clDirection])} style={{backgroundColor: pedalColor}}
      onClick={onClick}>
      {
        prev ? 
        <SvgIcon name="widearrow.left" width={18} color={arrowColor} />:
        <SvgIcon name="widearrow.right" width={18} color={arrowColor} />
      }
    </div>
  </>)
}