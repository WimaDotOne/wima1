import cl from "./ResumeSectionTitle.module.scss"

interface IResumeSectionTitleProp {
  text: string
  marginTop?: number
}

export function ResumeSectionTitle({
  text,
  marginTop
}: IResumeSectionTitleProp) {

  text = ( text || "").toUpperCase()
  const titleStyle = { marginTop: "30px" }
  if(marginTop !== undefined) {
    titleStyle.marginTop = marginTop + "px"
  }
  return(<>
    <div className={cl.resumeSectionTitle} style={titleStyle}>
      {text}
    </div>
  </>)
}