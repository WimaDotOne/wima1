import cl from "./ResumeParagraph.module.scss"

interface IResumeParagraphProp {
  text?: string
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


export function ResumeSubParagraph({
  text
}: IResumeParagraphProp) {
  return(<>
    <div className={cl.resumeSubParagraph}>
      <div className={cl.dot}>&bull;</div>
      <div className={cl.subParagraphText}>
      {text}  
      </div>
    </div>
  </>)
}