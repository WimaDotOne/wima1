import { SvgIcon } from "../../../Core/Core2/Svg/SvgIcon"
import cl from "./Pagination.module.scss"
import { MovicPagination } from "./PaginationStyle/MovicPagination"
import { QuoraPagination } from "./PaginationStyle/QuoraPagination"

interface IPaginationProp {
  page: number | string
  setPage: (page: number | string)=>void
  totalPage: number | string
  type?: string
  textColor?: string
  arrowColor?: string
  scrollTo0?: boolean
}

export const PaginationType = {
  Quora: "Quora",
  Movic: "Movic"
}

export function Pagination({
  page, setPage, totalPage, type, textColor, arrowColor,
  scrollTo0
}: IPaginationProp) {

  page = page || ""
  totalPage = totalPage || 1

  function prevPage() {
    if(!setPage) { return }
    page = +page - 1
    if(isNaN(page)) { page = 1 }
    if(page < 1) { page = totalPage }
    setPage(page)
    if(window && scrollTo0) {
      window.scrollTo(0, 0)
    }
  }

  function nextPage() {
    if(!setPage) { return }
    page = +page + 1
    if(isNaN(page)) { page = 1 }
    if(page > totalPage) { page = 1 }
    setPage(page)
    if(window && scrollTo0) {
      window.scrollTo(0, 0)
    }
  }

  function changePage(value: string) {
    if(!setPage) { return }
    if(!value) { setPage("") }
    const num = +value
    if(isNaN(num)) { return }
    if(num < 1) { return }
    if(num > totalPage) { return }
    setPage(num)
    if(window && scrollTo0) {
      window.scrollTo(0, 0)
    }
  }

  switch(type) {

    case PaginationType.Movic:
      arrowColor = arrowColor || "white"
      textColor = textColor || "white"
      return(
        <MovicPagination page={page} totalPage={totalPage}
          textColor={textColor} arrowColor={arrowColor}
          prevPage={prevPage} nextPage={nextPage}
          changePage={changePage}
        />
      )


    default:
    const arrowBlue="#2e69ff"
    arrowColor = arrowColor || arrowBlue
    textColor = textColor || "black"
    return(
      <QuoraPagination page={page} totalPage={totalPage}
        textColor={textColor} arrowColor={arrowColor}
        prevPage={prevPage} nextPage={nextPage}
        changePage={changePage}
      />
    )
  }

  
}