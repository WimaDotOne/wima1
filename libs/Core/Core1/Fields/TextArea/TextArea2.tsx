import cl from "./TextArea2.module.scss"

interface ITextArea2Prop {
  prompt?: string
  value?: string
  onChange: (newValue: string)=>void
  maxLength: number,
  rows?: number
  ghost?: string
}
export function TextArea2({
  prompt,
  value,
  onChange,
  maxLength,
  rows,
  ghost
}: ITextArea2Prop) {

  rows = rows || 3

  return(<>
  <div>
    {
      prompt ?
      <div className={cl.prompt}>{prompt}</div>:null
    }
    <textarea 
      placeholder={ghost}
      className={cl.textarea} value={value} onChange={(e)=>onChange(e.target.value)}
      maxLength={maxLength} rows={rows}/>
  </div>
  </>)
}