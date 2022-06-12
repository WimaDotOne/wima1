import cl from "./ResumeHeader.module.scss"

interface IResumeHeaderProp {
  text: string 
}

export function ResumeHeader({
  text
}: IResumeHeaderProp) {

  text = (text || "").toUpperCase()
  return(<>
    <div className={cl.resumeHeader}>
    {text}
    </div>
  </>)
}