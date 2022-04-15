import { useEffect, useRef } from "react"
import { Row } from "./H/Row/Row"
import { WrapRow } from "./H/Row/WrapRow"
import { TableModel } from "./Model/TableModel"
import cl from "./Table.module.scss"

interface ITableProp {
  table: TableModel
}
export function Table({
  table
}: ITableProp) {

  const tHeadRef = useRef<HTMLDivElement>(null)
  const tBodyRef = useRef<HTMLDivElement>(null)
  const tBodyNarrowRef = useRef<HTMLDivElement>(null)
  const schema = table.schema
  const data = table.data

  useEffect(()=>{
    if(!window) return
    
    const tHead = tHeadRef.current
    const tBody = tBodyRef.current
    const tBodyNarrow = tBodyNarrowRef.current
    if(!tHead) return
    if(!tBody) return
    if(!tBodyNarrow) return 

    function AdjustTable(mediaQuery: any) {
      if(mediaQuery.matches) {
        tHead!.style.display = "none"
        tBody!.style.display = "none"
        tBodyNarrow!.style.display = "block"
      } else {
        tHead!.style.display = "block"
        tBody!.style.display = "block"
        tBodyNarrow!.style.display = "none"
      }
    }
 console.log(table.narrowScreenWidth)
    const mediaQuery = window.matchMedia(`(max-width: ${table.narrowScreenWidth}px)`)
    AdjustTable(mediaQuery)
    mediaQuery.addEventListener("change" , (e)=>{
      if(e.target) {
        AdjustTable(e.target)
      }
    })
  }, [])

  return(<>
    <div className={cl.table}>
      <div className={cl.tHead} ref={tHeadRef}>
        <Row isHead schema={schema} />
      </div>
      <div className={cl.tBody} ref={tBodyRef}>
      {
        data.map((record, i)=>
          <Row key={i} schema={schema} attributes={record.attributes}
            gray={i%2 ===1} />
        )
      }
      </div>
      <div className={cl.tBodyNarrow} ref={tBodyNarrowRef}>
      {
        data.map((record, i) =>
        <WrapRow key={i} schema={schema} attributes={record.attributes}/>)
      }
      </div>
    </div>
  </>)
}