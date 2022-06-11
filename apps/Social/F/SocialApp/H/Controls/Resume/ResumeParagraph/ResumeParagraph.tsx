import cl from "./ResumeParagraph.module.scss"

interface IResumeParagraphProp {
  text: string
}

export function ResumeParagraph({
 text
}: IResumeParagraphProp) {
  return(<>
    <div className={cl.resumeParagraph}>
    {text}
    </div>
  </>)
}