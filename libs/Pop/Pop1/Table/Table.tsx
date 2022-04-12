import { Row } from "./H/Row/Row"
import { TableModel } from "./Model/TableModel"
import cl from "./Table.module.scss"

interface ITableProp {
  table: TableModel
}
export function Table({
  table
}: ITableProp) {

  const schema = table.schema
  const data = table.data
  return(<>
    <div className={cl.table}>
      <div className={cl.tHead}>
        <Row isHead schema={schema} />
      </div>
      <div className={cl.tBody}>
      {
        data.map((record, i)=>
          <Row key={i} schema={schema} attributes={record.attributes}
            gray={i%2 ===1} />
        )
      }
      </div>
    </div>
  </>)
}