import { SvgIcon } from "../../../../Svg/SvgIcon"
import { color } from "../../CSS/Color"
import cl from "./Pagination.module.scss"

interface IPaginationProp {
  page: number | string
  setPage: (page: number | string)=>void
  totalPage: number | string
}

export function Pagination({
  page, setPage, totalPage
}: IPaginationProp) {

  page = page || ""
  totalPage = totalPage || 1

  function prevPage() {
    if(!setPage) { return }
    page = +page - 1
    if(isNaN(page)) { page = 1 }
    if(page < 1) { page = totalPage }
    setPage(page)
  }

  function nextPage() {
    if(!setPage) { return }
    page = +page + 1
    if(isNaN(page)) { page = 1 }
    if(page > totalPage) { page = 1 }
    setPage(page)
  }

  function changePage(value: string) {
    if(!setPage) { return }
    if(!value) { setPage("") }
    const num = +value
    if(isNaN(num)) { return }
    if(num < 1) { return }
    if(num > totalPage) { return }
    setPage(num)
  }

  return(<>
    <div className={cl.pagination}>
      <div className={cl.paddle} onClick={prevPage}>
        <SvgIcon name="fatarrow.left" width={20}
          color={color.paginationArrowBlue} />
      </div>
      <div className={cl.inputWrap}>
        <input type="text" value={page || ""}
          className={cl.input}
          onChange={(e)=>{
            changePage(e.target.value)
          }}
        />
      </div>
      <div className={cl.totalPage}>
        <div className={cl.totalPageInner}> / {totalPage}</div>
      </div>
     
      <div className={cl.paddle} onClick={nextPage}>
        <SvgIcon name="fatarrow.right" width={20} 
          color={color.paginationArrowBlue} />
      </div>
    
    </div>
  </>)
}