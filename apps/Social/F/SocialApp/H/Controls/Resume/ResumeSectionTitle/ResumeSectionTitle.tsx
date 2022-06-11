import cl from "./ResumeSectionTitle.module.scss"

interface IResumeSectionTitleProp {
  text: string
}

export function ResumeSectionTitle({
  text
}: IResumeSectionTitleProp) {

  text = ( text || "").toUpperCase()
  return(<>
    <div className={cl.resumeSectionTitle}>
      {text}
    </div>
  </>)
}