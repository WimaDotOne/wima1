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
  selected?: boolean
  selectedColor?: string
  onClick?: ()=>void,
}
export function Row({
  isHead, schema, attributes,
  gray,
  hasPrompt,
  selected,
  selectedColor,
  onClick,
}: IRowProp) {

  const clGray = gray ? cl.gray : ""
  const selectedStyle: { backgroundColor?: string} = {}
  let textColor = "black"
  if(selected && selectedColor) {
    textColor = "white"
    selectedStyle.backgroundColor = selectedColor
  }
  return(<>
  <div className={ClassNames([cl.row, clGray])} style={selectedStyle}
    onClick={onClick}>
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
        <Cell key={i} isHead={isHead} textColor={textColor}
          text={text} width={columnInfo.width}/>
      )
    })
  }
  </div>
  </>)
}