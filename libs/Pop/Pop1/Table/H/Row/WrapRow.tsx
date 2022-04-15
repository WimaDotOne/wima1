import { AttributeType, IAttribute, IColumnInfo } from "../../Model/TableModel"
import { Cell } from "./Cell"
import { WrapCell } from "./WrapCell"
import cl from "./WrapRow.module.scss"

interface IWrapRowProp {
  schema: Array<IColumnInfo>
  attributes?: Array<IAttribute>
  selected?: boolean
  selectedColor?: string
  onClick: ()=>void
}
export function WrapRow({
  schema, attributes,
  selected,
  selectedColor,
  onClick
}: IWrapRowProp) {

  const selectedStyle = { backgroundColor: ""}
  let textColor = "black"
  let promptColor = "#ccc"
  if(selected && selectedColor) {
    textColor = "white"
    promptColor = "#dedede"
    selectedStyle.backgroundColor = selectedColor
  }

  return(<>
  <div className={cl.row} style={selectedStyle}
    onClick={onClick}>
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
        <WrapCell key={i} textColor={textColor}
          promptColor={promptColor}
          prompt={prompt}
          text={text} width={columnInfo.width}/>
      )
    })
  }
  </div>
  </>)
}