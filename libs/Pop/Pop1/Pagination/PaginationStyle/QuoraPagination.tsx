import { SvgIcon } from "../../../../Core/Core2/Svg/SvgIcon"
import cl from "./QuoraPagination.module.scss"

interface IQuoraPaginationProp {
  page: number | string
  totalPage: number | string
  textColor?: string
  arrowColor?: string
  prevPage: ()=>void
  nextPage: ()=>void
  changePage: (value: string)=>void
}

export function QuoraPagination({
  page, totalPage, textColor, arrowColor,
  prevPage, nextPage, changePage
}: IQuoraPaginationProp) {

  arrowColor = arrowColor || "white"
  textColor = textColor || "white"
  return(<>
  <div style={{color: textColor}}>
    <div className={cl.pagination}>
      <div className={cl.paddle} onClick={prevPage}>
        <SvgIcon name="fatarrow.left" width={20}
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
        <SvgIcon name="fatarrow.right" width={20} 
          color={arrowColor} />
      </div>
    </div>
  </div>
  </>)
}