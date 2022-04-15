import { AttributeType, IAttribute, IColumnInfo } from "../../Model/TableModel"
import { Cell } from "./Cell"
import { WrapCell } from "./WrapCell"
import cl from "./WrapRow.module.scss"

interface IWrapRowProp {
  schema: Array<IColumnInfo>
  attributes?: Array<IAttribute>
}
export function WrapRow({
  schema, attributes,
}: IWrapRowProp) {

  return(<>
  <div className={cl.row}>
  {
    schema.map((columnInfo, i)=>{
      let text = ""
      const prompt = columnInfo.title || " "
      if(attributes) {
        const attribute = attributes[i]
        if(attribute.type === AttributeType.text) {
          text = attribute.value
        }
      }
      return(
        <WrapCell key={i}
          prompt={prompt}
          text={text} width={columnInfo.width}/>
      )
    })
  }
  </div>
  </>)
}