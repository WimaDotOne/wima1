import { ClassNames } from "../../../../../Core/Core1/fCore1"
import { AttributeType, IAttribute, IColumnInfo } from "../../Model/TableModel"
import { Cell } from "./Cell"
import cl from "./Row.module.scss"

interface IRowProp {
  isHead?: boolean
  schema: Array<IColumnInfo>
  attributes?: Array<IAttribute>
  gray?: boolean
  hasPrompt?: boolean
}
export function Row({
  isHead, schema, attributes,
  gray,
  hasPrompt
}: IRowProp) {

  const clGray = gray ? cl.gray : ""

  return(<>
  <div className={ClassNames([cl.row, clGray])}>
  {
    schema.map((columnInfo, i)=>{
      let text = ""
      let prompt = ""
      if(isHead) {
        text = columnInfo.title
      } else if(attributes) {
        const attribute = attributes[i]
        if(attribute.type === AttributeType.text) {
          text = attribute.value
        }
        if(hasPrompt) {
          prompt = columnInfo.title || " "
        }
      }
      return(
        <Cell key={i} isHead={isHead} 
          text={text} width={columnInfo.width}/>
      )
    })
  }
  </div>
  </>)
}