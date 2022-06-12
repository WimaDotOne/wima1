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
  const style = { marginTop: "" }
  if(marginTop !== undefined) {
    style.marginTop = marginTop + "px"
  }
  return(<>
    <div className={cl.resumeSectionTitle} style={style}>
      {text}
    </div>
  </>)
}