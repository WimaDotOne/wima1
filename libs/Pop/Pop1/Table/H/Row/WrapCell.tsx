import cl from "./WrapCell.module.scss"

interface IWrapCellProp {
  text?: string
  textColor?: string
  width?: number
  prompt?: string
  promptColor?: string
}
export function WrapCell({
  text,
  textColor,
  width,
  prompt,
  promptColor
}: IWrapCellProp) {

  width = width || 100
  textColor = textColor || "black"
  promptColor = promptColor || "#ccc"

  const cellStyle = {
    width: width+"px"
  }
  const prompStyle = {
    color: promptColor
  }
  const textStyle = {
    color: textColor
  }

  return(<>
    <div className={cl.cellWrap} style={cellStyle}>
      <div className={cl.prompt} style={prompStyle}>{prompt}</div>
      <div className={cl.text} style={textStyle}>
          {text}
      </div>
    </div>
  </>)
}