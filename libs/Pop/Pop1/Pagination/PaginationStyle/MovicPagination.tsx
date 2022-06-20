import { SvgIcon } from "../../../../Core/Core2/Svg/SvgIcon"
import cl from "./MovicPagination.module.scss"

interface IMovicPaginationProp {
  page: number | string
  totalPage: number | string
  textColor?: string
  arrowColor?: string
  prevPage: ()=>void
  nextPage: ()=>void
  changePage: (value: string)=>void
}

export function MovicPagination({
  page, totalPage, textColor, arrowColor,
  prevPage, nextPage, changePage
}: IMovicPaginationProp) {

  arrowColor = arrowColor || "white"
  textColor = textColor || "white"
  return(<>
  <div className={cl.movic} style={{color: textColor}}>
    <div className={cl.pagination}>
      <div className={cl.paddle} onClick={prevPage}>
        <SvgIcon name="chevron.left" width={20}
          color={arrowColor} />
      </div>
      <div className={cl.inputWrap}>
        <input type="text" value={page || ""}
          style={{color: textColor}}
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
        <SvgIcon name="chevron.right" width={20} 
          color={arrowColor} />
      </div>
    </div>
  </div>
  </>)
}